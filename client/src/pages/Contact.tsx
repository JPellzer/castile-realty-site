/* ============================================================
   CASTILE REALTY REALTY GROUP — Contact Page
   ============================================================ */
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section className="pt-20 bg-[oklch(0.18_0.07_255)]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
          <p className="section-label mb-3">We're Here to Help</p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white/60 font-sans text-lg max-w-xl">
            Whether you are ready to start your search or just have a question, Faviola is here. Reach out by phone, email, or the form below.
          </p>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Info */}
            <div>
              <p className="section-label mb-4">Get in Touch</p>
              <h2 className="font-serif text-4xl font-bold text-[oklch(0.18_0.07_255)] mb-8">
                Faviola Zurita Pellerin<br />
                <span className="font-normal italic text-2xl text-gray-400">REALTOR® · Relocation Specialist</span>
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-[oklch(0.97_0.005_255)] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[oklch(0.72_0.12_75)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest font-sans mb-1">Idaho Office</p>
                    <a href="tel:2088307419" className="font-sans font-semibold text-[oklch(0.18_0.07_255)] text-lg hover:text-[oklch(0.72_0.12_75)] transition-colors">(208) 830-7419</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-[oklch(0.97_0.005_255)] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[oklch(0.72_0.12_75)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest font-sans mb-1">California (Toll-Free)</p>
                    <a href="tel:9092405389" className="font-sans font-semibold text-[oklch(0.18_0.07_255)] text-lg hover:text-[oklch(0.72_0.12_75)] transition-colors">(909) 240-5389</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-[oklch(0.97_0.005_255)] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[oklch(0.72_0.12_75)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest font-sans mb-1">Email</p>
                    <a href="mailto:favi@castilerealtygroup.com" className="font-sans font-semibold text-[oklch(0.18_0.07_255)] text-lg hover:text-[oklch(0.72_0.12_75)] transition-colors">favi@castilerealtygroup.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-[oklch(0.97_0.005_255)] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[oklch(0.72_0.12_75)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest font-sans mb-1">Office Address</p>
                    <p className="font-sans font-semibold text-[oklch(0.18_0.07_255)]">3363 E Presidential Dr, Suite 103<br />Meridian, ID 83642</p>
                    <p className="text-gray-400 text-sm font-sans mt-1">Sweet Group Realty</p>
                  </div>
                </div>
              </div>

              <div className="bg-[oklch(0.97_0.005_255)] p-6">
                <p className="font-serif text-lg font-semibold text-[oklch(0.18_0.07_255)] mb-2">Hablamos Español</p>
                <p className="text-gray-500 font-sans text-sm">Faviola is fully bilingual and serves English and Spanish-speaking clients with equal care and professionalism.</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {submitted ? (
                <div className="bg-[oklch(0.97_0.005_255)] p-12 text-center h-full flex flex-col items-center justify-center">
                  <div className="text-5xl mb-6">✅</div>
                  <h3 className="font-serif text-3xl font-bold text-[oklch(0.18_0.07_255)] mb-4">Message Received!</h3>
                  <p className="text-gray-600 font-sans leading-relaxed">
                    Thank you for reaching out. Faviola will personally respond within 24 hours. If you need immediate assistance, please call <a href="tel:2088307419" className="text-[oklch(0.72_0.12_75)] font-semibold">(208) 830-7419</a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 font-sans mb-2">Full Name *</label>
                    <input type="text" required className="w-full border border-gray-200 px-5 py-4 font-sans text-sm text-gray-700 focus:outline-none focus:border-[oklch(0.72_0.12_75)]" placeholder="Your full name" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-400 font-sans mb-2">Email *</label>
                      <input type="email" required className="w-full border border-gray-200 px-5 py-4 font-sans text-sm text-gray-700 focus:outline-none focus:border-[oklch(0.72_0.12_75)]" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-400 font-sans mb-2">Phone</label>
                      <input type="tel" className="w-full border border-gray-200 px-5 py-4 font-sans text-sm text-gray-700 focus:outline-none focus:border-[oklch(0.72_0.12_75)]" placeholder="(555) 000-0000" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 font-sans mb-2">I Am Interested In</label>
                    <select className="w-full border border-gray-200 px-5 py-4 font-sans text-sm text-gray-500 focus:outline-none focus:border-[oklch(0.72_0.12_75)]">
                      <option>Buying a Home in Idaho</option>
                      <option>Selling My Idaho Home</option>
                      <option>Relocating from California</option>
                      <option>Investment Properties</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 font-sans mb-2">Budget / Price Range</label>
                    <select className="w-full border border-gray-200 px-5 py-4 font-sans text-sm text-gray-500 focus:outline-none focus:border-[oklch(0.72_0.12_75)]">
                      <option>Under $350,000</option>
                      <option>$350,000 – $500,000</option>
                      <option>$500,000 – $700,000</option>
                      <option>$700,000 – $1,000,000</option>
                      <option>$1,000,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 font-sans mb-2">Timeline</label>
                    <select className="w-full border border-gray-200 px-5 py-4 font-sans text-sm text-gray-500 focus:outline-none focus:border-[oklch(0.72_0.12_75)]">
                      <option>Ready Now</option>
                      <option>Within 3 Months</option>
                      <option>3–6 Months</option>
                      <option>6–12 Months</option>
                      <option>Just Exploring</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 font-sans mb-2">Message</label>
                    <textarea rows={4} className="w-full border border-gray-200 px-5 py-4 font-sans text-sm text-gray-700 focus:outline-none focus:border-[oklch(0.72_0.12_75)] resize-none" placeholder="Tell us about what you're looking for..." />
                  </div>
                  <button type="submit" className="btn-gold w-full rounded-none py-4 text-sm tracking-widest">
                    Send Message
                  </button>
                  <p className="text-gray-400 text-xs font-sans text-center">We respond within 24 hours. Your information is never shared.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
