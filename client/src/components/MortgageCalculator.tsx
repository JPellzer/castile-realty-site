/* ============================================================
   CASTILE REALTY REALTY GROUP — Mortgage Calculator (Full PITI)
   Principal + Interest + Taxes + Insurance + PMI
   Numbers: DM Mono 500 | Money: green | Rates: gold
   ============================================================ */

import { useState, useMemo } from "react";

const NUM_FONT: React.CSSProperties = {
  fontFamily: "'DM Mono', monospace",
  fontWeight: 500,
  letterSpacing: "-0.02em",
};

const GREEN = "#22c55e";
const GOLD = "oklch(0.72 0.12 75)";

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

function formatCurrencyDecimal(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n);
}

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(600000);
  const [downPct, setDownPct] = useState(20);
  const [interestRate, setInterestRate] = useState(6.75);
  const [loanTerm, setLoanTerm] = useState(30);
  // PITI extras
  const [propTaxRate, setPropTaxRate] = useState(0.63);   // Idaho avg ~0.63%
  const [insuranceAnnual, setInsuranceAnnual] = useState(1800); // ~$150/mo

  const calc = useMemo(() => {
    const downAmount = homePrice * (downPct / 100);
    const principal = homePrice - downAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;

    // P&I
    let pi = 0;
    if (monthlyRate === 0) {
      pi = principal / numPayments;
    } else {
      pi = (principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
           (Math.pow(1 + monthlyRate, numPayments) - 1);
    }

    // Property Tax (monthly)
    const monthlyTax = (homePrice * (propTaxRate / 100)) / 12;

    // Homeowner's Insurance (monthly)
    const monthlyInsurance = insuranceAnnual / 12;

    // PMI — only if down < 20%, approx 0.7% of loan/year
    const pmiRate = downPct < 20 ? 0.007 : 0;
    const monthlyPMI = (principal * pmiRate) / 12;

    const totalMonthly = pi + monthlyTax + monthlyInsurance + monthlyPMI;
    const totalPaid = pi * numPayments;
    const totalInterest = totalPaid - principal;

    return {
      downAmount, principal, pi, monthlyTax, monthlyInsurance, monthlyPMI,
      totalMonthly, totalPaid, totalInterest,
    };
  }, [homePrice, downPct, interestRate, loanTerm, propTaxRate, insuranceAnnual]);

  // Donut — based on total monthly breakdown
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const piPct = Math.round((calc.pi / calc.totalMonthly) * 100);
  const taxPct = Math.round((calc.monthlyTax / calc.totalMonthly) * 100);
  const insPct = Math.round((calc.monthlyInsurance / calc.totalMonthly) * 100);
  const pmiPct = 100 - piPct - taxPct - insPct;

  // Build 4 arcs
  const piDash = (piPct / 100) * circumference;
  const taxDash = (taxPct / 100) * circumference;
  const insDash = (insPct / 100) * circumference;
  const pmiDash = (pmiPct / 100) * circumference;

  const trackPct = (val: number, min: number, max: number) =>
    `linear-gradient(to right, ${GOLD} 0%, ${GOLD} ${((val - min) / (max - min)) * 100}%, oklch(0.25 0.07 255) ${((val - min) / (max - min)) * 100}%, oklch(0.25 0.07 255) 100%)`;

  return (
    <section className="py-20 bg-[oklch(0.13_0.06_255)]" id="mortgage-calculator">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">Plan Your Purchase</p>
          <h2 className="font-serif text-4xl font-bold text-white mb-4">Mortgage Calculator</h2>
          <div className="gold-divider mx-auto mt-4 mb-6" />
          <p className="text-white/70 font-sans text-base max-w-xl mx-auto">
            Full PITI estimate — principal, interest, taxes, and insurance — so you know your true monthly cost.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* ── LEFT: INPUTS ── */}
          <div className="bg-[oklch(0.18_0.07_255)] p-8 space-y-7">

            {/* Home Price */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-white/80 text-xs uppercase tracking-widest font-sans font-semibold">Home Price</label>
                <span style={{ ...NUM_FONT, fontSize: "1.5rem", color: GREEN }}>{formatCurrency(homePrice)}</span>
              </div>
              <input type="range" min={100000} max={2000000} step={10000} value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
                className="w-full h-1 appearance-none cursor-pointer rounded-none"
                style={{ background: trackPct(homePrice, 100000, 2000000) }} />
              <div className="flex justify-between text-white/50 text-xs font-sans mt-2"><span>$100K</span><span>$2M</span></div>
            </div>

            {/* Down Payment */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-white/80 text-xs uppercase tracking-widest font-sans font-semibold">Down Payment</label>
                <div className="flex items-baseline gap-2">
                  <span style={{ ...NUM_FONT, fontSize: "1.5rem", color: GOLD }}>{downPct}%</span>
                  <span style={{ ...NUM_FONT, fontSize: "0.9rem", color: GREEN }}>({formatCurrency(calc.downAmount)})</span>
                </div>
              </div>
              <input type="range" min={3} max={50} step={1} value={downPct}
                onChange={(e) => setDownPct(Number(e.target.value))}
                className="w-full h-1 appearance-none cursor-pointer"
                style={{ background: trackPct(downPct, 3, 50) }} />
              <div className="flex justify-between text-white/50 text-xs font-sans mt-2"><span>3%</span><span>50%</span></div>
              {downPct < 20 && (
                <p className="text-amber-400/80 text-xs font-sans mt-2">⚠ PMI applies when down payment is under 20%</p>
              )}
            </div>

            {/* Interest Rate */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-white/80 text-xs uppercase tracking-widest font-sans font-semibold">Interest Rate</label>
                <span style={{ ...NUM_FONT, fontSize: "1.5rem", color: GOLD }}>{interestRate.toFixed(2)}%</span>
              </div>
              <input type="range" min={3} max={12} step={0.25} value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-1 appearance-none cursor-pointer"
                style={{ background: trackPct(interestRate, 3, 12) }} />
              <div className="flex justify-between text-white/50 text-xs font-sans mt-2"><span>3%</span><span>12%</span></div>
            </div>

            {/* Loan Term */}
            <div>
              <label className="text-white/80 text-xs uppercase tracking-widest font-sans font-semibold block mb-3">Loan Term</label>
              <div className="grid grid-cols-5 gap-2">
                {[10, 15, 20, 25, 30].map((term) => (
                  <button key={term} onClick={() => setLoanTerm(term)}
                    className="py-2.5 transition-all"
                    style={{
                      ...NUM_FONT, fontSize: "1rem",
                      ...(loanTerm === term
                        ? { backgroundColor: GOLD, color: "oklch(0.13 0.06 255)" }
                        : { border: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.75)" })
                    }}>
                    {term}yr
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10" />

            {/* Property Tax */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <div>
                  <label className="text-white/80 text-xs uppercase tracking-widest font-sans font-semibold">Property Tax Rate</label>
                  <p className="text-white/40 text-xs font-sans mt-0.5">Idaho avg: 0.63% · California avg: 0.75%</p>
                </div>
                <div className="text-right">
                  <span style={{ ...NUM_FONT, fontSize: "1.5rem", color: GOLD }}>{propTaxRate.toFixed(2)}%</span>
                  <p style={{ ...NUM_FONT, fontSize: "0.8rem", color: GREEN }} className="text-right">{formatCurrency(calc.monthlyTax)}/mo</p>
                </div>
              </div>
              <input type="range" min={0.1} max={2.5} step={0.01} value={propTaxRate}
                onChange={(e) => setPropTaxRate(Number(e.target.value))}
                className="w-full h-1 appearance-none cursor-pointer"
                style={{ background: trackPct(propTaxRate, 0.1, 2.5) }} />
              <div className="flex justify-between text-white/50 text-xs font-sans mt-2"><span>0.1%</span><span>2.5%</span></div>
            </div>

            {/* Homeowner's Insurance */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <div>
                  <label className="text-white/80 text-xs uppercase tracking-widest font-sans font-semibold">Homeowner's Insurance</label>
                  <p className="text-white/40 text-xs font-sans mt-0.5">Annual premium</p>
                </div>
                <div className="text-right">
                  <span style={{ ...NUM_FONT, fontSize: "1.5rem", color: GREEN }}>{formatCurrency(insuranceAnnual)}/yr</span>
                  <p style={{ ...NUM_FONT, fontSize: "0.8rem", color: GREEN }} className="text-right">{formatCurrencyDecimal(calc.monthlyInsurance)}/mo</p>
                </div>
              </div>
              <input type="range" min={600} max={6000} step={100} value={insuranceAnnual}
                onChange={(e) => setInsuranceAnnual(Number(e.target.value))}
                className="w-full h-1 appearance-none cursor-pointer"
                style={{ background: trackPct(insuranceAnnual, 600, 6000) }} />
              <div className="flex justify-between text-white/50 text-xs font-sans mt-2"><span>$600/yr</span><span>$6,000/yr</span></div>
            </div>

            <p className="text-white/40 text-xs font-sans leading-relaxed pt-2 border-t border-white/10">
              Estimate only. PMI (~0.7%/yr) auto-applied when down payment is under 20%. Contact Faviola for a lender referral and exact quote.
            </p>
          </div>

          {/* ── RIGHT: RESULTS ── */}
          <div className="space-y-4">

            {/* Total Monthly PITI — Hero */}
            <div className="bg-[oklch(0.18_0.07_255)] p-8">
              <p className="text-white/75 text-xs uppercase tracking-widest font-sans font-semibold mb-1">Total Monthly Payment (PITI)</p>
              <p className="text-white/40 text-xs font-sans mb-4">Principal · Interest · Taxes · Insurance{calc.monthlyPMI > 0 ? " · PMI" : ""}</p>
              <div style={{ ...NUM_FONT, fontSize: "clamp(3rem, 8vw, 4.5rem)", color: GREEN, lineHeight: 1 }} className="mb-3">
                {formatCurrency(calc.totalMonthly)}
              </div>
              <p className="text-white/60 text-sm font-sans">
                {loanTerm}-year fixed &middot; {interestRate.toFixed(2)}% rate
              </p>

              <div className="mt-6 h-px bg-white/10" />

              {/* PITI Breakdown rows */}
              <div className="mt-5 space-y-3">
                {[
                  { label: "Principal & Interest", val: calc.pi, color: GREEN },
                  { label: "Property Tax", val: calc.monthlyTax, color: GREEN },
                  { label: "Homeowner's Insurance", val: calc.monthlyInsurance, color: GREEN },
                  ...(calc.monthlyPMI > 0 ? [{ label: "PMI (< 20% down)", val: calc.monthlyPMI, color: "#f59e0b" }] : []),
                ].map(({ label, val, color }) => (
                  <div key={label} className="flex justify-between items-center">
                    <span className="text-white/65 text-xs font-sans uppercase tracking-wide">{label}</span>
                    <span style={{ ...NUM_FONT, fontSize: "1rem", color }}>{formatCurrency(val)}/mo</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Loan Summary */}
            <div className="bg-[oklch(0.18_0.07_255)] p-8">
              <p className="text-white/75 text-xs uppercase tracking-widest font-sans font-semibold mb-5">Loan Summary</p>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { label: "Loan Amount", val: formatCurrency(calc.principal) },
                  { label: "Down Payment", val: formatCurrency(calc.downAmount) },
                  { label: "Total Interest", val: formatCurrency(calc.totalInterest) },
                  { label: "Total Loan Cost", val: formatCurrency(calc.totalPaid + calc.downAmount) },
                ].map(({ label, val }) => (
                  <div key={label}>
                    <p className="text-white/60 text-xs uppercase tracking-widest font-sans mb-1">{label}</p>
                    <p style={{ ...NUM_FONT, fontSize: "1.15rem", color: GREEN }}>{val}</p>
                  </div>
                ))}
              </div>

              {/* Donut */}
              <div className="mt-6 flex items-center gap-6">
                <div className="relative flex-shrink-0">
                  <svg width="100" height="100" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r={radius} fill="none" stroke="oklch(0.25 0.07 255)" strokeWidth="14" />
                    {/* P&I arc */}
                    <circle cx="60" cy="60" r={radius} fill="none" stroke={GREEN} strokeWidth="14"
                      strokeDasharray={`${piDash} ${circumference - piDash}`}
                      strokeDashoffset={circumference * 0.25} strokeLinecap="butt" />
                    {/* Tax arc */}
                    <circle cx="60" cy="60" r={radius} fill="none" stroke="oklch(0.72 0.12 75)" strokeWidth="14"
                      strokeDasharray={`${taxDash} ${circumference - taxDash}`}
                      strokeDashoffset={circumference * 0.25 - piDash} strokeLinecap="butt" />
                    {/* Insurance arc */}
                    <circle cx="60" cy="60" r={radius} fill="none" stroke="oklch(0.55 0.12 255)" strokeWidth="14"
                      strokeDasharray={`${insDash} ${circumference - insDash}`}
                      strokeDashoffset={circumference * 0.25 - piDash - taxDash} strokeLinecap="butt" />
                    {/* PMI arc */}
                    {pmiPct > 0 && (
                      <circle cx="60" cy="60" r={radius} fill="none" stroke="#f59e0b" strokeWidth="14"
                        strokeDasharray={`${pmiDash} ${circumference - pmiDash}`}
                        strokeDashoffset={circumference * 0.25 - piDash - taxDash - insDash} strokeLinecap="butt" />
                    )}
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span style={{ ...NUM_FONT, fontSize: "1.1rem", color: GREEN }}>{piPct}%</span>
                    <span className="text-white/50 text-xs font-sans">P&I</span>
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  {[
                    { color: GREEN, label: "P&I", pct: piPct },
                    { color: GOLD, label: "Tax", pct: taxPct },
                    { color: "oklch(0.55 0.12 255)", label: "Insurance", pct: insPct },
                    ...(pmiPct > 0 ? [{ color: "#f59e0b", label: "PMI", pct: pmiPct }] : []),
                  ].map(({ color, label, pct }) => (
                    <div key={label} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-sm flex-shrink-0" style={{ backgroundColor: color }} />
                      <span className="text-white/60 text-xs font-sans flex-1">{label}</span>
                      <span style={{ ...NUM_FONT, fontSize: "0.85rem", color }}>{pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center justify-between gap-4 p-6" style={{ backgroundColor: GOLD }}>
              <div>
                <p className="font-serif text-base font-bold text-[oklch(0.13_0.06_255)]">Ready to get pre-approved?</p>
                <p className="text-[oklch(0.13_0.06_255)]/70 text-xs font-sans mt-0.5">Faviola connects you with trusted Idaho lenders.</p>
              </div>
              <a href="tel:2088307419"
                className="flex-shrink-0 bg-[oklch(0.13_0.06_255)] text-white px-6 py-3 text-xs uppercase tracking-widest font-sans font-semibold hover:bg-[oklch(0.20_0.07_255)] transition-colors whitespace-nowrap">
                Call Faviola
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
