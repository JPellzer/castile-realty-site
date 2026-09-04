/* ============================================================
   CASTILE REALTY GROUP — Navbar with Dropdowns
   6 top-level items: Buy & Sell, Listings, Communities,
   Relocation, Blog, About — plus phone + CTA
   ============================================================ */
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";

const ICON_URL = "/manus-storage/crg-icon-mobile-optimized_9408f842.png";
const GOLD = "oklch(0.82 0.14 78)";
const NAVY = "oklch(0.13 0.06 255)";
const NAVY_LIGHT = "oklch(0.20 0.07 255)";

// ── Nav structure ──────────────────────────────────────────
const NAV_ITEMS = [
  {
    label: "Buy & Sell",
    href: "/buy-sell",
    dropdown: [
      { label: "Buying a Home", href: "/buy-sell#buying", desc: "Step-by-step buyer's guide for Idaho" },
      { label: "Selling a Home", href: "/buy-sell#selling", desc: "Pricing, staging, and market strategy" },
      { label: "Mortgage Calculator", href: "/listings#mortgage-calculator", desc: "Estimate your full monthly payment (PITI)" },
    ],
  },
  {
    label: "Listings",
    href: "/listings",
    dropdown: [
      { label: "Search Homes", href: "/listings", desc: "Browse active Idaho MLS listings" },
      { label: "Set Listing Alert", href: "/listings#listing-alert", desc: "Get notified the moment a match hits the market" },
      { label: "Mortgage Calculator", href: "/listings#mortgage-calculator", desc: "Estimate your monthly payment instantly" },
    ],
  },
  {
    label: "Communities",
    href: "/communities",
    dropdown: [
      { label: "Boise", href: "/communities#boise", desc: "Idaho's vibrant capital city" },
      { label: "Meridian", href: "/communities#meridian", desc: "Fastest-growing city in Idaho" },
      { label: "Eagle", href: "/communities#eagle", desc: "Upscale living, larger lots" },
      { label: "Nampa", href: "/communities#nampa", desc: "Affordable, established community" },
      { label: "Caldwell", href: "/communities#caldwell", desc: "Growing western Treasure Valley" },
      { label: "McCall", href: "/mccall", desc: "Mountain resort town on Payette Lake" },
    ],
  },
  {
    label: "Relocation",
    href: "/relocation",
    dropdown: [
      { label: "California to Idaho Guide", href: "/relocation", desc: "Everything you need to make the move" },
      { label: "Why Idaho?", href: "/relocation#why-idaho", desc: "Cost, schools, safety, and lifestyle" },
      { label: "Market Updates", href: "/blog", desc: "Current prices, trends, and insights" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

// ── Dropdown Item ──────────────────────────────────────────
function DropdownItem({ label, href, desc, onClick }: { label: string; href: string; desc: string; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        padding: "10px 20px",
        textDecoration: "none",
        background: hovered ? NAVY_LIGHT : "transparent",
        transition: "background 0.15s",
        borderLeft: hovered ? `3px solid ${GOLD}` : "3px solid transparent",
      }}
    >
      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 600, color: hovered ? GOLD : "rgba(255,255,255,0.9)", display: "block", lineHeight: 1.3 }}>
        {label}
      </span>
      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", display: "block", marginTop: "2px" }}>
        {desc}
      </span>
    </Link>
  );
}

