"use client";

const ingredients = [
  { name: "Crab Extract", icon: "🦀", benefit: "Core active ingredient for joint repair & pain relief", hero: true },
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
  const heroIngredient = ingredients.find(i => i.hero);
  const regularIngredients = ingredients.filter(i => !i.hero);

  return (
    <section id="ingredients" className="ingredients-section">
      <div className="ingredients-container">
        
        {/* Editorial Section Header */}
        <div className="ingredients-header">
          <div className="section-mini-badge">
            <span className="badge-bullet">●</span> What&apos;s Inside
          </div>
          <h2 className="section-main-heading">Pure Ingredients</h2>
          <p className="section-context-desc">
            Sourced sustainably from nature and prepared according to traditional Ayurvedic methodologies—completely free from synthetic chemicals or fillers.
          </p>
        </div>

        {/* Dynamic Architectural Layout */}
        <div className="ingredients-layout-grid">
          
          {/* HERO CARD: Highlights Crab Extract as the unique selling point */}
          {heroIngredient && (
            <div className="ingredient-hero-card">
              <div className="hero-card-glow" />
              <div className="hero-badge-tag">Key Catalyst</div>
              <div className="hero-icon-shell">{heroIngredient.icon}</div>
              <h3 className="hero-ingredient-name">{heroIngredient.name}</h3>
              <p className="hero-ingredient-desc">{heroIngredient.benefit}</p>
            </div>
          )}

          {/* BOTANICAL GRID: Interactive Cards for supporting herbs */}
          <div className="ingredients-sub-grid">
            {regularIngredients.map((ing, i) => (
              <div key={i} className="botanical-card">
                <div className="botanical-header">
                  <span className="botanical-icon">{ing.icon}</span>
                  <h4 className="botanical-name">{ing.name}</h4>
                </div>
                <p className="botanical-desc">{ing.benefit}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Premium Minimalistic Footer Note Block */}
        <div className="ingredients-trust-banner">
          <div className="banner-content">
            <span className="banner-icon">🌿</span>
            <div className="banner-text">
              <h4>Enriched with secondary therapeutic herbs</h4>
              <p>All items undergo strict quality controls to ensure absolute structural potency and consumer purity.</p>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .ingredients-section {
          --forest: #1E3A2F;
          --gold: #C9901A;
          --cream: #FAF7F2;
          --text-dark: #2B3631;
          --text-muted: #5C6661;

          background-color: #F4EFE6;
          padding: 120px 24px;
          position: relative;
          box-sizing: border-box;
        }

        .ingredients-container {
          max-width: 1140px;
          margin: 0 auto;
          width: 100%;
        }

        .ingredients-header {
          text-align: center;
          margin-bottom: 64px;
          display: flex;
          flex-direction: column;
          align-items: center;
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
          margin-bottom: 16px;
        }

        .badge-bullet {
          color: var(--forest);
          margin-right: 6px;
          font-size: 0.6rem;
        }

        .section-main-heading {
          font-family: var(--font-display), serif;
          font-size: clamp(2.2rem, 4vw, 2.8rem);
          color: var(--forest);
          margin: 0 0 16px 0;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .section-context-desc {
          font-family: var(--font-body), sans-serif;
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin: 0;
          max-width: 540px;
        }

        /* --- Layout Grid Architectural rules --- */
        .ingredients-layout-grid {
          display: grid;
          grid-template-columns: 0.7fr 1.3fr;
          gap: 32px;
          margin-bottom: 48px;
          align-items: stretch;
        }

        /* --- Left Column: Hero Ingredient Display --- */
        .ingredient-hero-card {
          background: linear-gradient(145deg, var(--forest), #142820);
          color: #FFFFFF;
          border-radius: 24px;
          padding: 48px 36px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-shadow: 0 20px 40px rgba(30, 58, 47, 0.15);
        }

        .hero-card-glow {
          position: absolute;
          top: -20%;
          right: -20%;
          width: 80%;
          height: 80%;
          background: radial-gradient(circle, rgba(201, 144, 26, 0.25) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-badge-tag {
          position: absolute;
          top: 24px;
          left: 24px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 0.68rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--gold);
        }

        .hero-icon-shell {
          font-size: 3.5rem;
          margin-bottom: 24px;
          line-height: 1;
        }

        .hero-ingredient-name {
          font-family: var(--font-display), serif;
          font-size: 1.8rem;
          font-weight: 700;
          margin: 0 0 12px 0;
          letter-spacing: 0.01em;
        }

        .hero-ingredient-desc {
          font-family: var(--font-body), sans-serif;
          font-size: 0.95rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }

        /* --- Right Column: Botanical Matrix Sub Grid --- */
        .ingredients-sub-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .botanical-card {
          background: #FFFFFF;
          border: 1px solid rgba(30, 58, 47, 0.03);
          border-radius: 16px;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          box-shadow: 0 4px 15px rgba(30, 58, 47, 0.01);
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .botanical-card:hover {
          border-color: rgba(201, 144, 26, 0.3);
          box-shadow: 0 10px 25px rgba(30, 58, 47, 0.04);
        }

        .botanical-header {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .botanical-icon {
          font-size: 1.2rem;
          line-height: 1;
        }

        .botanical-name {
          font-family: var(--font-heading), serif;
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--forest);
          margin: 0;
        }

        .botanical-desc {
          font-family: var(--font-body), sans-serif;
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin: 0;
        }

        /* --- Trust Banner Container --- */
        .ingredients-trust-banner {
          background: #FFFFFF;
          border-radius: 16px;
          padding: 24px 32px;
          border: 1px solid rgba(30, 58, 47, 0.04);
          box-shadow: 0 10px 30px rgba(0,0,0,0.02);
        }

        .banner-content {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .banner-icon {
          font-size: 1.8rem;
          line-height: 1;
        }

        .banner-text h4 {
          font-family: var(--font-heading), serif;
          font-size: 1rem;
          color: var(--forest);
          margin: 0 0 2px 0;
          font-weight: 600;
        }

        .banner-text p {
          font-family: var(--font-body), sans-serif;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin: 0;
        }

        /* ==========================================================================
           RESPONSIVE STRUCTURAL MEDIA QUERIES (Optimized for Mobile/Tab views)
           ========================================================================== */
        @media (max-width: 1024px) {
          .ingredients-sub-grid {
            grid-template-columns: repeat(2, 1fr); /* 2 columns on intermediate tablets */
          }
        }

        @media (max-width: 768px) {
          .ingredients-section {
            padding: 80px 16px;
          }

          .ingredients-header {
            margin-bottom: 40px;
          }

          .ingredients-layout-grid {
            grid-template-columns: 1fr; /* Stack layout vertically */
            gap: 24px;
          }

          .ingredient-hero-card {
            padding: 36px 24px;
            text-align: center;
            align-items: center;
          }

          .hero-icon-shell {
            font-size: 3rem;
            margin-bottom: 16px;
          }

          .ingredients-sub-grid {
            grid-template-columns: 1fr; /* Native stack execution for optimal phone scanning */
            gap: 12px;
          }

          .botanical-card {
            padding: 20px;
          }

          .ingredients-trust-banner {
            padding: 20px;
          }

          .banner-content {
            flex-direction: column;
            text-align: center;
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
}