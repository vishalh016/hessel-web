"use client";
import { useState, useCallback } from "react";
import { MessageCircle, ChevronRight, ChevronLeft } from "lucide-react";
import { waLink } from "@/lib/config";

const eventTypes = [
  "Wedding",
  "Reception",
  "Birthday",
  "Corporate Event",
  "Housewarming",
  "Funeral Ceremony",
  "Bengali Traditional Event",
];

const BASE_VEG = 450;
const BASE_NON_VEG = 650;

function estimatePrice(guests: number, isNonVeg: boolean) {
  const perPlate = isNonVeg ? BASE_NON_VEG : BASE_VEG;
  const total = guests * perPlate;
  return { perPlate, total };
}

export default function QuickQuote() {
  const [step, setStep] = useState(1);
  const [event, setEvent] = useState("");
  const [guests, setGuests] = useState(100);
  const [nonVeg, setNonVeg] = useState(false);

  const { perPlate, total } = estimatePrice(guests, nonVeg);

  const waMessage = encodeURIComponent(
    `Hi Halder's Hessel!\n\nEvent: ${event}\nGuests: ${guests}\nMenu: ${nonVeg ? "Non-Veg" : "Veg"}\nEstimate: ₹${total.toLocaleString("en-IN")}\n\nI'd like a detailed quote.`
  );

  const canNext = useCallback(() => {
    if (step === 1) return event !== "";
    return true;
  }, [step, event]);

  return (
    <section
      id="quote"
      className="section-pad"
      style={{
        background: "linear-gradient(180deg, var(--bg-dark) 0%, var(--bg-maroon-tint) 100%)",
        position: "relative",
      }}
    >
      {/* Maroon accent strip */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "1px",
          height: "80px",
          background: "linear-gradient(to bottom, transparent, var(--maroon))",
        }}
      />

      <div style={{ textAlign: "center", padding: "0 24px", marginBottom: 56 }}>
        <span className="section-label">Plan Your Celebration</span>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 700,
            color: "var(--warm-white)",
            lineHeight: 1.25,
          }}
        >
          Get an Instant{" "}
          <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
            Quote
          </em>
        </h2>
        <p
          style={{
            marginTop: 12,
            color: "var(--text-muted)",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.95rem",
          }}
        >
          Receive your estimate in under 60 seconds
        </p>
      </div>

      {/* Card */}
      <div
        style={{
          maxWidth: 640,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div
          className="luxury-card"
          style={{ padding: "48px 40px", position: "relative" }}
        >
          {/* Step indicator */}
          <div
            style={{
              display: "flex",
              gap: 8,
              marginBottom: 40,
              alignItems: "center",
            }}
          >
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                style={{
                  flex: s === step ? 2 : 1,
                  height: 3,
                  borderRadius: 2,
                  background:
                    s <= step
                      ? "var(--gold)"
                      : "rgba(212,175,55,0.15)",
                  transition: "all 0.4s ease",
                }}
              />
            ))}
          </div>

          {/* Step 1 — Event Type */}
          {step === 1 && (
            <div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.3rem",
                  color: "var(--warm-white)",
                  marginBottom: 8,
                }}
              >
                Select Your Event
              </h3>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.875rem",
                  marginBottom: 28,
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                What are we celebrating?
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 10,
                }}
              >
                {eventTypes.map((e) => (
                  <button
                    key={e}
                    onClick={() => setEvent(e)}
                    style={{
                      padding: "12px 16px",
                      background:
                        event === e
                          ? "var(--maroon)"
                          : "rgba(255,255,255,0.03)",
                      border:
                        event === e
                          ? "1px solid var(--maroon-light)"
                          : "1px solid rgba(212,175,55,0.15)",
                      color:
                        event === e ? "var(--warm-white)" : "var(--text-muted)",
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.85rem",
                      cursor: "pointer",
                      borderRadius: "2px",
                      transition: "all 0.3s ease",
                      textAlign: "left",
                    }}
                  >
                    {e}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 — Guest Count */}
          {step === 2 && (
            <div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.3rem",
                  color: "var(--warm-white)",
                  marginBottom: 8,
                }}
              >
                Guest Count & Menu
              </h3>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.875rem",
                  marginBottom: 32,
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                How many guests are you expecting?
              </p>

              {/* Guest display */}
              <div style={{ textAlign: "center", marginBottom: 24 }}>
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "3rem",
                    color: "var(--gold)",
                    fontWeight: 700,
                  }}
                >
                  {guests}
                </span>
                <span
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.85rem",
                    marginLeft: 8,
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  guests
                </span>
              </div>

              <input
                type="range"
                min={20}
                max={1000}
                step={10}
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                style={{ marginBottom: 32 }}
              />

              <div
                style={{
                  display: "flex",
                  gap: 4,
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: "2px",
                  border: "1px solid rgba(212,175,55,0.15)",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setNonVeg(false)}
                  style={{
                    flex: 1,
                    padding: "12px",
                    background: !nonVeg ? "var(--gold)" : "transparent",
                    color: !nonVeg ? "var(--black)" : "var(--text-muted)",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: !nonVeg ? 600 : 400,
                    transition: "all 0.3s ease",
                  }}
                >
                  🌿 Veg
                </button>
                <button
                  onClick={() => setNonVeg(true)}
                  style={{
                    flex: 1,
                    padding: "12px",
                    background: nonVeg ? "var(--gold)" : "transparent",
                    color: nonVeg ? "var(--black)" : "var(--text-muted)",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: nonVeg ? 600 : 400,
                    transition: "all 0.3s ease",
                  }}
                >
                  🍗 Non-Veg
                </button>
              </div>
            </div>
          )}

          {/* Step 3 — Quote Preview */}
          {step === 3 && (
            <div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.3rem",
                  color: "var(--warm-white)",
                  marginBottom: 8,
                }}
              >
                Your Estimated Quote
              </h3>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.875rem",
                  marginBottom: 32,
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                Share on WhatsApp to get your personalized plan
              </p>

              {/* Summary cards */}
              <div
                style={{
                  background: "rgba(212,175,55,0.04)",
                  border: "1px solid rgba(212,175,55,0.2)",
                  borderRadius: "2px",
                  padding: "28px",
                  marginBottom: 24,
                }}
              >
                {[
                  { label: "Event", value: event },
                  { label: "Guests", value: `${guests} guests` },
                  { label: "Menu Type", value: nonVeg ? "Non-Vegetarian" : "Vegetarian" },
                  { label: "Per Plate", value: `₹${perPlate.toLocaleString("en-IN")}` },
                ].map((row) => (
                  <div
                    key={row.label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "8px 0",
                      borderBottom: "1px solid rgba(212,175,55,0.08)",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--text-muted)",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.85rem",
                      }}
                    >
                      {row.label}
                    </span>
                    <span
                      style={{
                        color: "var(--warm-white)",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                      }}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: 16,
                    marginTop: 4,
                  }}
                >
                  <span
                    style={{
                      color: "var(--gold)",
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1rem",
                    }}
                  >
                    Estimated Total
                  </span>
                  <span
                    style={{
                      color: "var(--gold)",
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.4rem",
                      fontWeight: 700,
                    }}
                  >
                    ₹{total.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              <p
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  fontFamily: "'Outfit', sans-serif",
                  marginBottom: 24,
                  fontStyle: "italic",
                }}
              >
                * This is a preliminary estimate. Final pricing may vary based on menu customization, location, and setup requirements.
              </p>

              <a
                href={waLink(`Hi Halder's Hessel!\n\nEvent: ${event}\nGuests: ${guests}\nMenu: ${nonVeg ? 'Non-Veg' : 'Veg'}\nEstimate: ₹${total.toLocaleString('en-IN')}\n\nI'd like a detailed quote.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-maroon"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <MessageCircle size={16} />
                Get Quote on WhatsApp
              </a>
            </div>
          )}

          {/* Navigation */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 32,
              gap: 12,
            }}
          >
            {step > 1 && (
              <button
                onClick={() => setStep((s) => s - 1)}
                className="btn-gold-outline"
                style={{ padding: "10px 20px", fontSize: "0.8rem" }}
              >
                <ChevronLeft size={14} /> Back
              </button>
            )}
            {step < 3 && (
              <button
                onClick={() => canNext() && setStep((s) => s + 1)}
                className="btn-maroon"
                style={{
                  marginLeft: "auto",
                  padding: "10px 24px",
                  fontSize: "0.8rem",
                  opacity: canNext() ? 1 : 0.4,
                  cursor: canNext() ? "pointer" : "not-allowed",
                }}
                disabled={!canNext()}
              >
                Continue <ChevronRight size={14} />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
