/* ============================================================
   CASTILE REALTY REALTY GROUP — Relocation Page
   Target: California buyers considering moving to Idaho
   ============================================================ */
import { Link } from "wouter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CALI_IMG = "/manus-storage/california-to-idaho_09f791fe.jpg";

const costComparison = [
  { metric: "Median Home Price", california: "$843,000", idaho: "$476,000", savings: "Save ~$367K" },
  { metric: "State Income Tax", california: "Up to 12.3%", idaho: "5.3% flat", savings: "Save thousands/yr" },
  { metric: "Gas Tax (per gallon)", california: "$0.61", idaho: "$0.33", savings: "Save $0.28/gal" },
  { metric: "Auto Insurance (annual)", california: "$2,100–$3,400", idaho: "$1,200–$1,550", savings: "Save ~$1,200/yr" },
  { metric: "Property Tax (homestead)", california: "$7,000 exemption", idaho: "50% of value up to $125K", savings: "Major savings" },
  { metric: "Monthly Mortgage (avg)", california: "$4,800+", idaho: "$2,700", savings: "Save $2,100/mo" },
];

const neighborhoods = [
  {
    name: "Meridian",
    tagline: "Best for Families",
    price: "$450K – $650K",
    schools: "West Ada School District (A-rated)",
    commute: "20 min to downtown Boise",
    vibe: "New construction, master-planned communities, top-rated schools, and a thriving downtown. Idaho's fastest-growing city.",
    bestFor: "Families with kids, new construction buyers",
    color: "oklch(0.18 0.07 255)",
  },
  {
    name: "Eagle",
    tagline: "Best for Luxury",
    price: "$700K – $1.2M+",
    schools: "West Ada School District (A-rated)",
    commute: "25 min to downtown Boise",
    vibe: "Upscale living with larger lots, equestrian properties, and a quiet small-town feel. Idaho's most sought-after luxury market.",
    bestFor: "Luxury buyers, larger lots, privacy",
    color: "oklch(0.72 0.12 75)",
  },
  {
    name: "Boise",
    tagline: "Best for Lifestyle",
    price: "$400K – $800K",
    schools: "Boise School District",
    commute: "Walkable downtown",
    vibe: "Vibrant arts scene, walkable neighborhoods, craft breweries, and outdoor access. The cultural heart of Idaho.",
    bestFor: "Young professionals, urban lifestyle lovers",
    color: "oklch(0.18 0.07 255)",
  },
  {
    name: "Nampa",
    tagline: "Best for Value",
    price: "$350K – $480K",
    schools: "Nampa School District",
    commute: "30 min to downtown Boise",
    vibe: "Affordable, established neighborhoods with a strong community feel. Great value for first-time buyers and growing families.",
    bestFor: "First-time buyers, budget-conscious families",
    color: "oklch(0.72 0.12 75)",
  },
];

const steps = [
  { num: "01", title: "Download the Free Guide", desc: "Get our comprehensive 2026 California to Idaho Relocation Guide — cost comparisons, neighborhood breakdowns, and a moving checklist." },
  { num: "02", title: "Schedule a Consultation", desc: "A free 30-minute call with Faviola to discuss your timeline, budget, and what you are looking for in your new Idaho home." },
  { num: "03", title: "Virtual Home Tours", desc: "Can't make it to Idaho yet? We offer full virtual tours via FaceTime or Google Meet so you can see homes from California." },
  { num: "04", title: "Make an Offer", desc: "When you find the right home, Faviola handles everything — negotiations, inspections, and closing — so you can focus on the move." },
  { num: "05", title: "Welcome to Idaho", desc: "We don't just hand you the keys. We help you get settled — connecting you with local resources, services, and community." },
];

