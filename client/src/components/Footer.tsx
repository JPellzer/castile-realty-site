/* ============================================================
   CASTILE REALTY REALTY GROUP — Footer
   Deep Navy background, Gold accents
   ============================================================ */
import { Link } from "wouter";

const LOGO_URL = "/manus-storage/castile-logo-mobile-optimized_6259004f.png";

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.13_0.06_255)] text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img
              src={LOGO_URL}
              alt="Castile Realty Group"
              width="640"
              height="640"
              loading="lazy"
              decoding="async"
              className="w-40 h-auto object-contain mb-4"
              style={{ background: "transparent", mixBlendMode: "normal" }}
            />
            <p className="text-white/60 text-sm leading-relaxed font-sans">
              Your trusted partner for Idaho real estate. Serving the Treasure Valley with integrity, expertise, and a personal touch.
            </p>
            <div className="flex gap-4 mt-5">
              <a href="https://www.facebook.com/IdahoRealEstateServices" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[oklch(0.72_0.12_75)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/sweet_group_realty/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[oklch(0.72_0.12_75)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-[oklch(0.72_0.12_75)] uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Buy & Sell", href: "/buy-sell" },
                { label: "Listings", href: "/listings" },
                { label: "Communities", href: "/communities" },
                { label: "Relocation Guide", href: "/relocation" },
                { label: "Market Updates", href: "/blog" },
                { label: "About Faviola", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-[oklch(0.72_0.12_75)] text-sm font-sans transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Communities */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-[oklch(0.72_0.12_75)] uppercase tracking-widest mb-5">Communities</h4>
            <ul className="space-y-3">
              {["Boise", "Meridian", "Eagle", "Nampa", "Caldwell", "Star", "Kuna"].map((city) => (
                <li key={city}>
                  <Link href="/communities" className="text-white/60 hover:text-[oklch(0.72_0.12_75)] text-sm font-sans transition-colors">
                    {city}, Idaho
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-[oklch(0.72_0.12_75)] uppercase tracking-widest mb-5">Contact Us</h4>
            <div className="space-y-4">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest font-sans mb-1">Faviola Zurita Pellerin</p>
                <p className="text-white/80 text-sm font-sans">REALTOR® | Relocation Specialist</p>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest font-sans mb-1">Idaho</p>
                <a href="tel:2088307419" className="text-white/80 hover:text-[oklch(0.72_0.12_75)] text-sm font-sans transition-colors">(208) 830-7419</a>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest font-sans mb-1">California</p>
                <a href="tel:9092405389" className="text-white/80 hover:text-[oklch(0.72_0.12_75)] text-sm font-sans transition-colors">(909) 240-5389</a>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest font-sans mb-1">Email</p>
                <a href="mailto:faviola@castilerealtygroup.com" className="text-white/80 hover:text-[oklch(0.72_0.12_75)] text-sm font-sans transition-colors">faviola@castilerealtygroup.com</a>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest font-sans mb-1">Office</p>
                <p className="text-white/60 text-sm font-sans">3363 E Presidential Dr, Suite 103<br />Meridian, ID 83642</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gold Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs font-sans">
            © {new Date().getFullYear()} Castile Realty Group. All rights reserved. | Sweet Group Realty | Licensed in Idaho
          </p>
          <p className="text-white/30 text-xs font-sans">
            Hablamos Español · (208) 830-7419
          </p>
        </div>
      </div>
    </footer>
  );
}
