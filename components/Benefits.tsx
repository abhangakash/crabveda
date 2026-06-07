"use client";

const benefits = [
  {
    icon: "🦴",
    title: "Relieves Joint Pain & Stiffness",
    desc: "Powerful crab extract penetrates deep into joints, providing long-lasting relief from chronic pain and morning stiffness.",
  },
  {
    icon: "🔥",
    title: "Reduces Inflammation & Swelling",
    desc: "Shallaki and Nirgundi work synergistically to reduce inflammation, bringing down swelling naturally and effectively.",
  },
  {
    icon: "🏃",
    title: "Improves Mobility & Flexibility",
    desc: "Regular use restores range of motion and flexibility, helping you move freely without discomfort.",
  },
  {
    icon: "💪",
    title: "Strengthens Muscles & Joints",
    desc: "Ashwagandha and Devdar fortify joint cartilage and surrounding muscles for long-term strength.",
  },
  {
    icon: "🌿",
    title: "Supports Natural Healing",
    desc: "Mahanarayan Taila and Erand Mool stimulate the body's own healing processes for lasting recovery.",
  },
  {
    icon: "✨",
    title: "Fast-Acting Formula",
    desc: "Feel relief within minutes of application. Clinically crafted Ayurvedic formulation that starts working quickly.",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="section-pad"
      style={{
        background: `
          linear-gradient(180deg, #EDE0C4 0%, #F5EDDA 100%)
        `,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: 4,
        background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
      }} />

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
            Why Choose CrabVeda
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            color: "var(--forest)",
            marginBottom: 12,
            letterSpacing: "0.04em",
          }}>
            Key Benefits
          </h2>
          <div className="gold-divider" />
          <p style={{
            fontFamily: "var(--font-body)",
            color: "var(--text-mid)",
            fontSize: "1rem",
            maxWidth: 520,
            margin: "16px auto 0",
            lineHeight: 1.75,
          }}>
            A unique blend of natural crab extract and time-tested Ayurvedic herbs
            working together to restore your joint health.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
        }}>
          {benefits.map((b, i) => (
            <div
              key={i}
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.85), rgba(253,246,232,0.7))",
                border: "1px solid rgba(201,144,26,0.2)",
                borderRadius: 20,
                padding: "28px 24px",
                transition: "all 0.3s ease",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 12px 40px rgba(30,58,47,0.14)";
                el.style.borderColor = "rgba(201,144,26,0.5)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                el.style.borderColor = "rgba(201,144,26,0.2)";
              }}
            >
              {/* Number badge */}
              <div style={{
                position: "absolute", top: 16, right: 18,
                fontFamily: "var(--font-display)",
                fontSize: "2.5rem",
                color: "rgba(201,144,26,0.1)",
                fontWeight: 700,
                lineHeight: 1,
              }}>
                {String(i + 1).padStart(2, "0")}
              </div>

              <div style={{
                width: 52, height: 52, borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(201,144,26,0.15), rgba(201,144,26,0.08))",
                border: "1.5px solid rgba(201,144,26,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.6rem", marginBottom: 16,
              }}>
                {b.icon}
              </div>

              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.05rem",
                color: "var(--forest)",
                fontWeight: 700,
                marginBottom: 10,
                lineHeight: 1.3,
              }}>
                {b.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.88rem",
                color: "var(--text-mid)",
                lineHeight: 1.75,
              }}>
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
