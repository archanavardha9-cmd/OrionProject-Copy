import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Layers, ArrowRight, CheckCircle2, Navigation } from 'lucide-react'

const floorData = [
  {
    level: 0,
    label: 'Ground Floor',
    code: 'L0',
    title: 'Grand Concierge, Atrium & Luxury Flagships',
    storesCount: 28,
    categoryLead: 'International Fashion, Fine Jewellery & Coffee Lounges',
    keyBrands: ["Levi's", 'Being Human', 'Peter England', 'Tanishq', 'Starbucks', 'Guest Concierge'],
    highlight: 'Central glass atrium with double-height flagships, valet entrance, and primary guest information desk.',
  },
  {
    level: 1,
    label: 'First Floor',
    code: 'L1',
    title: 'Haute Couture & Athleisure Avenue',
    storesCount: 34,
    categoryLead: 'Men & Women Western Wear, Denim, Sportswear & Footwear',
    keyBrands: ['Skechers', 'Allen Solly', 'Reebok', 'Van Heusen', 'ColorPlus', 'Mufti'],
    highlight: 'Continuous balcony promenade overlooking the central atrium with European fashion and footwear flagships.',
  },
  {
    level: 2,
    label: 'Second Floor',
    code: 'L2',
    title: 'Beauty, Family Lifestyle & Terrace Dining',
    storesCount: 32,
    categoryLead: 'Cosmetics, Eyewear, Ethnic Wear, Kids Fashion & Rooftop Bistros',
    keyBrands: ['Crocs', 'Nykaa Luxe', 'Spykar', 'W for Woman', 'The Sky Terrace', 'Dessert Lounges'],
    highlight: 'Luminous open-air dining terrace with panoramic skyline views of Gorakhpur, specialty coffee and beauty salons.',
  },
  {
    level: 3,
    label: 'Third Floor',
    code: 'L3',
    title: 'Multiplex Cinema, Gaming Arena & Food Hall',
    storesCount: 26,
    categoryLead: 'PVR INOX Cinema, UV Glow Bowling, VR Odyssey & 20+ Food Kiosks',
    keyBrands: ['PVR INOX Multiplex', 'Fun City Arcade', 'Neon Bowling', 'Food Court', 'Barbeque Nation'],
    highlight: '5-screen luxury Dolby Atmos cinema with recliner lounges and a 500-seat multi-cuisine global food court.',
  },
]

export default function Preview3DNavigator({ secRef }) {
  const [selectedFloor, setSelectedFloor] = useState(0)
  const current = floorData[selectedFloor]

  return (
    <section ref={secRef} className="rsp-section rsp-section-3d" aria-label="Interactive 3D Floor Explorer">
      <div className="rsp-container">
        <div className="rsp-section-header">
          <span className="rsp-badge-tag">
            <Layers size={13} />
            <span>INTERACTIVE LEVEL DIRECTORY</span>
          </span>
          <h2 className="rsp-section-title">
            Explore All 4 Levels with Spatial Precision
          </h2>
          <p className="rsp-section-lead">
            Navigate through our 4 expansive floors. Select any level to inspect key flagship brands,
            dining terraces, cinema auditoriums, and smart wayfinding routes.
          </p>
        </div>

        <div className="rsp-floor-explorer-layout">
          {/* Level Switcher Tab Rail */}
          <div className="rsp-floor-pills-bar" role="tablist">
            {floorData.map((floor, idx) => (
              <button
                key={floor.level}
                type="button"
                className={`rsp-floor-tab-btn ${selectedFloor === idx ? 'is-active' : ''}`}
                onClick={() => setSelectedFloor(idx)}
                role="tab"
                aria-selected={selectedFloor === idx}
              >
                <span className="rsp-tab-code">{floor.code}</span>
                <span className="rsp-tab-name">{floor.label}</span>
              </button>
            ))}
          </div>

          {/* Interactive 3D Perspective Stage */}
          <div className="rsp-floor-visual-stage">
            {/* Visual 3D perspective floor plate representation */}
            <div className="rsp-3d-canvas-card">
              <div className="rsp-3d-floor-plate-wrap">
                <div className={`rsp-3d-floor-slab slab-${current.code.toLowerCase()}`}>
                  <div className="rsp-slab-grid">
                    <div className="rsp-slab-hotspot hs-atrium">
                      <span className="rsp-hotspot-pin" />
                      <span className="rsp-hotspot-label">Central Atrium Void</span>
                    </div>
                    <div className="rsp-slab-hotspot hs-retail">
                      <span className="rsp-hotspot-pin" />
                      <span className="rsp-hotspot-label">Retail Promenades</span>
                    </div>
                    <div className="rsp-slab-hotspot hs-lifts">
                      <span className="rsp-hotspot-pin" />
                      <span className="rsp-hotspot-label">Panoramic Glass Lifts</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rsp-3d-stage-overlay">
                <span className="rsp-stage-active-badge">{current.code} · {current.label}</span>
                <span className="rsp-stage-stores-badge">{current.storesCount} Destinations</span>
              </div>
            </div>

            {/* Detailed Floor Information Panel */}
            <div className="rsp-floor-info-panel">
              <div className="rsp-floor-panel-header">
                <span className="rsp-floor-eyebrow">{current.categoryLead}</span>
                <h3 className="rsp-floor-panel-title">{current.title}</h3>
                <p className="rsp-floor-panel-desc">{current.highlight}</p>
              </div>

              <div className="rsp-floor-brands-section">
                <span className="rsp-brands-title">Featured Boutiques & Services:</span>
                <div className="rsp-brands-tags-list">
                  {current.keyBrands.map((b, i) => (
                    <span key={i} className="rsp-brand-tag-item">
                      <CheckCircle2 size={13} className="rsp-check-icon" />
                      <span>{b}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="rsp-floor-panel-actions">
                <Link to="/explore" className="rsp-btn-primary">
                  <Navigation size={15} />
                  <span>Launch 3D Mall Explorer</span>
                </Link>
                <Link to="/stores" className="rsp-btn-secondary">
                  <span>View All Stores on {current.code}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
