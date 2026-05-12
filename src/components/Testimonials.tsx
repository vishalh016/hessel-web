"use client";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Priya & Arjun Chatterjee",
    event: "Wedding Reception · 350 Guests",
    quote: "Halder's Hessel turned our reception into a truly cinematic experience. The Ilish Maach was exquisite and the live counters had guests raving for weeks. Absolutely flawless execution.",
    initials: "PC",
  },
  {
    name: "Debashish Roy",
    event: "Corporate Annual Dinner · 180 Guests",
    quote: "Our clients were genuinely impressed. The setup was pristine, the service impeccable, and the food outstanding. It elevated our brand image considerably. Will book again without hesitation.",
    initials: "DR",
  },
  {
    name: "Mitali Sen",
    event: "Birthday Celebration · 80 Guests",
    quote: "I wanted something intimate yet luxurious for my mother's 60th birthday. Halder's Hessel delivered beyond my expectations. Every detail was thoughtfully curated. Truly hassle-free.",
    initials: "MS",
  },
  {
    name: "Ranjit & Kavita Bose",
    event: "Bengali Traditional Ceremony · 200 Guests",
    quote: "The authenticity of the Bengali menu paired with modern presentation was breathtaking. Guests couldn't stop complimenting the Kosha Mangsho. Halder's Hessel is in a class of its own.",
    initials: "KB",
  },
  {
    name: "Ananya Ghosh",
    event: "Housewarming · 60 Guests",
    quote: "From planning to execution, the team was professional, warm, and precise. They understood my vision instantly and delivered a premium experience within my budget. Highly recommended.",
    initials: "AG",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".test-card");
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = "1";
                (card as HTMLElement).style.transform = "translateY(0)";
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="section-pad" style={{ background: "var(--bg-champagne)" }} ref={ref}>
      <div style={{ textAlign: "center", padding: "0 24px", marginBottom: 64 }}>
        <span className="section-label" style={{ color: "var(--gold-dark)" }}>Client Stories</span>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, color: "var(--text-dark)", lineHeight: 1.25 }}>
          Celebrations That{" "}
          <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Speak</em> For Themselves
        </h2>
        <div className="gold-divider" style={{ marginTop: 24 }} />
      </div>

      {/* Stats banner */}
      <div style={{ display: "flex", justifyContent: "center", gap: 0, maxWidth: 700, margin: "0 auto 64px", flexWrap: "wrap", border: "1px solid rgba(201,161,74,0.25)", borderRadius: "2px", overflow: "hidden" }}>
        {[
          { num: "100+", label: "Events Executed" },
          { num: "98%", label: "Customer Satisfaction" },
          { num: "2,000+", label: "Guests Served" },
          { num: "5★", label: "Average Rating" },
        ].map((stat, i) => (
          <div key={i} style={{ flex: "1 1 140px", padding: "24px 16px", textAlign: "center", borderRight: i < 3 ? "1px solid rgba(201,161,74,0.18)" : "none", background: "rgba(201,161,74,0.06)" }}>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.8rem", fontWeight: 700, color: "var(--gold-dark)" }}>{stat.num}</div>
            <div style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-dark-muted)", marginTop: 6, fontFamily: "'Outfit',sans-serif" }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Testimonial grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20, maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {testimonials.map((t, i) => (
          <div key={i} className="luxury-card-light test-card" style={{ padding: "36px 28px", opacity: 0, transform: "translateY(32px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
            {/* Quote mark */}
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "4rem", color: "var(--gold-dark)", opacity: 0.15, lineHeight: 1, marginBottom: -12 }}>&quot;</div>

            <p style={{ color: "var(--text-dark)", fontFamily: "'Outfit',sans-serif", fontSize: "0.9rem", lineHeight: 1.8, opacity: 0.8, marginBottom: 28, fontStyle: "italic" }}>
              {t.quote}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 14, borderTop: "1px solid rgba(212,175,55,0.12)", paddingTop: 20 }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--maroon)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display',serif", fontSize: "0.9rem", color: "var(--warm-white)", flexShrink: 0 }}>
                {t.initials}
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.95rem", color: "var(--text-dark)", fontWeight: 600 }}>{t.name}</div>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: "0.75rem", color: "var(--gold-dark)", opacity: 0.9, marginTop: 2, letterSpacing: "0.04em" }}>{t.event}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
