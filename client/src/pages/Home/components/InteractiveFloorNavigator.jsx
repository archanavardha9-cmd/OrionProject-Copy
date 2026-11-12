import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Layers, Compass, ArrowRight, CheckCircle2 } from 'lucide-react'

const floorData = [
  {
    code: 'B1',
    label: 'Basement Level 01',
    subtitle: 'Valet Drop-off, Smart Parking & EV Fast Charging Hub',
    description: 'Direct covered access with over 1,200 automated sensor parking bays, 12 ultra-fast EV DC charging plugs, and professional valet lounge.',
    brandCount: '1,200+ Parking Bays',
    anchors: ['Smart Valet Concierge', '12x EV Superchargers', 'Luggage Check-in', 'Car Spa & Detailing'],
  },
  {
    code: 'L0',
    label: 'Ground Level — Concourse',
    subtitle: 'Arrival Promenade, Concierge & Anchor Department Stores',
    description: 'Magnificent soaring entry portico housing multi-brand anchor department stores, lifestyle accessories, and guest assistance lounges.',
    brandCount: '28 Flagship Outlets',
    anchors: ['Shoppers Stop Anchor', 'Lifestyle', 'Guest Services Desk', 'Atrium Café'],
  },
  {
    code: 'L1',
    label: 'Level 01 — Haute Couture',
    subtitle: 'International Fashion Flagships, Fine Jewellery & Beauty',
    description: 'Eastern UP’s premier luxury promenade featuring Zara, Marks & Spencer, Sephora, Tanishq, Tommy Hilfiger, and luxury timepieces.',
    brandCount: '36 Luxury Boutiques',
    anchors: ['Zara Flagship', 'Marks & Spencer', 'Sephora Beauté', 'Tanishq Fine Jewels', 'Tommy Hilfiger'],
  },
  {
    code: 'L2',
    label: 'Level 02 — High Street',
    subtitle: 'Contemporary Fashion, Denim Lounges & Footwear Studios',
    description: 'Vibrant street fashion, denim concepts, and premium footwear collections with personal alteration salons.',
    brandCount: '42 Fashion Outlets',
    anchors: ["Levi's Concept", 'Calvin Klein', 'Skechers', 'Crocs', 'Allen Solly', 'Aldo'],
  },
  {
    code: 'L3',
    label: 'Level 03 — Athleisure & Tech',
    subtitle: 'Sports Gear, Activewear, Kidswear & Electronics Studios',
    description: 'Flagship sports studios, kids entertainment and apparel, plus authorized electronics and computing showrooms.',
    brandCount: '34 Lifestyle Brands',
    anchors: ['Puma Select', 'Adidas Originals', 'Nike Performance', 'Hamleys Toys', 'Apple Imagine Store'],
  },
  {
    code: 'L4',
    label: 'Level 04 — Dining Terraces',
    subtitle: 'The Sky Terraces, Food Hall & Gourmet Restaurants',
    description: 'Over 20 dining pavilions and panoramic rooftop open-air dining terraces overlooking the Gorakhpur cityscape.',
    brandCount: '24 Gourmet Outlets',
    anchors: ['Barbeque Nation', 'The Yellow Chilli', "Haldiram's", 'Costa Coffee', 'Subway', 'KFC'],
  },
  {
    code: 'L5',
    label: 'Level 05 — Entertainment',
    subtitle: 'PVR INOX 5-Screen Laser Multiplex & Fun City Games Arena',
    description: 'World-class cinematic immersion with Dolby Atmos and 4K laser projection, alongside neon bowling lanes and family gaming arcade.',
    brandCount: '5 Multiplex Screens + Arcade',
    anchors: ['PVR INOX Gold Class', 'Dolby Atmos Laser', 'Fun City Arcade', 'Neon Bowling Alleys'],
  },
]

export default function InteractiveFloorNavigator() {
  const [activeFloorCode, setActiveFloorCode] = useState('L1')

  const currentFloor = floorData.find((f) => f.code === activeFloorCode) || floorData[2]

  return (
    <section className="rb-section rb-floor-section" aria-label="Interactive 3D Floor Explorer">
      <div className="rb-container">
        <div className="rb-section-header">
          <span className="rb-badge-tag tag-mint">
            <Layers size={13} />
            <span>INTERACTIVE TIER NAVIGATOR</span>
          </span>
          <h2 className="rb-section-title">
            Six Levels of Wonder & Indulgence
          </h2>
          <p className="rb-section-lead">
            Select any level to inspect its curated mix of world-class brands, dining terraces, and family entertainment amenities.
          </p>
        </div>

        <div className="rb-floor-interactive-hub">
          {/* Left: Floor Selector Stack */}
          <div className="rb-floor-selector-stack">
            {floorData.map((fl) => (
              <button
                key={fl.code}
                type="button"
                className={`rb-floor-stack-btn ${activeFloorCode === fl.code ? 'is-active' : ''}`}
                onClick={() => setActiveFloorCode(fl.code)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span className="rb-floor-code">{fl.code}</span>
                  <div>
                    <div className="rb-floor-label">{fl.label}</div>
                    <div className="rb-floor-brand-count">{fl.brandCount}</div>
                  </div>
                </div>
                <CheckCircle2
                  size={18}
                  color={activeFloorCode === fl.code ? '#059669' : '#cbd5e1'}
                />
              </button>
            ))}
          </div>

          {/* Right: Dynamic Floor Overview & Anchor Badges */}
          <div className="rb-floor-display-stage">
            <div className="rb-floor-display-head">
              <div>
                <span className="rb-badge-tag tag-mint">{currentFloor.code} OVERVIEW</span>
                <h3>{currentFloor.label}</h3>
                <p>{currentFloor.subtitle}</p>
              </div>
            </div>

            <p style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.7, margin: '0 0 20px' }}>
              {currentFloor.description}
            </p>

            <div>
              <strong style={{ fontSize: '0.86rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#059669' }}>
                Key Anchor Spaces & Outlets:
              </strong>
              <div className="rb-floor-anchors-tags">
                {currentFloor.anchors.map((anchor) => (
                  <span key={anchor} className="rb-anchor-tag">
                    {anchor}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/explore" className="rb-btn rb-btn-primary">
                <Compass size={17} />
                <span>Launch 3D Explorer on {currentFloor.code}</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/stores" className="rb-btn rb-btn-secondary">
                <span>View All Stores on {currentFloor.code}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

