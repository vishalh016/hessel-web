"use client";
import { useEffect, useRef } from "react";
import { ShieldCheck, Sparkles, Star } from "lucide-react";

const cards = [
  {
    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
    title: "Hassle-Free Excellence",
    body: "We handle every detail. You enjoy your celebration.",
    accent: "Every arrangement meticulously managed so you stay present for what matters most.",
  },
  {
    icon: <Sparkles size={28} strokeWidth={1.5} />,
    title: "Luxury Tailored To Your Event",
    body: "Customized hospitality for weddings, corporate events, and celebrations.",
    accent: "From intimate gatherings to grand receptions — each experience is uniquely crafted.",
  },
  {
    icon: <Star size={28} strokeWidth={1.5} />,
    title: "Real Results, Real Celebrations",
    body: "100+ events executed with premium hospitality standards.",
    accent: "A growing legacy of flawlessly curated moments across Bengal.",
  },
];

export default function ValueProposition() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".vp-card");
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = "1";
                (card as HTMLElement).style.transform = "translateY(0)";
              }, i * 180);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="value"
      className="section-pad"
      ref={sectionRef}
      style={{ background: "var(--black)", position: "relative" }}
    >
      {/* Gold top rule */}
      <div className="gold-divider" style={{ marginBottom: 48 }} />

      <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto", padding: "0 24px", marginBottom: 64 }}>
        <span className="section-label">Why Choose Us</span>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 700,
            color: "var(--warm-white)",
            lineHeight: 1.25,
          }}
        >
          The Standard of{" "}
          <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Refined</em>{" "}
          Hospitality
        </h2>
        <p
          style={{
            marginTop: 16,
            color: "var(--text-muted)",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "1rem",
            lineHeight: 1.7,
          }}
        >
          Every celebration deserves seamless execution and elevated presence. We deliver both.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="luxury-card vp-card"
            style={{
              padding: "40px 36px",
              borderLeft: "3px solid var(--maroon)",
              opacity: 0,
              transform: "translateY(32px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
              cursor: "default",
            }}
          >
            {/* Icon */}
            <div
              style={{
                color: "var(--gold)",
                marginBottom: 20,
                padding: "12px",
                background: "rgba(212,175,55,0.06)",
                borderRadius: "2px",
                display: "inline-block",
              }}
            >
              {card.icon}
            </div>

            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.25rem",
                fontWeight: 600,
                color: "var(--warm-white)",
                marginBottom: 12,
                lineHeight: 1.3,
              }}
            >
              {card.title}
            </h3>

            <p
              style={{
                color: "var(--warm-white)",
                opacity: 0.75,
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.95rem",
                lineHeight: 1.65,
                marginBottom: 16,
              }}
            >
              {card.body}
            </p>

            <p
              style={{
                color: "var(--text-muted)",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.85rem",
                lineHeight: 1.65,
                fontStyle: "italic",
                borderTop: "1px solid rgba(212,175,55,0.12)",
                paddingTop: 16,
              }}
            >
              {card.accent}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom divider */}
      <div className="gold-divider" style={{ marginTop: 64 }} />
    </section>
  );
}
