import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitStore.get(ip);

  if (!limit || now > limit.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 });
    return true;
  }

  if (limit.count >= 5) {
    return false;
  }

  limit.count++;
  return true;
}

async function sendEmail(formData: {
  formType: string;
  name?: string;
  email: string;
  phone?: string;
  message?: string;
  [key: string]: any;
}) {
  const apiKey = process.env.SENDGRID_API_KEY;
  const to = process.env.CONTACT_TO || "favi@castilerealtygroup.com";
  const from = process.env.CONTACT_FROM || "josh@pellsolar.com";

  if (!apiKey) {
    throw new Error("SENDGRID_API_KEY not configured");
  }

  const subjectMap: Record<string, string> = {
    contact: `New website contact from ${formData.name || "Unknown"}`,
    newsletter: "New newsletter signup",
    listing_alert: "New listing alert request",
    relocation_guide: `Relocation guide download — ${formData.name || "Unknown"}`,
  };

  const subject = subjectMap[formData.formType] || "New website submission";

  const bodyLines = [
    `Form Type: ${formData.formType}`,
    `Submitted: ${new Date().toISOString()}`,
    "",
  ];

  Object.entries(formData).forEach(([key, value]) => {
    if (key !== "formType" && value) {
      const label = key.charAt(0).toUpperCase() + key.slice(1);
      bodyLines.push(`${label}: ${value}`);
    }
  });

  const body = bodyLines.join("\n");

  const payload = {
    personalizations: [{ to: [{ email: to }] }],
    from: { email: from },
    reply_to: { email: formData.email },
    subject,
    content: [{ type: "text/plain", value: body }],
  };

  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("SendGrid error:", response.status, errorText);
    throw new Error(`SendGrid API error: ${response.status}`);
  }

  return response;
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json());

  app.post("/api/contact", async (req, res) => {
    try {
      const ip = req.ip || req.socket.remoteAddress || "unknown";

      if (!checkRateLimit(ip)) {
        return res.status(429).json({ error: "Too many requests" });
      }

      const { formType, email, website, ...rest } = req.body;

      if (website) {
        return res.status(200).json({ success: true });
      }

      if (!email || !formType) {
        return res.status(400).json({ error: "Email and formType required" });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email address" });
      }

      await sendEmail({ formType, email, ...rest });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ error: "Failed to send message" });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
