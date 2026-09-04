// McCall Idaho — Primary Service Area Page
// Design: Deep navy + gold brand palette, mountain/lake lifestyle focus
// Target: Californians comparing McCall to Lake Tahoe/Mammoth, plus locals
// Key pitch: Payette Lake, Brundage Mountain, tight-knit community, value vs CA

import { Link } from "wouter";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MCCALL_HERO = "/manus-storage/payette-lake-summer_5d82f76e.jpg";

const marketStats = [
  { label: "Median Home Price", value: "$781K", note: "vs $1.5M+ at Lake Tahoe" },
  { label: "Days on Market", value: "17", note: "Homes move fast" },
  { label: "Year-over-Year Growth", value: "+2.6%", note: "Steady appreciation" },
  { label: "Price per Sq Ft", value: "$495", note: "Premium lakefront market" },
];

const lifestyleItems = [
  {
    season: "Winter",
    icon: "❄️",
    title: "Ski & Snow",
    image: "/manus-storage/mccall-winter_2248a604.jpg",
    description:
      "Brundage Mountain Resort sits just 8 miles from downtown — uncrowded runs, deep powder, and no lift-line chaos. Plus the world-famous McCall Winter Carnival every January.",
    highlights: ["Brundage Mountain Resort", "McCall Winter Carnival", "Ice fishing on Payette Lake", "Snowshoeing & fat biking"],
  },
  {
    season: "Summer",
    icon: "☀️",
    title: "Lake Life",
    image: "/manus-storage/mccall-summer-new_61bdd7ab.jpg",
    description:
      "Payette Lake is 5,330 acres of crystal-clear mountain water. Boating, paddleboarding, swimming, and waterfront dining — all within walking distance of downtown.",
    highlights: ["Payette Lake boating & swimming", "Kayaking & paddleboarding", "Waterfront restaurants", "Hiking & mountain biking"],
  },
  {
    season: "Fall",
    icon: "🍂",
    title: "Golden Season",
    image: "/manus-storage/mccall-fall-new_57670964.jpg",
    description:
      "The mountains turn gold and the crowds thin out. Fall is the best-kept secret in McCall — perfect weather, stunning foliage, and world-class fishing on the Payette River.",
    highlights: ["Fly fishing on Payette River", "Fall foliage drives", "Hunting season", "Harvest festivals"],
  },
  {
    season: "Spring",
    icon: "🌿",
    title: "Renewal",
    image: "/manus-storage/mccall-spring_28896fe5.jpg",
    description:
      "As snow melts, wildflowers blanket the hillsides. Spring brings whitewater rafting on the North Fork Payette and the return of outdoor dining along the lake.",
    highlights: ["Whitewater rafting", "Wildflower hiking", "Golf courses open", "Farmers markets"],
  },
];

const neighborhoods = [
  {
    name: "Payette Lake Waterfront",
    type: "Luxury Lakefront",
    priceRange: "$800K – $3M+",
    description: "Private docks, panoramic lake views, and custom-built estates. The most coveted addresses in all of Valley County.",
    tags: ["Waterfront", "Private Dock", "Mountain Views"],
  },
  {
    name: "Downtown McCall",
    type: "Walkable Village",
    priceRange: "$500K – $1.2M",
    description: "Walk to restaurants, shops, and the lake. Charming craftsman homes and newer builds in a tight-knit neighborhood setting.",
    tags: ["Walkable", "Community", "Restaurants"],
  },
  {
    name: "Brundage Area",
    type: "Ski-In/Ski-Out",
    priceRange: "$600K – $2M",
    description: "Slope-side cabins and mountain retreats near Brundage Mountain Resort. Perfect for ski season and summer hiking.",
    tags: ["Ski Access", "Mountain Views", "Vacation Rental"],
  },
  {
    name: "Lick Creek / Rural Valley",
    type: "Acreage & Privacy",
    priceRange: "$400K – $1.5M",
    description: "Larger parcels, horse properties, and off-grid retreats. Space and privacy that simply doesn't exist in California at any price.",
    tags: ["Acreage", "Privacy", "Horse Property"],
  },
];

const californiaComparison = [
  { feature: "Lakefront home", california: "$1.5M – $4M (Lake Tahoe)", idaho: "$800K – $2M (Payette Lake)" },
  { feature: "Property taxes", california: "1.1% – 1.3% of value", idaho: "0.6% – 0.8% of value" },
  { feature: "State income tax", california: "Up to 13.3%", idaho: "Up to 5.8%" },
  { feature: "Ski resort access", california: "1–3 hour drive (Tahoe/Mammoth)", idaho: "8 minutes from downtown" },
  { feature: "Crowd level", california: "Heavy year-round", idaho: "Small town, ~3,900 residents" },
  { feature: "Air quality", california: "Wildfire smoke, smog", idaho: "Clean mountain air" },
];

