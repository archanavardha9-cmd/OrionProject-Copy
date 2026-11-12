import { Link } from 'react-router-dom'
import { ArrowUp, Compass, Send } from 'lucide-react'

export default function PreviewFooter({ scrollToSection }) {
  return (
    <footer className="rsp-section rsp-section-footer" aria-label="Footer and Conclusion">
      <div className="rsp-container">
        {/* Grand Portal Banner */}
        <div className="rsp-grand-portal-card">
          <div className="rsp-portal-content">
            <span className="rsp-badge-pill">DISCOVER THE PINNACLE</span>
            <h2>Experience Orion Mall Gorakhpur in Person</h2>
            <p>
              Eastern Uttar Pradesh’s benchmark in high fashion, immersive cinema, and world dining awaits your arrival.
              Join thousands of delighted visitors every day.
            </p>
            <div className="rsp-portal-btns">
              <Link to="/stores" className="rsp-btn-primary">
                <Compass size={15} />
                <span>Explore Full Store Directory</span>
              </Link>
              <button
                type="button"
                className="rsp-btn-secondary"
                onClick={() => scrollToSection(1)}
              >
                <ArrowUp size={15} />
                <span>Back to Arrival</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Links & Newsletter Grid */}
        <div className="rsp-footer-links-grid">
          <div className="rsp-footer-brand-col">
            <div className="rsp-footer-brand">
              <span className="rsp-footer-brand-mark">✳</span>
              <span className="rsp-footer-brand-text">
                ORION<small>GORAKHPUR</small>
              </span>
            </div>
            <p className="rsp-footer-about">
              The premier retail, culinary, and entertainment destination of Eastern Uttar Pradesh.
              Featuring 120+ international flagships, 5-screen PVR INOX multiplex, and panoramic dining terraces.
            </p>
          </div>

          <div className="rsp-footer-nav-col">
            <h4>Quick Navigation</h4>
            <ul>
              <li>
                <button type="button" onClick={() => scrollToSection(1)}>
                  01 · The Arrival
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection(2)}>
                  02 · Architectural Marvel
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection(3)}>
                  03 · Couture Retail
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection(4)}>
                  04 · Dining & Terraces
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection(5)}>
                  05 · PVR INOX Cinema
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection(6)}>
                  06 · 3D Floor Explorer
                </button>
              </li>
            </ul>
          </div>

          <div className="rsp-footer-nav-col">
            <h4>Mall Experiences</h4>
            <ul>
              <li>
                <button type="button" onClick={() => scrollToSection(7)}>
                  07 · Upcoming Events
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection(8)}>
                  08 · Exclusive Offers
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection(9)}>
                  09 · Guest Facilities
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection(10)}>
                  10 · Plan Your Visit
                </button>
              </li>
              <li>
                <Link to="/stores">Complete Directory</Link>
              </li>
              <li>
                <Link to="/explore">3D Mall Explorer</Link>
              </li>
            </ul>
          </div>

          <div className="rsp-footer-newsletter-col">
            <h4>Stay Connected</h4>
            <p>Subscribe for seasonal preview sales, cinema release alerts, and VIP invitations.</p>
            <form className="rsp-newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="rsp-newsletter-input"
                aria-label="Email Address"
              />
              <button type="submit" className="rsp-newsletter-btn" aria-label="Subscribe">
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Legal & Credits */}
        <div className="rsp-footer-bottom-bar">
          <p>© 2026 Orion Mall Gorakhpur. All rights reserved.</p>
          <div className="rsp-footer-legal-links">
            <span>Privacy Policy</span>
            <span>·</span>
            <span>Terms of Service</span>
            <span>·</span>
            <span>Mall Guidelines</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
