/* ============================================================
   CASTILE REALTY REALTY GROUP — Blog / Market Updates Page
   Design: Dark navy + gold, matching site-wide design system
   SEO-optimized articles targeting California-to-Idaho buyers
   ============================================================ */

import { useState } from "react";
import { Link } from "wouter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ── ARTICLE DATA ──────────────────────────────────────────────
const ARTICLES = [
  {
    id: "mccall-market-2026",
    slug: "mccall-idaho-real-estate-market-2026",
    category: "Market Update",
    date: "June 2026",
    readTime: "5 min read",
    featured: true,
    title: "McCall Idaho Real Estate Market Update — Summer 2026",
    subtitle: "Payette Lake area home values, days on market, and what buyers need to know right now.",
    heroImg: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    content: `
McCall, Idaho has quietly become one of the most sought-after mountain resort markets in the Pacific Northwest — and the numbers in 2026 reflect exactly that.

**Median Home Price: $781,000**

The median sale price in the McCall area (Valley County) sits at $781,000 as of mid-2026, representing a 2.6% year-over-year increase. While this is a moderation from the sharp appreciation of 2021–2023, it signals a healthy, stable market rather than a correction. Waterfront properties on Payette Lake continue to command a significant premium, with lakefront homes routinely selling above $1.5M.

**Days on Market: 17**

Well-priced homes in McCall are moving in an average of 17 days — a figure that tells you two things: inventory is still limited, and buyers are serious. If you see a home you love in McCall, waiting a week to think about it is a risk. The best properties go under contract quickly, often with multiple offers.

**Who Is Buying in McCall?**

The buyer pool in McCall has shifted meaningfully over the past three years. Where McCall was once dominated by Boise second-home buyers, we are now seeing a significant influx of California buyers — particularly from the Bay Area, Los Angeles, and the Inland Empire — who are making McCall their primary residence. Remote work has made this possible, and the lifestyle McCall offers makes it irresistible.

**What Is Selling?**

The strongest demand is for single-family homes in the $600K–$900K range with mountain or water views. Vacant land parcels suitable for custom builds are also moving well, as buyers who cannot find their ideal existing home opt to build. Condos near downtown and the marina offer the most accessible entry point into the market, typically in the $350K–$550K range.

**Our Outlook**

We expect McCall to remain a seller-favorable market through the end of 2026. The combination of limited buildable land, strong lifestyle appeal, and continued California migration supports steady appreciation. For buyers, the window to purchase before the next appreciation cycle is now.

*Contact Faviola at (208) 830-7419 for a personalized market analysis of any McCall neighborhood.*
    `,
  },
  {
    id: "california-to-idaho-guide",
    slug: "moving-from-california-to-idaho-complete-guide",
    category: "Relocation Guide",
    date: "May 2026",
    readTime: "8 min read",
    featured: true,
    title: "Moving From California to Idaho: The Complete 2026 Guide",
    subtitle: "Everything Californians need to know before making the move — from taxes to schools to the housing market.",
    heroImg: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80",
    content: `
Every week, families from Los Angeles, the Bay Area, and the Inland Empire make the decision to leave California for Idaho. In 2026, that trend shows no sign of slowing. If you are considering the move, here is everything you need to know.

**Why Are Californians Moving to Idaho?**

The reasons are consistent across nearly every family we work with: cost of living, quality of life, and a desire for more space. California's median home price now exceeds $800,000 statewide, while Idaho's Treasure Valley median sits around $430,000 — and McCall, while higher, offers a mountain resort lifestyle that California simply cannot match at any price.

Idaho also has no state income tax on retirement income, lower property taxes than California, and no capital gains tax on primary residence sales under the federal exclusion. For a family selling a California home with significant equity, the financial math of relocating to Idaho is compelling.

**Where Are Californians Moving in Idaho?**

The two primary destinations are the Treasure Valley (Boise, Meridian, Eagle, Nampa) and McCall. The Treasure Valley offers urban amenities, strong job markets, and excellent schools. McCall offers the mountain resort lifestyle — Payette Lake, Brundage Mountain ski resort, and a tight-knit community of about 3,500 year-round residents.

**What to Know About the Idaho Housing Market**

Idaho's market moves faster than California's in one important way: contingency-heavy offers are less common here. Cash offers and clean contracts win. If you are selling your California home first and then buying in Idaho, work with a realtor who understands how to structure a competitive offer in this market.

**Schools**

McCall-Donnelly School District is small but well-regarded. The Treasure Valley offers a wide range of public and charter school options, with Meridian and Eagle consistently ranking among Idaho's top school districts.

**The Process of Relocating**

We recommend visiting Idaho at least twice before committing — once in summer and once in winter. The lifestyle difference between seasons is significant, and you want to be sure you love both. Many of our California clients do virtual tours first, then visit in person to narrow down neighborhoods before making an offer.

**Working With a Bilingual Agent**

If Spanish is your primary language, working with a bilingual agent is not just a convenience — it is a significant advantage. Faviola Zurita Pellerin is fluent in both English and Spanish and has personally made the California-to-Idaho move. She understands both markets from the inside.

*Ready to start your relocation? Call Faviola at (208) 830-7419 or (909) 240-5389.*
    `,
  },
  {
    id: "treasure-valley-neighborhoods",
    slug: "best-neighborhoods-treasure-valley-idaho-2026",
    category: "Neighborhood Guide",
    date: "April 2026",
    readTime: "6 min read",
    featured: false,
    title: "The Best Neighborhoods in Treasure Valley, Idaho — 2026 Buyer's Guide",
    subtitle: "Boise, Meridian, Eagle, and Nampa compared: prices, schools, commute times, and lifestyle.",
    heroImg: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80",
    content: `
The Treasure Valley — Ada, Canyon, Gem, and surrounding counties — is home to over 800,000 people and growing. For buyers relocating from California, choosing the right city within the Valley is one of the most important decisions you will make. Here is how each major area compares.

**Boise — The Urban Core**

Boise is Idaho's capital and its most cosmopolitan city. Downtown Boise offers a walkable grid of restaurants, breweries, the Boise River Greenbelt, and a growing tech sector anchored by companies like Micron, HP, and a wave of California transplants who brought their startups with them. Median home price: $450,000–$550,000. Best for: professionals, empty nesters, buyers who want walkability.

**Meridian — The Family Hub**

Meridian is the fastest-growing city in Idaho and consistently ranks among the safest cities in the nation. New construction is abundant, schools are excellent, and the community is family-oriented. The trade-off is that it is more suburban — you will need a car for almost everything. Median home price: $420,000–$500,000. Best for: families with children, buyers who want new construction.

**Eagle — The Upscale Option**

Eagle sits at the foothills of the Boise Mountains and offers a more affluent, quieter lifestyle. Larger lots, custom homes, and proximity to hiking trails make it popular with buyers coming from places like Orange County or the East Bay. Median home price: $550,000–$700,000. Best for: buyers seeking space, privacy, and upscale amenities.

**Nampa — The Value Play**

Nampa offers the most affordable entry point in the Treasure Valley, with a median home price around $350,000–$400,000. It is a working-class city with a strong Latino community, excellent Mexican food, and a growing arts scene. For buyers on a tighter budget who still want Idaho's lifestyle benefits, Nampa delivers. Best for: first-time buyers, investors, buyers on a budget.

**Which Area Is Right for You?**

The answer depends on your priorities. If schools and safety are paramount, Meridian. If lifestyle and walkability matter most, Boise. If you want space and prestige, Eagle. If budget is the primary driver, Nampa.

*Faviola serves all four areas. Call (208) 830-7419 to discuss which neighborhood fits your family.*
    `,
  },
  {
    id: "solar-home-value",
    slug: "does-solar-increase-home-value-idaho",
    category: "Home Tips",
    date: "March 2026",
    readTime: "4 min read",
    featured: false,
    title: "Does Solar Add Value to Your Idaho Home?",
    subtitle: "What Idaho buyers and sellers need to know about solar panels, home valuations, and the Idaho solar market.",
    heroImg: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
    content: `
With Idaho's 206 days of sunshine per year and rising electricity rates, solar energy is an increasingly popular topic among Idaho homebuyers and sellers. Here is what the data says about solar and home value in the Treasure Valley and McCall area.

**Does Solar Increase Home Value?**

Yes — but the amount varies by market. According to Zillow research, homes with solar panels sell for approximately 4.1% more than comparable homes without solar. In Idaho's Treasure Valley, where electricity rates have risen significantly in recent years, buyers are increasingly willing to pay a premium for a home with an existing solar system.

**Owned vs. Leased Solar**

This is the most important distinction for buyers and sellers. Owned solar systems (fully paid off) add value to a home and transfer with the sale. Leased solar systems are more complicated — the lease transfers to the buyer, who must qualify for it. Many buyers are reluctant to assume a solar lease, which can actually slow a sale.

If you are selling a home with a leased solar system, Faviola recommends buying out the lease before listing if financially feasible.

**Idaho's Solar Incentive Landscape**

Idaho offers a state income tax deduction for solar installations (up to $5,000 for individuals, $25,000 for businesses). Combined with the federal Investment Tax Credit (30% of installation cost), Idaho homeowners can offset a significant portion of their solar investment.

**McCall Considerations**

McCall's higher elevation and mountain location mean slightly less solar production than the Treasure Valley, but the economics still work well for most properties. Homes with south-facing roofs and minimal shading are ideal candidates.

**Pell Solar — A Trusted Resource**

Castile Realty Group has a direct relationship with Pell Solar, a California-based solar company with 22 years of experience. If you are buying a home in Idaho and want an honest solar assessment, we can connect you with that expertise.

*Questions about solar and your Idaho home purchase? Call Faviola at (208) 830-7419.*
    `,
  },
  {
    id: "first-time-buyer-idaho",
    slug: "first-time-home-buyer-guide-idaho-2026",
    category: "Buyer's Guide",
    date: "February 2026",
    readTime: "7 min read",
    featured: false,
    title: "First-Time Home Buyer Guide for Idaho — 2026 Edition",
    subtitle: "Down payment programs, loan options, and the step-by-step process for buying your first home in Idaho.",
    heroImg: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    content: `
Buying your first home is one of the most significant financial decisions of your life. In Idaho, the process has some important differences from California — and there are programs available that many first-time buyers do not know about.

**Step 1: Get Pre-Approved**

Before you look at a single home, get pre-approved by a lender. In Idaho's market, sellers take offers from pre-approved buyers far more seriously than pre-qualification letters. Pre-approval requires your last two years of tax returns, recent pay stubs, bank statements, and a credit check.

**Idaho Housing and Finance Association (IHFA)**

The IHFA offers first-time buyer programs that include down payment assistance of up to 3.5% of the purchase price, competitive interest rates, and reduced mortgage insurance. Income and purchase price limits apply, but many Treasure Valley buyers qualify. This is a program many California transplants do not know exists.

**FHA vs. Conventional Loans**

FHA loans require as little as 3.5% down and are more lenient on credit scores, making them popular with first-time buyers. Conventional loans with 20% down eliminate private mortgage insurance (PMI) and often have better long-term costs. Your lender can run both scenarios for your specific situation.

**The Idaho Purchase Process**

Once your offer is accepted, Idaho typically uses a 30-day closing timeline. The process includes: earnest money deposit (typically 1–2% of purchase price), home inspection, appraisal, title search, and final walkthrough. Idaho is a non-disclosure state, meaning sale prices are not publicly recorded — which is why working with a local agent who has access to MLS data is essential.

**What First-Time Buyers Often Overlook**

Closing costs in Idaho typically run 2–3% of the purchase price. Budget for these in addition to your down payment. Also budget for moving costs, utility deposits, and the inevitable first-year home maintenance expenses that come with any property.

**Working With Faviola**

As a first-time buyer, you need an agent who will take the time to explain every step of the process without making you feel rushed. Faviola Zurita Pellerin works with first-time buyers regularly and is bilingual in English and Spanish — an important resource for buyers whose primary language is Spanish.

*Ready to start your home search? Call Faviola at (208) 830-7419 for a free, no-pressure consultation.*
    `,
  },
];

