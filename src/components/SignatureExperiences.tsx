"use client";
import { useEffect, useRef } from "react";

const experiences = [
  {
    title: "Royal Bengali Wedding",
    subtitle: "Traditional grandeur with elevated hospitality",
    desc: "Experience the full splendour of a Bengali wedding feast — from the auspicious Shubho Drishti to the grand reception spread. Every dish is crafted with reverence for tradition and presented with modern luxury.",
    image: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?q=80&w=2787&auto=format&fit=crop",
    tag: "Wedding",
  },
  {
    title: "Executive Corporate Evenings",
    subtitle: "Elegant dining for premium business gatherings",
    desc: "Impress clients and colleagues with a seamlessly orchestrated dining experience. Clean, efficient, and sophisticated — our corporate setups reflect the professionalism your brand demands.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2940&auto=format&fit=crop",
    tag: "Corporate",
  },
  {
    title: "Intimate Family Celebrations",
    subtitle: "Warm, seamless hosting for meaningful moments",
    desc: "Whether it's an anniversary, a puja, or a family reunion — we create the warmth of home with the refinement of a luxury restaurant. Intimate gatherings deserve the same care as grand ones.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2940&auto=format&fit=crop",
    tag: "Family",
  },
  {
    title: "Grand Reception Experiences",
    subtitle: "Luxury buffet presentation and premium service",
    desc: "Live counters, opulent spreads, and attentive service — your reception deserves nothing less. We curate a multi-cuisine feast that guests will talk about long after the evening ends.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2940&auto=format&fit=crop",
    tag: "Reception",
  },
];

export default function SignatureExperiences() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".exp-card");
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = "1";
                (card as HTMLElement).style.transform = "translateY(0)";
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experiences" className="section-pad" style={{ background: "var(--black)" }} ref={ref}>
      <div style={{ textAlign: "center", padding: "0 24px", marginBottom: 64 }}>
        <span className="section-label">Signature Experiences</span>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, color: "var(--warm-white)", lineHeight: 1.25 }}>
          Imagine Your{" "}
          <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Perfect</em> Celebration
        </h2>
        <p style={{ marginTop: 12, color: "var(--text-muted)", fontFamily: "'Outfit',sans-serif", fontSize: "0.95rem", maxWidth: 520, margin: "12px auto 0" }}>
          Each experience is crafted to evoke emotion, warmth, and lasting memory.
        </p>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: 32 }}>
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="exp-card luxury-card"
            style={{
              display: "grid",
              gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
              overflow: "hidden",
              opacity: 0,
              transform: "translateY(40px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
              minHeight: 320,
            }}
          >
            {/* Image */}
            <div
              style={{
                backgroundImage: `url('${exp.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: 280,
                order: i % 2 === 0 ? 0 : 1,
                position: "relative",
              }}
            >
              <div style={{ position: "absolute", inset: 0, background: "rgba(13,13,13,0.25)" }} />
              <div
                style={{
                  position: "absolute",
                  top: 20,
                  left: 20,
                  background: "var(--maroon)",
                  color: "var(--warm-white)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  padding: "4px 12px",
                  fontFamily: "'Outfit',sans-serif",
                  fontWeight: 600,
                }}
              >
                {exp.tag}
              </div>
            </div>

            {/* Content */}
            <div
              style={{
                padding: "48px 40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                order: i % 2 === 0 ? 1 : 0,
              }}
            >
              <div style={{ width: 32, height: 1, background: "var(--gold)", marginBottom: 24 }} />
              <h3
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "var(--warm-white)",
                  lineHeight: 1.3,
                  marginBottom: 8,
                }}
              >
                {exp.title}
              </h3>
              <p style={{ color: "var(--gold)", fontFamily: "'Outfit',sans-serif", fontSize: "0.85rem", letterSpacing: "0.05em", marginBottom: 20, opacity: 0.9 }}>
                {exp.subtitle}
              </p>
              <p style={{ color: "var(--text-muted)", fontFamily: "'Outfit',sans-serif", fontSize: "0.9rem", lineHeight: 1.75, marginBottom: 32 }}>
                {exp.desc}
              </p>
              <a
                href="#quote"
                style={{
                  color: "var(--gold)",
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "gap 0.3s ease",
                }}
                className="exp-link"
              >
                Plan This Experience →
              </a>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .exp-card { grid-template-columns: 1fr !important; }
          .exp-card > div { order: unset !important; }
        }
        .exp-link:hover { gap: 14px !important; color: var(--gold-light) !important; }
      `}</style>
    </section>
  );
}
