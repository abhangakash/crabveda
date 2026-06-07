"use client";

const ingredients = [
  { name: "Crab Extract", icon: "🦀", benefit: "Core active ingredient for joint repair & pain relief" },
  { name: "Mahanarayan Taila", icon: "🫙", benefit: "Ancient Ayurvedic base oil for deep penetration" },
  { name: "Ashwagandha", icon: "🌱", benefit: "Strengthens muscles, reduces fatigue & inflammation" },
  { name: "Shallaki", icon: "🌿", benefit: "Boswellia extract — clinically proven for joint health" },
  { name: "Nirgundi", icon: "🍃", benefit: "Powerful anti-inflammatory for swelling & stiffness" },
  { name: "Rasna", icon: "🌾", benefit: "Traditional herb for arthritis & rheumatic conditions" },
  { name: "Erand Mool", icon: "🌻", benefit: "Castor root for pain relief & improved circulation" },
  { name: "Devdar", icon: "🪵", benefit: "Himalayan cedar for nerve pain & muscle relaxation" },
  { name: "Guggul", icon: "💧", benefit: "Resin that reduces inflammation at a cellular level" },
  { name: "Til Taila", icon: "🌰", benefit: "Sesame oil base for deep tissue absorption" },
];

export default function Ingredients() {
  return (
    <section
      id="ingredients"
      className="section-pad"
      style={{
        background: `
          radial-gradient(ellipse at 30% 50%, rgba(30,58,47,0.06) 0%, transparent 60%),
          linear-gradient(180deg, #F5EDDA 0%, #FDF6E8 100%)
        `,
        position: "relative",
      }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.75rem",
            color: "var(--gold)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}>
            What&apos;s Inside
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            color: "var(--forest)",
            marginBottom: 12,
            letterSpacing: "0.04em",
          }}>
            Pure Ingredients
          </h2>
          <div className="gold-divider" />
          <p style={{
            fontFamily: "var(--font-body)",
            color: "var(--text-mid)",
            fontSize: "1rem",
            maxWidth: 500,
            margin: "16px auto 0",
            lineHeight: 1.75,
          }}>
            Every ingredient is sourced from nature and prepared according to
            traditional Ayurvedic methods — no chemicals, no shortcuts.
          </p>
        </div>

        {/* Ingredients grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 16,
          marginBottom: 40,
        }}>
          {ingredients.map((ing, i) => (
            <div
              key={i}
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(245,237,218,0.6))",
                border: "1px solid rgba(201,144,26,0.18)",
                borderRadius: 16,
                padding: "20px 18px",
                display: "flex",
                gap: 14,
                alignItems: "flex-start",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(201,144,26,0.45)";
                el.style.boxShadow = "0 6px 24px rgba(201,144,26,0.12)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(201,144,26,0.18)";
                el.style.boxShadow = "none";
              }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: "linear-gradient(135deg, var(--forest), var(--forest-mid))",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.2rem", flexShrink: 0,
              }}>
                {ing.icon}
              </div>
              <div>
                <div style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "var(--forest)",
                  marginBottom: 4,
                }}>
                  {ing.name}
                </div>
                <div style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.78rem",
                  color: "var(--text-light)",
                  lineHeight: 1.5,
                }}>
                  {ing.benefit}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div style={{
          textAlign: "center",
          background: "linear-gradient(135deg, var(--forest), var(--forest-mid))",
          borderRadius: 20,
          padding: "28px 32px",
          color: "white",
        }}>
          <div style={{ fontSize: "1.6rem", marginBottom: 10 }}>🌿</div>
          <p style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.05rem",
            fontStyle: "italic",
            color: "var(--gold-light)",
            marginBottom: 8,
          }}>
            &ldquo;+ Other powerful Ayurvedic herbs&rdquo;
          </p>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.88rem",
            color: "rgba(255,255,255,0.75)",
          }}>
            All ingredients sourced naturally. Free from harmful chemicals and adulterants.
          </p>
        </div>
      </div>
    </section>
  );
}