// ── ARTICLE CARD COMPONENT ────────────────────────────────────
function ArticleCard({ article, featured = false }: { article: typeof ARTICLES[0]; featured?: boolean }) {
  const [expanded, setExpanded] = useState(false);

  if (featured && !expanded) {
    return (
      <div className="bg-white overflow-hidden card-hover group cursor-pointer" onClick={() => setExpanded(true)}>
        <div className="relative h-72 overflow-hidden">
          <img
            src={article.heroImg}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="bg-[oklch(0.72_0.12_75)] text-[oklch(0.13_0.06_255)] text-xs uppercase tracking-widest font-sans font-semibold px-3 py-1">
              {article.category}
            </span>
          </div>
        </div>
        <div className="p-8">
          <div className="flex items-center gap-3 text-gray-400 text-xs font-sans uppercase tracking-widest mb-4">
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-[oklch(0.18_0.07_255)] mb-3 leading-tight group-hover:text-[oklch(0.50_0.12_75)] transition-colors">
            {article.title}
          </h2>
          <p className="text-gray-500 font-sans text-sm leading-relaxed mb-6">{article.subtitle}</p>
          <button className="text-[oklch(0.72_0.12_75)] text-xs uppercase tracking-widest font-sans font-semibold flex items-center gap-2">
            Read Article
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    );
  }

  if (!featured && !expanded) {
    return (
      <div className="bg-white overflow-hidden card-hover group cursor-pointer flex gap-0" onClick={() => setExpanded(true)}>
        <div className="relative w-40 flex-shrink-0 overflow-hidden">
          <img
            src={article.heroImg}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="p-6 flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[oklch(0.72_0.12_75)] text-xs uppercase tracking-widest font-sans font-semibold">{article.category}</span>
            <span className="text-gray-300">·</span>
            <span className="text-gray-400 text-xs font-sans">{article.date}</span>
          </div>
          <h3 className="font-serif text-lg font-bold text-[oklch(0.18_0.07_255)] mb-2 leading-tight group-hover:text-[oklch(0.50_0.12_75)] transition-colors">
            {article.title}
          </h3>
          <p className="text-gray-400 font-sans text-xs leading-relaxed line-clamp-2">{article.subtitle}</p>
          <p className="text-gray-300 text-xs font-sans mt-3">{article.readTime}</p>
        </div>
      </div>
    );
  }

  // ── EXPANDED / FULL ARTICLE VIEW ──
  return (
    <div className="bg-white col-span-full">
      {/* Back button */}
      <button
        onClick={() => setExpanded(false)}
        className="flex items-center gap-2 text-[oklch(0.72_0.12_75)] text-xs uppercase tracking-widest font-sans font-semibold mb-8 hover:opacity-70 transition-opacity"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Back to All Articles
      </button>

      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-[oklch(0.72_0.12_75)] text-[oklch(0.13_0.06_255)] text-xs uppercase tracking-widest font-sans font-semibold px-3 py-1">
            {article.category}
          </span>
          <span className="text-gray-400 text-xs font-sans">{article.date} · {article.readTime}</span>
        </div>
        <h1 className="font-serif text-4xl lg:text-5xl font-bold text-[oklch(0.18_0.07_255)] mb-4 leading-tight">
          {article.title}
        </h1>
        <p className="text-gray-500 font-sans text-lg leading-relaxed mb-8 border-b border-gray-100 pb-8">
          {article.subtitle}
        </p>

        <div className="relative h-80 mb-10 overflow-hidden">
          <img src={article.heroImg} alt={article.title} className="w-full h-full object-cover" />
        </div>

        {/* Article body — parse markdown-style bold */}
        <div className="prose-custom space-y-5">
          {article.content.trim().split("\n\n").map((para, i) => {
            if (para.startsWith("**") && para.includes("**\n")) {
              const [heading, ...rest] = para.split("\n");
              const headingText = heading.replace(/\*\*/g, "");
              return (
                <div key={i}>
                  <h3 className="font-serif text-xl font-bold text-[oklch(0.18_0.07_255)] mb-2">{headingText}</h3>
                  <p className="text-gray-600 font-sans leading-relaxed text-base">
                    {rest.join(" ").replace(/\*\*(.*?)\*\*/g, "$1")}
                  </p>
                </div>
              );
            }
            if (para.startsWith("*") && para.endsWith("*")) {
              return (
                <p key={i} className="text-gray-400 font-sans text-sm italic border-t border-gray-100 pt-5">
                  {para.replace(/\*/g, "")}
                </p>
              );
            }
            return (
              <p key={i} className="text-gray-600 font-sans leading-relaxed text-base"
                dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }}
              />
            );
          })}
        </div>

        {/* Author card */}
        <div className="mt-12 p-6 bg-[oklch(0.97_0.005_255)] flex items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-[oklch(0.72_0.12_75)]/20 flex items-center justify-center flex-shrink-0">
            <span className="font-serif text-xl font-bold" style={{ color: "oklch(0.72 0.12 75)" }}>FZ</span>
          </div>
          <div>
            <p className="font-serif text-lg font-bold text-[oklch(0.18_0.07_255)]">Faviola Zurita Pellerin</p>
            <p className="text-gray-400 text-xs font-sans uppercase tracking-widest">REALTOR® · Castile Realty Group · McCall, Idaho</p>
            <p className="text-gray-500 font-sans text-sm mt-1">Licensed Idaho REALTOR® #SP55315 · Bilingual English/Spanish · (208) 830-7419</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── MAIN BLOG PAGE ────────────────────────────────────────────
