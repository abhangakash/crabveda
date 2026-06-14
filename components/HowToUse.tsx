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
      {/* Soft Ambient Vector Lighting */}
      <div className="bg-blur-accent-light top-right" />
      <div className="bg-blur-accent-light bottom-left" />

      <div className="ritual-container">
        
        {/* Modern Minimalist Header */}
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
              
              {/* Modern Minimal Horizontal Line */}
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

        {/* Minimalist Editorial Warning Frame */}
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

      <style jsx global>{`
        .ritual-section {
          /* Theme mapping switched to an ultra-modern light luxury palette */
          --bg-main: var(--cream, #FDF6E8);
          --bg-subtle: var(--cream-dark, #F5EDDA);
          --card-base: var(--white, #FFFFFF);
          
          --accent-gold: var(--gold, #C9901A);
          --accent-gold-light: var(--gold-light, #E8B84B);
          --text-main: var(--text-dark, #1A1008);
          --text-sub: var(--text-mid, #4A3520);
          --text-muted-gray: var(--text-light, #7A6040);

          background: linear-gradient(180deg, var(--bg-main) 0%, var(--bg-subtle) 100%) !important;
          padding: 120px 24px;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
          width: 100%;
        }

        /* Subtle glowing warmth overlays */
        .bg-blur-accent-light {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(232, 184, 75, 0.12) 0%, transparent 70%);
          pointer-events: none;
          filter: blur(80px);
        }
        .bg-blur-accent-light.top-right { top: -200px; right: -150px; }
        .bg-blur-accent-light.bottom-left { bottom: -200px; left: -150px; }

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
          background: var(--card-base);
          color: var(--accent-gold);
          padding: 6px 16px;
          border-radius: 100px;
          font-family: var(--font-body), 'Lora', serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border: 1px solid rgba(201, 144, 26, 0.15);
          margin-bottom: 24px;
          box-shadow: 0 2px 12px rgba(26, 16, 8, 0.04);
        }

        .badge-bullet {
          color: var(--accent-gold-light);
          margin-right: 8px;
          font-size: 0.6rem;
        }

        .section-main-heading {
          font-family: var(--font-display), 'Cinzel', serif;
          font-size: clamp(2.4rem, 4.5vw, 3.2rem);
          color: var(--text-main) !important;
          margin: 0 0 20px 0;
          font-weight: 500;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .section-context-desc {
          font-family: var(--font-body), 'Lora', serif;
          font-size: 1.05rem;
          color: var(--text-sub) !important;
          line-height: 1.75;
          margin: 0;
          max-width: 520px;
        }

        /* --- Grid & Layout --- */
        .ritual-timeline-track {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          margin-bottom: 80px;
          position: relative;
        }

        .ritual-timeline-node {
          position: relative;
          width: 100%;
        }

        /* Minimal gold hairline vector link */
        .desktop-vector-line {
          position: absolute;
          top: 44px;
          left: calc(100% - 14px);
          width: calc(100% - 28px);
          height: 1px;
          background: linear-gradient(90deg, rgba(201, 144, 26, 0.25) 0%, rgba(201, 144, 26, 0.05) 100%);
          z-index: 1;
          pointer-events: none;
        }

        /* Ultra-Clean Modern Floating Cards */
        .ritual-interactive-card {
          background: var(--card-base) !important;
          border: 1px solid rgba(26, 16, 8, 0.05);
          border-radius: 16px;
          padding: 40px 28px;
          height: 100%;
          box-sizing: border-box;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          z-index: 2;
          box-shadow: var(--shadow-deep, 0 10px 30px rgba(26, 16, 8, 0.05));
        }

        .ritual-interactive-card:hover {
          border-color: var(--accent-gold-light) !important;
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(201, 144, 26, 0.12);
        }

        .card-top-identity {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 32px;
        }

        .step-count-string {
          font-family: var(--font-display), 'Cinzel', serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--accent-gold-light) !important;
          opacity: 0.6;
          letter-spacing: 0.05em;
        }

        .step-icon-wrapper {
          width: 48px;
          height: 48px;
          background: var(--bg-main);
          border: 1px solid rgba(201, 144, 26, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.35rem;
          box-shadow: inset 0 2px 6px rgba(0,0,0,0.02);
        }

        .step-title-text {
          font-family: var(--font-heading), 'Playfair Display', serif;
          font-size: 1.3rem;
          color: var(--text-main) !important;
          font-weight: 600;
          margin: 0 0 14px 0;
          letter-spacing: 0.01em;
        }

        .step-body-desc {
          font-family: var(--font-body), 'Lora', serif;
          font-size: 0.95rem;
          color: var(--text-muted-gray) !important;
          line-height: 1.7;
          margin: 0;
        }

        /* --- High-End Minimalist Caution Frame --- */
        .ritual-caution-card {
          background: rgba(107, 61, 30, 0.03) !important;
          border: 1px solid rgba(107, 61, 30, 0.12);
          border-radius: 12px;
          padding: 24px 32px;
          display: flex;
          gap: 20px;
          align-items: flex-start;
          max-width: 700px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .caution-icon-shield {
          font-size: 1.35rem;
          line-height: 1;
          background: rgba(107, 61, 30, 0.06);
          padding: 10px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .caution-content-block h4 {
          font-family: var(--font-heading), 'Playfair Display', serif;
          font-size: 1.05rem;
          color: var(--warm-brown, #6B3D1E);
          margin: 0 0 6px 0;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .caution-content-block p {
          font-family: var(--font-body), 'Lora', serif;
          font-size: 0.9rem;
          color: var(--text-sub) !important;
          line-height: 1.65;
          margin: 0;
        }

        /* ==========================================================================
           RESPONSIVE REFINEMENTS
           ========================================================================== */
        @media (max-width: 1024px) {
          .ritual-timeline-track {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
          .desktop-vector-line { display: none; }
        }

        @media (max-width: 680px) {
          .ritual-section {
            padding: 80px 16px;
          }

          .ritual-header {
            margin-bottom: 56px;
          }

          .ritual-timeline-track {
            grid-template-columns: 1fr;
            gap: 0;
            padding-left: 24px;
            border-left: 1px solid rgba(201, 144, 26, 0.2);
            margin-left: 12px;
          }

          .ritual-timeline-node {
            padding-bottom: 32px;
          }

          .ritual-timeline-node:last-child {
            padding-bottom: 40px;
          }

          .ritual-timeline-node::before {
            content: "";
            position: absolute;
            left: -28.5px;
            top: 44px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--accent-gold);
            z-index: 3;
          }

          .ritual-interactive-card {
            padding: 32px 24px;
          }

          .ritual-caution-card {
            padding: 24px;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
}