import { BUSINESS_INFO, waLink } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();
  const waUrl = waLink(`Hi ${BUSINESS_INFO.name}! I'd like to enquire about catering.`);

  return (
    <footer style={{ background: "var(--charcoal-deep)", position: "relative", overflow: "hidden" }}>
      {/* Gold top accent */}
      <div style={{ height: 3, background: "linear-gradient(90deg, transparent 0%, var(--gold-dark) 30%, var(--gold) 50%, var(--gold-dark) 70%, transparent 100%)" }} />

      {/* Warm champagne overlay — subtle warmth */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 20% 80%, rgba(201,161,74,0.04) 0%, transparent 60%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 24px 40px", position: "relative" }}>
        {/* Top grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48, marginBottom: 56 }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <img 
                src="/logo.png" 
                alt="Halder's Hessel Logo" 
                style={{ height: "60px", width: "auto", objectFit: "contain" }} 
              />
            </div>
            <p style={{ color: "var(--text-muted)", fontFamily: "'Outfit',sans-serif", fontSize: "0.875rem", lineHeight: 1.8, maxWidth: 260, marginBottom: 20 }}>
              Curating luxury dining experiences for every celebration. Premium. Seamless. Unforgettable.
            </p>
            {/* Tagline */}
            <div style={{ borderLeft: "2px solid var(--gold)", paddingLeft: 14 }}>
              <p style={{ color: "var(--gold-light)", fontFamily: "'Playfair Display',serif", fontSize: "0.85rem", fontStyle: "italic", lineHeight: 1.5, opacity: 0.9 }}>
                &quot;{BUSINESS_INFO.tagline}&quot;
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "'Outfit',sans-serif", fontSize: "0.68rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 24 }}>Quick Links</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
              {[["About Us","#value"],["Packages","#packages"],["Experiences","#experiences"],["Menu Builder","#menu-builder"],["Testimonials","#testimonials"],["Contact","#contact"]].map(([label,href]) => (
                <li key={label}>
                  <a href={href} style={{ color: "var(--text-muted)", textDecoration: "none", fontFamily: "'Outfit',sans-serif", fontSize: "0.875rem", transition: "color 0.3s ease", display: "flex", alignItems: "center", gap: 6 }} className="footer-link">
                    <span style={{ color: "var(--gold)", fontSize: "0.5rem", opacity: 0.5 }}>✦</span> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: "'Outfit',sans-serif", fontSize: "0.68rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 24 }}>Our Services</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
              {["Wedding Catering","Bengali Traditional Feasts","Corporate Events","Birthday Celebrations","Housewarming Events","Funeral Ceremonies"].map(s => (
                <li key={s} style={{ color: "var(--text-muted)", fontFamily: "'Outfit',sans-serif", fontSize: "0.875rem", display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ color: "var(--gold)", fontSize: "0.5rem", opacity: 0.5 }}>✦</span> {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Outfit',sans-serif", fontSize: "0.68rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 24 }}>Get In Touch</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-maroon" style={{ fontSize: "0.78rem", padding: "11px 18px", justifyContent: "center" }}>
                WhatsApp Us
              </a>
              <a href={`tel:${BUSINESS_INFO.phone}`} style={{ color: "var(--gold-light)", fontFamily: "'Outfit',sans-serif", fontSize: "0.875rem", textDecoration: "none", opacity: 0.9 }}>
                {BUSINESS_INFO.phone}
              </a>
              <p style={{ color: "var(--text-muted)", fontFamily: "'Outfit',sans-serif", fontSize: "0.8rem", lineHeight: 1.75 }}>
                {BUSINESS_INFO.location}<br />Mon–Sun: 9 AM – 9 PM
              </p>
              <div style={{ display: "flex", gap: 16, paddingTop: 4, borderTop: "1px solid rgba(201,161,74,0.1)" }}>
                {[[BUSINESS_INFO.instagram,"Instagram"],[BUSINESS_INFO.facebook,"Facebook"]].map(([href,label]) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    style={{ color: "var(--text-muted)", fontSize: "0.78rem", fontFamily: "'Outfit',sans-serif", textDecoration: "none", transition: "color 0.3s" }} className="footer-link">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(201,161,74,0.1)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ color: "var(--text-muted)", fontFamily: "'Outfit',sans-serif", fontSize: "0.78rem", opacity: 0.7 }}>
            © {year} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 16, height: 1, background: "var(--gold)", opacity: 0.4 }} />
            <p style={{ color: "var(--gold)", fontFamily: "'Playfair Display',serif", fontSize: "0.75rem", fontStyle: "italic", opacity: 0.65 }}>
              Crafted with love · {BUSINESS_INFO.location}
            </p>
            <div style={{ width: 16, height: 1, background: "var(--gold)", opacity: 0.4 }} />
          </div>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: var(--gold) !important; }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
