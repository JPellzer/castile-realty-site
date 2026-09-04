/* ============================================================
   CASTILE REALTY REALTY GROUP — About Page
   Faviola Zurita Pellerin — Full Bio (EN + ES)
   ============================================================ */
import { useState } from "react";
import { Link } from "wouter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FAVIOLA_IMG = "/manus-storage/faviola-photo-new_1e1d194c.webp";
const INTERIOR_IMG = "/manus-storage/luxury-home-interior_d0df2c6e.jpg";

const credentials = [
  { label: "Idaho RE License", value: "#SP55315" },
  { label: "Brokerage", value: "Sweet Group Realty, Meridian, ID" },
  { label: "General Contractor", value: "Idaho #RCE-49729" },
  { label: "Notary", value: "Idaho Commission #20182264" },
  { label: "Specialization", value: "Relocation Specialist · Buyer & Seller Representation" },
  { label: "Languages", value: "English · Spanish (Bilingual)" },
  { label: "Education", value: "B.A. Business Finance — Cal State San Bernardino" },
  { label: "Background", value: "28+ Years in Real Estate, Construction & Finance" },
  { label: "Service Area", value: "Boise · Meridian · Eagle · Nampa · McCall · Treasure Valley" },
  { label: "Idaho Phone", value: "(208) 830-7419" },
  { label: "California Phone", value: "(909) 240-5389" },
];

const values = [
  { icon: "🤝", title: "Integrity First", desc: "Every client deserves honesty, even when it is not what they want to hear. Faviola will always tell you the truth about a property, a neighborhood, or a price." },
  { icon: "🌎", title: "Bilingual Service", desc: "Fluent in English and Spanish, Faviola serves the full spectrum of Treasure Valley buyers and sellers — including Idaho's growing Latino community." },
  { icon: "📍", title: "Local Expertise", desc: "Having lived in both Southern California and the Treasure Valley, Faviola understands both markets intimately — a rare advantage for relocating clients." },
  { icon: "💼", title: "Business Background", desc: "With 28+ years in construction and finance, Faviola understands contracts, valuations, and negotiations at a level most agents simply cannot match." },
];

