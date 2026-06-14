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
    <section id="benefits" className="benefits-section">
      <div className="benefits-layout-container">
        
        {/* LEFT COLUMN: Sticky Editorial Header Block */}
        <div className="benefits-header-sticky">
          <div className="section-mini-badge">
            <span className="badge-bullet">●</span> Why Choose CrabVeda
          </div>
          <h2 className="section-main-heading">
            Key Benefits <br className="desktop-only" /> For Your Body
          </h2>
          <p className="section-context-desc">
            A masterfully balanced blend of natural crab extract and time-tested Ayurvedic herbs working systemically to restore structural vitality.
          </p>
          
          {/* Visual trust indicator line */}
          <div className="editorial-accent-line" />
        </div>

        {/* RIGHT COLUMN: Premium Minimalist Card Stream */}
        <div className="benefits-grid-stream">
          {benefits.map((benefit, index) => (
            <div key={index} className="premium-benefit-card">
              {/* Subtle background overlay index tracking */}
              <div className="card-index-watermark">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="card-top-row">
                <div className="benefit-icon-sphere">
                  {benefit.icon}
                </div>
                <h3 className="benefit-card-title">{benefit.title}</h3>
              </div>
              
              <p className="benefit-card-desc">{benefit.desc}</p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        /* --- Architectural Variable Rules --- */
        .benefits-section {
          --forest: #1E3A2F;
          --gold: #C9901A;
          --bg-beige: #FAF7F2;
          --text-dark: #2B3631;
          --text-muted: #5C6661;
          
          background: linear-gradient(180deg, #EDE0C4 0%, var(--bg-beige) 200px, var(--bg-beige) 100%);
          padding: 120px 24px;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }

        .benefits-layout-container {
          max-width: 1140px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 80px;
          align-items: flex-start;
        }

        /* --- Left Column: Sticky Branding Header --- */
        .benefits-header-sticky {
          position: sticky;
          top: 120px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .section-mini-badge {
          display: inline-flex;
          align-items: center;
          background: #FFFFFF;
          color: var(--gold);
          padding: 6px 14px;
          border-radius: 100px;
          font-family: var(--font-body), sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
          border: 1px solid rgba(201, 144, 26, 0.15);
          margin-bottom: 20px;
        }

        .badge-bullet {
          color: var(--forest);
          margin-right: 6px;
          font-size: 0.6rem;
        }

        .section-main-heading {
          font-family: var(--font-display), serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          color: var(--forest);
          line-height: 1.15;
          margin: 0 0 16px 0;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .section-context-desc {
          font-family: var(--font-body), sans-serif;
          font-size: 0.98rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin: 0 0 32px 0;
        }

        .editorial-accent-line {
          width: 60px;
          height: 2px;
          background-color: var(--gold);
          opacity: 0.6;
        }

        /* --- Right Column: Benefit Cards --- */
        .benefits-grid-stream {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .premium-benefit-card {
          background: #FFFFFF;
          border: 1px solid rgba(30, 58, 47, 0.04);
          border-radius: 20px;
          padding: 32px 24px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(30, 58, 47, 0.02);
          transition: all 0.35s cubic-bezier(0.25, 1, 0.5, 1);
          box-sizing: border-box;
        }

        .premium-benefit-card:hover {
          transform: translateY(-4px);
          border-color: rgba(201, 144, 26, 0.3);
          box-shadow: 0 16px 40px rgba(30, 58, 47, 0.07);
        }

        .card-top-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
          position: relative;
          z-index: 2;
        }

        .benefit-icon-sphere {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(201, 144, 26, 0.06);
          border: 1px solid rgba(201, 144, 26, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          flex-shrink: 0;
        }

        .benefit-card-title {
          font-family: var(--font-heading), serif;
          font-size: 1.05rem;
          color: var(--forest);
          font-weight: 600;
          margin: 0;
          line-height: 1.3;
        }

        .benefit-card-desc {
          font-family: var(--font-body), sans-serif;
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
          position: relative;
          z-index: 2;
        }

        .card-index-watermark {
          position: absolute;
          bottom: -10px;
          right: 12px;
          font-family: var(--font-display), serif;
          font-size: 4rem;
          font-weight: 800;
          color: rgba(30, 58, 47, 0.03);
          user-select: none;
          pointer-events: none;
          line-height: 1;
        }

        .desktop-only { display: block; }

        /* ==========================================================================
           TABLET RESPONSIVE PARADIGM (1-Col Matrix Layout)
           ========================================================================== */
        @media (max-width: 992px) {
          .benefits-layout-container {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .benefits-header-sticky {
            position: relative;
            top: 0;
            align-items: center;
            text-align: center;
          }

          .desktop-only { display: none; }
        }

        /* ==========================================================================
           MOBILE NATIVE PARADIGM (Horizontal Edge Swipe Stream)
           ========================================================================== */
        @media (max-width: 640px) {
          .benefits-section {
            padding: 80px 0 80px 0; /* Remove parent padding to let slider snap to edges */
          }

          .benefits-header-sticky {
            padding: 0 20px;
          }

          .section-main-heading {
            font-size: 2.2rem;
          }

          /* Transform layout into a modern touch-friendly carousel track */
          .benefits-grid-stream {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            padding: 10px 20px 30px 20px;
            gap: 16px;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
          }

          /* Hide native scrollbars while keeping execution functional */
          .benefits-grid-stream::-webkit-scrollbar {
            display: none;
          }

          .premium-benefit-card {
            flex: 0 0 85%; /* Shows a preview clip of the next card on-screen */
            scroll-snap-align: start;
            padding: 28px 20px;
            box-shadow: 0 10px 25px rgba(30, 58, 47, 0.04);
          }
          
          .card-index-watermark {
            font-size: 3.5rem;
          }
        }
      `}</style>
    </section>
  );
}