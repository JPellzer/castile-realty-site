/* ============================================================
   CASTILE REALTY REALTY GROUP — Home Page
   Brand: Deep Navy (#0D1B3E) + Gold (#C9A84C) + White
   Target: Local Idaho buyers/sellers + California relocators
   ============================================================ */
import { useState } from "react";
import { Link } from "wouter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ── URL parameter maps for Sweet Group Realty IDX portal ──
const CITY_PARAMS: Record<string, string> = {
  "": "",
  "Boise": "Boise",
  "Meridian": "Meridian",
  "Eagle": "Eagle",
  "Nampa": "Nampa",
  "Caldwell": "Caldwell",
  "Star": "Star",
  "Kuna": "Kuna",
  "McCall": "McCall",
};

const PRICE_PARAMS: Record<string, { min: string; max: string }> = {
  "": { min: "", max: "" },
  "under300": { min: "", max: "300000" },
  "300to450": { min: "300000", max: "450000" },
  "450to600": { min: "450000", max: "600000" },
  "600to800": { min: "600000", max: "800000" },
  "800to1m": { min: "800000", max: "1000000" },
  "1mplus": { min: "1000000", max: "" },
};

const TYPE_PARAMS: Record<string, string> = {
  "": "",
  "SF": "SF",
  "TC": "TC",
  "LD": "LD",
  "MF": "MF",
};

function PropertySearchWidget() {
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  const handleSearch = () => {
    const base = "https://search.sweetgrouprealty.com/search/map";
    const params = new URLSearchParams();
    params.set("s[orderBy]", "sourceCreationDate,desc");
    params.set("s[page]", "1");

    if (city && CITY_PARAMS[city]) {
      params.set("s[locations][0][city]", CITY_PARAMS[city]);
      params.set("s[locations][0][state]", "ID");
    }

    const priceRange = PRICE_PARAMS[price];
    if (priceRange) {
      if (priceRange.min) params.set("s[minPrice]", priceRange.min);
      if (priceRange.max) params.set("s[maxPrice]", priceRange.max);
    }

    if (type && TYPE_PARAMS[type]) {
      params.set("s[propertyType][0]", TYPE_PARAMS[type]);
    }

    window.open(`${base}?${params.toString()}`, "_blank", "noopener,noreferrer");
  };

  const selectCls = "w-full border border-gray-200 px-4 py-3 text-sm font-sans text-gray-700 focus:outline-none focus:border-[oklch(0.72_0.12_75)] bg-white";

  return (
    <section className="py-16 bg-[oklch(0.97_0.005_255)]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
        <p className="section-label mb-3">Search Properties</p>
        <h2 className="font-serif text-4xl font-bold text-[oklch(0.18_0.07_255)] mb-4">Find Your Dream Home</h2>
        <p className="text-gray-500 font-sans mb-10 max-w-xl mx-auto">Search active listings across the entire Treasure Valley. New homes added daily.</p>
        <div className="bg-white shadow-xl border border-gray-100 p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 font-sans mb-2">Location</label>
              <select className={selectCls} value={city} onChange={e => setCity(e.target.value)}>
                <option value="">All Treasure Valley</option>
                <option value="Boise">Boise</option>
                <option value="Meridian">Meridian</option>
                <option value="Eagle">Eagle</option>
                <option value="Nampa">Nampa</option>
                <option value="Caldwell">Caldwell</option>
                <option value="Star">Star</option>
                <option value="Kuna">Kuna</option>
                <option value="McCall">McCall</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 font-sans mb-2">Price Range</label>
              <select className={selectCls} value={price} onChange={e => setPrice(e.target.value)}>
                <option value="">Any Price</option>
                <option value="under300">Under $300K</option>
                <option value="300to450">$300K – $450K</option>
                <option value="450to600">$450K – $600K</option>
                <option value="600to800">$600K – $800K</option>
                <option value="800to1m">$800K – $1M</option>
                <option value="1mplus">$1M+</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 font-sans mb-2">Property Type</label>
              <select className={selectCls} value={type} onChange={e => setType(e.target.value)}>
                <option value="">Any Type</option>
                <option value="SF">Single Family</option>
                <option value="TC">Condo / Townhome</option>
                <option value="LD">Land</option>
                <option value="MF">Multi-Family</option>
              </select>
            </div>
          </div>
          <button
            onClick={handleSearch}
            className="btn-gold w-full block text-center py-4 text-sm tracking-widest cursor-pointer"
          >
            Search Available Homes
          </button>
          <p className="text-xs text-gray-400 font-sans mt-3">Powered by Idaho MLS · Updated daily · Filters applied automatically</p>
        </div>
      </div>
    </section>
  );
}