export default function McCall() {
  const [activeTab, setActiveTab] = useState("Winter");

  return (
    <div style={{ background: "#f8f6f1", minHeight: "100vh" }}>
      <Navbar />
      {/* Hero */}
      <section
        style={{
          position: "relative",
          height: "85vh",
          minHeight: "600px",
          backgroundImage: `url(${MCCALL_HERO})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(10,15,40,0.85) 0%, rgba(10,15,40,0.3) 50%, rgba(10,15,40,0.1) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            padding: "0 5% 5%",
            maxWidth: "900px",
          }}
        >
          <p
            style={{
              color: "#C9A84C",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              fontSize: "0.8rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Valley County, Idaho · Primary Service Area
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            McCall, Idaho
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              lineHeight: 1.7,
              marginBottom: "2rem",
              maxWidth: "600px",
            }}
          >
            Mountain living on the shores of Payette Lake. Ski Brundage in the morning,
            boat the lake in the afternoon. This is where Faviola lives — and where she'll
            help you find your place.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact">
              <button
                style={{
                  background: "#C9A84C",
                  color: "#0a0f28",
                  border: "none",
                  padding: "0.9rem 2rem",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                Talk to Faviola
              </button>
            </Link>
            <Link href="/listings">
              <button
                style={{
                  background: "transparent",
                  color: "#ffffff",
                  border: "2px solid rgba(255,255,255,0.6)",
                  padding: "0.9rem 2rem",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                View Listings
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Market Stats Bar */}
      <section style={{ background: "#0a0f28", padding: "2.5rem 5%" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
          }}
        >
          {marketStats.map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2.2rem",
                  fontWeight: 700,
                  color: "#C9A84C",
                  marginBottom: "0.25rem",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  color: "#ffffff",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "0.25rem",
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.75rem",
                }}
              >
                {stat.note}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About McCall */}
      <section style={{ padding: "6rem 5%", background: "#f8f6f1" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <p
              style={{
                color: "#C9A84C",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Why McCall
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#0a0f28",
                lineHeight: 1.2,
                marginBottom: "1.5rem",
              }}
            >
              Idaho's Mountain Lake Town
            </h2>
            <p
              style={{
                color: "#4a5568",
                fontFamily: "'Lato', sans-serif",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              Nestled at 5,020 feet elevation in the Payette National Forest, McCall sits on
              the southern shore of Payette Lake — one of Idaho's most pristine mountain lakes.
              With a population of just under 4,000, it offers the rare combination of resort-town
              amenities and genuine small-town community.
            </p>
            <p
              style={{
                color: "#4a5568",
                fontFamily: "'Lato', sans-serif",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              For Californians leaving Lake Tahoe or Mammoth, McCall feels immediately familiar —
              but with a fraction of the crowds, lower taxes, and homes that actually fit a family's
              budget. Faviola lives here, knows every neighborhood, and can show you exactly why
              this is the place people come to and never leave.
            </p>
            <Link href="/contact">
              <button
                style={{
                  background: "#0a0f28",
                  color: "#C9A84C",
                  border: "none",
                  padding: "0.9rem 2rem",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                Schedule a Local Tour
              </button>
            </Link>
          </div>
          <div style={{ position: "relative", borderRadius: "4px", overflow: "hidden" }}>
            <img
              src="/manus-storage/mccall-aerial-town_40e1a8b6.jpg"
              alt="Aerial view of McCall Idaho and Payette Lake"
              style={{ width: "100%", height: "480px", objectFit: "cover", display: "block" }}
            />
            {/* Dark gradient overlay */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,15,40,0.85) 0%, rgba(10,15,40,0.3) 50%, transparent 100%)" }} />
            {/* Stats overlaid on image */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "2rem",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1.5rem",
              }}
            >
              {[
                { label: "Elevation", value: "5,020 ft" },
                { label: "Payette Lake", value: "5,330 acres" },
                { label: "Brundage Mtn", value: "8 mi away" },
                { label: "Population", value: "~3,900" },
                { label: "Avg Summer High", value: "82°F" },
                { label: "Annual Snowfall", value: "~200 in" },
              ].map((item) => (
                <div key={item.label}>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: "#C9A84C",
                      lineHeight: 1.1,
                    }}
                  >
                    {item.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      color: "rgba(255,255,255,1)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginTop: "0.2rem",
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Four Seasons Lifestyle */}
      <section style={{ padding: "6rem 5%", background: "#0a0f28" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p
              style={{
                color: "#C9A84C",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Life in McCall
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.2,
              }}
            >
              Four Seasons of Adventure
            </h2>
          </div>

          {/* Season Tabs */}
          <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginBottom: "3rem", flexWrap: "wrap" }}>
            {lifestyleItems.map((item) => (
              <button
                key={item.season}
                onClick={() => setActiveTab(item.season)}
                style={{
                  padding: "0.6rem 1.5rem",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  border: activeTab === item.season ? "none" : "1px solid rgba(255,255,255,0.2)",
                  background: activeTab === item.season ? "#C9A84C" : "transparent",
                  color: activeTab === item.season ? "#0a0f28" : "rgba(255,255,255,0.7)",
                  transition: "all 0.2s ease",
                }}
              >
                {item.icon} {item.season}
              </button>
            ))}
          </div>

          {lifestyleItems
            .filter((item) => item.season === activeTab)
            .map((item) => (
              <div
                key={item.season}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "4rem",
                  alignItems: "center",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: "#C9A84C",
                      marginBottom: "1rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.8)",
                      fontFamily: "'Lato', sans-serif",
                      fontSize: "1.05rem",
                      lineHeight: 1.8,
                      marginBottom: "2rem",
                    }}
                  >
                    {item.description}
                  </p>
                  <Link href="/contact">
                    <button
                      style={{
                        background: "#C9A84C",
                        color: "#0a0f28",
                        border: "none",
                        padding: "0.8rem 1.8rem",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.8rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        cursor: "pointer",
                      }}
                    >
                      Ask Faviola About Living Here
                    </button>
                  </Link>
                </div>
                <div>
                  <img
                    src={item.image}
                    alt={`McCall Idaho ${item.season}`}
                    style={{
                      width: "100%",
                      height: "320px",
                      objectFit: "cover",
                      borderRadius: "4px",
                      marginBottom: "1rem",
                      display: "block",
                    }}
                  />
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                    {item.highlights.map((h) => (
                      <div
                        key={h}
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(201,168,76,0.3)",
                          padding: "0.8rem 1rem",
                          fontFamily: "'Lato', sans-serif",
                          color: "rgba(255,255,255,0.85)",
                          fontSize: "0.85rem",
                          lineHeight: 1.5,
                        }}
                      >
                        <span style={{ color: "#C9A84C", marginRight: "0.5rem" }}>✓</span>
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Neighborhoods */}
      <section style={{ padding: "6rem 5%", background: "#f8f6f1" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem" }}>
            <p
              style={{
                color: "#C9A84C",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Where to Live
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#0a0f28",
                lineHeight: 1.2,
              }}
            >
              McCall Neighborhoods
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {neighborhoods.map((n) => (
              <div
                key={n.name}
                style={{
                  background: "#ffffff",
                  padding: "2rem",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                  borderTop: "4px solid #C9A84C",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: "#C9A84C",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                  }}
                >
                  {n.type}
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#0a0f28",
                    marginBottom: "0.5rem",
                  }}
                >
                  {n.name}
                </h3>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#C9A84C",
                    marginBottom: "1rem",
                  }}
                >
                  {n.priceRange}
                </div>
                <p
                  style={{
                    color: "#4a5568",
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                  }}
                >
                  {n.description}
                </p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {n.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: "#f0ece0",
                        color: "#0a0f28",
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "0.65rem",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        padding: "0.3rem 0.7rem",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* California vs McCall Comparison */}
      <section style={{ padding: "6rem 5%", background: "#0a0f28" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p
              style={{
                color: "#C9A84C",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              The Numbers Don't Lie
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.2,
              }}
            >
              McCall vs. California Mountain Towns
            </h2>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "1rem 1.5rem",
                      textAlign: "left",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.5)",
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    Feature
                  </th>
                  <th
                    style={{
                      padding: "1rem 1.5rem",
                      textAlign: "center",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.5)",
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    California
                  </th>
                  <th
                    style={{
                      padding: "1rem 1.5rem",
                      textAlign: "center",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#C9A84C",
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    McCall, Idaho ✓
                  </th>
                </tr>
              </thead>
              <tbody>
                {californiaComparison.map((row, i) => (
                  <tr key={row.feature} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "transparent" }}>
                    <td
                      style={{
                        padding: "1rem 1.5rem",
                        fontFamily: "'Lato', sans-serif",
                        fontSize: "0.9rem",
                        color: "rgba(255,255,255,0.7)",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      {row.feature}
                    </td>
                    <td
                      style={{
                        padding: "1rem 1.5rem",
                        textAlign: "center",
                        fontFamily: "'Lato', sans-serif",
                        fontSize: "0.9rem",
                        color: "rgba(255,100,100,0.8)",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      {row.california}
                    </td>
                    <td
                      style={{
                        padding: "1rem 1.5rem",
                        textAlign: "center",
                        fontFamily: "'Lato', sans-serif",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "#C9A84C",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      {row.idaho}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA — Talk to Faviola */}
      <section
        style={{
          padding: "6rem 5%",
          background: "#f8f6f1",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p
            style={{
              color: "#C9A84C",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Local Expert · McCall Resident
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#0a0f28",
              lineHeight: 1.2,
              marginBottom: "1.5rem",
            }}
          >
            Faviola Lives Here.<br />She Knows Every Street.
          </h2>
          <p
            style={{
              color: "#4a5568",
              fontFamily: "'Lato', sans-serif",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
            }}
          >
            When you work with Faviola in McCall, you're not working with an agent who
            looked it up on Zillow. She walks these streets, knows the neighbors, and
            understands what makes each neighborhood different. Bilingual in English and
            Spanish — ready to help you make the move.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact">
              <button
                style={{
                  background: "#C9A84C",
                  color: "#0a0f28",
                  border: "none",
                  padding: "1rem 2.5rem",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                Contact Faviola
              </button>
            </Link>
            <Link href="/listings">
              <button
                style={{
                  background: "transparent",
                  color: "#0a0f28",
                  border: "2px solid #0a0f28",
                  padding: "1rem 2.5rem",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                Browse McCall Listings
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