// ── Nav Item with optional dropdown ───────────────────────
function NavItem({ item, isActive }: { item: typeof NAV_ITEMS[0]; isActive: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (!item.dropdown) {
    return (
      <Link
        href={item.href}
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.875rem",
          fontWeight: 500,
          letterSpacing: "0.04em",
          textDecoration: "none",
          whiteSpace: "nowrap",
          color: isActive ? GOLD : "rgba(255,255,255,0.8)",
          transition: "color 0.2s",
        }}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.875rem",
          fontWeight: 500,
          letterSpacing: "0.04em",
          whiteSpace: "nowrap",
          color: isActive || open ? GOLD : "rgba(255,255,255,0.8)",
          transition: "color 0.2s",
          padding: 0,
        }}
      >
        {item.label}
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div
          onMouseLeave={() => setOpen(false)}
          style={{
            position: "absolute",
            top: "calc(100% + 16px)",
            left: "50%",
            transform: "translateX(-50%)",
            background: NAVY,
            border: `1px solid rgba(212,175,55,0.25)`,
            boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
            minWidth: "260px",
            zIndex: 100,
            paddingTop: "8px",
            paddingBottom: "8px",
            animation: "dropIn 0.15s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          {/* Arrow */}
          <div style={{
            position: "absolute",
            top: "-6px",
            left: "50%",
            transform: "translateX(-50%)",
            width: 0, height: 0,
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderBottom: `6px solid rgba(212,175,55,0.25)`,
          }} />
          {item.dropdown.map((d) => (
            <DropdownItem key={d.href + d.label} label={d.label} href={d.href} desc={d.desc} onClick={() => setOpen(false)} />
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main Navbar ────────────────────────────────────────────
export default function Navbar() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onResize = () => setIsMobile(window.innerWidth < 1100);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes dropIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>

      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: NAVY,
        borderBottom: "1px solid rgba(212,175,55,0.3)",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.4)" : "none",
        transition: "box-shadow 0.3s",
      }}>
        <div style={{
          display: "flex", flexDirection: "row", alignItems: "center",
          justifyContent: "space-between",
          height: "88px", maxWidth: "1400px",
          margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)", boxSizing: "border-box",
        }}>

          {/* ── BRAND ── */}
          <Link href="/" aria-label="Castile Realty Group home" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "clamp(8px, 2.5vw, 14px)", textDecoration: "none", flexShrink: 1, minWidth: 0 }}>
            {!logoFailed ? (
              <img
                src={ICON_URL}
                alt="Castile Realty Group CRG logo"
                width="256"
                height="227"
                fetchPriority="high"
                decoding="async"
                onError={() => setLogoFailed(true)}
                style={{ height: "clamp(48px, 14vw, 64px)", width: "clamp(48px, 14vw, 64px)", objectFit: "contain", display: "block", flexShrink: 0 }}
              />
            ) : (
              <span aria-hidden="true" style={{ width: "52px", height: "52px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: `1px solid ${GOLD}`, color: GOLD, fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.04em" }}>
                CRG
              </span>
            )}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px" }}>
              <span style={{ fontFamily: "'Playfair Display', serif", color: GOLD, fontSize: "clamp(1.2rem, 5.5vw, 1.75rem)", fontWeight: 700, letterSpacing: "clamp(0.06em, 0.8vw, 0.1em)", lineHeight: 1, whiteSpace: "nowrap" }}>
                CASTILE
              </span>
              <span style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.65)", fontSize: "clamp(0.5rem, 2vw, 0.65rem)", fontWeight: 600, letterSpacing: "clamp(0.2em, 1vw, 0.32em)", lineHeight: 1, textAlign: "center", whiteSpace: "nowrap" }}>
                REALTY GROUP
              </span>
            </div>
          </Link>

          {/* ── DESKTOP NAV ── */}
          {!isMobile && (
            <nav style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "28px" }}>
              {NAV_ITEMS.map((item) => (
                <NavItem key={item.href} item={item} isActive={location === item.href || location.startsWith(item.href + "/")} />
              ))}
            </nav>
          )}

          {/* ── DESKTOP CTA ── */}
          {!isMobile && (
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", flexShrink: 0 }}>
              <a href="tel:2088307419" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 600, color: "rgba(255,255,255,0.8)", textDecoration: "none", whiteSpace: "nowrap" }}>
                (208) 830-7419
              </a>
              <Link href="/contact" style={{ background: GOLD, color: NAVY, fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "10px 20px", textDecoration: "none", whiteSpace: "nowrap", display: "inline-block" }}>
                Get Started
              </Link>
            </div>
          )}

          {/* ── MOBILE HAMBURGER ── */}
          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"
              style={{ background: "none", border: "none", cursor: "pointer", color: "white", padding: "8px", display: "flex", alignItems: "center" }}>
              {menuOpen ? (
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          )}
        </div>

        {/* ── MOBILE MENU ── */}
        {isMobile && menuOpen && (
          <div style={{ background: NAVY, borderTop: "1px solid rgba(255,255,255,0.1)", padding: "8px 0 24px", maxHeight: "80vh", overflowY: "auto" }}>
            {NAV_ITEMS.map((item) => (
              <div key={item.href}>
                <Link href={item.href} onClick={() => setMenuOpen(false)}
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", fontWeight: 600, color: location === item.href ? GOLD : "rgba(255,255,255,0.85)", textDecoration: "none", padding: "13px 40px", display: "block", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  {item.label}
                </Link>
                {item.dropdown?.map((d) => (
                  <Link key={d.href + d.label} href={d.href} onClick={() => setMenuOpen(false)}
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", fontWeight: 400, color: "rgba(255,255,255,0.55)", textDecoration: "none", padding: "9px 40px 9px 56px", display: "block", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    → {d.label}
                  </Link>
                ))}
              </div>
            ))}
            <a href="tel:2088307419" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", fontWeight: 600, color: GOLD, textDecoration: "none", padding: "16px 40px", display: "block" }}>
              (208) 830-7419
            </a>
          </div>
        )}
      </header>
    </>
  );
}
