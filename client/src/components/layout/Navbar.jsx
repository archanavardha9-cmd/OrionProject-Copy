import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Compass, Menu, X, Clock, MapPin, Sparkles, ChevronRight } from 'lucide-react'
import './Navbar.css'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Stores', path: '/stores' },
  { label: 'Dining', path: '/dining' },
  { label: 'Entertainment', path: '/entertainment' },
  { label: 'Plan Your Visit', path: '/visit' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isExplore = location.pathname === '/explore'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <>
      <header className={`om-navbar ${scrolled ? 'om-navbar-scrolled' : ''}`}>
        <div className="om-container-wide om-nav-inner">
          {/* Brand Logo */}
          <Link to="/" className="om-nav-brand" aria-label="Orion Mall Gorakhpur">
            <span className="om-brand-spark">✦</span>
            <div className="om-brand-text">
              <span className="om-brand-title">ORION</span>
              <span className="om-brand-sub">GORAKHPUR · U.P.</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="om-nav-links" aria-label="Main Navigation">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) => `om-nav-link ${isActive ? 'om-nav-link-active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="om-nav-actions">
            <div className="om-nav-status" title="Orion Mall is open today until 10:30 PM">
              <span className="om-live-dot" />
              <span className="om-status-text">Open Today · 10 AM–10:30 PM</span>
            </div>

            <Link
              to={isExplore ? '/' : '/explore'}
              className="om-btn om-btn-gold om-nav-cta"
            >
              <Compass size={16} className="om-compass-spin" />
              <span>{isExplore ? 'Exit 3D' : '3D Explorer'}</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              className="om-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={`om-mobile-drawer ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
        <div className="om-mobile-backdrop" onClick={() => setIsOpen(false)} />
        <div className="om-mobile-content">
          <div className="om-mobile-top">
            <div className="om-nav-brand">
              <span className="om-brand-spark">✦</span>
              <div className="om-brand-text">
                <span className="om-brand-title">ORION</span>
                <span className="om-brand-sub">GORAKHPUR · U.P.</span>
              </div>
            </div>
            <button
              className="om-mobile-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="om-mobile-status-strip">
            <span className="om-live-dot" />
            <span>Open Daily · 10:00 AM – 10:30 PM</span>
          </div>

          <nav className="om-mobile-links">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) => `om-mobile-link ${isActive ? 'om-mobile-link-active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <span>{item.label}</span>
                <ChevronRight size={18} className="om-mobile-arrow" />
              </NavLink>
            ))}
          </nav>

          <div className="om-mobile-bottom">
            <Link
              to="/explore"
              className="om-btn om-btn-gold om-mobile-explore-btn"
              onClick={() => setIsOpen(false)}
            >
              <Compass size={18} />
              <span>Launch 3D Explorer</span>
            </Link>

            <div className="om-mobile-info">
              <div className="om-mobile-info-item">
                <MapPin size={16} className="om-info-icon" />
                <span>Mohaddipur Main Road, Gorakhpur</span>
              </div>
              <div className="om-mobile-info-item">
                <Clock size={16} className="om-info-icon" />
                <span>Daily 10:00 AM – 10:30 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