const HERO_DESKTOP_IMG = "/manus-storage/hero-idaho-desktop-optimized_c0886176.jpg";
const HERO_MOBILE_IMG = "/manus-storage/hero-idaho-mobile-optimized_6bba4021.jpg";
const CALI_IMG = "/manus-storage/california-to-idaho_09f791fe.jpg";
const AERIAL_IMG = "/manus-storage/treasure-valley-aerial_40aa6327.jpg";
const INTERIOR_IMG = "/manus-storage/luxury-home-interior_d0df2c6e.jpg";
const FAVIOLA_IMG = "/manus-storage/faviola-photo-new_1e1d194c.webp";

const communities = [
  { name: "Boise", desc: "Idaho's vibrant capital city with walkable neighborhoods, arts, and culture.", price: "$541K avg", img: "/manus-storage/boise-aerial_2e9a9ba0.jpg" },
  { name: "Meridian", desc: "Idaho's fastest-growing city — top schools, new construction, family-friendly.", price: "$520K avg", img: "/manus-storage/meridian-aerial-neighborhoods_644f2a95.jpg" },
  { name: "Eagle", desc: "Upscale living with larger lots, quiet streets, and luxury properties.", price: "$770K avg", img: "/manus-storage/eagle-aerial_a0681915.jpg" },
  { name: "Nampa", desc: "Affordable, established community with easy access to the entire valley.", price: "$430K avg", img: "/manus-storage/nampa-aerial_547e577a.jpg" },
];

const stats = [
  { value: "22+", label: "Years in Real Estate" },
  { value: "CA→ID", label: "Relocation Specialist" },
  { value: "2", label: "Languages Spoken" },
  { value: "5", label: "Cities Served" },
];

