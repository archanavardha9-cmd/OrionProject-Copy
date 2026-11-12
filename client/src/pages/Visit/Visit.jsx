import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MapPin,
  Clock,
  Car,
  Compass,
  ArrowUpRight,
  ShieldCheck,
  Check,
  Copy,
  Sparkles,
  Phone,
  Mail,
  HelpCircle,
  ChevronDown,
  Building,
  HeartHandshake,
  Baby,
  Wifi,
} from 'lucide-react'
import PageTransition from '../../components/layout/PageTransition'
import './Visit.css'

const faqs = [
  {
    q: 'What are the operating hours of Orion Mall Gorakhpur?',
    a: 'Orion Mall is open 365 days a year, including all national holidays and festival weekends. Retail boutiques operate from 10:00 AM to 10:30 PM daily. The Level 3 Food Court serves hot meals from 11:00 AM to 10:30 PM, and PVR INOX Multiplex runs screenings until approximately 12:30 AM midnight.',
  },
  {
    q: 'Where is Orion Mall located and how do I get there?',
    a: 'Orion Mall is located on Mohaddipur Main Road, right near Radisson Blu in Gorakhpur, UP 273008. It is conveniently situated approximately 4 km (10-15 minutes) from Gorakhpur Junction Railway Station and about 8 km from Mahayogi Gorakhnath Airport (GOP), easily reachable by auto-rickshaw, taxi, or private vehicle.',
  },
  {
    q: 'Is parking available at the mall?',
    a: 'Yes, Orion Mall features a dedicated multi-level covered parking facility accommodating over 500 four-wheelers and two-wheelers. The parking is monitored 24/7 by CCTV security, equipped with automated entry ticketing, and offers valet parking assistance at the main ground-floor atrium gate.',
  },
  {
    q: 'Are accessibility services provided for seniors and guests with disabilities?',
    a: 'Absolutely. Orion Mall is completely barrier-free. We provide wide step-free wheelchair ramps at all entrances, spacious panoramic priority elevators connecting all six levels, dedicated accessible restroom cubicles on every floor, and complimentary wheelchairs available at the Concierge desk.',
  },
  {
    q: 'Are there facilities for parents with toddlers and infants?',
    a: 'Yes, a dedicated, private, and sanitized Mother & Child Nursing Room is located on the Second Floor (Women & Kids fashion wing), equipped with changing counters, comfortable feeding chairs, and warm water sanitization facilities.',
  },
  {
    q: 'How can I book movie tickets for PVR INOX?',
    a: 'You can purchase tickets directly at the Level 4 PVR INOX Box Office counters or book advance seats online via the official PVR Cinemas app and website.',
  },
]

