"use client";
import { useEffect, useRef } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const y = window.scrollY;
        bgRef.current.style.transform = `translateY(${y * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        height: "100vh",
        minHeight: 640,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Parallax Background */}
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          inset: "-20%",
          backgroundImage: `url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2798&auto=format&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          willChange: "transform",
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(13,13,13,0.45) 0%, rgba(13,13,13,0.6) 50%, rgba(13,13,13,0.92) 100%)",
        }}
      />

      {/* Gold vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(13,13,13,0.7) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: 900,
          animation: "heroFadeIn 1.2s ease forwards",
        }}
      >
        {/* Pre-label */}
        <span className="section-label" style={{ marginBottom: 24, letterSpacing: "0.35em" }}>
          Halder&apos;s Hessel · Est. Luxury Catering
        </span>

        {/* Gold top rule */}
        <div
          style={{
            width: 40,
            height: 1,
            background: "var(--gold)",
            margin: "0 auto 32px",
            opacity: 0.8,
          }}
        />

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.4rem, 6vw, 5rem)",
            fontWeight: 700,
            lineHeight: 1.12,
            color: "var(--warm-white)",
            marginBottom: 28,
            letterSpacing: "-0.01em",
          }}
        >
          Curating Luxury Dining
          <br />
          <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
            Experiences
          </em>{" "}
          For Every
          <br />
          Celebration
        </h1>

        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "var(--warm-white)",
            opacity: 0.75,
            letterSpacing: "0.05em",
            marginBottom: 48,
            fontWeight: 300,
          }}
        >
          Make Your Events Hassle-Free With Us
        </p>

        {/* CTA Row */}
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a href="#quote" className="btn-maroon" style={{ fontSize: "0.85rem" }}>
            Plan Your Event
          </a>
          <a href="#quote" className="btn-gold-outline" style={{ fontSize: "0.85rem" }}>
            Get Instant Quote
          </a>
        </div>

        {/* Trust badges */}
        <div
          style={{
            display: "flex",
            gap: 32,
            justifyContent: "center",
            marginTop: 56,
            flexWrap: "wrap",
          }}
        >
          {[
            { num: "100+", label: "Events Curated" },
            { num: "98%", label: "Satisfaction Rate" },
            { num: "2K+", label: "Guests Served" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: "var(--gold)",
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--warm-white)",
                  opacity: 0.6,
                  marginTop: 4,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          animation: "bounce 2s infinite",
          opacity: 0.6,
        }}
      >
        <ChevronDown size={24} color="var(--gold)" />
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919999999999?text=Hi%20I%20want%20to%20plan%20an%20event"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: 32,
          right: 28,
          zIndex: 200,
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          textDecoration: "none",
        }}
        className="wa-float"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} color="#fff" fill="#fff" />
      </a>

      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(8px); }
        }
        .wa-float:hover {
          transform: scale(1.1) !important;
          box-shadow: 0 6px 28px rgba(37,211,102,0.6) !important;
        }
      `}</style>
    </section>
  );
}
