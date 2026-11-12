import { Building2, Sun, Compass, Sparkles, Layers } from 'lucide-react'

export default function ArchitecturalIntro() {
  return (
    <section className="rb-section rb-arch-section" aria-label="Architectural Marvel">
      <div className="rb-container">
        <div className="rb-section-header">
          <span className="rb-badge-tag tag-sky">
            <Building2 size={13} />
            <span>ARCHITECTURAL MARVEL</span>
          </span>
          <h2 className="rb-section-title">
            Soaring Light & Sculptural Symmetry
          </h2>
          <p className="rb-section-lead">
            Orion Mall is designed as an airy, daylight-infused sanctuary. Expansive 30-foot glass
            skylights illuminate polished Italian terrazzo walkways, creating seamless spatial flow between
            couture boulevards, dining terraces, and family leisure arenas.
          </p>
        </div>

        <div className="rb-arch-grid">
          {/* Visual Photography Feature */}
          <div className="rb-arch-visual">
            <img
              src="/images/generated/mall-interior.webp"
              alt="Orion Mall Gorakhpur Grand Atrium"
              className="rb-arch-img"
              loading="lazy"
            />
            <div className="rb-arch-overlay-badge">
              <h4>Triple-Height Central Atrium</h4>
              <p>
                Floor-to-ceiling glass engineering floods the concourses with gentle natural daylight,
                reducing the daytime energy footprint while creating an uplifting social atmosphere.
              </p>
            </div>
          </div>

          {/* Architectural Specs List */}
          <div className="rb-arch-specs-list">
            <div className="rb-arch-spec-card">
              <div className="rb-spec-icon-box">
                <Layers size={22} />
              </div>
              <div>
                <h4 className="rb-spec-title">550K+ Sq. Ft. Retail Promenade</h4>
                <p className="rb-spec-desc">
                  Fully climate-controlled multi-tier concourses accommodating over 150 international flagships and dining pavilions.
                </p>
              </div>
            </div>

            <div className="rb-arch-spec-card">
              <div className="rb-spec-icon-box">
                <Sun size={22} />
              </div>
              <div>
                <h4 className="rb-spec-title">30-Foot Glass Skylight Dome</h4>
                <p className="rb-spec-desc">
                  Double-glazed thermal acoustic glass maximizing ambient brightness while maintaining optimal indoor thermal comfort.
                </p>
              </div>
            </div>

            <div className="rb-arch-spec-card">
              <div className="rb-spec-icon-box">
                <Sparkles size={22} />
              </div>
              <div>
                <h4 className="rb-spec-title">Six Curated Experiential Levels</h4>
                <p className="rb-spec-desc">
                  Six distinct vertical zones connected by high-speed panoramic capsule glass elevators and wide escalators.
                </p>
              </div>
            </div>

            <div className="rb-arch-spec-card">
              <div className="rb-spec-icon-box">
                <Compass size={22} />
              </div>
              <div>
                <h4 className="rb-spec-title">Barrier-Free Accessibility</h4>
                <p className="rb-spec-desc">
                  Universal accessibility design with dedicated ramps, tactile guidance, braille signage, and automated portals throughout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

