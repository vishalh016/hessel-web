"use client";

const photos = [
  { src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop", label: "Grand Buffet Setup", span: "wide" },
  { src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=800&auto=format&fit=crop", label: "Signature Dishes", span: "normal" },
  { src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop", label: "Live Food Counter", span: "normal" },
  { src: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop", label: "Wedding Reception", span: "normal" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop", label: "Fine Dining Setup", span: "tall" },
  { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop", label: "Curated Plating", span: "normal" },
  { src: "https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?q=80&w=800&auto=format&fit=crop", label: "Dessert Station", span: "normal" },
  { src: "https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=800&auto=format&fit=crop", label: "Bengali Feast", span: "wide" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-pad" style={{ background: "var(--black)" }}>
      <div style={{ textAlign: "center", padding: "0 24px", marginBottom: 56 }}>
        <span className="section-label">Our Work</span>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, color: "var(--warm-white)", lineHeight: 1.25 }}>
          Moments We&apos;ve{" "}
          <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Curated</em>
        </h2>
        <p style={{ marginTop: 12, color: "var(--text-muted)", fontFamily: "'Outfit',sans-serif", fontSize: "0.95rem" }}>
          A glimpse into the celebrations we&apos;ve brought to life
        </p>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ columns: "3 280px", columnGap: 12 }}>
          {photos.map((photo, i) => (
            <div
              key={i}
              style={{
                breakInside: "avoid",
                marginBottom: 12,
                position: "relative",
                overflow: "hidden",
                borderRadius: "2px",
                cursor: "pointer",
              }}
              className="gallery-item"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.label}
                loading="lazy"
                style={{
                  width: "100%",
                  display: "block",
                  transition: "transform 0.5s ease",
                  borderRadius: "2px",
                }}
                className="gallery-img"
              />
              {/* Overlay */}
              <div
                className="gallery-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(13,13,13,0.85) 0%, transparent 60%)",
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "16px",
                }}
              >
                <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)" }}>
                  {photo.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-outline"
            style={{ display: "inline-flex", fontSize: "0.85rem" }}
          >
            View More on Instagram →
          </a>
        </div>
      </div>

      <style>{`
        .gallery-item:hover .gallery-img { transform: scale(1.04); }
        .gallery-item:hover .gallery-overlay { opacity: 1; }
      `}</style>
    </section>
  );
}
