"use client";

const steps = [
  {
    step: "01",
    icon: "🖐️",
    title: "Dispense Oil",
    desc: "Pour a generous amount of CrabVeda therapeutic oil into the palm of your hand.",
  },
  {
    step: "02",
    icon: "💆",
    title: "Target the Area",
    desc: "Apply directly onto the localized joint or muscle zone requiring deep comfort.",
  },
  {
    step: "03",
    icon: "🔄",
    title: "Massage Deeply",
    desc: "Work in gentle, circular paths for 10–15 minutes until completely absorbed.",
  },
  {
    step: "04",
    icon: "⏰",
    title: "Daily Ritual",
    desc: "Repeat consistently twice daily—both morning and evening—for optimal healing.",
  },
];

export default function HowToUse() {
  return (
    <section id="how-to-use" className="ritual-section">
      {/* Editorial Structural Canvas Accents */}
      <div className="bg-blur-accent top-right" />
      <div className="bg-blur-accent bottom-left" />

      <div className="ritual-container">
        
        {/* Minimalist Centered Header */}
        <div className="ritual-header">
          <div className="section-mini-badge">
            <span className="badge-bullet">●</span> Application Guide
          </div>
          <h2 className="section-main-heading">The Healing Ritual</h2>
          <p className="section-context-desc">
            Follow these essential daily steps to unlock the full therapeutic bio-potency of CrabVeda oil.
          </p>
        </div>

        {/* Process Flow Line Track Wrapper */}
        <div className="ritual-timeline-track">
          {steps.map((s, i) => (
            <div key={i} className="ritual-timeline-node">
              
              {/* Desktop Connecting Line Engine */}
              {i < steps.length - 1 && <div className="desktop-vector-line" />}

              <div className="ritual-interactive-card">
                <div className="card-top-identity">
                  <span className="step-count-string">{s.step}</span>
                  <div className="step-icon-wrapper">{s.icon}</div>
                </div>

                <h3 className="step-title-text">{s.title}</h3>
                <p className="step-body-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Glassmorphic Caution Frame */}
        <div className="ritual-caution-card">
          <div className="caution-icon-shield">⚠️</div>
          <div className="caution-content-block">
            <h4>Safety Directive</h4>
            <p>
              Formulated exclusively for external application. Restrict from open wounds, broken dermis layers, or ocular contact zones. Store responsibly out of direct solar heat and child access.
            </p>
          </div>
        </div>

      </div>

      <style>{`
        .ritual-section {
          --forest: #1E3A2F;
          --gold-bright: #E3B24D;
          --gold-fade: rgba(227, 178, 77, 0.15);
          --text-light-muted: rgba(255, 255, 255, 0.7);

          background: linear-gradient(180deg, #162B23 0%, var(--forest) 100%);
          padding: 120px 24px;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }

        /* --- Ambient Atmospheric Lighting FX --- */
        .bg-blur-accent {
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201, 144, 26, 0.08) 0%, transparent 70%);
          pointer-events: none;
          filter: blur(40px);
        }
        .bg-blur-accent.top-right { top: -100px; right: -100px; }
        .bg-blur-accent.bottom-left { bottom: -100px; left: -100px; }

        .ritual-container {
          max-width: 1140px;
          margin: 0 auto;
          width: 100%;
        }

        .ritual-header {
          text-align: center;
          margin-bottom: 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .section-mini-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.05);
          color: var(--gold-bright);
          padding: 6px 14px;
          border-radius: 100px;
          font-family: var(--font-body), sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border: 1px solid rgba(227, 178, 77, 0.25);
          margin-bottom: 16px;
          backdrop-filter: blur(4px);
        }

        .badge-bullet {
          color: #FFFFFF;
          margin-right: 6px;
          font-size: 0.6rem;
        }

        .section-main-heading {
          font-family: var(--font-display), serif;
          font-size: clamp(2.2rem, 4vw, 2.8rem);
          color: #FFFFFF;
          margin: 0 0 16px 0;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .section-context-desc {
          font-family: var(--font-body), sans-serif;
          font-size: 1rem;
          color: var(--text-light-muted);
          line-height: 1.65;
          margin: 0;
          max-width: 480px;
        }

        /* --- Timeline Grid System --- */
        .ritual-timeline-track {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 64px;
          position: relative;
        }

        .ritual-timeline-node {
          position: relative;
          width: 100%;
        }

        /* Desktop Horizontal Step Connectors */
        .desktop-vector-line {
          position: absolute;
          top: 44px;
          left: calc(100% - 12px);
          width: calc(100% - 24px);
          height: 1px;
          background: linear-gradient(90deg, rgba(227, 178, 77, 0.3) 0%, rgba(227, 178, 77, 0.05) 100%);
          z-index: 1;
          pointer-events: none;
        }

        .ritual-interactive-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          padding: 32px 24px;
          height: 100%;
          box-sizing: border-box;
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          position: relative;
          z-index: 2;
        }

        .ritual-interactive-card:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(227, 178, 77, 0.4);
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
        }

        .card-top-identity {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .step-count-string {
          font-family: var(--font-display), serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: rgba(227, 178, 77, 0.3);
          letter-spacing: -0.02em;
        }

        .step-icon-wrapper {
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
        }

        .step-title-text {
          font-family: var(--font-heading), serif;
          font-size: 1.15rem;
          color: #FFFFFF;
          font-weight: 600;
          margin: 0 0 12px 0;
        }

        .step-body-desc {
          font-family: var(--font-body), sans-serif;
          font-size: 0.88rem;
          color: var(--text-light-muted);
          line-height: 1.6;
          margin: 0;
        }

        /* --- Premium Micro-Glass Caution Banner --- */
        .ritual-caution-card {
          background: rgba(227, 178, 77, 0.03);
          border: 1px solid rgba(227, 178, 77, 0.15);
          backdrop-filter: blur(8px);
          border-radius: 16px;
          padding: 24px 32px;
          display: flex;
          gap: 20px;
          align-items: flex-start;
          max-width: 680px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .caution-icon-shield {
          font-size: 1.5rem;
          line-height: 1;
          background: rgba(227, 178, 77, 0.1);
          padding: 10px;
          border-radius: 12px;
          flex-shrink: 0;
        }

        .caution-content-block h4 {
          font-family: var(--font-heading), serif;
          font-size: 1rem;
          color: var(--gold-bright);
          margin: 0 0 4px 0;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .caution-content-block p {
          font-family: var(--font-body), sans-serif;
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
          margin: 0;
        }

        /* ==========================================================================
           TAB & MOBILE STRUCTURAL OPTIMIZATIONS (Ensuring strict responsive safety)
           ========================================================================== */
        @media (max-width: 1024px) {
          .ritual-timeline-track {
            grid-template-columns: repeat(2, 1fr); /* Clean 2x2 grid matrix on iPads */
            gap: 20px;
          }
          .desktop-vector-line { display: none; } /* Drop horizontal tracks safely */
        }

        @media (max-width: 680px) {
          .ritual-section {
            padding: 80px 16px;
          }

          .ritual-header {
            margin-bottom: 48px;
          }

          /* Transform Timeline into a vertical milestone line track */
          .ritual-timeline-track {
            grid-template-columns: 1fr;
            gap: 0; /* Remove gaps to maintain vertical flow unity */
            padding-left: 20px;
            border-left: 1px solid rgba(227, 178, 77, 0.15); /* Elegant timeline vertical spine */
            margin-left: 12px;
          }

          .ritual-timeline-node {
            padding-bottom: 32px;
          }

          .ritual-timeline-node:last-child {
            padding-bottom: 40px; /* Spacing accent prior to the caution card */
          }

          /* Small node indicator bullet on the left spine line */
          .ritual-timeline-node::before {
            content: "";
            position: absolute;
            left: -24px;
            top: 36px;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: var(--gold-bright);
            box-shadow: 0 0 10px var(--gold-bright);
            z-index: 3;
          }

          .ritual-interactive-card {
            padding: 24px 20px;
            background: rgba(255, 255, 255, 0.02);
          }

          .card-top-identity {
            margin-bottom: 16px;
          }

          .ritual-caution-card {
            padding: 20px;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          
          .caution-icon-shield {
            padding: 8px;
          }
        }
      `}</style>
    </section>
  );
}