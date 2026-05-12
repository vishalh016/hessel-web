"use client";
import { useState } from "react";
import { MessageCircle, Phone, Clock, MapPin, Share2, ExternalLink } from "lucide-react";
import { BUSINESS_INFO, waLink } from "@/lib/config";

const eventOptions = ["Wedding","Reception","Birthday","Corporate Event","Housewarming","Funeral Ceremony","Bengali Traditional Event","Other"];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", event: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = waLink(`Hi ${BUSINESS_INFO.name}!\n\nName: ${form.name}\nPhone: ${form.phone}\nEvent: ${form.event}\nMessage: ${form.message || "—"}\n\nPlease get in touch.`);
    window.open(link, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-pad" style={{ background: "var(--bg-ivory)", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,var(--gold),transparent)" }} />

      <div style={{ textAlign: "center", padding: "0 24px", marginBottom: 64 }}>
        <span className="section-label" style={{ color: "var(--gold-dark)" }}>Get In Touch</span>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, color: "var(--text-dark)", lineHeight: 1.25 }}>
          Let&apos;s Plan Your <em style={{ color: "var(--maroon)", fontStyle: "italic" }}>Celebration</em>
        </h2>
        <p style={{ marginTop: 12, color: "var(--text-dark-muted)", fontFamily: "'Outfit',sans-serif", fontSize: "0.95rem" }}>
          Reach out and we&apos;ll curate the perfect experience for you
        </p>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="contact-grid">
        {/* Left Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <a href={waLink(`Hi ${BUSINESS_INFO.name}! I'd like to plan an event.`)} target="_blank" rel="noopener noreferrer" className="btn-maroon" style={{ justifyContent: "center", padding: "16px 28px" }}>
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-gold-outline" style={{ justifyContent: "center", padding: "16px 28px", color: "var(--charcoal)", borderColor: "var(--gold-dark)" }}>
              <Phone size={18} /> {BUSINESS_INFO.phone}
            </a>
          </div>

          <div className="luxury-card-light" style={{ padding: "28px" }}>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.1rem", color: "var(--text-dark)", marginBottom: 20 }}>Business Details</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { icon: <Phone size={15}/>, label: BUSINESS_INFO.phone },
                { icon: <Clock size={15}/>, label: "Mon–Sun: 9:00 AM – 9:00 PM" },
                { icon: <MapPin size={15}/>, label: BUSINESS_INFO.location },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--text-dark-muted)", fontFamily: "'Outfit',sans-serif", fontSize: "0.875rem" }}>
                  <span style={{ color: "var(--gold-dark)" }}>{item.icon}</span>{item.label}
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid rgba(201,161,74,0.2)", marginTop: 20, paddingTop: 20, display: "flex", gap: 16 }}>
              {[
                { icon: <Share2 size={18}/>, href: BUSINESS_INFO.instagram, label: "Instagram" },
                { icon: <ExternalLink size={18}/>, href: BUSINESS_INFO.facebook, label: "Facebook" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ color: "var(--text-dark-muted)", transition: "color 0.3s ease", display: "flex", alignItems: "center", gap: 6, fontFamily: "'Outfit',sans-serif", fontSize: "0.8rem", textDecoration: "none" }} className="social-link">
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
          </div>

          <div style={{ background: "rgba(90,11,22,0.08)", border: "1px solid rgba(90,11,22,0.25)", borderRadius: "2px", padding: "16px 20px", display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: "1.2rem" }}>⚡</span>
            <div>
              <div style={{ color: "var(--text-dark)", fontFamily: "'Outfit',sans-serif", fontSize: "0.85rem", fontWeight: 600 }}>Limited Monthly Bookings</div>
              <div style={{ color: "var(--text-dark-muted)", fontFamily: "'Outfit',sans-serif", fontSize: "0.8rem", marginTop: 2 }}>Secure your date early to avoid disappointment</div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="luxury-card-light" style={{ padding: "36px 32px" }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ fontSize: "3rem", marginBottom: 16 }}>✅</div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", color: "var(--text-dark)", marginBottom: 8 }}>Message Sent!</h3>
              <p style={{ color: "var(--text-dark-muted)", fontFamily: "'Outfit',sans-serif", fontSize: "0.9rem" }}>We&apos;ve opened WhatsApp with your details. We&apos;ll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", color: "var(--text-dark)", marginBottom: 24 }}>Send an Inquiry</h3>
              {[
                { label: "Your Name *", key: "name", type: "text", placeholder: "e.g. Priya Chatterjee", required: true },
                { label: "Phone Number *", key: "phone", type: "tel", placeholder: BUSINESS_INFO.phone, required: true },
              ].map((field) => (
                <div key={field.key} style={{ marginBottom: 18 }}>
                  <label style={{ display: "block", fontFamily: "'Outfit',sans-serif", fontSize: "0.78rem", letterSpacing: "0.08em", color: "var(--text-dark-muted)", marginBottom: 8, textTransform: "uppercase" }}>{field.label}</label>
                  <input type={field.type} required={field.required} placeholder={field.placeholder}
                    value={form[field.key as keyof typeof form]}
                    onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                    style={{ width: "100%", background: "var(--bg-ivory)", border: "1px solid rgba(201,161,74,0.3)", color: "var(--text-dark)", fontFamily: "'Outfit',sans-serif", fontSize: "0.9rem", padding: "12px 14px", borderRadius: "2px", outline: "none" }}
                  />
                </div>
              ))}
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", fontFamily: "'Outfit',sans-serif", fontSize: "0.78rem", letterSpacing: "0.08em", color: "var(--text-dark-muted)", marginBottom: 8, textTransform: "uppercase" }}>Event Type *</label>
                <select required value={form.event} onChange={e => setForm(f => ({ ...f, event: e.target.value }))}
                  style={{ width: "100%", background: "var(--bg-ivory)", border: "1px solid rgba(201,161,74,0.3)", color: form.event ? "var(--text-dark)" : "var(--text-dark-muted)", fontFamily: "'Outfit',sans-serif", fontSize: "0.9rem", padding: "12px 14px", borderRadius: "2px", outline: "none", cursor: "pointer" }}>
                  <option value="">Select event type</option>
                  {eventOptions.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div style={{ marginBottom: 28 }}>
                <label style={{ display: "block", fontFamily: "'Outfit',sans-serif", fontSize: "0.78rem", letterSpacing: "0.08em", color: "var(--text-dark-muted)", marginBottom: 8, textTransform: "uppercase" }}>Additional Details (Optional)</label>
                <textarea rows={3} placeholder="Guest count, date, special requirements..."
                  value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  style={{ width: "100%", background: "var(--bg-ivory)", border: "1px solid rgba(201,161,74,0.3)", color: "var(--text-dark)", fontFamily: "'Outfit',sans-serif", fontSize: "0.9rem", padding: "12px 14px", borderRadius: "2px", outline: "none", resize: "vertical", minHeight: 80 }}
                />
              </div>
              <button type="submit" className="btn-maroon" style={{ width: "100%", justifyContent: "center" }}>
                <MessageCircle size={16} /> Send via WhatsApp
              </button>
              <p style={{ color: "var(--text-dark-muted)", fontFamily: "'Outfit',sans-serif", fontSize: "0.75rem", marginTop: 12, textAlign: "center" }}>
                No email required · WhatsApp-first communication
              </p>
            </form>
          )}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }
        .social-link:hover { color: var(--gold-dark) !important; }
      `}</style>
    </section>
  );
}