export default function Relocation() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section className="relative pt-20">
        <div className="relative h-80 overflow-hidden">
          <img src={CALI_IMG} alt="California to Idaho" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[oklch(0.13_0.06_255/0.35)] flex items-center">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
              <p className="section-label mb-3">California → Idaho</p>
              <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white">Your Relocation Guide</h1>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-label mb-4">Why So Many Are Making the Move</p>
            <h2 className="font-serif text-4xl font-bold text-[oklch(0.18_0.07_255)] leading-tight mb-6">
              Idaho Is Where California's<br />
              <span style={{ color: "oklch(0.72 0.12 75)" }}>Dream Still Exists.</span>
            </h2>
            <p className="text-gray-600 font-sans leading-relaxed mb-4 text-lg">
              California has been the number one source of net out-migration in the United States for four consecutive years. Families are leaving — not because they don't love California, but because the math no longer works. Housing costs, taxes, traffic, and the cost of living have made it nearly impossible for middle-class families to get ahead.
            </p>
            <p className="text-gray-600 font-sans leading-relaxed text-lg">
              Idaho — and specifically the Treasure Valley — offers everything California once promised: space, opportunity, good schools, safe neighborhoods, and a quality of life that lets you actually enjoy what you've worked for. And Faviola, who made this exact move herself, is here to guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* ── COST COMPARISON TABLE ── */}
      <section className="py-20 bg-[oklch(0.97_0.005_255)]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">The Numbers Don't Lie</p>
            <h2 className="font-serif text-4xl font-bold text-[oklch(0.18_0.07_255)]">California vs. Idaho: Cost of Living</h2>
            <div className="gold-divider mx-auto mt-4" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-lg">
              <thead>
                <tr className="bg-[oklch(0.18_0.07_255)]">
                  <th className="text-left px-6 py-4 text-white/60 text-xs uppercase tracking-widest font-sans">Metric</th>
                  <th className="text-center px-6 py-4 text-white/60 text-xs uppercase tracking-widest font-sans">California</th>
                  <th className="text-center px-6 py-4 text-[oklch(0.72_0.12_75)] text-xs uppercase tracking-widest font-sans">Idaho</th>
                  <th className="text-center px-6 py-4 text-[oklch(0.72_0.12_75)] text-xs uppercase tracking-widest font-sans">Your Savings</th>
                </tr>
              </thead>
              <tbody>
                {costComparison.map((row, i) => (
                  <tr key={row.metric} className={i % 2 === 0 ? "bg-white" : "bg-[oklch(0.97_0.005_255)]"}>
                    <td className="px-6 py-4 font-sans font-medium text-[oklch(0.18_0.07_255)] text-sm">{row.metric}</td>
                    <td className="px-6 py-4 text-center text-gray-500 font-sans text-sm">{row.california}</td>
                    <td className="px-6 py-4 text-center font-semibold text-[oklch(0.18_0.07_255)] font-sans text-sm">{row.idaho}</td>
                    <td className="px-6 py-4 text-center text-[oklch(0.72_0.12_75)] font-semibold font-sans text-sm">{row.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-xs font-sans mt-4 text-center">Data based on 2025–2026 averages. Individual results vary. Sources: Zillow, Tax Foundation, AAA.</p>
        </div>
      </section>

      {/* ── NEIGHBORHOOD MATCHMAKER ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Find Your Fit</p>
            <h2 className="font-serif text-4xl font-bold text-[oklch(0.18_0.07_255)]">Neighborhood Matchmaker</h2>
            <div className="gold-divider mx-auto mt-4" />
            <p className="text-gray-500 font-sans mt-4 max-w-xl mx-auto">Every family is different. Here is how the Treasure Valley's top communities compare so you can find your perfect fit.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {neighborhoods.map((n) => (
              <div key={n.name} className="border border-gray-100 p-8 card-hover">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[oklch(0.18_0.07_255)]">{n.name}</h3>
                    <span className="text-xs uppercase tracking-widest font-sans text-[oklch(0.72_0.12_75)] font-semibold">{n.tagline}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-serif text-lg font-bold text-[oklch(0.18_0.07_255)]">{n.price}</div>
                    <div className="text-xs text-gray-400 font-sans">Typical Range</div>
                  </div>
                </div>
                <p className="text-gray-600 font-sans text-sm leading-relaxed mb-5">{n.vibe}</p>
                <div className="space-y-2 border-t border-gray-100 pt-4">
                  <div className="flex justify-between text-sm font-sans">
                    <span className="text-gray-400 uppercase tracking-widest text-xs">Schools</span>
                    <span className="text-[oklch(0.18_0.07_255)] font-medium text-xs">{n.schools}</span>
                  </div>
                  <div className="flex justify-between text-sm font-sans">
                    <span className="text-gray-400 uppercase tracking-widest text-xs">Commute</span>
                    <span className="text-[oklch(0.18_0.07_255)] font-medium text-xs">{n.commute}</span>
                  </div>
                  <div className="flex justify-between text-sm font-sans">
                    <span className="text-gray-400 uppercase tracking-widest text-xs">Best For</span>
                    <span className="text-[oklch(0.72_0.12_75)] font-medium text-xs">{n.bestFor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 bg-[oklch(0.18_0.07_255)]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">The Process</p>
            <h2 className="font-serif text-4xl font-bold text-white">How We Get You to Idaho</h2>
            <div className="gold-divider mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="relative">
                <div className="text-[oklch(0.72_0.12_75)] font-serif text-5xl font-bold opacity-80 mb-2">{step.num}</div>
                <h3 className="font-serif text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-white/90 font-sans text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEAD CAPTURE ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 lg:px-8 text-center">
          <p className="section-label mb-4">Free Resource</p>
          <h2 className="font-serif text-4xl font-bold text-[oklch(0.18_0.07_255)] mb-6">
            Get the Complete 2026<br />
            <span style={{ color: "oklch(0.72 0.12 75)" }}>California to Idaho Relocation Guide</span>
          </h2>
          <p className="text-gray-600 font-sans leading-relaxed mb-10">
            A comprehensive guide covering cost of living comparisons, neighborhood profiles, school ratings, the home buying process in Idaho, and a step-by-step moving checklist. Completely free.
          </p>
          <form
            className="space-y-4 max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const name = (form.elements.namedItem("name") as HTMLInputElement).value;
              const email = (form.elements.namedItem("email") as HTMLInputElement).value;
              alert(`Thank you, ${name}! We will send the Relocation Guide to ${email} shortly.`);
              form.reset();
            }}
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your full name"
              className="w-full border border-gray-200 px-6 py-4 font-sans text-sm focus:outline-none focus:border-[oklch(0.72_0.12_75)] text-gray-700"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your email address"
              className="w-full border border-gray-200 px-6 py-4 font-sans text-sm focus:outline-none focus:border-[oklch(0.72_0.12_75)] text-gray-700"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number (optional)"
              className="w-full border border-gray-200 px-6 py-4 font-sans text-sm focus:outline-none focus:border-[oklch(0.72_0.12_75)] text-gray-700"
            />
            <select
              name="timeline"
              className="w-full border border-gray-200 px-6 py-4 font-sans text-sm focus:outline-none focus:border-[oklch(0.72_0.12_75)] text-gray-500"
            >
              <option value="">When are you thinking of moving?</option>
              <option>Within 3 months</option>
              <option>3–6 months</option>
              <option>6–12 months</option>
              <option>Just exploring</option>
            </select>
            <button type="submit" className="btn-gold w-full rounded-none py-4 text-sm tracking-widest">
              Send Me the Free Guide
            </button>
          </form>
          <p className="text-gray-400 text-xs font-sans mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
