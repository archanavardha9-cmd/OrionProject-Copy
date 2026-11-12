import { Link } from 'react-router-dom'
import { Compass, Sparkles, MapPin, ShoppingBag, ArrowRight } from 'lucide-react'

export default function GrandClosingCTASection() {
  return (
    <section className="rb-section rb-cta-banner-section" aria-label="Grand Invitation">
      <div className="rb-container">
        <div className="rb-cta-content">
          <span className="rb-badge-tag tag-amber" style={{ background: 'rgba(255,255,255,0.95)' }}>
            <Sparkles size={13} color="#d97706" />
            <span>EXPERIENCE ORION TODAY</span>
          </span>

          <h2 className="rb-cta-title">
            Your Premier Lifestyle Destination Awaits
          </h2>

          <p className="rb-cta-lead">
            From premier fashion discoveries and open-air rooftop dining to unforgettable cinema moments
            with family and friends—experience the finest Eastern Uttar Pradesh has to offer.
          </p>

          <div className="rb-cta-actions">
            <Link to="/explore" className="rb-btn rb-btn-primary">
              <Compass size={17} />
              <span>Launch 3D Interactive Explorer</span>
              <ArrowRight size={16} />
            </Link>

            <Link to="/stores" className="rb-btn rb-btn-secondary">
              <ShoppingBag size={17} />
              <span>Browse 150+ Stores</span>
            </Link>

            <Link to="/visit" className="rb-btn rb-btn-secondary">
              <MapPin size={17} />
              <span>Plan Your Visit</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