export default function About() {
  const [lang, setLang] = useState<"en" | "es">("en");

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section className="relative pt-20">
        <div className="relative h-64 overflow-hidden">
          <img src={INTERIOR_IMG} alt="Idaho luxury home" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[oklch(0.13_0.06_255/0.35)] flex items-center">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
              <p className="section-label mb-3">Castile Realty Group</p>
              <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white">Meet Favi</h1>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN BIO SECTION ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Photo + Credentials */}
            <div className="lg:col-span-1">
              <div className="relative mb-8">
                <img
                  src={FAVIOLA_IMG}
                  alt="Faviola Zurita Pellerin"
                  className="w-full h-[600px] object-cover" style={{objectPosition: 'center 10%'}}
                />

              </div>
              <div className="bg-[oklch(0.97_0.005_255)] p-6">
                <h3 className="font-serif text-lg font-semibold text-[oklch(0.18_0.07_255)] mb-5 border-b border-gray-200 pb-3">Credentials & Contact</h3>
                <div className="space-y-3">
                  {credentials.map((c) => (
                    <div key={c.label}>
                      <p className="text-gray-400 text-xs uppercase tracking-widest font-sans">{c.label}</p>
                      <p className="text-[oklch(0.18_0.07_255)] text-sm font-sans font-medium mt-0.5">{c.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-3">
                  <a href="tel:2088307419" className="btn-gold w-full block text-center rounded-none py-3 text-xs tracking-widest">
                    Call (208) 830-7419
                  </a>
                  <Link href="/contact" className="btn-outline-gold w-full block text-center rounded-none py-3 text-xs tracking-widest">
                    Send a Message
                  </Link>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2">
              {/* Language Toggle */}
              <div className="flex gap-2 mb-8">
                <button
                  onClick={() => setLang("en")}
                  className={`px-6 py-2 text-xs uppercase tracking-widest font-sans font-semibold transition-all ${lang === "en" ? "bg-[oklch(0.18_0.07_255)] text-white" : "border border-gray-200 text-gray-500 hover:border-[oklch(0.72_0.12_75)]"}`}
                >
                  English
                </button>
                <button
                  onClick={() => setLang("es")}
                  className={`px-6 py-2 text-xs uppercase tracking-widest font-sans font-semibold transition-all ${lang === "es" ? "bg-[oklch(0.18_0.07_255)] text-white" : "border border-gray-200 text-gray-500 hover:border-[oklch(0.72_0.12_75)]"}`}
                >
                  Español
                </button>
              </div>

              {lang === "en" ? (
                <div>
                  <p className="section-label mb-3">About Faviola</p>
                  <h2 className="font-serif text-4xl font-bold text-[oklch(0.18_0.07_255)] leading-tight mb-6">
                    Faviola Zurita Pellerin<br />
                    <span className="font-normal italic text-2xl text-gray-500">REALTOR® · Relocation Specialist</span>
                  </h2>
                  <div className="space-y-5 text-gray-600 font-sans leading-relaxed">
                    <p>
                      Faviola Zurita Pellerin is a licensed Idaho REALTOR®, Idaho General Contractor, and Notary Public based in Boise, Idaho. She brings 28+ years of business leadership, construction expertise, and financial acumen to every real estate transaction she handles.
                    </p>
                    <p>
                      Faviola grew up in the San Gabriel Valley of Southern California and made the move to Idaho herself — which means she is not just selling you on a dream, she is living it. She understands the California experience intimately: the traffic, the rising cost of living, the feeling of working hard and still not getting ahead. And she knows exactly what Idaho offers in return.
                    </p>
                    <p>
                      As Chief Operations Officer of Pell Solar Inc. and Zurita Construction Inc., Faviola has overseen $2.8M+ in annual contracts, managed teams of up to 30 employees, and handled every aspect of permitting, compliance, and contract administration across Idaho and California. This background gives her a contractual expertise and market knowledge that most agents simply cannot match.
                    </p>
                    <p>
                      Faviola holds a B.A. in Business Finance from California State University, San Bernardino. She is also a licensed Idaho General Contractor (RCE-49729) and Idaho Notary — credentials that allow her to spot construction issues, understand valuations, and handle documentation with precision that protects her clients at every step.
                    </p>
                    <p>
                      Fluent in both English and Spanish, Faviola is particularly passionate about helping California families — especially those from the Latino community — navigate the relocation process with confidence. Her primary service area is the Treasure Valley, where she lives and works every day.
                    </p>
                    <blockquote className="border-l-4 border-[oklch(0.72_0.12_75)] pl-6 py-2 my-6">
                      <p className="font-serif text-xl italic text-[oklch(0.18_0.07_255)]">"I made the move from California to Idaho, and it changed my family's life. I want to help your family experience that same transformation."</p>
                      <cite className="text-gray-400 text-xs uppercase tracking-widest font-sans mt-2 block">— Faviola Zurita Pellerin, REALTOR®</cite>
                    </blockquote>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="section-label mb-3">Sobre Faviola</p>
                  <h2 className="font-serif text-4xl font-bold text-[oklch(0.18_0.07_255)] leading-tight mb-6">
                    Faviola Zurita Pellerin<br />
                    <span className="font-normal italic text-2xl text-gray-500">REALTOR® · Especialista en Reubicación</span>
                  </h2>
                  <div className="space-y-5 text-gray-600 font-sans leading-relaxed">
                    <p>
                      Faviola Zurita Pellerin es una REALTOR® licenciada en Idaho y Especialista en Reubicación con Sweet Group Realty en Meridian, Idaho. Aporta una combinación única de experiencia personal, conocimiento profesional y empatía genuina a cada cliente que sirve.
                    </p>
                    <p>
                      Faviola creció en el Valle de San Gabriel del sur de California — las mismas comunidades que muchos de sus clientes ahora están dejando atrás. Entiende la experiencia californiana íntimamente: el tráfico, el costo de vida, la sensación de trabajar duro y aún así no poder avanzar. Y ella misma hizo el traslado a Idaho, lo que significa que no solo te está vendiendo un sueño — ella lo está viviendo.
                    </p>
                    <p>
                      Antes de entrar en bienes raíces, Faviola pasó más de 22 años en las industrias de construcción y finanzas. Este historial le da un nivel de conocimiento del mercado y experiencia contractual que la mayoría de los agentes simplemente no pueden igualar. Entiende cómo se construyen las casas, cómo se valoran y cómo negociar eficazmente en nombre de sus clientes.
                    </p>
                    <p>
                      Faviola tiene un título del Jack H. Brown College of Business en la Universidad Estatal de California, San Bernardino, donde estudió administración de empresas con enfoque en finanzas. Esta base académica, combinada con sus décadas de experiencia en el mundo real, la convierte en una de las agentes más completas del Valle del Tesoro.
                    </p>
                    <p>
                      Bilingüe en inglés y español, Faviola sirve a toda la gama de compradores y vendedores del Valle del Tesoro. Le apasiona especialmente ayudar a las familias de California — especialmente a las de la comunidad latina — a navegar el proceso de reubicación con confianza y claridad.
                    </p>
                    <blockquote className="border-l-4 border-[oklch(0.72_0.12_75)] pl-6 py-2 my-6">
                      <p className="font-serif text-xl italic text-[oklch(0.18_0.07_255)]">"Hice el traslado de California a Idaho, y cambió la vida de mi familia. Quiero ayudar a tu familia a experimentar esa misma transformación."</p>
                      <cite className="text-gray-400 text-xs uppercase tracking-widest font-sans mt-2 block">— Faviola Zurita Pellerin, REALTOR®</cite>
                    </blockquote>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── VIDEO INTRODUCTION ── */}
      <section className="py-20 bg-[oklch(0.13_0.06_255)]" id="video-intro">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Copy */}
            <div>
              <p className="section-label mb-4">Meet Favi in Person</p>
              <h2 className="font-serif text-4xl font-bold text-white mb-6 leading-tight">
                Hear It Straight<br />
                <span style={{ color: "oklch(0.72 0.12 75)" }}>From Faviola</span>
              </h2>
              <div className="gold-divider mb-8" />
              <p className="text-white/70 font-sans leading-relaxed mb-6 text-base">
                Before you call, before you email — watch Faviola's personal introduction. In under two minutes, you will understand exactly who she is, why she moved from California to Idaho, and how she can help your family make the same move.
              </p>
              <div className="space-y-4">
                {[
                  "Born and raised in Southern California — she understands where you're coming from",
                  "Personally made the California-to-Idaho move — she knows every step of the process",
                  "Bilingual in English and Spanish — no language barrier, ever",
                  "Licensed Idaho REALTOR® #SP55315 with 28+ years in business and construction",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center" style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.2)" }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 3" stroke="oklch(0.72 0.12 75)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-white/70 font-sans text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Video Embed */}
            <div>
              {/* ═══════════════════════════════════════════════════════
                  VIDEO INTEGRATION POINT
                  
                  When Faviola records her introduction video:
                  1. Upload to YouTube (set to "Unlisted" or "Public")
                  2. Copy the video ID from the URL (e.g., youtube.com/watch?v=VIDEO_ID_HERE)
                  3. Replace VIDEO_ID_HERE below with the actual ID
                  4. Remove the placeholder overlay div
                  
                  The embed URL format is:
                  https://www.youtube.com/embed/VIDEO_ID_HERE
                  ═══════════════════════════════════════════════════════ */}
              <div className="relative" style={{ paddingBottom: "56.25%" }}>
                {/* PLACEHOLDER — remove this div when video is ready */}
                <div className="absolute inset-0 bg-[oklch(0.18_0.07_255)] border border-white/10 flex flex-col items-center justify-center">
                  {/* Play button */}
                  <div className="w-20 h-20 rounded-full border-2 flex items-center justify-center mb-6 cursor-pointer hover:scale-105 transition-transform" style={{ borderColor: "oklch(0.72 0.12 75)", backgroundColor: "oklch(0.72 0.12 75 / 0.1)" }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="oklch(0.72 0.12 75)">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  </div>
                  <p className="font-serif text-xl font-bold text-white mb-2">Video Coming Soon</p>
                  <p className="text-white/40 font-sans text-sm text-center max-w-xs px-4">
                    Faviola's personal introduction video will appear here. Record on your iPhone and send us the YouTube link.
                  </p>
                  <div className="mt-6 border-t border-white/10 pt-6 w-full px-8 text-center">
                    <p className="text-white/30 text-xs font-sans uppercase tracking-widest">In the meantime</p>
                    <a href="tel:2088307419" className="mt-3 inline-block btn-gold rounded-none px-8 py-3 text-xs tracking-widest">
                      Call Faviola Directly
                    </a>
                  </div>
                </div>
                {/* REAL VIDEO — uncomment and replace VIDEO_ID_HERE when ready:
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/VIDEO_ID_HERE?rel=0&modestbranding=1"
                  title="Meet Faviola Zurita Pellerin — Castile Realty Group"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-20 bg-[oklch(0.97_0.005_255)]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">What We Stand For</p>
            <h2 className="font-serif text-4xl font-bold text-[oklch(0.18_0.07_255)]">Our Core Values</h2>
            <div className="gold-divider mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8 card-hover">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-serif text-xl font-semibold text-[oklch(0.18_0.07_255)] mb-3">{v.title}</h3>
                <p className="text-gray-500 font-sans text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[oklch(0.18_0.07_255)]">
        <div className="max-w-3xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Ready to Work With Faviola?
          </h2>
          <p className="text-white/70 font-sans mb-8">Whether you are buying, selling, or just starting to explore a move to Idaho, Faviola is ready to help. Reach out today for a free, no-pressure consultation.</p>
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
