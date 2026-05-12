"use client";
import { useEffect, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";
import { waLink, WA_DEFAULT, BUSINESS_INFO } from "@/lib/config";

const ROTATING_WORDS = [
  "Weddings",
  "Celebrations",
  "Receptions",
  "Corporate Events",
  "Grand Experiences",
];

// Free-to-use cinematic catering/wedding video from Pexels
const HERO_VIDEO =
  "https://videos.pexels.com/video-files/5532767/5532767-hd_1920_1080_25fps.mp4";

export default function HeroSection() {
  const [wordIdx, setWordIdx] = useState(0);
  const [fadeWord, setFadeWord] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Rotating words with fade transition
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeWord(false);
      setTimeout(() => {
        setWordIdx((i) => (i + 1) % ROTATING_WORDS.length);
        setFadeWord(true);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        height: "100vh",
        minHeight: 680,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* ── Cinematic Video Background ── */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          transform: "scale(1.04)",
          willChange: "transform",
        }}
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      {/* ── Cinematic Overlay — Charcoal to Maroon ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(160deg, rgba(26,26,26,0.62) 0%, rgba(90,11,22,0.52) 100%)",
          zIndex: 1,
        }}
      />

      {/* ── Bottom vignette for text legibility ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(26,26,26,0.75) 0%, transparent 55%)",
          zIndex: 1,
        }}
      />

      {/* ── Soft film grain texture ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
          backgroundSize: "200px",
          opacity: 0.4,
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* ── Hero Content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: 860,
          animation: "heroFadeIn 1.4s ease forwards",
        }}
      >
        {/* Pre-label */}
        <span
          style={{
            display: "block",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.38em",
            textTransform: "uppercase",
            color: "var(--gold-light)",
            marginBottom: 28,
            opacity: 0.85,
          }}
        >
          {BUSINESS_INFO.name} · Premium Hospitality
        </span>

        {/* Gold ornament line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            marginBottom: 32,
          }}
        >
          <div style={{ flex: 1, maxWidth: 60, height: 1, background: "linear-gradient(to left, var(--gold), transparent)" }} />
          <span style={{ color: "var(--gold)", fontSize: "0.65rem", letterSpacing: "0.2em" }}>✦</span>
          <div style={{ flex: 1, maxWidth: 60, height: 1, background: "linear-gradient(to right, var(--gold), transparent)" }} />
        </div>

        {/* Main Headline */}
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            color: "var(--warm-white)",
            marginBottom: 20,
            letterSpacing: "-0.01em",
          }}
        >
          Curating Luxury Dining
          <br />
          Experiences For{" "}
          <span
            style={{
              color: "var(--gold-light)",
              fontStyle: "italic",
              display: "inline-block",
              opacity: fadeWord ? 1 : 0,
              transform: fadeWord ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
              minWidth: "260px",
            }}
          >
            {ROTATING_WORDS[wordIdx]}
          </span>
        </h1>

        {/* Tagline — Emotional Power Statement */}
        <div style={{ marginBottom: 48, marginTop: 8 }}>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(0.95rem, 2.2vw, 1.3rem)",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 6,
            }}
          >
            {BUSINESS_INFO.tagline}
          </p>
          <div
            style={{
              width: 40,
              height: 1,
              background: "var(--gold)",
              margin: "0 auto",
              opacity: 0.6,
            }}
          />
        </div>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 64,
          }}
        >
          <a
            href="#quote"
            className="btn-maroon"
            id="hero-plan-cta"
            style={{ fontSize: "0.82rem", padding: "16px 36px" }}
          >
            Plan Your Event
          </a>
          <a
            href="#quote"
            className="btn-gold-outline"
            id="hero-quote-cta"
            style={{ fontSize: "0.82rem", padding: "16px 36px" }}
          >
            Get Instant Quote
          </a>
        </div>

        {/* Trust Statistics */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 0,
            flexWrap: "wrap",
          }}
        >
          {[
            { num: "100+", label: "Events Curated" },
            { num: "98%", label: "Satisfaction Rate" },
            { num: "2,000+", label: "Guests Served" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              style={{
                textAlign: "center",
                padding: "0 28px",
                borderRight:
                  i < 2 ? "1px solid rgba(201,161,74,0.3)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  fontWeight: 700,
                  color: "var(--gold)",
                  letterSpacing: "-0.01em",
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontSize: "0.68rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--warm-white)",
                  opacity: 0.55,
                  marginTop: 4,
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          animation: "scrollBounce 2.5s infinite",
        }}
      >
        <span
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.6rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--gold)",
            opacity: 0.6,
          }}
        >
          Discover
        </span>
        <div
          style={{
            width: 1,
            height: 32,
            background: "linear-gradient(to bottom, var(--gold), transparent)",
            opacity: 0.5,
          }}
        />
      </div>

      {/* ── Floating WhatsApp ── */}
      <a
        href={WA_DEFAULT}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: 28,
          right: 24,
          zIndex: 200,
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 24px rgba(37,211,102,0.45)",
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
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(8px); }
        }
        .wa-float:hover {
          transform: scale(1.1) !important;
          box-shadow: 0 6px 32px rgba(37,211,102,0.65) !important;
        }
      `}</style>
    </section>
  );
}
