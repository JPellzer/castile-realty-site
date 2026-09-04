/* ============================================================
   CASTILE REALTY REALTY GROUP — Buy & Sell Page
   For local Idaho buyers and sellers
   ============================================================ */
import { Link } from "wouter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HERO_IMG = "/manus-storage/hero-idaho-landscape_63911478.jpg";
const INTERIOR_IMG = "/manus-storage/luxury-home-interior_d0df2c6e.jpg";

const buyingSteps = [
  { num: "01", title: "Free Consultation", desc: "We start with a no-pressure conversation to understand your goals, timeline, and budget. No commitment required." },
  { num: "02", title: "Get Pre-Approved", desc: "We connect you with trusted Idaho lenders to get pre-approved so you can move fast when you find the right home." },
  { num: "03", title: "Home Search", desc: "Faviola searches the full MLS on your behalf and alerts you the moment a matching home hits the market." },
  { num: "04", title: "Tours & Evaluation", desc: "We tour homes together — in person or virtually — and Faviola gives you an honest assessment of every property." },
  { num: "05", title: "Offer & Negotiation", desc: "When you find the one, Faviola crafts a competitive offer and negotiates fiercely on your behalf." },
  { num: "06", title: "Closing", desc: "We guide you through inspections, appraisals, and closing so there are no surprises on moving day." },
];

const sellingSteps = [
  { num: "01", title: "Free Home Valuation", desc: "Faviola provides a detailed Comparative Market Analysis (CMA) to determine the true market value of your home." },
  { num: "02", title: "Staging & Prep", desc: "We advise on cost-effective improvements and staging strategies to maximize your sale price." },
  { num: "03", title: "Professional Marketing", desc: "Professional photography, MLS listing, social media campaigns, and targeted outreach to our California buyer network." },
  { num: "04", title: "Showings & Offers", desc: "We manage all showings and present every offer with a full analysis so you can make the best decision." },
  { num: "05", title: "Negotiation", desc: "Faviola's construction and finance background means she negotiates from a position of knowledge and strength." },
  { num: "06", title: "Closing", desc: "We handle all the paperwork and coordinate with escrow so your closing is smooth and on time." },
];

const whyChooseUs = [
  { icon: "🏆", title: "Proven Track Record", desc: "Backed by Sweet Group Realty, one of Idaho's most respected brokerages." },
  { icon: "📊", title: "Data-Driven Pricing", desc: "28+ years in finance means Faviola prices homes based on data, not guesswork." },
  { icon: "🌐", title: "California Buyer Network", desc: "Our 9,000+ California client network means your listing reaches out-of-state buyers actively looking to move." },
  { icon: "🤝", title: "Personal Service", desc: "You work directly with Faviola — not an assistant. She answers her own phone." },
];

