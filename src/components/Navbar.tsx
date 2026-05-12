"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS_INFO, WA_DEFAULT } from "@/lib/config";

const links = [
  { label: "About", href: "#value" },
  { label: "Packages", href: "#packages" },
  { label: "Experiences", href: "#experiences" },
  { label: "Menu Builder", href: "#menu-builder" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        transition: "all 0.4s ease",
        background: scrolled ? "rgba(17,17,17,0.96)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(201,161,74,0.15)" : "none",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        padding: "0 24px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <img 
            src="/logo.png" 
            alt="Halder's Hessel Logo" 
            style={{ 
              height: scrolled ? "50px" : "60px", 
              width: "auto", 
              transition: "height 0.4s ease",
              objectFit: "contain"
            }} 
          />
        </a>

        {/* Desktop Links */}
        <ul style={{ display: "flex", gap: 32, listStyle: "none", alignItems: "center" }} className="nav-links-desktop">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--warm-white)", textDecoration: "none", opacity: 0.75, transition: "all 0.3s ease" }} className="nav-link">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right CTAs */}
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <a href={`tel:${BUSINESS_INFO.phone}`} style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--gold)", textDecoration: "none", fontSize: "0.78rem", fontFamily: "'Outfit', sans-serif", letterSpacing: "0.05em" }} className="hide-mobile">
            <Phone size={13} /> Call Now
          </a>
          <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" className="btn-maroon hide-mobile" style={{ padding: "9px 18px", fontSize: "0.72rem" }}>
            Get a Quote
          </a>
          <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", color: "var(--warm-white)", cursor: "pointer", display: "none" }} className="show-mobile" aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{ background: "rgba(17,17,17,0.98)", borderTop: "1px solid rgba(201,161,74,0.15)", padding: "24px", display: "flex", flexDirection: "column", gap: 20 }}>
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--warm-white)", textDecoration: "none" }}>
              {l.label}
            </a>
          ))}
          <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" className="btn-maroon" style={{ justifyContent: "center", marginTop: 8 }}>
            Get a Quote on WhatsApp
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-links-desktop { display: none !important; }
          .hide-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 901px) { .show-mobile { display: none !important; } }
        .nav-link:hover { opacity: 1 !important; color: var(--gold) !important; }
      `}</style>
    </nav>
  );
}
