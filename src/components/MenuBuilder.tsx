"use client";
import { useState, useMemo } from "react";
import { 
  Plus, 
  Minus, 
  MessageCircle, 
  Calendar, 
  Users, 
  Utensils, 
  Leaf, 
  ChevronDown, 
  ChevronUp,
  Clock,
  Check
} from "lucide-react";
import { BUSINESS_INFO, waLink } from "@/lib/config";
import { INITIAL_MENU_ITEMS, MENU_CATEGORIES, SERVICE_OPTIONS, MenuItem } from "@/lib/menuData";

export default function MenuBuilder() {
  // State
  const [eventDetails, setEventDetails] = useState({
    type: "",
    guests: 100,
    date: "",
    notes: ""
  });
  const [isVegOnly, setIsVegOnly] = useState(false);
  const [selectedItems, setSelectedItems] = useState<{[key: string]: number}>({});
  const [selectedServices, setSelectedServices] = useState<string[]>(["buffet"]);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([MENU_CATEGORIES[0], MENU_CATEGORIES[1]]);

  // Filtered menu items
  const menuItems = useMemo(() => {
    return isVegOnly 
      ? INITIAL_MENU_ITEMS.filter(item => item.isVeg && item.isAvailable)
      : INITIAL_MENU_ITEMS.filter(item => item.isAvailable);
  }, [isVegOnly]);

  // Derived state
  const totalPerPlate = useMemo(() => {
    const itemsCost = Object.entries(selectedItems).reduce((acc, [id, qty]) => {
      const item = INITIAL_MENU_ITEMS.find(i => i.id === id);
      return acc + (item ? item.pricePerPlate * qty : 0);
    }, 0);
    
    const servicesCost = selectedServices.reduce((acc, id) => {
      const service = SERVICE_OPTIONS.find(s => s.id === id);
      return acc + (service ? service.price : 0);
    }, 0);

    return itemsCost + servicesCost;
  }, [selectedItems, selectedServices]);

  const totalEstimate = totalPerPlate * eventDetails.guests;

  // Handlers
  const toggleCategory = (cat: string) => {
    setExpandedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const addItem = (id: string) => {
    setSelectedItems(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeItem = (id: string) => {
    setSelectedItems(prev => {
      const next = { ...prev };
      if (next[id] > 1) next[id] -= 1;
      else delete next[id];
      return next;
    });
  };

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const generateWhatsAppLink = () => {
    const itemsList = Object.entries(selectedItems)
      .map(([id, qty]) => {
        const item = INITIAL_MENU_ITEMS.find(i => i.id === id);
        return item ? `• ${item.name} (${qty}x)` : "";
      })
      .filter(Boolean)
      .join("\n");

    const message = `Hi ${BUSINESS_INFO.name}! I've built a custom menu:\n\n` +
      `📅 Event: ${eventDetails.type || "Not specified"}\n` +
      `👥 Guests: ${eventDetails.guests}\n` +
      `📅 Date: ${eventDetails.date || "Not specified"}\n` +
      `🍽️ Services: ${selectedServices.join(", ")}\n\n` +
      `🥘 Selected Items:\n${itemsList}\n\n` +
      `💰 Est. Total: ₹${totalEstimate.toLocaleString("en-IN")}\n\n` +
      `Please get in touch to finalize!`;
    
    return waLink(message);
  };

  return (
    <section id="menu-builder" className="section-pad" style={{ background: "var(--bg-ivory)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-label" style={{ color: "var(--gold-dark)" }}>Curate Your Experience</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, color: "var(--text-dark)", lineHeight: 1.1 }}>
            The <em style={{ color: "var(--maroon)", fontStyle: "italic" }}>Art</em> of Fine Dining
          </h2>
          <p style={{ marginTop: 16, color: "var(--text-dark-muted)", fontFamily: "'Outfit', sans-serif", fontSize: "1rem", maxWidth: 600, margin: "16px auto 0" }}>
            Design a bespoke culinary journey for your guests. Select from our heritage recipes and modern fusion specialties.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 48, alignItems: "start" }} className="builder-layout">
          
          {/* Main Builder Area */}
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            
            {/* 1. Event Details Section */}
            <div className="luxury-card-light" style={{ padding: "32px" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", color: "var(--text-dark)", marginBottom: 24, display: "flex", alignItems: "center", gap: 12 }}>
                <Calendar size={20} color="var(--gold-dark)" />
                Event Particulars
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="details-grid">
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--maroon)", fontWeight: 600, marginBottom: 8 }}>Event Type</label>
                  <select 
                    value={eventDetails.type}
                    onChange={e => setEventDetails(prev => ({ ...prev, type: e.target.value }))}
                    style={{ width: "100%", padding: "12px 16px", background: "white", border: "1px solid rgba(201, 161, 74, 0.2)", borderRadius: "4px", fontSize: "0.95rem", color: "var(--text-dark)", outline: "none" }}
                  >
                    <option value="">Select an event</option>
                    <option value="Wedding">Grand Wedding</option>
                    <option value="Reception">Elegant Reception</option>
                    <option value="Birthday">Birthday Celebration</option>
                    <option value="Corporate">Corporate Gala</option>
                    <option value="Traditional">Traditional Ceremony</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--maroon)", fontWeight: 600, marginBottom: 8 }}>Estimated Guests</label>
                  <div style={{ position: "relative" }}>
                    <Users size={16} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--gold-dark)" }} />
                    <input 
                      type="number"
                      value={eventDetails.guests}
                      onChange={e => setEventDetails(prev => ({ ...prev, guests: parseInt(e.target.value) || 0 }))}
                      style={{ width: "100%", padding: "12px 16px 12px 42px", background: "white", border: "1px solid rgba(201, 161, 74, 0.2)", borderRadius: "4px", fontSize: "0.95rem", color: "var(--text-dark)", outline: "none" }}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--maroon)", fontWeight: 600, marginBottom: 8 }}>Preferred Date</label>
                  <input 
                    type="date"
                    value={eventDetails.date}
                    onChange={e => setEventDetails(prev => ({ ...prev, date: e.target.value }))}
                    style={{ width: "100%", padding: "12px 16px", background: "white", border: "1px solid rgba(201, 161, 74, 0.2)", borderRadius: "4px", fontSize: "0.95rem", color: "var(--text-dark)", outline: "none" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--maroon)", fontWeight: 600, marginBottom: 8 }}>Special Requirements</label>
                  <input 
                    type="text"
                    placeholder="e.g. Allergies, themes..."
                    value={eventDetails.notes}
                    onChange={e => setEventDetails(prev => ({ ...prev, notes: e.target.value }))}
                    style={{ width: "100%", padding: "12px 16px", background: "white", border: "1px solid rgba(201, 161, 74, 0.2)", borderRadius: "4px", fontSize: "0.95rem", color: "var(--text-dark)", outline: "none" }}
                  />
                </div>
              </div>
            </div>

            {/* 2. Veg Only Toggle */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px", background: isVegOnly ? "rgba(34, 197, 94, 0.03)" : "rgba(201, 161, 74, 0.04)", border: "1px solid var(--border-gold)", borderRadius: "2px", transition: "all 0.4s ease" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: isVegOnly ? "#22c55e" : "var(--gold-light)", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.4s ease", opacity: isVegOnly ? 1 : 0.4 }}>
                  <Leaf size={14} color={isVegOnly ? "white" : "var(--gold-dark)"} />
                </div>
                <div>
                  <h4 style={{ fontSize: "0.8rem", color: "var(--text-dark)", fontWeight: 600 }}>Vegetarian Only</h4>
                </div>
              </div>
              <button 
                onClick={() => setIsVegOnly(!isVegOnly)}
                style={{
                  width: 40,
                  height: 22,
                  background: isVegOnly ? "#22c55e" : "rgba(0,0,0,0.08)",
                  borderRadius: 11,
                  position: "relative",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              >
                <div style={{
                  width: 16,
                  height: 16,
                  background: "white",
                  borderRadius: "50%",
                  position: "absolute",
                  top: 3,
                  left: isVegOnly ? 21 : 3,
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.15)"
                }} />
              </button>
            </div>

            {/* 3. Categorized Menu Sections */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {MENU_CATEGORIES.map(category => {
                const items = menuItems.filter(i => i.category === category);
                if (items.length === 0) return null;
                const isExpanded = expandedCategories.includes(category);

                return (
                  <div key={category} className="luxury-card-light" style={{ overflow: "hidden", transition: "all 0.3s ease" }}>
                    <button 
                      onClick={() => toggleCategory(category)}
                      style={{ width: "100%", padding: "24px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                    >
                      <div>
                        <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "var(--text-dark)" }}>{category}</h4>
                        <p style={{ fontSize: "0.75rem", color: "var(--text-dark-muted)", marginTop: 4 }}>{items.length} Options Available</p>
                      </div>
                      <div style={{ color: "var(--gold-dark)" }}>
                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </div>
                    </button>

                    <div style={{ 
                      maxHeight: isExpanded ? "2000px" : "0", 
                      opacity: isExpanded ? 1 : 0,
                      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      padding: isExpanded ? "0 32px 32px" : "0 32px",
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                      gap: 20
                    }}>
                      {items.map(item => (
                        <div key={item.id} style={{ 
                          padding: "16px", 
                          background: selectedItems[item.id] ? "var(--bg-champagne)" : "white", 
                          border: selectedItems[item.id] ? "1px solid var(--gold)" : "1px solid var(--border-light)",
                          borderRadius: "2px",
                          transition: "all 0.3s ease"
                        }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                              <div style={{ width: 8, height: 8, border: `1px solid ${item.isVeg ? "#22c55e" : "#ef4444"}`, padding: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <div style={{ width: 4, height: 4, borderRadius: "50%", background: item.isVeg ? "#22c55e" : "#ef4444" }} />
                              </div>
                              <h5 style={{ fontSize: "0.95rem", color: "var(--text-dark)", fontWeight: 600 }}>{item.name}</h5>
                            </div>
                          </div>
                          <p style={{ fontSize: "0.85rem", color: "var(--gold-dark)", fontWeight: 700, marginBottom: 16 }}>₹{item.pricePerPlate} <span style={{ fontSize: "0.7rem", fontWeight: 400, color: "var(--text-dark-muted)" }}>/ plate</span></p>
                          
                          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                            {selectedItems[item.id] ? (
                              <div style={{ display: "flex", alignItems: "center", gap: 12, background: "white", padding: "4px 8px", borderRadius: "4px", border: "1px solid var(--gold)" }}>
                                <button onClick={() => removeItem(item.id)} style={{ background: "none", border: "none", color: "var(--maroon)", cursor: "pointer", display: "flex" }}><Minus size={16} /></button>
                                <span style={{ fontSize: "0.9rem", fontWeight: 700, minWidth: 20, textAlign: "center" }}>{selectedItems[item.id]}</span>
                                <button onClick={() => addItem(item.id)} style={{ background: "none", border: "none", color: "var(--maroon)", cursor: "pointer", display: "flex" }}><Plus size={16} /></button>
                              </div>
                            ) : (
                              <button 
                                onClick={() => addItem(item.id)}
                                style={{ width: "100%", padding: "8px", background: "white", border: "1px solid rgba(201, 161, 74, 0.3)", borderRadius: "4px", color: "var(--text-dark)", fontSize: "0.85rem", cursor: "pointer", transition: "all 0.3s ease", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
                                className="item-add-btn"
                              >
                                <Plus size={14} /> Add to Menu
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 4. Buffet / Serving Options */}
            <div className="luxury-card-light" style={{ padding: "32px" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", color: "var(--text-dark)", marginBottom: 24, display: "flex", alignItems: "center", gap: 12 }}>
                <Utensils size={20} color="var(--gold-dark)" />
                Service Methodology
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="service-grid">
                {SERVICE_OPTIONS.map(opt => (
                  <div 
                    key={opt.id} 
                    onClick={() => toggleService(opt.id)}
                    style={{ 
                      padding: "20px", 
                      textAlign: "center", 
                      background: selectedServices.includes(opt.id) ? "var(--bg-champagne)" : "white", 
                      border: selectedServices.includes(opt.id) ? "1px solid var(--gold)" : "1px solid var(--border-light)",
                      borderRadius: "2px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      position: "relative"
                    }}
                  >
                    {selectedServices.includes(opt.id) && (
                      <div style={{ position: "absolute", top: 12, right: 12, color: "var(--gold-dark)" }}>
                        <Check size={16} strokeWidth={3} />
                      </div>
                    )}
                    <div style={{ fontSize: "2rem", marginBottom: 12 }}>{opt.icon}</div>
                    <h5 style={{ fontSize: "0.9rem", color: "var(--text-dark)", fontWeight: 600, marginBottom: 4 }}>{opt.label}</h5>
                    <p style={{ fontSize: "0.75rem", color: "var(--gold-dark)", fontWeight: 600 }}>{opt.price > 0 ? `+₹${opt.price} / plate` : "Included"}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Sidebar Summary */}
          <div style={{ position: "sticky", top: 100 }} className="sidebar-container">
            <div className="luxury-card-light" style={{ 
              background: "rgba(255, 255, 255, 0.95)", 
              backdropFilter: "blur(20px)", 
              padding: "32px", 
              border: "1px solid var(--gold)",
              boxShadow: "0 20px 60px rgba(44,36,24,0.1)"
            }}>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "var(--text-dark)", marginBottom: 28, textAlign: "center" }}>Proposal Summary</h4>
              
              <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 32 }}>
                {/* Selected Items Breakdown */}
                <div style={{ maxHeight: "300px", overflowY: "auto", paddingRight: 10 }}>
                  {Object.entries(selectedItems).length > 0 ? (
                    Object.entries(selectedItems).map(([id, qty]) => {
                      const item = INITIAL_MENU_ITEMS.find(i => i.id === id);
                      if (!item) return null;
                      return (
                        <div key={id} style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, paddingBottom: 12, borderBottom: "1px solid rgba(201, 161, 74, 0.1)" }}>
                          <div>
                            <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-dark)" }}>{item.name}</p>
                            <p style={{ fontSize: "0.7rem", color: "var(--text-dark-muted)" }}>{qty} x ₹{item.pricePerPlate}</p>
                          </div>
                          <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-dark)" }}>₹{item.pricePerPlate * qty}</p>
                        </div>
                      );
                    })
                  ) : (
                    <p style={{ textAlign: "center", fontSize: "0.85rem", color: "var(--text-dark-muted)", fontStyle: "italic" }}>No items selected yet</p>
                  )}
                </div>

                <div style={{ borderTop: "2px solid var(--gold)", paddingTop: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontSize: "0.85rem", color: "var(--text-dark-muted)" }}>Guests</span>
                    <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>{eventDetails.guests}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontSize: "0.85rem", color: "var(--text-dark-muted)" }}>Per Plate Rate</span>
                    <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>₹{totalPerPlate.toLocaleString("en-IN")}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12 }}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "var(--text-dark)" }}>Estimated Total</span>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 700, color: "var(--maroon)" }}>₹{totalEstimate.toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a 
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-maroon" 
                  style={{ width: "100%", justifyContent: "center", padding: "16px" }}
                >
                  <MessageCircle size={18} /> Get Detailed Quote
                </a>
                <p style={{ fontSize: "0.75rem", color: "var(--text-dark-muted)", textAlign: "center", fontStyle: "italic" }}>
                  * Final quote may vary based on exact menu curation and venue requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .item-add-btn:hover {
          background: var(--gold) !important;
          color: var(--black) !important;
          border-color: var(--gold) !important;
        }
        @media (max-width: 1024px) {
          .builder-layout { grid-template-columns: 1fr !important; }
          .sidebar-container { position: relative !important; top: 0 !important; margin-top: 40px; }
        }
        @media (max-width: 640px) {
          .details-grid { grid-template-columns: 1fr !important; }
          .service-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
