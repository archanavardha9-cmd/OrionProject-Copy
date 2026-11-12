import { ArrowDown, Compass, UtensilsCrossed, Film, MapPin } from 'lucide-react'

export default function PreviewHero({ secRef, scrollToSection }) {
  return (
    <section ref={secRef} className="rsp-section rsp-section-hero" aria-label="Hero Introduction">
      <div className="rsp-hero-container">
        <div className="rsp-eyebrow">
          <span className="rsp-eyebrow-line" />
          <span>EASTERN UTTAR PRADESH'S PREMIER DESTINATION</span>
          <span className="rsp-eyebrow-line" />
        </div>

        <h1 className="rsp-hero-title">
          ORION MALL
          <span className="rsp-hero-subtitle">Gorakhpur's Architectural Landmark</span>
        </h1>

        <p className="rsp-hero-lead">
          Step into a luminous world of international fashion, artisanal dining, and premier entertainment.
          Designed with soaring glass atriums and modern marble galleries to elevate every moment of your visit.
        </p>

        {/* Highlight Metrics */}
        <div className="rsp-hero-metrics">
          <div className="rsp-metric-card">
            <span className="rsp-metric-value">120+</span>
            <span className="rsp-metric-label">Curated Brands</span>
          </div>
          <div className="rsp-metric-card">
            <span className="rsp-metric-value">4</span>
            <span className="rsp-metric-label">Expansive Levels</span>
          </div>
          <div className="rsp-metric-card">
            <span className="rsp-metric-value">5 Screen</span>
            <span className="rsp-metric-label">PVR INOX Multiplex</span>
          </div>
          <div className="rsp-metric-card">
            <span className="rsp-metric-value">1,200+</span>
            <span className="rsp-metric-label">Smart Parking Bays</span>
          </div>
        </div>

        {/* Quick Route Shortcuts */}
        <div className="rsp-hero-actions">
          <button
            type="button"
            className="rsp-btn-primary"
            onClick={() => scrollToSection(3)}
          >
            <Compass size={16} />
            <span>Explore Stores</span>
          </button>
          <button
            type="button"
            className="rsp-btn-secondary"
            onClick={() => scrollToSection(4)}
          >
            <UtensilsCrossed size={16} />
            <span>Dining & Cafés</span>
          </button>
          <button
            type="button"
            className="rsp-btn-secondary"
            onClick={() => scrollToSection(5)}
          >
            <Film size={16} />
            <span>Cinema & Movies</span>
          </button>
          <button
            type="button"
            className="rsp-btn-secondary"
            onClick={() => scrollToSection(9)}
          >
            <MapPin size={16} />
            <span>Plan Visit</span>
          </button>
        </div>

        {/* Interactive Scroll Prompt */}
        <button
          type="button"
          className="rsp-hero-scroll-cue"
          onClick={() => scrollToSection(2)}
          aria-label="Scroll to Section 2"
        >
          <span>Scroll down to enter the atrium</span>
          <ArrowDown size={15} />
        </button>
      </div>
    </section>
  )
}

