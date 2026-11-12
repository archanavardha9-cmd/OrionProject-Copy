import { MapPin, Clock, Phone, Mail, Navigation, Car, Train, Plane, ExternalLink } from 'lucide-react'

export default function PreviewVisitorGuide({ secRef }) {
  return (
    <section ref={secRef} className="rsp-section rsp-section-visitor" aria-label="Plan Your Visit">
      <div className="rsp-container">
        <div className="rsp-section-header">
          <span className="rsp-badge-tag">
            <MapPin size={13} />
            <span>VISITOR INFORMATION</span>
          </span>
          <h2 className="rsp-section-title">
            Plan Your Journey to Orion Mall
          </h2>
          <p className="rsp-section-lead">
            Conveniently situated in the prime commercial artery of Mohaddipur, Gorakhpur,
            offering effortless access from all key transit hubs and residential zones.
          </p>
        </div>

        <div className="rsp-visitor-grid">
          {/* Key Timings & Contacts */}
          <div className="rsp-visitor-card">
            <div className="rsp-visitor-card-head">
              <Clock size={18} />
              <h3>Hours of Operation</h3>
            </div>
            <div className="rsp-timing-rows">
              <div className="rsp-timing-row">
                <span className="rsp-timing-label">Retail Boutiques</span>
                <span className="rsp-timing-time">10:00 AM – 10:00 PM</span>
              </div>
              <div className="rsp-timing-row">
                <span className="rsp-timing-label">Restaurants & Terraces</span>
                <span className="rsp-timing-time">11:00 AM – 11:30 PM</span>
              </div>
              <div className="rsp-timing-row">
                <span className="rsp-timing-label">Food Court Kiosks</span>
                <span className="rsp-timing-time">10:30 AM – 11:00 PM</span>
              </div>
              <div className="rsp-timing-row">
                <span className="rsp-timing-label">PVR INOX Multiplex</span>
                <span className="rsp-timing-time">09:30 AM – Midnight (Last Show)</span>
              </div>
            </div>

            <div className="rsp-visitor-contact-info">
              <div className="rsp-contact-item">
                <Phone size={14} />
                <span>Concierge Desk: +91 551 220 8800</span>
              </div>
              <div className="rsp-contact-item">
                <Mail size={14} />
                <span>Guest Services: concierge@orionmallgorakhpur.com</span>
              </div>
            </div>
          </div>

          {/* Commute & Transit Hubs */}
          <div className="rsp-visitor-card">
            <div className="rsp-visitor-card-head">
              <Navigation size={18} />
              <h3>Connectivity & Directions</h3>
            </div>
            <p className="rsp-visitor-address">
              <strong>Orion Mall Gorakhpur</strong>
              <br />
              Civil Lines Road, Mohaddipur, Gorakhpur, Uttar Pradesh 273008, India.
            </p>

            <div className="rsp-transit-list">
              <div className="rsp-transit-item">
                <Train size={16} />
                <div>
                  <strong>Gorakhpur Railway Station</strong>
                  <span>Approx. 4.2 km · 12 mins via Civil Lines Road</span>
                </div>
              </div>
              <div className="rsp-transit-item">
                <Plane size={16} />
                <div>
                  <strong>Gorakhpur Airport (GOP)</strong>
                  <span>Approx. 7.5 km · 18 mins via Gorakhpur-Deoria Hwy</span>
                </div>
              </div>
              <div className="rsp-transit-item">
                <Car size={16} />
                <div>
                  <strong>City Bus Terminal</strong>
                  <span>Approx. 3.8 km · 10 mins direct city transit access</span>
                </div>
              </div>
            </div>

            <div className="rsp-visitor-actions">
              <a
                href="https://maps.google.com/?q=Orion+Mall+Gorakhpur"
                target="_blank"
                rel="noreferrer"
                className="rsp-btn-primary"
              >
                <Navigation size={14} />
                <span>Get Driving Directions</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

