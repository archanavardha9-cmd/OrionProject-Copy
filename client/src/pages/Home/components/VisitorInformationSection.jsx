import { Link } from 'react-router-dom'
import { MapPin, Clock, Phone, Mail, Navigation, Plane, Train, Car } from 'lucide-react'

export default function VisitorInformationSection() {
  return (
    <section className="rb-section rb-visitor-section" aria-label="Visitor Information and Guide">
      <div className="rb-container">
        <div className="rb-section-header">
          <span className="rb-badge-tag tag-coral">
            <MapPin size={13} />
            <span>VISITOR INFORMATION</span>
          </span>
          <h2 className="rb-section-title">
            Plan Your Journey to Orion Mall
          </h2>
          <p className="rb-section-lead">
            Conveniently situated along the prime commercial artery of Mohaddipur, Gorakhpur,
            adjacent to Radisson Blu, with seamless connectivity from all major regional hubs.
          </p>
        </div>

        <div className="rb-visitor-grid">
          {/* Card 1: Operating Hours & Guest Services */}
          <div className="rb-visitor-card">
            <div className="rb-visitor-card-head">
              <Clock size={22} color="#ea580c" />
              <h3>Hours of Operation</h3>
            </div>

            <div className="rb-timing-rows">
              <div className="rb-timing-row">
                <span className="rb-timing-label">Retail Boutiques & Stores</span>
                <span className="rb-timing-time">10:00 AM – 10:00 PM</span>
              </div>
              <div className="rb-timing-row">
                <span className="rb-timing-label">Dining Terraces & Rooftops</span>
                <span className="rb-timing-time">11:00 AM – 11:30 PM</span>
              </div>
              <div className="rb-timing-row">
                <span className="rb-timing-label">Epicurean Food Hall</span>
                <span className="rb-timing-time">10:30 AM – 11:00 PM</span>
              </div>
              <div className="rb-timing-row">
                <span className="rb-timing-label">PVR INOX Laser Multiplex</span>
                <span className="rb-timing-time">09:30 AM – Midnight (Last Show)</span>
              </div>
            </div>

            <div style={{ paddingTop: '16px', borderTop: '1px solid #f1f5f9', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: '#334155' }}>
                <Phone size={15} color="#ea580c" />
                <span>Concierge Desk: +91 551 220 8800</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: '#334155' }}>
                <Mail size={15} color="#ea580c" />
                <span>Guest Services: concierge@orionmallgorakhpur.com</span>
              </div>
            </div>
          </div>

          {/* Card 2: Transit Hubs & Commute Times */}
          <div className="rb-visitor-card">
            <div className="rb-visitor-card-head">
              <Navigation size={22} color="#ea580c" />
              <h3>Location & Regional Transit</h3>
            </div>

            <div className="rb-transit-routes-list">
              <div className="rb-transit-item">
                <div className="rb-transit-icon">
                  <Plane size={20} />
                </div>
                <div className="rb-transit-details">
                  <strong>Gorakhpur Airport (GOP)</strong>
                  <span>7.8 km · Approx 16 mins via Airforce Road</span>
                </div>
              </div>

              <div className="rb-transit-item">
                <div className="rb-transit-icon">
                  <Train size={20} />
                </div>
                <div className="rb-transit-details">
                  <strong>Gorakhpur Junction Railway Station</strong>
                  <span>4.2 km · Approx 10 mins via Station Road</span>
                </div>
              </div>

              <div className="rb-transit-item">
                <div className="rb-transit-icon">
                  <Car size={20} />
                </div>
                <div className="rb-transit-details">
                  <strong>Mohaddipur Bus Terminal & Crossroads</strong>
                  <span>1.2 km · Approx 3 mins · Direct Highway Access</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="https://maps.google.com/?q=Orion+Mall+Mohaddipur+Gorakhpur"
                target="_blank"
                rel="noopener noreferrer"
                className="rb-btn rb-btn-primary"
                style={{ flex: 1, textAlign: 'center' }}
              >
                <MapPin size={16} />
                <span>Open in Google Maps</span>
              </a>
              <Link to="/visit" className="rb-btn rb-btn-secondary" style={{ flex: 1, textAlign: 'center' }}>
                <span>Detailed Visitor Guide</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
