/* ============================================================
   CASTILE REALTY REALTY GROUP — Communities Page
   Treasure Valley neighborhood guides
   ============================================================ */
import { Link } from "wouter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AERIAL_IMG = "/manus-storage/treasure-valley-aerial_40aa6327.jpg";

const cities = [
  {
    name: "Boise",
    state: "Ada County",
    tagline: "Idaho's Capital City",
    medianPrice: "$541,000",
    avgDaysOnMarket: "14",
    population: "240,000+",
    schools: "Boise School District",
    description: "Boise is the cultural and economic heart of Idaho. With a thriving downtown, world-class outdoor recreation, a growing tech scene, and some of the most walkable neighborhoods in the Mountain West, Boise offers a quality of life that is hard to match at any price point. The North End and East End neighborhoods are particularly popular with buyers coming from California who want a walkable, community-oriented lifestyle.",
    highlights: ["Vibrant downtown arts & dining scene", "Boise River Greenbelt (25+ miles of trails)", "Boise State University", "Growing tech hub (HP, Micron, Amazon)", "Foothills hiking and mountain biking"],
    bestFor: "Young professionals, lifestyle buyers, urban transplants",
    priceRange: "$350K – $900K+",
  },
  {
    name: "Meridian",
    state: "Ada County",
    tagline: "Idaho's Fastest-Growing City",
    medianPrice: "$520,000",
    avgDaysOnMarket: "16",
    population: "130,000+",
    schools: "West Ada School District (A-rated)",
    description: "Meridian has been Idaho's fastest-growing city for over a decade, and for good reason. It offers the perfect blend of new construction homes, master-planned communities, top-rated schools, and a thriving retail and restaurant scene. The West Ada School District is consistently rated among the best in the Pacific Northwest, making Meridian the top choice for families relocating from California.",
    highlights: ["West Ada School District — one of Idaho's best", "New construction communities (Toll Brothers, Hubble Homes)", "The Village at Meridian (shopping & dining)", "Easy freeway access to all of Treasure Valley", "Family-friendly parks and recreation"],
    bestFor: "Families with children, new construction buyers",
    priceRange: "$400K – $750K",
  },
  {
    name: "Eagle",
    state: "Ada County",
    tagline: "Upscale Small-Town Living",
    medianPrice: "$770,000",
    avgDaysOnMarket: "21",
    population: "30,000+",
    schools: "West Ada School District (A-rated)",
    description: "Eagle is Treasure Valley's premier luxury market. Known for its larger lots, equestrian properties, and a quiet small-town atmosphere, Eagle attracts buyers who want space, privacy, and prestige without sacrificing access to Boise's amenities. The charming downtown Eagle Road corridor offers boutique shopping and dining, and the community has a strong sense of identity that residents fiercely love.",
    highlights: ["Largest average lot sizes in the valley", "Equestrian properties and acreage available", "Charming downtown Eagle Road", "Luxury custom home builders", "Quiet, private, and prestigious"],
    bestFor: "Luxury buyers, larger lots, privacy seekers, equestrian",
    priceRange: "$600K – $3M+",
  },
  {
    name: "Nampa",
    state: "Canyon County",
    tagline: "Affordable & Established",
    medianPrice: "$430,000",
    avgDaysOnMarket: "18",
    population: "115,000+",
    schools: "Nampa School District",
    description: "Nampa is the most affordable major city in the Treasure Valley and offers tremendous value for buyers who want to maximize their dollar. With a rich agricultural heritage, a growing downtown, and easy access to both Boise and the Snake River Canyon, Nampa is an excellent choice for first-time buyers, growing families, and investors. Canyon County's lower property taxes add to the appeal.",
    highlights: ["Most affordable major city in the valley", "Canyon County lower property taxes", "Growing downtown arts district", "NNU (Northwest Nazarene University)", "Strong rental market for investors"],
    bestFor: "First-time buyers, value-focused families, investors",
    priceRange: "$300K – $550K",
  },
  {
    name: "Caldwell",
    state: "Canyon County",
    tagline: "Value & Community",
    medianPrice: "$390,000",
    avgDaysOnMarket: "20",
    population: "65,000+",
    schools: "Caldwell School District",
    description: "Caldwell offers some of the best value in the entire Treasure Valley. A revitalized downtown, the Indian Creek Plaza, and proximity to the Snake River make Caldwell an increasingly attractive option for buyers who want affordability without sacrificing community. Canyon County's tax advantages make the overall cost of ownership significantly lower than Ada County.",
    highlights: ["Most affordable prices in the valley", "Revitalized Indian Creek Plaza downtown", "Canyon County tax advantages", "College of Idaho campus", "Growing community investment"],
    bestFor: "Budget-conscious buyers, investors, Canyon County workers",
    priceRange: "$280K – $480K",
  },
  {
    name: "Star",
    state: "Ada County",
    tagline: "Rural Charm, Valley Access",
    medianPrice: "$490,000",
    avgDaysOnMarket: "19",
    population: "15,000+",
    schools: "West Ada School District (A-rated)",
    description: "Star is one of Treasure Valley's best-kept secrets. A small-town feel with large lots, a strong sense of community, and access to the excellent West Ada School District make it a popular choice for buyers who want a bit more space and quiet without being far from Boise or Meridian. New construction is booming here.",
    highlights: ["Large lots and rural character", "West Ada School District", "Small-town community feel", "New construction growth", "Affordable compared to Eagle"],
    bestFor: "Families wanting space, rural character buyers",
    priceRange: "$380K – $700K",
  },
];

