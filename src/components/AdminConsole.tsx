"use client";
import { useState, useEffect } from "react";
import { 
  LayoutDashboard, 
  Settings, 
  Users, 
  MessageSquare, 
  TrendingUp, 
  ShieldCheck, 
  Eye, 
  Database,
  X,
  Lock,
  ArrowRight,
  Utensils,
  Plus,
  Trash2,
  Edit2,
  Save
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/config";

export default function AdminConsole() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [activeTab, setActiveTab] = useState("dashboard");
  const [error, setError] = useState(false);

  // Secret key combination: Ctrl + Shift + A
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "A") {
        setIsVisible(prev => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === BUSINESS_INFO.adminPassword) {
      setIsLoggedIn(true);
      setError(false);
    } else {
      setError(true);
      setPasswordInput("");
    }
  };

  if (!isVisible) return null;

  // Login Screen
  if (!isLoggedIn) {
    return (
      <div style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(10, 10, 10, 0.98)",
        backdropFilter: "blur(40px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Outfit', sans-serif"
      }}>
        <div className="luxury-card" style={{ padding: "48px", width: "100%", maxWidth: "420px", textAlign: "center" }}>
          <div style={{ width: 64, height: 64, background: "rgba(201, 161, 74, 0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", border: "1px solid rgba(201, 161, 74, 0.2)" }}>
            <Lock size={28} color="var(--gold)" />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: "var(--warm-white)", marginBottom: 8 }}>Authorized Access</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: 32 }}>Please enter your administrator password to proceed.</p>
          
          <form onSubmit={handleLogin}>
            <div style={{ position: "relative", marginBottom: 16 }}>
              <input 
                type="password" 
                placeholder="Enter password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                autoFocus
                style={{
                  width: "100%",
                  padding: "16px 20px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: error ? "1px solid var(--maroon)" : "1px solid rgba(201, 161, 74, 0.2)",
                  borderRadius: "8px",
                  color: "white",
                  outline: "none",
                  fontSize: "1rem",
                  transition: "all 0.3s ease"
                }}
              />
              <button 
                type="submit"
                style={{
                  position: "absolute",
                  right: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "var(--gold)",
                  border: "none",
                  color: "var(--black)",
                  width: 36,
                  height: 36,
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer"
                }}
              >
                <ArrowRight size={20} />
              </button>
            </div>
            {error && <p style={{ color: "var(--maroon)", fontSize: "0.8rem", marginTop: 8 }}>Incorrect password. Please try again.</p>}
          </form>

          <button 
            onClick={() => setIsVisible(false)}
            style={{ marginTop: 24, background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", fontSize: "0.85rem", textDecoration: "underline" }}
          >
            Cancel and Return to Site
          </button>
        </div>
      </div>
    );
  }

  // Admin Dashboard
  const stats = [
    { label: "Total Inquiries", value: "124", change: "+12%", icon: <MessageSquare size={18} /> },
    { label: "Active Bookings", value: "18", change: "+5", icon: <Database size={18} /> },
    { label: "Site Visitors", value: "2.4k", change: "+18%", icon: <Eye size={18} /> },
    { label: "Conversion Rate", value: "4.2%", change: "+0.5%", icon: <TrendingUp size={18} /> },
  ];

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 9999,
      background: "rgba(10, 10, 10, 0.98)",
      backdropFilter: "blur(20px)",
      color: "var(--warm-white)",
      display: "flex",
      fontFamily: "'Outfit', sans-serif"
    }}>
      {/* Sidebar */}
      <div style={{
        width: "280px",
        borderRight: "1px solid rgba(201, 161, 74, 0.15)",
        padding: "32px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 32
      }}>
        <div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 700, letterSpacing: "0.06em", color: "var(--warm-white)" }}>ADMIN</div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.6rem", letterSpacing: "0.3em", color: "var(--gold)", textTransform: "uppercase" }}>HALDER&apos;S HESSEL</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
            { id: "menu", label: "Menu Manager", icon: <Utensils size={18} /> },
            { id: "leads", label: "Inquiries", icon: <MessageSquare size={18} /> },
            { id: "customers", label: "Customers", icon: <Users size={18} /> },
            { id: "settings", label: "Settings", icon: <Settings size={18} /> },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 16px",
                background: activeTab === tab.id ? "rgba(201, 161, 74, 0.1)" : "transparent",
                border: "none",
                color: activeTab === tab.id ? "var(--gold)" : "var(--text-muted)",
                borderRadius: "4px",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.3s ease"
              }}
            >
              {tab.icon}
              <span style={{ fontSize: "0.9rem", fontWeight: 500 }}>{tab.label}</span>
            </button>
          ))}
        </div>

        <div style={{ marginTop: "auto", padding: "16px", background: "rgba(201, 161, 74, 0.05)", borderRadius: "8px", border: "1px solid rgba(201, 161, 74, 0.1)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <ShieldCheck size={16} color="var(--gold)" />
            <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--warm-white)" }}>System Secure</span>
          </div>
          <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", lineHeight: 1.4 }}>
            Only authorized administrators can view and modify these settings.
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "40px 60px", overflowY: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", marginBottom: 8 }}>Management Console</h1>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Welcome back. Here is what is happening with your brand today.</p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <button 
              onClick={() => setIsLoggedIn(false)}
              style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", color: "var(--text-muted)", padding: "8px 16px", borderRadius: "4px", cursor: "pointer", fontSize: "0.8rem" }}
            >
              Logout
            </button>
            <button 
              onClick={() => setIsVisible(false)}
              style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", color: "white", padding: "10px", borderRadius: "50%", cursor: "pointer" }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginBottom: 48 }}>
          {stats.map((stat, i) => (
            <div key={i} className="luxury-card" style={{ padding: "24px", background: "rgba(255, 255, 255, 0.02)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                <div style={{ color: "var(--gold)" }}>{stat.icon}</div>
                <div style={{ fontSize: "0.75rem", color: "#4ade80", fontWeight: 600 }}>{stat.change}</div>
              </div>
              <div style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: 4 }}>{stat.value}</div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Content Area */}
        {activeTab === "dashboard" && (
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 32 }}>
            <div className="luxury-card" style={{ padding: "32px" }}>
              <h3 style={{ fontSize: "1.1rem", marginBottom: 24, display: "flex", alignItems: "center", gap: 10 }}>
                <MessageSquare size={18} color="var(--gold)" />
                Recent Inquiries
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { name: "Sumanth Kumar", event: "Wedding", date: "2 mins ago", status: "New" },
                  { name: "Anita Roy", event: "Birthday", date: "1 hour ago", status: "Replied" },
                  { name: "Corporate HR", event: "Annual Dinner", date: "4 hours ago", status: "Follow-up" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: "rgba(255, 255, 255, 0.03)", borderRadius: "4px" }}>
                    <div>
                      <div style={{ fontSize: "0.9rem", fontWeight: 600 }}>{item.name}</div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{item.event}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: "0.75rem", color: "var(--gold)" }}>{item.status}</div>
                      <div style={{ fontSize: "0.7rem", color: "rgba(255, 255, 255, 0.3)" }}>{item.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="luxury-card" style={{ padding: "32px" }}>
              <h3 style={{ fontSize: "1.1rem", marginBottom: 24, display: "flex", alignItems: "center", gap: 10 }}>
                <Settings size={18} color="var(--gold)" />
                Quick Config
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 8, display: "block" }}>Business Name</label>
                  <div style={{ fontSize: "0.9rem", padding: "8px 12px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "4px" }}>{BUSINESS_INFO.name}</div>
                </div>
                <div>
                  <label style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 8, display: "block" }}>Primary Phone</label>
                  <div style={{ fontSize: "0.9rem", padding: "8px 12px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "4px" }}>{BUSINESS_INFO.phone}</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <button style={{ width: "100%", padding: "12px", background: "var(--maroon)", border: "none", color: "white", borderRadius: "4px", fontSize: "0.85rem", fontWeight: 600, cursor: "not-allowed", opacity: 0.7 }}>
                    Update Global Settings
                  </button>
                  <p style={{ fontSize: "0.65rem", color: "var(--text-muted)", marginTop: 8, textAlign: "center" }}>
                    Manual overrides are currently locked. Edit .env file to change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Menu Manager Tab */}
        {activeTab === "menu" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <div className="luxury-card" style={{ padding: "32px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
                <div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700 }}>Active Menu Inventory</h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Manage dishes, pricing, and availability across all categories.</p>
                </div>
                <button className="btn-maroon" style={{ padding: "10px 20px", fontSize: "0.85rem" }}>
                  <Plus size={16} /> Add New Item
                </button>
              </div>

              <div style={{ width: "100%", overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
                  <thead>
                    <tr style={{ textAlign: "left", borderBottom: "1px solid rgba(201, 161, 74, 0.2)" }}>
                      <th style={{ padding: "12px", color: "var(--gold)" }}>Item Name</th>
                      <th style={{ padding: "12px", color: "var(--gold)" }}>Category</th>
                      <th style={{ padding: "12px", color: "var(--gold)" }}>Type</th>
                      <th style={{ padding: "12px", color: "var(--gold)" }}>Price</th>
                      <th style={{ padding: "12px", color: "var(--gold)" }}>Status</th>
                      <th style={{ padding: "12px", color: "var(--gold)", textAlign: "right" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Paneer Tikka", cat: "Starters", veg: true, price: 120, status: "Active" },
                      { name: "Kolkata Mutton Biryani", cat: "Rice & Biryani", veg: false, price: 350, status: "Active" },
                      { name: "Shorshe Ilish", cat: "Main Course", veg: false, price: 450, status: "Seasonal" },
                      { name: "Aam Panna", cat: "Welcome Drinks", veg: true, price: 55, status: "Active" },
                    ].map((item, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                        <td style={{ padding: "12px", fontWeight: 600 }}>{item.name}</td>
                        <td style={{ padding: "12px", color: "var(--text-muted)" }}>{item.cat}</td>
                        <td style={{ padding: "12px" }}>{item.veg ? "🌿 Veg" : "🍗 Non-Veg"}</td>
                        <td style={{ padding: "12px" }}>₹{item.price}</td>
                        <td style={{ padding: "12px" }}>
                          <span style={{ fontSize: "0.75rem", padding: "2px 8px", background: item.status === "Active" ? "rgba(74, 222, 128, 0.1)" : "rgba(251, 191, 36, 0.1)", color: item.status === "Active" ? "#4ade80" : "#fbbf24", borderRadius: "12px", border: "1px solid currentColor" }}>
                            {item.status}
                          </span>
                        </td>
                        <td style={{ padding: "12px", textAlign: "right" }}>
                          <div style={{ display: "flex", gap: 12, justifyContent: "flex-end", color: "var(--text-muted)" }}>
                            <button style={{ background: "none", border: "none", color: "inherit", cursor: "pointer" }}><Edit2 size={16} /></button>
                            <button style={{ background: "none", border: "none", color: "var(--maroon)", cursor: "pointer" }}><Trash2 size={16} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
              <div className="luxury-card" style={{ padding: "24px" }}>
                <h4 style={{ fontSize: "1rem", marginBottom: 16 }}>Category Ordering</h4>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: 20 }}>Drag and drop to reorder how categories appear in the builder.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {["Welcome Drinks", "Starters", "Main Course", "Rice & Biryani"].map((cat, i) => (
                    <div key={i} style={{ padding: "10px 16px", background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(201, 161, 74, 0.1)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ fontSize: "0.9rem" }}>{i + 1}. {cat}</span>
                      <div style={{ color: "var(--text-muted)", cursor: "grab" }}>⋮⋮</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="luxury-card" style={{ padding: "24px" }}>
                <h4 style={{ fontSize: "1rem", marginBottom: 16 }}>Global Pricing Rules</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <label style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 8, display: "block" }}>Service Tax (%)</label>
                    <input type="number" defaultValue={5} style={{ width: "100%", padding: "8px 12px", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", color: "white", borderRadius: "4px" }} />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 8, display: "block" }}>Minimum Guest Count</label>
                    <input type="number" defaultValue={20} style={{ width: "100%", padding: "8px 12px", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", color: "white", borderRadius: "4px" }} />
                  </div>
                  <button className="btn-maroon" style={{ width: "100%", padding: "12px", fontSize: "0.85rem", marginTop: 8 }}>
                    Save Rules
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab !== "dashboard" && activeTab !== "menu" && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "300px", opacity: 0.5 }}>
            <Database size={48} color="var(--gold)" style={{ marginBottom: 16 }} />
            <p>Section under development. Data synchronization in progress.</p>
          </div>
        )}
      </div>
    </div>
  );
}
