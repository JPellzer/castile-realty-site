interface ContactFormData {
  formType: "contact" | "newsletter" | "listing_alert" | "relocation_guide";
  email: string;
  name?: string;
  phone?: string;
  message?: string;
  interest?: string;
  budget?: string;
  timeline?: string;
  location?: string;
  priceRange?: string;
  [key: string]: any;
}

export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      return { success: false, error: error.error || "Failed to send message" };
    }

    return { success: true };
  } catch (error) {
    console.error("Contact form submission error:", error);
    return { success: false, error: "Network error. Please try again." };
  }
}
