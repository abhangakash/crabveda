"use client";

const steps = [
  {
    step: "01",
    icon: "🖐️",
    title: "Take Sufficient Oil",
    desc: "Pour a generous amount of CrabVeda Crab Oil into your palm.",
  },
  {
    step: "02",
    icon: "💆",
    title: "Apply on Affected Area",
    desc: "Apply directly on the joint or muscle area that needs relief.",
  },
  {
    step: "03",
    icon: "🔄",
    title: "Massage Gently",
    desc: "Massage in circular motions for 10–15 minutes until fully absorbed.",
  },
  {
    step: "04",
    icon: "⏰",
    title: "Repeat Twice Daily",
    desc: "For best results, use morning and evening consistently.",
  },
];

export default function HowToUse() {
  return (
    <section
      id="how-to-use"
      className="section-pad"
      style={{
        background: "linear-gradient(160deg, var(--forest) 0%, var(--forest-mid) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      <div style={{
        position: "absolute", top: -80, right: -80,
        width: 300, height: 300, borderRadius: "50%",
        border: "1px solid rgba(201,144,26,0.15)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: -60, left: -60,
        width: 200, height: 200, borderRadius: "50%",
        border: "1px solid rgba(201,144,26,0.1)",
        pointerEvents: "none",
      }} />

      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.75rem",
            color: "var(--gold-light)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 12,
            opacity: 0.8,
          }}>
            Simple Application
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            color: "white",
            marginBottom: 12,
            letterSpacing: "0.04em",
          }}>
            How to Use
          </h2>
          <div className="gold-divider" />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 24,
          marginBottom: 48,
        }}>
          {steps.map((s, i) => (
            <div key={i} style={{ position: "relative" }}>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div style={{
                  position: "absolute",
                  top: 32,
                  right: -12,
                  width: 24,
                  height: 2,
                  background: "linear-gradient(90deg, rgba(201,144,26,0.5), rgba(201,144,26,0.1))",
                  display: "none", // hide on mobile, shown via media query below
                }} className="step-connector" />
              )}

              <div style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(201,144,26,0.25)",
                borderRadius: 20,
                padding: "32px 24px",
                textAlign: "center",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "rgba(201,144,26,0.12)";
                el.style.borderColor = "rgba(201,144,26,0.5)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "rgba(255,255,255,0.06)";
                el.style.borderColor = "rgba(201,144,26,0.25)";
              }}
              >
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "3.5rem",
                  color: "rgba(201,144,26,0.15)",
                  fontWeight: 700,
                  lineHeight: 1,
                  marginBottom: 4,
                }}>
                  {s.step}
                </div>

                <div style={{
                  fontSize: "2.4rem",
                  marginBottom: 16,
                  lineHeight: 1,
                }}>
                  {s.icon}
                </div>

                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.05rem",
                  color: "var(--gold-light)",
                  fontWeight: 700,
                  marginBottom: 10,
                }}>
                  {s.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.88rem",
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.7,
                }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Caution box */}
        <div style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(232, 184, 75, 0.3)",
          borderRadius: 16,
          padding: "20px 24px",
          display: "flex",
          gap: 16,
          alignItems: "flex-start",
          maxWidth: 600,
          margin: "0 auto",
        }}>
          <span style={{ fontSize: "1.6rem", flexShrink: 0 }}>⚠️</span>
          <div>
            <div style={{
              fontFamily: "var(--font-heading)",
              color: "var(--gold-light)",
              fontWeight: 700,
              marginBottom: 6,
              fontSize: "0.95rem",
            }}>Caution</div>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.82rem",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.7,
            }}>
              For external use only. Avoid contact with eyes. Do not apply on wounds or broken skin.
              Keep out of reach of children. As directed by physician.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .step-connector { display: block !important; }
        }
      `}</style>
    </section>
  );
}