const whyIdaho = [
  { img: "/manus-storage/benefit-savings_d6a427d3.jpg", title: "Save $1,800+/Month", desc: "The average California family saves over $1,800 per month on housing alone when moving to the Treasure Valley." },
  { img: "/manus-storage/benefit-space_bac8c4dc.jpg", title: "Space & Freedom", desc: "Trade traffic and congestion for open skies, mountain views, and a pace of life that lets you breathe again." },
  { img: "/manus-storage/benefit-schools_6ea2ee62.jpg", title: "Top-Rated Schools", desc: "West Ada School District is one of the highest-rated in the Pacific Northwest — your kids will thrive here." },
  { img: "/manus-storage/benefit-sunshine_5225e58c.jpg", title: "300 Days of Sunshine", desc: "Idaho's high desert climate means more sunny days than Seattle, Portland, or San Francisco." },
  { img: "/manus-storage/benefit-safety_9b2a3ba2.jpg", title: "Safe Communities", desc: "Treasure Valley cities consistently rank among the safest in the nation for families." },
  { img: "/manus-storage/benefit-tax_a3c099ae.jpg", title: "No State Income Tax Burden", desc: "Idaho's flat 5.3% income tax is a fraction of California's top rate of 12.3%." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[680px] h-[100svh] flex items-center justify-center overflow-hidden bg-[oklch(0.13_0.06_255)]">
        <picture className="absolute inset-0 block w-full h-full">
          <source media="(max-width: 639px)" srcSet={HERO_MOBILE_IMG} />
          <img
            src={HERO_DESKTOP_IMG}
            alt="Luxury Idaho foothills home at sunset"
            width="2048"
            height="1152"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-center sm:object-center"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.13_0.06_255/0.34)] via-[oklch(0.13_0.06_255/0.40)] to-[oklch(0.13_0.06_255/0.52)] sm:bg-gradient-to-r sm:from-[oklch(0.13_0.06_255/0.55)] sm:via-[oklch(0.13_0.06_255/0.20)] sm:to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 w-full pt-[88px]">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Find Your<br />
              <span style={{ color: "oklch(0.72 0.12 75)" }}>Place</span> in Idaho.
            </h1>
            <p className="text-white/80 text-lg lg:text-xl font-sans leading-relaxed mb-8 max-w-xl">
              Expert real estate guidance for Treasure Valley locals and Californians ready to make the move. Bilingual. Trusted. Personal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/relocation" className="btn-gold rounded-none text-center py-4 px-8 text-sm tracking-widest">
                Free Relocation Guide
              </Link>
              <Link href="/communities" className="btn-outline-gold rounded-none text-center py-4 px-8 text-sm tracking-widest">
                Explore Communities
              </Link>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-10 bg-white/40" />
          <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[oklch(0.18_0.07_255)] py-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-serif text-3xl lg:text-4xl font-bold text-[oklch(0.72_0.12_75)]">{s.value}</div>
                <div className="text-white/60 text-xs uppercase tracking-widest mt-1 font-sans">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROPERTY SEARCH ── */}
      <PropertySearchWidget />

      {/* ── CALIFORNIA TO IDAHO CALLOUT ── */}
      <section className="py-0 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          <div className="relative">
            <img src={CALI_IMG} alt="California to Idaho" className="w-full h-full object-cover min-h-[300px]" />
            <div className="absolute inset-0 bg-[oklch(0.13_0.06_255/0.25)]" />
          </div>
          <div className="bg-[oklch(0.18_0.07_255)] flex items-center px-8 lg:px-16 py-16">
            <div>
              <p className="section-label mb-4">California → Idaho</p>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Your Dollar Goes<br />
                <span style={{ color: "oklch(0.72 0.12 75)" }}>Further Here.</span>
              </h2>
              <p className="text-white/70 font-sans leading-relaxed mb-6">
                The average California family saves over <strong className="text-white">$1,800 per month</strong> on housing alone when moving to the Treasure Valley. Lower taxes, more space, better schools — and a realtor who grew up in Southern California and made the move herself.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="border border-white/20 p-4">
                  <div className="text-[oklch(0.72_0.12_75)] font-serif text-2xl font-bold">$843K</div>
                  <div className="text-white/50 text-xs uppercase tracking-widest font-sans mt-1">CA Median Home</div>
                </div>
                <div className="border border-[oklch(0.72_0.12_75)] p-4">
                  <div className="text-[oklch(0.72_0.12_75)] font-serif text-2xl font-bold">$476K</div>
                  <div className="text-white/50 text-xs uppercase tracking-widest font-sans mt-1">ID Median Home</div>
                </div>
              </div>
              <Link href="/relocation" className="btn-gold rounded-none py-4 px-8 text-sm tracking-widest inline-block">
                Get the Free Relocation Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY IDAHO ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Why Idaho</p>
            <h2 className="font-serif text-4xl font-bold text-[oklch(0.18_0.07_255)]">The Life You've Been Looking For</h2>
            <div className="gold-divider mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyIdaho.map((item) => (
              <div key={item.title} className="border border-gray-100 card-hover overflow-hidden group">
                <div className="overflow-hidden h-44">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-[oklch(0.18_0.07_255)] mb-3">{item.title}</h3>
                  <p className="text-gray-500 font-sans text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNITIES ── */}
      <section className="py-20 bg-[oklch(0.97_0.005_255)]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Explore the Area</p>
            <h2 className="font-serif text-4xl font-bold text-[oklch(0.18_0.07_255)]">Treasure Valley Communities</h2>
            <div className="gold-divider mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communities.map((c) => (
              <Link key={c.name} href="/communities" className="bg-white border border-gray-100 card-hover block group overflow-hidden">
                <div className="overflow-hidden h-44">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-[oklch(0.18_0.07_255)] mb-2 group-hover:text-[oklch(0.72_0.12_75)] transition-colors">{c.name}</h3>
                  <p className="text-gray-500 font-sans text-sm leading-relaxed mb-4">{c.desc}</p>
                  <div className="text-[oklch(0.72_0.12_75)] font-sans text-sm font-semibold">{c.price}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/communities" className="btn-navy rounded-none py-4 px-10 text-sm tracking-widest inline-block">
              View All Communities
            </Link>
          </div>
        </div>
      </section>

      {/* ── AERIAL / LIFESTYLE IMAGE ── */}
      <section className="relative h-80 overflow-hidden">
        <img src={AERIAL_IMG} alt="Treasure Valley aerial view" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[oklch(0.13_0.06_255/0.35)] flex items-center justify-center">
          <div className="text-center">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">Welcome to the Treasure Valley</h2>
            <p className="text-white/70 font-sans text-lg">Idaho's fastest-growing region — and the best-kept secret in American real estate.</p>
          </div>
        </div>
      </section>

      {/* ── TRUST BRIDGE — SOLAR CONNECTION ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">A Trusted Name for Over 20 Years</p>
              <h2 className="font-serif text-4xl font-bold text-[oklch(0.18_0.07_255)] leading-tight mb-6">
                If You Know Us From California,<br />
                <span style={{ color: "oklch(0.72 0.12 75)" }}>You Know Our Word Is Our Bond.</span>
              </h2>
              <p className="text-gray-600 font-sans leading-relaxed mb-6">
                For over two decades, our family has served thousands of California homeowners through our solar business. We built those relationships on honesty, integrity, and doing right by our clients — and we bring that same commitment to every real estate transaction.
              </p>
              <p className="text-gray-600 font-sans leading-relaxed mb-8">
                If you are one of our California solar clients — or know someone who is — we would be honored to help you or your family find a home in Idaho. You already know us. Now let us show you what Idaho has to offer.
              </p>
              <Link href="/contact" className="btn-gold rounded-none py-4 px-8 text-sm tracking-widest inline-block">
                Reach Out to Faviola
              </Link>
            </div>
            <div className="relative">
              <img src={INTERIOR_IMG} alt="Luxury Idaho home interior" className="w-full h-80 lg:h-[500px] object-cover" />
              <div className="absolute -bottom-4 -left-4 bg-[oklch(0.18_0.07_255)] p-6 max-w-xs">
                <p className="text-[oklch(0.72_0.12_75)] font-serif text-lg font-semibold">"We made the move from California — and we've never looked back."</p>
                <p className="text-white/60 text-xs font-sans mt-2 uppercase tracking-widest">— Faviola Zurita Pellerin, REALTOR®</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT FAVIOLA SNIPPET ── */}
      <section className="py-20 bg-[oklch(0.97_0.005_255)]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src={FAVIOLA_IMG}
                alt="Faviola Zurita Pellerin — Realtor"
                className="w-full max-w-sm mx-auto lg:mx-0 h-[600px] object-cover" style={{objectPosition: 'center 10%'}}
              />
              <div className="absolute top-6 -right-4 bg-[oklch(0.72_0.12_75)] px-6 py-4 hidden lg:block">
                <p className="font-serif text-[oklch(0.18_0.07_255)] font-bold text-sm uppercase tracking-widest">Hablamos Español</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="section-label mb-4">Meet Your Agent</p>
              <h2 className="font-serif text-4xl font-bold text-[oklch(0.18_0.07_255)] leading-tight mb-6">
                Faviola Zurita Pellerin<br />
                <span className="font-normal italic text-2xl text-gray-500">REALTOR® · Relocation Specialist</span>
              </h2>
              <p className="text-gray-600 font-sans leading-relaxed mb-4">
                Faviola grew up in the San Gabriel Valley of Southern California and built a 28-year career in construction and finance before earning her Idaho real estate license. She knows exactly what it feels like to make the move — because she made it herself.
              </p>
              <p className="text-gray-600 font-sans leading-relaxed mb-8">
                Fluent in English and Spanish, Faviola serves buyers and sellers across the entire Treasure Valley with the same dedication and integrity that has defined her family's business for over two decades.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Bilingual (EN/ES)", "Relocation Specialist", "28+ Yrs Experience", "Sweet Group Realty"].map((tag) => (
                  <span key={tag} className="border border-[oklch(0.72_0.12_75)] text-[oklch(0.72_0.12_75)] text-xs font-sans uppercase tracking-widest px-4 py-2">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="/about" className="btn-navy rounded-none py-4 px-8 text-sm tracking-widest inline-block">
                Read Full Bio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEAD CAPTURE / CTA ── */}
      <section className="py-20 bg-[oklch(0.18_0.07_255)]">
        <div className="max-w-3xl mx-auto px-4 lg:px-8 text-center">
          <p className="section-label mb-4">Free Download</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Get the 2026 California to Idaho<br />
            <span style={{ color: "oklch(0.72 0.12 75)" }}>Relocation Guide</span>
          </h2>
          <p className="text-white/70 font-sans leading-relaxed mb-10">
            Everything you need to know about making the move — cost of living comparisons, neighborhood guides, school ratings, and a step-by-step moving checklist. Free, no strings attached.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              // Trigger PDF download immediately
              const link = document.createElement('a');
              link.href = '/manus-storage/relocation-guide_a5dc95b9.pdf';
              link.download = '2026-California-to-Idaho-Relocation-Guide-Castile-Realty-Group.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              form.reset();
            }}
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Your email address"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-white/40 font-sans text-sm focus:outline-none focus:border-[oklch(0.72_0.12_75)]"
            />
            <button type="submit" className="btn-gold rounded-none py-4 px-8 text-sm tracking-widest whitespace-nowrap">
              Send My Guide
            </button>
          </form>
          <p className="text-white/30 text-xs font-sans mt-4">No spam. Unsubscribe anytime. We respect your privacy.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
