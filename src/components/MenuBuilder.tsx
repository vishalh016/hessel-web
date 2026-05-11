"use client";
import { useState } from "react";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";

const eventTypes = ["Wedding","Reception","Birthday","Corporate Event","Housewarming","Bengali Traditional"];
const cuisines = ["Bengali","Fusion","Continental","Multi-Cuisine"];

const menuCombos = [
  {
    name: "Classic Bengali Elegance",
    desc: "A full traditional Bengali spread — from luchi-alur dom to ilish maach and mishti doi.",
    items: ["Luchi & Alur Dom","Shorshe Ilish","Kosha Mangsho","Dal Makhani","Pulao","Mishti Doi","Rasgulla"],
    base: 650,
  },
  {
    name: "Fusion Modern",
    desc: "A contemporary blend of Bengali classics with modern international flavors.",
    items: ["Paneer Tikka","Pasta Station","Bengali Fish Curry","Continental Salad Bar","Mocktail Bar","Dessert Platter"],
    base: 750,
  },
  {
    name: "Grand Celebration",
    desc: "A lavish multi-cuisine feast for larger-than-life events.",
    items: ["Live Biryani Counter","BBQ Station","Bengali Spread","Continental Corner","Live Dessert Counter","Beverage Bar"],
    base: 950,
  },
];

const addOns = [
  { name: "Biryani Counter", icon: "🍛", price: 80 },
  { name: "BBQ Station", icon: "🔥", price: 120 },
  { name: "Dessert Station", icon: "🍮", price: 60 },
  { name: "Beverage Bar", icon: "🥤", price: 50 },
];

