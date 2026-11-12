import { Link } from 'react-router-dom'
import { ArrowUpRight, Compass, MapPin, Clock, Phone, Mail, Sparkles, Heart } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="om-footer">
      <div className="om-container om-footer-inner">
        {/* Top Newsletter / Invitation Banner */}
        <div className="om-footer-banner">
          <div className="om-banner-content">
            <span className="om-section-badge dark">
              <Sparkles size={13} />
              <span>THE ORION CIRCLE</span>
            </span>
            <h3 className="om-banner-title">
              Experience the <em>finest moments</em> in Gorakhpur
            </h3>
            <p className="om-banner-desc">
              Discover flagship fashion collections, cinema premieres at PVR INOX, and rooftop dining experiences across six curated levels.
            </p>
          </div>
          <div className="om-banner-actions">
            <Link to="/stores" className="om-btn om-btn-gold">
              Explore Directory
            </Link>
            <Link to="/explore" className="om-btn om-btn-outline-white">
              <Compass size={16} />
              <span>3D Walkthrough</span>
            </Link>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="om-footer-grid">
          {/* Brand Info */}
          <div className="om-footer-col om-footer-brand-col">
            <Link to="/" className="om-footer-brand">
              <span className="om-brand-spark">✦</span>
              <div className="om-brand-text">
                <span className="om-brand-title">ORION</span>
                <span className="om-brand-sub">MALL · GORAKHPUR</span>
              </div>
            </Link>
            <p className="om-footer-about">
              Eastern Uttar Pradesh's premier destination for international retail, multi-cuisine food court, and Dolby Atmos 4K laser cinema. Six levels of wonder designed for the modern lifestyle.
            </p>
            <div className="om-footer-hours-badge">
              <Clock size={16} className="om-footer-badge-icon" />
              <div>
                <strong>Open 7 Days a Week</strong>
                <span>10:00 AM – 10:30 PM (Cinema until late)</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="om-footer-col">
            <h4 className="om-footer-heading">EXPLORE</h4>
            <ul className="om-footer-links">
              <li><Link to="/">Home Overview</Link></li>
              <li><Link to="/stores">All 40+ Stores</Link></li>
              <li><Link to="/dining">Dining & Food Court</Link></li>
              <li><Link to="/entertainment">PVR INOX & Entertainment</Link></li>
              <li><Link to="/visit">Plan Your Visit</Link></li>
              <li>
                <Link to="/explore" className="om-footer-explore-pill">
                  <span>3D Mall Walkthrough</span>
                  <ArrowUpRight size={13} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Approved Flagship Brands */}
          <div className="om-footer-col">
            <h4 className="om-footer-heading">APPROVED BRANDS</h4>
            <div className="om-footer-brands-list">
              <span>Levi's</span>
              <span>Skechers</span>
              <span>Crocs</span>
              <span>Allen Solly</span>
              <span>Peter England</span>
              <span>Being Human</span>
              <span>Pepe Jeans London</span>
              <span>Van Heusen</span>
              <span>W for Woman</span>
              <span>Reebok</span>
              <span>MAX Fashion</span>
              <span>PVR INOX</span>
              <span>KFC</span>
              <span>Burger King</span>
              <span>Domino's Pizza</span>
            </div>
          </div>

          {/* Location & Directions */}
          <div className="om-footer-col">
            <h4 className="om-footer-heading">VISIT THE MALL</h4>
            <div className="om-footer-contact">
              <div className="om-contact-item">
                <MapPin size={18} className="om-contact-icon" />
                <div>
                  <strong>Orion Mall Gorakhpur</strong>
                  <span>Mohaddipur Main Road, Near Radisson Blu</span>
                  <span>Gorakhpur, Uttar Pradesh 273008</span>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Orion+Mall+Mohaddipur+Gorakhpur"
                target="_blank"
                rel="noopener noreferrer"
                className="om-btn om-btn-outline-white om-footer-map-btn"
              >
                <span>Google Maps Directions</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="om-footer-bottom">
          <div className="om-footer-copy">
            © {currentYear} Orion Mall Gorakhpur. All rights reserved.
          </div>
          <div className="om-footer-tagline">
            <span>Six Levels of Architectural Wonder · Mohaddipur, Gorakhpur</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
