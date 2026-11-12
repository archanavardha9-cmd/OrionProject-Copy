import { Building2, Sun, MoveRight } from 'lucide-react'

export default function PreviewArchitecture({ secRef, scrollToSection }) {
  return (
    <section
      ref={secRef}
      className="rsp-section rsp-section-architecture"
      aria-label="Architectural Marvel"
    >
      <div className="rsp-container">
        <div className="rsp-section-header">
          <span className="rsp-badge-tag">
            <Building2 size={13} />
            <span>ARCHITECTURAL MARVEL</span>
          </span>
          <h2 className="rsp-section-title">
            Soaring Light & Sculptural Symmetry
          </h2>
          <p className="rsp-section-lead">
            Designed as an airy, daylight-infused sanctuary. Expansive 30-foot glass skylights illuminate
            polished Italian terrazzo walkways, creating seamless spatial flow between shopping avenues, dining terraces, and leisure arenas.
          </p>
        </div>

        <div className="rsp-arch-grid">
          {/* Visual Showcase Card */}
          <div className="rsp-arch-visual-card">
            <div className="rsp-arch-image-wrap">
              <img
                src="/images/generated/mall-interior.webp"
                alt="Orion Mall Gorakhpur Grand Atrium"
                className="rsp-arch-image"
                loading="lazy"
              />
              <div className="rsp-arch-image-badge">
                <Sun size={14} />
                <span>Natural Daylight Architecture</span>
              </div>
            </div>
            <div className="rsp-arch-visual-meta">
              <h3>Triple-Height Central Atrium</h3>
              <p>
                Floor-to-ceiling glass engineering floods the concourses with soft natural daylight,
                reducing daytime carbon footprint while creating an uplifting social atmosphere.
              </p>
            </div>
          </div>

          {/* Key Architectural Specs & Level Guide */}
          <div className="rsp-arch-info-column">
            <div className="rsp-specs-grid">
              <div className="rsp-spec-card">
                <span className="rsp-spec-number">550K+</span>
                <span className="rsp-spec-title">Sq. Ft. Built-up Space</span>
                <span className="rsp-spec-desc">Fully air-conditioned, expansive retail and leisure promenades</span>
              </div>
              <div className="rsp-spec-card">
                <span className="rsp-spec-number">30 Ft.</span>
                <span className="rsp-spec-title">Glass Atrium Dome</span>
                <span className="rsp-spec-desc">Double-glazed thermal acoustic glass maximizing ambient brightness</span>
              </div>
              <div className="rsp-spec-card">
                <span className="rsp-spec-number">100%</span>
                <span className="rsp-spec-title">Vertical Accessibility</span>
                <span className="rsp-spec-desc">Panoramic glass elevators, 12 high-capacity escalators & wheelchair ramps</span>
              </div>
              <div className="rsp-spec-card">
                <span className="rsp-spec-number">1,200+</span>
                <span className="rsp-spec-title">Smart Parking Bays</span>
                <span className="rsp-spec-desc">Multi-level basement parking with EV fast-chargers and valet services</span>
              </div>
            </div>

            {/* Level Promenade Matrix */}
            <div className="rsp-level-matrix">
              <div className="rsp-level-row" onClick={() => scrollToSection(3)}>
                <span className="rsp-level-pill">L0</span>
                <div className="rsp-level-details">
                  <h4>Ground Floor · Grand Concierge & Luxury</h4>
                  <p>International fashion flagships, fine jewellery & visitor lounge</p>
                </div>
                <MoveRight size={16} className="rsp-level-arrow" />
              </div>

              <div className="rsp-level-row" onClick={() => scrollToSection(3)}>
                <span className="rsp-level-pill">L1</span>
                <div className="rsp-level-details">
                  <h4>First Floor · Haute Couture & Apparel</h4>
                  <p>Premium European runway labels, denim ateliers & footwear</p>
                </div>
                <MoveRight size={16} className="rsp-level-arrow" />
              </div>

              <div className="rsp-level-row" onClick={() => scrollToSection(4)}>
                <span className="rsp-level-pill">L2</span>
                <div className="rsp-level-details">
                  <h4>Second Floor · Beauty, Kids & Gourmet Terrace</h4>
                  <p>Cosmetics, beauty salons, family lifestyle & casual bistros</p>
                </div>
                <MoveRight size={16} className="rsp-level-arrow" />
              </div>

              <div className="rsp-level-row" onClick={() => scrollToSection(5)}>
                <span className="rsp-level-pill">L3</span>
                <div className="rsp-level-details">
                  <h4>Third Floor · PVR INOX & Entertainment</h4>
                  <p>5-screen multiplex cinema, gaming arcade & food court</p>
                </div>
                <MoveRight size={16} className="rsp-level-arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