export default function BuySell() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section className="relative pt-20">
        <div className="relative h-80 overflow-hidden">
          <img src={HERO_IMG} alt="Idaho luxury home" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[oklch(0.13_0.06_255/0.35)] flex items-center">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
              <p className="section-label mb-3">Treasure Valley Real Estate</p>
              <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white">Buy & Sell</h1>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Why Castile Realty Group</p>
            <h2 className="font-serif text-4xl font-bold text-[oklch(0.18_0.07_255)]">The Advantage of Working With Us</h2>
            <div className="gold-divider mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="p-8 bg-[oklch(0.97_0.005_255)] card-hover">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl font-semibold text-[oklch(0.18_0.07_255)] mb-3">{item.title}</h3>
                <p className="text-gray-500 font-sans text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUYING SECTION ── */}
      <section className="py-20 bg-[oklch(0.97_0.005_255)]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-4">For Buyers</p>
              <h2 className="font-serif text-4xl font-bold text-[oklch(0.18_0.07_255)] leading-tight mb-6">
                Find Your Idaho Home<br />
                <span style={{ color: "oklch(0.72 0.12 75)" }}>With Confidence.</span>
              </h2>
              <p className="text-gray-600 font-sans leading-relaxed mb-8">
                Whether you are a first-time buyer, upgrading to your forever home, or relocating from out of state, Faviola guides you through every step of the Idaho home buying process. In a market where homes sell in an average of 14 days, having an experienced agent in your corner is not optional — it is essential.
              </p>
              <div className="space-y-6">
                {buyingSteps.map((step) => (
                  <div key={step.num} className="flex gap-5">
                    <div className="text-[oklch(0.72_0.12_75)] font-serif text-2xl font-bold opacity-60 shrink-0 w-8">{step.num}</div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-[oklch(0.18_0.07_255)] mb-1">{step.title}</h3>
                      <p className="text-gray-500 font-sans text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/contact" className="btn-gold rounded-none py-4 px-8 text-sm tracking-widest inline-block">
                  Start Your Home Search
                </Link>
              </div>
            </div>
            <div className="relative">
              <img src={INTERIOR_IMG} alt="Idaho home interior" className="w-full h-[500px] object-cover" />
              <div className="absolute -bottom-6 -right-4 bg-[oklch(0.18_0.07_255)] p-6 max-w-xs hidden lg:block">
                <p className="text-[oklch(0.72_0.12_75)] font-serif text-lg font-semibold">Homes sell in an average of 14 days in Ada County.</p>
                <p className="text-white/50 text-xs font-sans mt-2 uppercase tracking-widest">— 2026 Treasure Valley Market Data</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SELLING SECTION ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:order-2">
              <p className="section-label mb-4">For Sellers</p>
              <h2 className="font-serif text-4xl font-bold text-[oklch(0.18_0.07_255)] leading-tight mb-6">
                Sell Your Home for<br />
                <span style={{ color: "oklch(0.72 0.12 75)" }}>What It's Worth.</span>
              </h2>
              <p className="text-gray-600 font-sans leading-relaxed mb-8">
                Selling your home is one of the most significant financial transactions of your life. Faviola's background in construction and finance means she understands exactly how to price, present, and market your home to attract the right buyers — including our network of California buyers actively looking to move to Idaho.
              </p>
              <div className="space-y-6">
                {sellingSteps.map((step) => (
                  <div key={step.num} className="flex gap-5">
                    <div className="text-[oklch(0.72_0.12_75)] font-serif text-2xl font-bold opacity-60 shrink-0 w-8">{step.num}</div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-[oklch(0.18_0.07_255)] mb-1">{step.title}</h3>
                      <p className="text-gray-500 font-sans text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/contact" className="btn-gold rounded-none py-4 px-8 text-sm tracking-widest inline-block">
                  Get a Free Home Valuation
                </Link>
              </div>
            </div>
            <div className="lg:order-1 bg-[oklch(0.18_0.07_255)] p-10">
              <h3 className="font-serif text-2xl font-bold text-white mb-6">Our California Seller Advantage</h3>
              <p className="text-white/70 font-sans leading-relaxed mb-6">
                When you list with Castile Realty Group, your home is not just marketed to local Idaho buyers. It is actively promoted to our network of over 9,000 California clients and families who are actively considering a move to Idaho.
              </p>
              <p className="text-white/70 font-sans leading-relaxed mb-8">
                This means more qualified buyers, more competition for your home, and a higher final sale price.
              </p>
              <div className="space-y-4">
                {["MLS listing on all major platforms", "Professional photography & virtual tour", "Targeted social media advertising", "Email marketing to 9,000+ California prospects", "Open house coordination", "Weekly seller updates"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="text-[oklch(0.72_0.12_75)]">✓</span>
                    <span className="text-white/80 font-sans text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROPERTY SEARCH CTA ── */}
      <section className="py-20 bg-[oklch(0.18_0.07_255)]">
        <div className="max-w-3xl mx-auto px-4 lg:px-8 text-center">
          <p className="section-label mb-4">Start Today</p>
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Ready to Buy or Sell<br />
            <span style={{ color: "oklch(0.72 0.12 75)" }}>in the Treasure Valley?</span>
          </h2>
          <p className="text-white/70 font-sans mb-8">Contact Faviola today for a free, no-pressure consultation. Whether you are buying, selling, or just exploring your options, she is here to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:2088307419" className="btn-gold rounded-none py-4 px-10 text-sm tracking-widest">
              Call (208) 830-7419
            </a>
            <Link href="/contact" className="btn-outline-gold rounded-none py-4 px-10 text-sm tracking-widest">
              Send a Message
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
