export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#050505", borderTop: "1px solid rgba(212,175,55,0.1)", padding: "48px 24px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--warm-white)", letterSpacing: "0.05em" }}>HALDER&apos;S</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.75rem", letterSpacing: "0.3em", color: "var(--gold)", marginBottom: 16 }}>HESSEL</div>
            <p style={{ color: "var(--text-muted)", fontFamily: "'Outfit',sans-serif", fontSize: "0.85rem", lineHeight: 1.7, maxWidth: 240 }}>
              Curating luxury dining experiences for every celebration. Premium. Seamless. Unforgettable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "'Outfit',sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>Quick Links</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {[["Packages","#packages"],["Experiences","#experiences"],["Menu Builder","#menu-builder"],["Testimonials","#testimonials"],["Contact","#contact"]].map(([label,href]) => (
                <li key={label}>
                  <a href={href} style={{ color: "var(--text-muted)", textDecoration: "none", fontFamily: "'Outfit',sans-serif", fontSize: "0.875rem", transition: "color 0.3s ease" }} className="footer-link">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: "'Outfit',sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>Our Services</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {["Wedding Catering","Bengali Traditional Feasts","Corporate Events","Birthday Celebrations","Housewarming Events","Funeral Ceremonies"].map(s => (
                <li key={s} style={{ color: "var(--text-muted)", fontFamily: "'Outfit',sans-serif", fontSize: "0.875rem" }}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Outfit',sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="btn-maroon" style={{ fontSize: "0.78rem", padding: "10px 18px", justifyContent: "center" }}>
                WhatsApp Us
              </a>
              <a href="tel:+919999999999" style={{ color: "var(--text-muted)", fontFamily: "'Outfit',sans-serif", fontSize: "0.875rem", textDecoration: "none" }}>
                +91 99999 99999
              </a>
              <p style={{ color: "var(--text-muted)", fontFamily: "'Outfit',sans-serif", fontSize: "0.8rem", lineHeight: 1.6 }}>
                Kolkata, West Bengal, India<br />
                Mon–Sun: 9 AM – 9 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(212,175,55,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ color: "var(--text-muted)", fontFamily: "'Outfit',sans-serif", fontSize: "0.78rem" }}>
            © {year} Halder&apos;s Hessel. All rights reserved.
          </p>
          <p style={{ color: "var(--text-muted)", fontFamily: "'Outfit',sans-serif", fontSize: "0.78rem", fontStyle: "italic" }}>
            &quot;Make Your Events Hassle-Free With Us&quot;
          </p>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: var(--gold) !important; }
      `}</style>
    </footer>
  );
}
