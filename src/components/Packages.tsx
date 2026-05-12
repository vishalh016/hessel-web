"use client";
import { useState } from "react";
import { MessageCircle, Users, ChevronRight } from "lucide-react";
import { waLink, BUSINESS_INFO } from "@/lib/config";

const packages = [
  { name: "Royal Wedding Package", tag: "Most Popular", desc: "The grandest catering experience for your most important day.", baseVeg: 800, baseNonVeg: 1100, items: ["Full Bengali wedding menu","Live cooking counters","Premium buffet setup","Dedicated service staff","Floral food station décor"], highlight: true },
  { name: "Signature Bengali Feast", tag: "Heritage", desc: "Authentic traditional Bengali premium menu with modern presentation.", baseVeg: 600, baseNonVeg: 850, items: ["Traditional 10-course menu","Authentic Bengali recipes","Premium serve ware","Cultural presentation style","Mishti counter included"], highlight: false },
  { name: "Corporate Executive Buffet", tag: "Professional", desc: "Elegant and professional dining for your business gatherings.", baseVeg: 550, baseNonVeg: 750, items: ["Executive multi-cuisine menu","Clean minimal setup","Efficient service flow","Branded table setup","Refreshment bar included"], highlight: false },
  { name: "Grand Celebration Package", tag: "Premium", desc: "Multi-cuisine luxury setup for receptions and grand events.", baseVeg: 750, baseNonVeg: 1000, items: ["Multi-cuisine feast","Live BBQ & biryani station","Premium dessert spread","Luxury buffet décor","Full-service catering"], highlight: false },
  { name: "Intimate Gathering Package", tag: "Cozy", desc: "Smaller premium family celebrations done with the same elegance.", baseVeg: 700, baseNonVeg: 950, items: ["Min. 20 guests","Curated 7-course menu","Personal chef service","Elegant table setting","Dessert station"], highlight: false },
];

export default function Packages() {
  const [guests, setGuests] = useState(100);
  const [nonVeg, setNonVeg] = useState(false);

  return (
    <section id="packages" className="section-pad" style={{ background: "var(--bg-champagne)" }}>
      <div style={{ textAlign: "center", padding: "0 24px", marginBottom: 56 }}>
        <span className="section-label" style={{ color: "var(--gold-dark)" }}>Curated Packages</span>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, color: "var(--text-dark)", lineHeight: 1.25 }}>
          Select Your <em style={{ color: "var(--maroon)", fontStyle: "italic" }}>Signature</em> Experience
        </h2>
        <p style={{ marginTop: 12, color: "var(--text-dark-muted)", fontFamily: "'Outfit',sans-serif", fontSize: "0.95rem" }}>
          Adjust guest count and see real-time pricing across all packages
        </p>
      </div>

      {/* Global controls */}
      <div style={{ maxWidth: 600, margin: "0 auto 48px", padding: "0 24px", display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 200 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, fontFamily: "'Outfit',sans-serif", fontSize: "0.85rem" }}>
            <span style={{ color: "var(--text-dark-muted)", display: "flex", alignItems: "center", gap: 6 }}><Users size={14} /> Guests</span>
            <span style={{ color: "var(--gold-dark)", fontWeight: 600 }}>{guests}</span>
          </div>
          <input type="range" min={20} max={1000} step={10} value={guests} onChange={e => setGuests(Number(e.target.value))} />
        </div>
        <div style={{ display: "flex", background: "rgba(44,36,24,0.06)", border: "1px solid rgba(201,161,74,0.3)", borderRadius: "2px", overflow: "hidden", flexShrink: 0 }}>
          {["Veg", "Non-Veg"].map((type, i) => (
            <button key={type} onClick={() => setNonVeg(i === 1)}
              style={{ padding: "8px 18px", background: nonVeg === (i === 1) ? "var(--gold)" : "transparent", color: nonVeg === (i === 1) ? "var(--charcoal)" : "var(--text-dark-muted)", border: "none", cursor: "pointer", fontFamily: "'Outfit',sans-serif", fontSize: "0.8rem", fontWeight: nonVeg === (i === 1) ? 600 : 400, transition: "all 0.3s ease" }}>
              {type}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20, maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {packages.map((pkg, i) => {
          const perPlate = nonVeg ? pkg.baseNonVeg : pkg.baseVeg;
          const total = perPlate * guests;
          const link = waLink(`Hi! I'm interested in the ${pkg.name}.\nGuests: ${guests}\nMenu: ${nonVeg ? "Non-Veg" : "Veg"}\nEstimate: ₹${total.toLocaleString("en-IN")}\n\nPlease share details.`);
          return (
            <div key={i} className="luxury-card-light" style={{ padding: "36px 28px", display: "flex", flexDirection: "column", border: pkg.highlight ? "1px solid rgba(201,161,74,0.5)" : undefined, boxShadow: pkg.highlight ? "0 4px 40px rgba(201,161,74,0.12)" : undefined }}>
              <div style={{ display: "inline-block", background: pkg.highlight ? "var(--gold)" : "var(--maroon)", color: pkg.highlight ? "var(--charcoal)" : "var(--warm-white)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", padding: "4px 10px", fontFamily: "'Outfit',sans-serif", fontWeight: 600, marginBottom: 20, alignSelf: "flex-start" }}>{pkg.tag}</div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", fontWeight: 700, color: "var(--text-dark)", marginBottom: 8 }}>{pkg.name}</h3>
              <p style={{ color: "var(--text-dark-muted)", fontFamily: "'Outfit',sans-serif", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: 24 }}>{pkg.desc}</p>
              <ul style={{ listStyle: "none", marginBottom: 28 }}>
                {pkg.items.map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0", color: "var(--text-dark)", fontFamily: "'Outfit',sans-serif", fontSize: "0.85rem", opacity: 0.85 }}>
                    <span style={{ color: "var(--gold-dark)", fontSize: "0.7rem" }}>✦</span>{item}
                  </li>
                ))}
              </ul>
              <div style={{ background: "rgba(201,161,74,0.08)", border: "1px solid rgba(201,161,74,0.25)", borderRadius: "2px", padding: "16px", marginBottom: 20, marginTop: "auto" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ color: "var(--text-dark-muted)", fontSize: "0.75rem", fontFamily: "'Outfit',sans-serif" }}>₹{perPlate}/plate × {guests}</span>
                  <span style={{ color: "var(--maroon)", fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", fontWeight: 700 }}>₹{total.toLocaleString("en-IN")}</span>
                </div>
              </div>
              <a href={link} target="_blank" rel="noopener noreferrer"
                className={pkg.highlight ? "btn-maroon" : "btn-gold-outline"}
                style={{ justifyContent: "center", fontSize: "0.8rem", color: pkg.highlight ? undefined : "var(--charcoal)", borderColor: "var(--gold-dark)", background: pkg.highlight ? undefined : "transparent" }}>
                <MessageCircle size={14} /> Customize Package <ChevronRight size={14} />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