export default function VisitPage() {
  const [copied, setCopied] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  const mallAddress = 'Mohaddipur Main Road, Near Radisson Blu, Gorakhpur, Uttar Pradesh 273008'

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(mallAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <PageTransition>
      <div className="om-visit-page">
        {/* =========================================================
            1. VISIT HERO
           ========================================================= */}
        <section className="om-visit-hero" aria-label="Plan Your Visit to Orion Mall">
          <div className="om-container">
            <div className="om-visit-hero-content">
              <span className="om-section-badge">
                <Compass size={13} />
                <span>GUEST SERVICES & TRANSIT GUIDE</span>
              </span>

              <h1 className="om-visit-hero-title">
                We’re Ready to <em>Welcome You</em>
              </h1>

              <p className="om-visit-hero-lead">
                Everything you need to plan a seamless journey to Gorakhpur's premier lifestyle destination. Confirmed operating hours, transit directions, and world-class guest hospitality.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. LOCATION & HOURS CARDS (SPLIT LAYOUT)
           ========================================================= */}
        <section className="om-visit-key-info-section" aria-label="Location and Hours">
          <div className="om-container">
            <div className="om-key-info-grid">
              {/* Address Card */}
              <div className="om-info-card om-address-card">
                <div className="om-card-header-icon">
                  <MapPin size={24} />
                </div>
                <span className="om-info-kicker">CENTRAL GORAKHPUR LANDMARK</span>
                <h2 className="om-info-card-title">How to Find Us</h2>
                <p className="om-info-address">{mallAddress}</p>
                <p className="om-info-landmark-note">
                  Prominently positioned on Mohaddipur Main Road right adjacent to Radisson Blu, easily accessible via major transit arteries across Gorakhpur.
                </p>

                <div className="om-address-actions">
                  <a
                    href="https://maps.google.com/?q=Orion+Mall+Mohaddipur+Gorakhpur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="om-btn om-btn-dark"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowUpRight size={16} />
                  </a>

                  <button
                    type="button"
                    onClick={copyAddress}
                    className="om-btn om-btn-outline om-copy-btn"
                  >
                    {copied ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                    <span>{copied ? 'Address Copied!' : 'Copy Address'}</span>
                  </button>
                </div>
              </div>

              {/* Operating Hours Card */}
              <div className="om-info-card om-hours-card">
                <div className="om-card-header-icon">
                  <Clock size={24} />
                </div>
                <span className="om-info-kicker">OPEN DAILY 365 DAYS</span>
                <h2 className="om-info-card-title">Hours of Wonder</h2>

                <div className="om-hours-breakdown">
                  <div className="om-hours-row">
                    <div>
                      <strong>Retail & Boutiques</strong>
                      <span>All 40+ Fashion & Lifestyle Brands</span>
                    </div>
                    <span className="om-hours-badge">10:00 AM – 10:30 PM</span>
                  </div>

                  <div className="om-hours-row">
                    <div>
                      <strong>Level 3 Food Court</strong>
                      <span>KFC, Burger King, Domino's & Dining</span>
                    </div>
                    <span className="om-hours-badge">11:00 AM – 10:30 PM</span>
                  </div>

                  <div className="om-hours-row">
                    <div>
                      <strong>Level 4 PVR INOX Multiplex</strong>
                      <span>Morning to Late Night Screenings</span>
                    </div>
                    <span className="om-hours-badge">10:00 AM – 12:30 AM</span>
                  </div>
                </div>

                <div className="om-hours-note">
                  <span className="om-live-dot" />
                  <span>The mall operates continuously on all Sundays, national holidays, and festivals.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            3. AMENITIES & VISITOR SERVICES GRID
           ========================================================= */}
        <section className="om-visit-amenities-section" aria-label="Mall Amenities">
          <div className="om-container">
            <div className="om-amenities-header">
              <span className="om-section-badge emerald">
                <Sparkles size={13} />
                <span>HOSPITALITY STANDARDS</span>
              </span>
              <h2 className="om-section-title">
                Crafted for Your <em>Every Comfort</em>
              </h2>
              <p className="om-section-subtitle">
                From effortless automated parking to barrier-free accessibility, Orion Mall guarantees a safe, civilized, and thoroughly enjoyable environment.
              </p>
            </div>

            <div className="om-amenities-grid">
              <div className="om-amenity-card">
                <div className="om-amenity-icon">
                  <Car size={22} />
                </div>
                <h3>Multi-Level Secure Parking</h3>
                <p>Spacious, automated parking bays for 500+ cars and two-wheelers with round-the-clock security and optional valet service.</p>
              </div>

              <div className="om-amenity-card">
                <div className="om-amenity-icon">
                  <HeartHandshake size={22} />
                </div>
                <h3>100% Barrier-Free Access</h3>
                <p>Wide step-free ramps at all arrival points, priority elevators, and complimentary wheelchairs on call at the concierge.</p>
              </div>

              <div className="om-amenity-card">
                <div className="om-amenity-icon">
                  <Baby size={22} />
                </div>
                <h3>Mother & Child Nursery</h3>
                <p>Private, comfortable nursing and infant care sanctuary located conveniently on Level 2 with diaper-changing stations.</p>
              </div>

              <div className="om-amenity-card">
                <div className="om-amenity-icon">
                  <Wifi size={22} />
                </div>
                <h3>High-Speed Public Wi-Fi</h3>
                <p>Complimentary high-speed wireless connectivity available across all gallerias and dining promenades.</p>
              </div>

              <div className="om-amenity-card">
                <div className="om-amenity-icon">
                  <Building size={22} />
                </div>
                <h3>Interactive Wayfinding</h3>
                <p>Digital kiosks placed strategically on every level to guide you instantly to any store, restroom, or cinema screen.</p>
              </div>

              <div className="om-amenity-card">
                <div className="om-amenity-icon">
                  <ShieldCheck size={22} />
                </div>
                <h3>24/7 Safety & First Aid</h3>
                <p>Trained medical first-responders, continuous CCTV surveillance, and lost-and-found guest coordination.</p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            4. FREQUENTLY ASKED QUESTIONS (ACCORDION)
           ========================================================= */}
        <section className="om-visit-faq-section" aria-label="Frequently Asked Questions">
          <div className="om-container">
            <div className="om-faq-wrapper">
              <div className="om-faq-header">
                <span className="om-section-badge">
                  <HelpCircle size={13} />
                  <span>FAQ & ASSISTANCE</span>
                </span>
                <h2 className="om-section-title">
                  Frequently Asked <em>Questions</em>
                </h2>
                <p className="om-section-subtitle">
                  Got a query about your upcoming trip to Orion Mall? Find confirmed answers to the most common visitor inquiries below.
                </p>
              </div>

              <div className="om-faq-list">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx
                  return (
                    <div
                      key={idx}
                      className={`om-faq-item ${isOpen ? 'is-open' : ''}`}
                    >
                      <button
                        type="button"
                        className="om-faq-question"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        aria-expanded={isOpen}
                      >
                        <span>{faq.q}</span>
                        <ChevronDown size={18} className="om-faq-chevron" />
                      </button>
                      {isOpen && (
                        <div className="om-faq-answer">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            5. FINAL EXPLORER BANNER
           ========================================================= */}
        <section className="om-visit-cta-banner">
          <div className="om-container">
            <div className="om-visit-cta-card">
              <div>
                <span className="om-section-badge dark">
                  <Sparkles size={13} />
                  <span>IMMERSIVE DIGITAL PREVIEW</span>
                </span>
                <h2>Preview the Mall in <em>Interactive 3D</em></h2>
                <p>Walk through Italian terrazzo walkways and locate your favorite storefronts before arriving in person.</p>
              </div>
              <Link to="/explore" className="om-btn om-btn-gold">
                <Compass size={18} />
                <span>Launch 3D Explorer</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