export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Market Update", "Relocation Guide", "Neighborhood Guide", "Home Tips", "Buyer's Guide"];

  const filtered = activeCategory === "All"
    ? ARTICLES
    : ARTICLES.filter((a) => a.category === activeCategory);

  const featured = filtered.filter((a) => a.featured);
  const rest = filtered.filter((a) => !a.featured);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section className="pt-20 bg-[oklch(0.13_0.06_255)]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
          <p className="section-label mb-3">Castile Realty Group</p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white mb-4">
            Market Updates &<br />
            <span style={{ color: "oklch(0.72 0.12 75)" }}>Real Estate Insights</span>
          </h1>
          <p className="text-white/60 font-sans text-lg max-w-2xl leading-relaxed">
            Local market data, relocation guides, and neighborhood insights from Faviola Zurita Pellerin — your McCall and Treasure Valley real estate expert.
          </p>
        </div>
      </section>

      {/* ── CATEGORY FILTER ── */}
      <section className="bg-[oklch(0.18_0.07_255)] border-b border-white/10 sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex gap-0 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-4 text-xs uppercase tracking-widest font-sans font-semibold whitespace-nowrap transition-all border-b-2 ${
                  activeCategory === cat
                    ? "border-[oklch(0.72_0.12_75)] text-white"
                    : "border-transparent text-white/40 hover:text-white/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLES GRID ── */}
      <section className="py-16 bg-[oklch(0.97_0.005_255)]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 font-sans">No articles in this category yet. Check back soon.</p>
            </div>
          ) : (
            <>
              {/* Featured articles — 2 columns */}
              {featured.length > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {featured.map((article) => (
                    <ArticleCard key={article.id} article={article} featured={true} />
                  ))}
                </div>
              )}

              {/* Remaining articles — list style */}
              {rest.length > 0 && (
                <div className="space-y-4">
                  {rest.map((article) => (
                    <ArticleCard key={article.id} article={article} featured={false} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER SIGNUP ── */}
      <section className="py-20 bg-[oklch(0.13_0.06_255)]">
        <div className="max-w-3xl mx-auto px-4 lg:px-8 text-center">
          <p className="section-label mb-4">Stay Informed</p>
          <h2 className="font-serif text-4xl font-bold text-white mb-4">
            Get Monthly Market Updates
          </h2>
          <div className="gold-divider mx-auto mt-4 mb-6" />
          <p className="text-white/60 font-sans text-base mb-10 leading-relaxed">
            Faviola sends a monthly email with McCall and Treasure Valley market data, new listings, and relocation tips. No spam — just real insights from a local expert.
          </p>
          <NewsletterForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-[oklch(0.18_0.07_255)] p-8 text-center">
        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[oklch(0.72_0.12_75)]/20 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="oklch(0.72 0.12 75)" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>
        <p className="font-serif text-xl font-bold text-white mb-2">You're subscribed!</p>
        <p className="text-white/50 font-sans text-sm">Faviola will send you the next market update directly.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
    >
      <input
        type="text"
        required
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="flex-1 bg-[oklch(0.18_0.07_255)] border border-white/20 text-white placeholder-white/30 px-5 py-4 font-sans text-sm focus:outline-none focus:border-[oklch(0.72_0.12_75)]"
      />
      <input
        type="email"
        required
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 bg-[oklch(0.18_0.07_255)] border border-white/20 text-white placeholder-white/30 px-5 py-4 font-sans text-sm focus:outline-none focus:border-[oklch(0.72_0.12_75)]"
      />
      <button type="submit" className="btn-gold rounded-none px-8 py-4 text-xs tracking-widest whitespace-nowrap">
        SUBSCRIBE
      </button>
    </form>
  );
}
