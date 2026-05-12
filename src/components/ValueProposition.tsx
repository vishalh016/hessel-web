"use client";
import { useEffect, useRef } from "react";
import { ShieldCheck, Sparkles, Star } from "lucide-react";

const cards = [
  {
    icon: <ShieldCheck size={26} strokeWidth={1.5} />,
    title: "Hassle-Free Excellence",
    body: "We handle every detail. You enjoy your celebration.",
    accent: "Every arrangement meticulously managed so you stay present for what matters most.",
  },
  {
    icon: <Sparkles size={26} strokeWidth={1.5} />,
    title: "Luxury Tailored To You",
    body: "Customized hospitality for weddings, corporate events, and celebrations.",
    accent: "From intimate gatherings to grand receptions — each experience is uniquely crafted.",
  },
  {
    icon: <Star size={26} strokeWidth={1.5} />,
    title: "Real Results, Real Celebrations",
    body: "100+ events executed with premium hospitality standards.",
    accent: "A growing legacy of flawlessly curated moments across Bengal.",
  },
];

export default function ValueProposition() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".vp-card").forEach((card, i) => {
            setTimeout(() => {
              (card as HTMLElement).style.opacity = "1";
              (card as HTMLElement).style.transform = "translateY(0)";
            }, i * 180);
          });
        }
      });
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="value" className="section-pad" ref={ref}
      style={{ background: "var(--bg-ivory)", position: "relative" }}>
      <div className="gold-divider" style={{ marginBottom: 48 }} />

      <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto", padding: "0 24px", marginBottom: 64 }}>
        <span className="section-label" style={{ color: "var(--gold-dark)" }}>Why Choose Us</span>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, color: "var(--text-dark)", lineHeight: 1.25 }}>
          The Standard of{" "}
          <em style={{ color: "var(--maroon)", fontStyle: "italic" }}>Refined</em> Hospitality
        </h2>
        <p style={{ marginTop: 16, color: "var(--text-dark-muted)", fontFamily: "'Outfit',sans-serif", fontSize: "1rem", lineHeight: 1.7 }}>
          Every celebration deserves seamless execution and elevated presence.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24, maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {cards.map((card, i) => (
          <div key={i} className="luxury-card-light vp-card"
            style={{ padding: "40px 36px", borderLeft: "3px solid var(--gold)", opacity: 0, transform: "translateY(32px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
            <div style={{ color: "var(--maroon)", marginBottom: 20, padding: "10px", background: "rgba(90,11,22,0.06)", borderRadius: "2px", display: "inline-block" }}>
              {card.icon}
            </div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", fontWeight: 600, color: "var(--text-dark)", marginBottom: 12, lineHeight: 1.3 }}>{card.title}</h3>
            <p style={{ color: "var(--text-dark)", opacity: 0.8, fontFamily: "'Outfit',sans-serif", fontSize: "0.95rem", lineHeight: 1.65, marginBottom: 16 }}>{card.body}</p>
            <p style={{ color: "var(--text-dark-muted)", fontFamily: "'Outfit',sans-serif", fontSize: "0.85rem", lineHeight: 1.65, fontStyle: "italic", borderTop: "1px solid rgba(201,161,74,0.2)", paddingTop: 16 }}>{card.accent}</p>
          </div>
        ))}
      </div>

      <div className="gold-divider" style={{ marginTop: 64 }} />
    </section>
  );
}