export default function MenuBuilder() {
  const [step, setStep] = useState(1);
  const [eventType, setEventType] = useState("");
  const [guests, setGuests] = useState(100);
  const [cuisine, setCuisine] = useState("");
  const [menuIdx, setMenuIdx] = useState<number | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const toggleAddOn = (name: string) =>
    setSelectedAddOns((prev) => prev.includes(name) ? prev.filter((a) => a !== name) : [...prev, name]);

  const totalPerPlate = menuIdx !== null
    ? menuCombos[menuIdx].base + addOns.filter((a) => selectedAddOns.includes(a.name)).reduce((s, a) => s + a.price, 0)
    : 0;
  const total = totalPerPlate * guests;

  const waMsg = encodeURIComponent(
    `Hi Halder's Hessel! I've built my menu:\n\nEvent: ${eventType}\nGuests: ${guests}\nCuisine: ${cuisine}\nMenu: ${menuIdx !== null ? menuCombos[menuIdx].name : ""}\nAdd-ons: ${selectedAddOns.join(", ") || "None"}\nEstimate: ₹${total.toLocaleString("en-IN")}\n\nPlease confirm my booking!`
  );

  return (
    <section id="menu-builder" className="section-pad" style={{ background: "#0A0A0A" }}>
      <div style={{ textAlign: "center", padding: "0 24px", marginBottom: 56 }}>
        <span className="section-label">Interactive Menu Builder</span>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, color: "var(--warm-white)", lineHeight: 1.25 }}>
          Craft Your <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Perfect</em> Menu
        </h2>
        <p style={{ marginTop: 12, color: "var(--text-muted)", fontFamily: "'Outfit',sans-serif", fontSize: "0.95rem" }}>
          Build a customized dining experience in minutes
        </p>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px" }}>
        {/* Progress bar */}
        <div style={{ display: "flex", gap: 4, marginBottom: 40 }}>
          {[1,2,3,4,5].map((s) => (
            <div key={s} style={{ flex: s === step ? 2 : 1, height: 3, borderRadius: 2, background: s <= step ? "var(--gold)" : "rgba(212,175,55,0.15)", transition: "all 0.4s ease" }} />
          ))}
        </div>

        <div className="luxury-card" style={{ padding: "40px 36px" }}>
          {/* Step labels */}
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", fontFamily: "'Outfit',sans-serif", marginBottom: 8 }}>
            Step {step} of 5
          </p>

          {/* STEP 1 */}
          {step === 1 && (
            <div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", color: "var(--warm-white)", marginBottom: 24 }}>Confirm Event Details</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 28 }}>
                {eventTypes.map((e) => (
                  <button key={e} onClick={() => setEventType(e)}
                    style={{ padding: "11px 14px", background: eventType === e ? "var(--maroon)" : "rgba(255,255,255,0.03)", border: eventType === e ? "1px solid var(--maroon-light)" : "1px solid rgba(212,175,55,0.15)", color: eventType === e ? "var(--warm-white)" : "var(--text-muted)", fontFamily: "'Outfit',sans-serif", fontSize: "0.85rem", cursor: "pointer", borderRadius: "2px", transition: "all 0.3s ease", textAlign: "left" }}>
                    {e}
                  </button>
                ))}
              </div>
              <div style={{ marginBottom: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, fontFamily: "'Outfit',sans-serif", fontSize: "0.85rem" }}>
                  <span style={{ color: "var(--text-muted)" }}>Guest Count</span>
                  <span style={{ color: "var(--gold)", fontWeight: 600 }}>{guests} guests</span>
                </div>
                <input type="range" min={20} max={1000} step={10} value={guests} onChange={e => setGuests(Number(e.target.value))} />
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", color: "var(--warm-white)", marginBottom: 24 }}>Select Cuisine Style</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {cuisines.map((c) => (
                  <button key={c} onClick={() => setCuisine(c)}
                    style={{ padding: "20px", background: cuisine === c ? "rgba(212,175,55,0.1)" : "rgba(255,255,255,0.03)", border: cuisine === c ? "1px solid var(--gold)" : "1px solid rgba(212,175,55,0.15)", color: cuisine === c ? "var(--gold)" : "var(--text-muted)", fontFamily: "'Playfair Display',serif", fontSize: "1rem", cursor: "pointer", borderRadius: "2px", transition: "all 0.3s ease" }}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", color: "var(--warm-white)", marginBottom: 24 }}>Choose Your Menu</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {menuCombos.map((m, i) => (
                  <div key={i} onClick={() => setMenuIdx(i)}
                    className="luxury-card"
                    style={{ padding: "20px 24px", cursor: "pointer", border: menuIdx === i ? "1px solid var(--gold)" : undefined, background: menuIdx === i ? "rgba(212,175,55,0.06)" : "rgba(255,255,255,0.02)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                      <h4 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", color: "var(--warm-white)" }}>{m.name}</h4>
                      <span style={{ color: "var(--gold)", fontFamily: "'Outfit',sans-serif", fontSize: "0.85rem", fontWeight: 600 }}>₹{m.base}/plate</span>
                    </div>
                    <p style={{ color: "var(--text-muted)", fontFamily: "'Outfit',sans-serif", fontSize: "0.8rem", lineHeight: 1.6, marginBottom: 10 }}>{m.desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {m.items.map((item) => (
                        <span key={item} style={{ background: "rgba(212,175,55,0.07)", border: "1px solid rgba(212,175,55,0.15)", color: "var(--warm-white)", fontSize: "0.72rem", padding: "3px 9px", borderRadius: "1px", fontFamily: "'Outfit',sans-serif", opacity: 0.8 }}>{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", color: "var(--warm-white)", marginBottom: 8 }}>Add Live Counters</h3>
              <p style={{ color: "var(--text-muted)", fontFamily: "'Outfit',sans-serif", fontSize: "0.85rem", marginBottom: 28 }}>Optional premium upsells (price per plate)</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {addOns.map((a) => {
                  const selected = selectedAddOns.includes(a.name);
                  return (
                    <div key={a.name} onClick={() => toggleAddOn(a.name)}
                      style={{ padding: "20px", background: selected ? "rgba(212,175,55,0.08)" : "rgba(255,255,255,0.03)", border: selected ? "1px solid var(--gold)" : "1px solid rgba(212,175,55,0.12)", borderRadius: "2px", cursor: "pointer", transition: "all 0.3s ease", textAlign: "center" }}>
                      <div style={{ fontSize: "1.8rem", marginBottom: 8 }}>{a.icon}</div>
                      <div style={{ color: "var(--warm-white)", fontFamily: "'Outfit',sans-serif", fontSize: "0.85rem", marginBottom: 4 }}>{a.name}</div>
                      <div style={{ color: "var(--gold)", fontFamily: "'Outfit',sans-serif", fontSize: "0.8rem", fontWeight: 600 }}>+₹{a.price}/plate</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 5 */}
          {step === 5 && (
            <div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", color: "var(--warm-white)", marginBottom: 24 }}>Your Final Quote</h3>
              <div style={{ background: "rgba(212,175,55,0.04)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "2px", padding: "24px", marginBottom: 24 }}>
                {[
                  { label: "Event", value: eventType },
                  { label: "Guests", value: `${guests} guests` },
                  { label: "Cuisine", value: cuisine },
                  { label: "Menu", value: menuIdx !== null ? menuCombos[menuIdx].name : "—" },
                  { label: "Add-ons", value: selectedAddOns.length ? selectedAddOns.join(", ") : "None" },
                  { label: "Per Plate", value: `₹${totalPerPlate}` },
                ].map((row) => (
                  <div key={row.label} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(212,175,55,0.08)" }}>
                    <span style={{ color: "var(--text-muted)", fontFamily: "'Outfit',sans-serif", fontSize: "0.85rem" }}>{row.label}</span>
                    <span style={{ color: "var(--warm-white)", fontFamily: "'Outfit',sans-serif", fontSize: "0.9rem", fontWeight: 500 }}>{row.value}</span>
                  </div>
                ))}
                <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 16, marginTop: 4 }}>
                  <span style={{ color: "var(--gold)", fontFamily: "'Playfair Display',serif", fontSize: "1rem" }}>Estimated Total</span>
                  <span style={{ color: "var(--gold)", fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", fontWeight: 700 }}>₹{total.toLocaleString("en-IN")}</span>
                </div>
              </div>
              <a href={`https://wa.me/919999999999?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
                className="btn-maroon" style={{ width: "100%", justifyContent: "center" }}>
                <MessageCircle size={16}/> Confirm on WhatsApp
              </a>
            </div>
          )}

          {/* Navigation */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 32, gap: 12 }}>
            {step > 1 && (
              <button onClick={() => setStep(s => s - 1)} className="btn-gold-outline" style={{ padding: "10px 20px", fontSize: "0.8rem" }}>
                <ChevronLeft size={14}/> Back
              </button>
            )}
            {step < 5 && (
              <button onClick={() => setStep(s => s + 1)} className="btn-maroon" style={{ marginLeft: "auto", padding: "10px 24px", fontSize: "0.8rem" }}>
                Continue <ChevronRight size={14}/>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
