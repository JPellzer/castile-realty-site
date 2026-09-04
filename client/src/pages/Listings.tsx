/* ============================================================
   CASTILE REALTY REALTY GROUP — Listings Page
   Design: Navy / Gold — matching site-wide design system
   
   IDX BROKER INTEGRATION:
   ─────────────────────────────────────────────────────────────
   When you receive your IDX Broker embed code:
   1. Find the section marked "IDX_EMBED_ZONE" below
   2. Replace the placeholder <div> with your IDX iframe/script
   3. The surrounding layout, filters, and alert signup remain intact
   
   IDX Broker dashboard → Widgets → Copy embed code
   ─────────────────────────────────────────────────────────────
   ============================================================ */

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MortgageCalculator from "../components/MortgageCalculator";

const COUNTIES = ["All Counties", "Ada County", "Canyon County", "Gem County", "Owyhee County", "Elmore County"];
const PRICE_RANGES = ["Any Price", "Under $300K", "$300K – $400K", "$400K – $500K", "$500K – $700K", "$700K – $1M", "$1M+"];
const BEDS = ["Any Beds", "1+", "2+", "3+", "4+", "5+"];
const TYPES = ["All Types", "Single Family", "Condo / Townhome", "Land", "Multi-Family", "New Construction"];

export default function Listings() {
  const [county, setCounty] = useState("All Counties");
  const [price, setPrice] = useState("Any Price");
  const [beds, setBeds] = useState("Any Beds");
  const [type, setType] = useState("All Types");
  const [alertEmail, setAlertEmail] = useState("");
  const [alertName, setAlertName] = useState("");
  const [alertSubmitted, setAlertSubmitted] = useState(false);

  function handleAlertSubmit(e: React.FormEvent) {
    e.preventDefault();
    setAlertSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section className="pt-20 bg-[oklch(0.13_0.06_255)]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-14">
          <p className="section-label mb-3">Treasure Valley, Idaho</p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white mb-4">
            Search Idaho Listings
          </h1>
          <p className="text-white/60 font-sans text-lg max-w-2xl">
            Browse active MLS listings across Ada, Canyon, Gem, and surrounding counties. Updated daily directly from the Idaho MLS.
          </p>
        </div>
      </section>

      {/* ── SEARCH FILTER BAR ── */}
      <section className="bg-[oklch(0.18_0.07_255)] border-b border-white/10 sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
          <div className="flex flex-wrap gap-3 items-center">
            {/* County */}
            <select
              value={county}
              onChange={(e) => setCounty(e.target.value)}
              className="bg-white/10 text-white border border-white/20 px-4 py-2 text-sm font-sans focus:outline-none focus:border-[oklch(0.72_0.12_75)] cursor-pointer"
            >
              {COUNTIES.map((c) => <option key={c} value={c} className="text-gray-900">{c}</option>)}
            </select>

            {/* Price */}
            <select
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="bg-white/10 text-white border border-white/20 px-4 py-2 text-sm font-sans focus:outline-none focus:border-[oklch(0.72_0.12_75)] cursor-pointer"
            >
              {PRICE_RANGES.map((p) => <option key={p} value={p} className="text-gray-900">{p}</option>)}
            </select>

            {/* Beds */}
            <select
              value={beds}
              onChange={(e) => setBeds(e.target.value)}
              className="bg-white/10 text-white border border-white/20 px-4 py-2 text-sm font-sans focus:outline-none focus:border-[oklch(0.72_0.12_75)] cursor-pointer"
            >
              {BEDS.map((b) => <option key={b} value={b} className="text-gray-900">{b}</option>)}
            </select>

            {/* Type */}
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="bg-white/10 text-white border border-white/20 px-4 py-2 text-sm font-sans focus:outline-none focus:border-[oklch(0.72_0.12_75)] cursor-pointer"
            >
              {TYPES.map((t) => <option key={t} value={t} className="text-gray-900">{t}</option>)}
            </select>

            <button className="btn-gold px-6 py-2 text-sm tracking-widest rounded-none ml-auto">
              SEARCH
            </button>
          </div>
        </div>
      </section>

      {/* ── IDX EMBED ZONE ── */}
      {/* 
        ═══════════════════════════════════════════════════════════
        IDX BROKER INTEGRATION POINT
        
        When you have your IDX Broker account set up:
        1. Log into IDX Broker dashboard
        2. Go to: Design → Widgets → Property Search Widget
        3. Copy the embed code (iframe or script)
        4. Replace the entire placeholder div below with that code
        
        The embed code will look something like:
        <iframe src="https://youraccount.idxbroker.com/idx/search/..." 
                width="100%" height="800" frameborder="0"></iframe>
        
        Or for the full-featured map search:
        <script src="https://youraccount.idxbroker.com/idx/..."></script>
        ═══════════════════════════════════════════════════════════
      */}
      <section className="py-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
          
          {/* ── PLACEHOLDER — REMOVE WHEN IDX CODE IS ADDED ── */}
          <div className="border-2 border-dashed border-[oklch(0.72_0.12_75)]/40 bg-[oklch(0.97_0.005_255)] p-16 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[oklch(0.72_0.12_75)]/10 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="oklch(0.72 0.12 75)" strokeWidth="1.5">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <h2 className="font-serif text-3xl font-bold text-[oklch(0.18_0.07_255)] mb-3">
              Live MLS Listings Coming Soon
            </h2>
            <p className="text-gray-500 font-sans text-base max-w-lg mx-auto mb-6 leading-relaxed">
              This page is fully built and ready. The moment IDX Broker is connected, every active listing in Treasure Valley will appear here — searchable by county, price, beds, and more, updated every 15 minutes directly from the Idaho MLS.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mt-8 text-left">
              <div className="bg-white p-5 border border-gray-100">
                <div className="text-[oklch(0.72_0.12_75)] font-serif text-2xl font-bold mb-1">15 min</div>
                <div className="text-gray-500 text-sm font-sans">MLS data refresh rate</div>
              </div>
              <div className="bg-white p-5 border border-gray-100">
                <div className="text-[oklch(0.72_0.12_75)] font-serif text-2xl font-bold mb-1">5</div>
                <div className="text-gray-500 text-sm font-sans">Counties covered</div>
              </div>
              <div className="bg-white p-5 border border-gray-100">
                <div className="text-[oklch(0.72_0.12_75)] font-serif text-2xl font-bold mb-1">Daily</div>
                <div className="text-gray-500 text-sm font-sans">New listing alerts</div>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-xs text-gray-400 font-sans uppercase tracking-widest">
                Powered by Idaho MLS (IMLS) via IDX Broker · Activating soon
              </p>
            </div>
          </div>
          {/* ── END PLACEHOLDER ── */}

        </div>
      </section>

      {/* ── MORTGAGE CALCULATOR ── */}
      <MortgageCalculator />

      {/* ── NEW LISTING ALERT SIGNUP ── */}
      <section className="py-20 bg-[oklch(0.13_0.06_255)]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Copy */}
            <div>
              <p className="section-label mb-4">Never Miss a Listing</p>
              <h2 className="font-serif text-4xl font-bold text-white mb-6 leading-tight">
                Get Notified the Moment<br />
                <span style={{ color: "oklch(0.72 0.12 75)" }}>a New Home Hits the Market</span>
              </h2>
              <p className="text-white/60 font-sans leading-relaxed mb-8 text-base">
                In Treasure Valley's fast-moving market, the best homes go under contract within days — sometimes hours. Sign up for daily listing alerts and be the first to know when a home matching your criteria becomes available.
              </p>
              <div className="space-y-4">
                {[
                  "Instant email the moment a matching listing goes live",
                  "Daily digest of all new listings in your target area",
                  "Price drop alerts on homes you've saved",
                  "Faviola personally reviews your criteria and fine-tunes your search",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[oklch(0.72_0.12_75)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 3" stroke="oklch(0.72 0.12 75)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-white/70 font-sans text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white p-8 lg:p-10">
              {alertSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[oklch(0.72_0.12_75)]/10 flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="oklch(0.72 0.12 75)" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[oklch(0.18_0.07_255)] mb-2">You're on the list!</h3>
                  <p className="text-gray-500 font-sans text-sm leading-relaxed">
                    Faviola will set up your personalized search and you'll start receiving daily listing alerts as soon as the MLS feed goes live.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-serif text-2xl font-bold text-[oklch(0.18_0.07_255)] mb-2">Set Up Your Listing Alert</h3>
                  <p className="text-gray-500 font-sans text-sm mb-6">Free. No spam. Unsubscribe anytime.</p>
                  <form onSubmit={handleAlertSubmit} className="space-y-4">
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={alertName}
                      onChange={(e) => setAlertName(e.target.value)}
                      className="w-full border border-gray-200 px-5 py-3.5 font-sans text-sm focus:outline-none focus:border-[oklch(0.72_0.12_75)] text-gray-700"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email address"
                      value={alertEmail}
                      onChange={(e) => setAlertEmail(e.target.value)}
                      className="w-full border border-gray-200 px-5 py-3.5 font-sans text-sm focus:outline-none focus:border-[oklch(0.72_0.12_75)] text-gray-700"
                    />
                    <input
                      type="tel"
                      placeholder="Phone number (optional)"
                      className="w-full border border-gray-200 px-5 py-3.5 font-sans text-sm focus:outline-none focus:border-[oklch(0.72_0.12_75)] text-gray-700"
                    />
                    <select className="w-full border border-gray-200 px-5 py-3.5 font-sans text-sm focus:outline-none focus:border-[oklch(0.72_0.12_75)] text-gray-500">
                      <option value="">Preferred county</option>
                      {COUNTIES.slice(1).map((c) => <option key={c}>{c}</option>)}
                    </select>
                    <select className="w-full border border-gray-200 px-5 py-3.5 font-sans text-sm focus:outline-none focus:border-[oklch(0.72_0.12_75)] text-gray-500">
                      <option value="">Price range</option>
                      {PRICE_RANGES.slice(1).map((p) => <option key={p}>{p}</option>)}
                    </select>
                    <select className="w-full border border-gray-200 px-5 py-3.5 font-sans text-sm focus:outline-none focus:border-[oklch(0.72_0.12_75)] text-gray-500">
                      <option value="">Minimum bedrooms</option>
                      {BEDS.slice(1).map((b) => <option key={b}>{b}</option>)}
                    </select>
                    <div className="flex gap-3 pt-1">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="freq" value="instant" defaultChecked className="accent-[oklch(0.72_0.12_75)]" />
                        <span className="text-sm font-sans text-gray-600">Instant alerts</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="freq" value="daily" className="accent-[oklch(0.72_0.12_75)]" />
                        <span className="text-sm font-sans text-gray-600">Daily digest</span>
                      </label>
                    </div>
                    <button type="submit" className="btn-gold w-full rounded-none py-4 text-sm tracking-widest">
                      ACTIVATE MY LISTING ALERTS
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW ALERTS WORK ── */}
      <section className="py-16 bg-[oklch(0.97_0.005_255)]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-3">How It Works</p>
            <h2 className="font-serif text-3xl font-bold text-[oklch(0.18_0.07_255)]">Your Listing Alert System</h2>
            <div className="gold-divider mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "You Set Your Criteria", desc: "Tell us your county, price range, bedrooms, and property type. Faviola fine-tunes it to match exactly what you're looking for." },
              { step: "02", title: "MLS Updates Every 15 Min", desc: "The Idaho MLS feeds new listings directly into the system. The moment a home goes live, it's in the database." },
              { step: "03", title: "You Get an Instant Email", desc: "As soon as a matching listing hits the market, you receive an email with photos, price, address, and full details." },
              { step: "04", title: "Faviola Schedules a Tour", desc: "See something you like? One call or text to Faviola and she'll get you in the door — often same day." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-[oklch(0.72_0.12_75)] font-serif text-4xl font-bold opacity-40 mb-3">{item.step}</div>
                <h3 className="font-serif text-lg font-semibold text-[oklch(0.18_0.07_255)] mb-3">{item.title}</h3>
                <p className="text-gray-500 font-sans text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