export default function Communities() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section className="relative pt-20">
        <div className="relative h-80 overflow-hidden">
          <img src={AERIAL_IMG} alt="Treasure Valley aerial" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[oklch(0.13_0.06_255/0.35)] flex items-center">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
              <p className="section-label mb-3">Treasure Valley, Idaho</p>
              <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white">Community Guides</h1>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-label mb-4">Find Your Community</p>
            <h2 className="font-serif text-4xl font-bold text-[oklch(0.18_0.07_255)] leading-tight mb-6">
              Every Family Has a<br />
              <span style={{ color: "oklch(0.72 0.12 75)" }}>Perfect Fit in Idaho.</span>
            </h2>
            <p className="text-gray-600 font-sans leading-relaxed text-lg">
              The Treasure Valley is not one community — it is a collection of distinct cities and neighborhoods, each with its own character, price point, and lifestyle. Whether you are looking for luxury acreage in Eagle, top-rated schools in Meridian, or walkable urban living in Boise, Faviola knows every corner of this valley and will help you find exactly where you belong.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUICK COMPARISON ── */}
      <section className="py-10 bg-[oklch(0.97_0.005_255)]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-sm text-sm font-sans">
              <thead>
                <tr className="bg-[oklch(0.18_0.07_255)]">
                  <th className="text-left px-5 py-3 text-white/60 text-xs uppercase tracking-widest">City</th>
                  <th className="text-center px-5 py-3 text-white/60 text-xs uppercase tracking-widest">Median Price</th>
                  <th className="text-center px-5 py-3 text-white/60 text-xs uppercase tracking-widest">Avg Days on Market</th>
                  <th className="text-center px-5 py-3 text-white/60 text-xs uppercase tracking-widest">Schools</th>
                  <th className="text-left px-5 py-3 text-white/60 text-xs uppercase tracking-widest">Best For</th>
                </tr>
              </thead>
              <tbody>
                {cities.map((c, i) => (
                  <tr key={c.name} className={i % 2 === 0 ? "bg-white" : "bg-[oklch(0.97_0.005_255)]"}>
                    <td className="px-5 py-3 font-semibold text-[oklch(0.18_0.07_255)]">{c.name}</td>
                    <td className="px-5 py-3 text-center text-[oklch(0.72_0.12_75)] font-semibold">{c.medianPrice}</td>
                    <td className="px-5 py-3 text-center text-gray-600">{c.avgDaysOnMarket} days</td>
                    <td className="px-5 py-3 text-center text-gray-600">{c.schools}</td>
                    <td className="px-5 py-3 text-gray-500 text-xs">{c.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CITY GUIDES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-20">
          {cities.map((city, i) => (
            <div key={city.name} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <p className="section-label mb-3">{city.state}</p>
                <h2 className="font-serif text-4xl font-bold text-[oklch(0.18_0.07_255)] mb-2">{city.name}</h2>
                <p className="text-[oklch(0.72_0.12_75)] font-sans text-sm uppercase tracking-widest font-semibold mb-6">{city.tagline}</p>
                <p className="text-gray-600 font-sans leading-relaxed mb-6">{city.description}</p>
                <div className="space-y-2 mb-6">
                  {city.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-3">
                      <span className="text-[oklch(0.72_0.12_75)] mt-0.5">▸</span>
                      <span className="text-gray-600 font-sans text-sm">{h}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn-gold rounded-none py-3 px-8 text-xs tracking-widest inline-block">
                  Search {city.name} Homes
                </Link>
              </div>
              <div className={`bg-[oklch(0.97_0.005_255)] p-8 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                <h3 className="font-serif text-xl font-semibold text-[oklch(0.18_0.07_255)] mb-6 border-b border-gray-200 pb-4">{city.name} at a Glance</h3>
                <div className="space-y-4">
                  {[
                    { label: "Median Home Price", value: city.medianPrice },
                    { label: "Price Range", value: city.priceRange },
                    { label: "Avg. Days on Market", value: `${city.avgDaysOnMarket} days` },
                    { label: "Population", value: city.population },
                    { label: "School District", value: city.schools },
                    { label: "Best For", value: city.bestFor },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-start gap-4">
                      <span className="text-gray-400 text-xs uppercase tracking-widest font-sans">{item.label}</span>
                      <span className="text-[oklch(0.18_0.07_255)] font-sans text-sm font-medium text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[oklch(0.18_0.07_255)]">
        <div className="max-w-3xl mx-auto px-4 lg:px-8 text-center">
          <p className="section-label mb-4">Ready to Find Your Community?</p>
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Let Faviola Help You<br />
            <span style={{ color: "oklch(0.72 0.12 75)" }}>Find Your Perfect Neighborhood.</span>
          </h2>
          <p className="text-white/70 font-sans mb-8">Schedule a free consultation and Faviola will walk you through every community based on your budget, lifestyle, and priorities.</p>
          <Link href="/contact" className="btn-gold rounded-none py-4 px-10 text-sm tracking-widest inline-block">
            Schedule a Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
