import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Utensils,
  Compass,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Clock,
  Sparkles,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Coffee,
  Pizza,
} from 'lucide-react'
import PageTransition from '../../components/layout/PageTransition'
import { dining } from '../../data/dining'
import './Dining.css'

const diningOutlets = [
  {
    id: 'kfc',
    name: 'KFC',
    category: 'Crispy Chicken & Burgers',
    floor: 'Level 3 · Food Court',
    tagline: 'Finger Lickin’ Good',
    description: 'The world-famous secret recipe of 11 herbs and spices. Enjoy signature hot & crispy chicken buckets, zinger burgers, popcorn chicken, and refreshing Krushers.',
    image: '/images/orion/orion-dining-asian1.webp',
    timing: '11:00 AM – 10:30 PM',
    seating: 'Dine-in & Quick Takeaway',
    highlights: ['Original Recipe Chicken', 'Zinger Burgers', 'Bucket Combos'],
  },
  {
    id: 'burger-king',
    name: 'Burger King',
    category: 'Flame-Grilled Burgers & Sides',
    floor: 'Level 3 · Food Court',
    tagline: 'Taste Is King',
    description: 'Renowned globally for genuine flame-grilled patties. Taste the legendary Whopper, crispy King fries, cheesy bites, and signature thick milkshakes.',
    image: '/images/orion/orion-dining-asian2.webp',
    timing: '11:00 AM – 10:30 PM',
    seating: 'Dine-in & Quick Takeaway',
    highlights: ['Flame-Grilled Whopper', 'Crispy Chicken Tacos', 'King Thick Shakes'],
  },
  {
    id: 'dominos-pizza',
    name: "Domino's Pizza",
    category: 'Artisanal Pizzas & Pasta',
    floor: 'Level 3 · Food Court',
    tagline: 'It’s All About the Crust',
    description: 'Piping hot, hand-stretched pizzas baked fresh to perfection. From classic Cheese Burst and Peppy Paneer to garlic breadsticks and decadent Choco Lava Cake.',
    image: '/images/orion/orion-dining-asian3.webp',
    timing: '11:00 AM – 10:30 PM',
    seating: 'Dine-in & Quick Takeaway',
    highlights: ['Cheese Burst Pizzas', 'Stuffed Garlic Bread', 'Choco Lava Cake'],
  },
]

export default function DiningPage() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [activeFilter, setActiveFilter] = useState('All')

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  return (
    <PageTransition>
      <div className="om-dining-page">
        {/* =========================================================
            1. DINING HERO WITH VIDEO (dining.mp4)
           ========================================================= */}
        <section className="om-dining-hero" aria-label="Dining at Orion Mall">
          <div className="om-container">
            <div className="om-dining-hero-content">
              <span className="om-section-badge">
                <Utensils size={13} />
                <span>LEVEL 3 · FOOD COURT & ROOFTOP PROMENADE</span>
              </span>

              <h1 className="om-dining-hero-title">
                The Orion Gastronomy <em>Promenade</em>
              </h1>

              <p className="om-dining-hero-lead">
                From legendary flame-grilled burgers and piping hot stone-baked pizzas to crispy southern chicken and barista specialities — discover Gorakhpur's grand culinary gathering table.
              </p>

              <div className="om-dining-hero-actions">
                <a href="#outlets" className="om-btn om-btn-gold">
                  <span>Explore Outlets</span>
                  <ArrowRight size={16} />
                </a>
                <Link to="/explore?store=kfc" className="om-btn om-btn-dark">
                  <Compass size={16} />
                  <span>3D Food Court Map</span>
                </Link>
              </div>
            </div>

            {/* Video Showcase Element (dining.mp4) */}
            <div className="om-dining-video-container">
              <div className="om-dining-video-frame">
                <video
                  ref={videoRef}
                  className="om-dining-video-player"
                  src="/videos/dining.mp4"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  aria-label="Orion Mall dining atmosphere video"
                />

                <div className="om-dining-video-overlay" />

                <div className="om-dining-video-ctrls">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="om-video-ctrl-btn"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                    <span>{isPlaying ? 'Pause' : 'Play'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={toggleMute}
                    className="om-video-ctrl-btn"
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    <span>{isMuted ? 'Muted' : 'Sound On'}</span>
                  </button>

                  <div className="om-dining-video-badge">
                    <span className="om-live-dot" />
                    <span>Level 3 · Food Court Atmosphere</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. APPROVED OUTLETS SHOWCASE
           ========================================================= */}
        <section id="outlets" className="om-dining-outlets-section" aria-label="Dining Outlets">
          <div className="om-container">
            <div className="om-dining-section-header">
              <div>
                <span className="om-section-badge">
                  <Sparkles size={13} />
                  <span>APPROVED DINING DESTINATIONS</span>
                </span>
                <h2 className="om-section-title">
                  Curated Flavours, <em>World-Class Standards</em>
                </h2>
                <p className="om-section-subtitle">
                  Each restaurant in our Level 3 Food Court upholds the highest standards of culinary freshness, hygiene, and hospitality.
                </p>
              </div>

              <div className="om-dining-hours-pill">
                <Clock size={16} className="text-amber-600" />
                <div>
                  <strong>Dining Hours Today</strong>
                  <span>11:00 AM – 10:30 PM (Daily)</span>
                </div>
              </div>
            </div>

            {/* Outlets Grid */}
            <div className="om-dining-cards-grid">
              {diningOutlets.map((outlet) => (
                <div key={outlet.id} className="om-dining-card">
                  <div className="om-dining-card-img-wrap">
                    <img
                      src={outlet.image}
                      alt={`${outlet.name} at Orion Mall`}
                      className="om-dining-card-img"
                      loading="lazy"
                    />
                    <span className="om-dining-floor-tag">{outlet.floor}</span>
                  </div>

                  <div className="om-dining-card-body">
                    <div className="om-dining-cat">{outlet.category}</div>
                    <h3 className="om-dining-name">{outlet.name}</h3>
                    <p className="om-dining-tagline">"{outlet.tagline}"</p>
                    <p className="om-dining-desc">{outlet.description}</p>

                    <div className="om-dining-highlights-box">
                      <strong>Signature Specialties:</strong>
                      <div className="om-dining-highlight-chips">
                        {outlet.highlights.map((h, i) => (
                          <span key={i} className="om-highlight-chip">
                            <CheckCircle2 size={12} className="text-emerald-600" />
                            <span>{h}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="om-dining-card-footer">
                      <div className="om-dining-meta-item">
                        <Clock size={14} />
                        <span>{outlet.timing}</span>
                      </div>
                      <Link
                        to={`/explore?store=${outlet.id}`}
                        className="om-btn om-btn-dark om-dining-map-btn"
                      >
                        <Compass size={15} />
                        <span>Locate on 3D Map</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            3. AMBIENCE & FOOD COURT EXPERIENCE
           ========================================================= */}
        <section className="om-dining-ambience-section" aria-label="Food Court Experience">
          <div className="om-container">
            <div className="om-ambience-box">
              <div className="om-ambience-text">
                <span className="om-section-badge emerald">
                  <Sparkles size={13} />
                  <span>THE FOOD COURT EXPERIENCE</span>
                </span>
                <h2 className="om-ambience-title">
                  Designed for Family Gatherings & <em>Quick Bites</em>
                </h2>
                <p className="om-ambience-lead">
                  Spanning the entire central corridor of Level 3, the Orion Mall Food Court features high-ceiling architectural acoustic paneling, expansive natural light, and over 350 comfortable dining seats.
                </p>

                <div className="om-ambience-perks-grid">
                  <div className="om-ambience-perk">
                    <span className="om-perk-icon">🪑</span>
                    <div>
                      <strong>350+ Seating Capacity</strong>
                      <p>Family booths, high-top communal counters, and cozy banquettes.</p>
                    </div>
                  </div>
                  <div className="om-ambience-perk">
                    <span className="om-perk-icon">⚡</span>
                    <div>
                      <strong>Fast Express Service</strong>
                      <p>Instant digital ordering counters and designated pick-up bays.</p>
                    </div>
                  </div>
                  <div className="om-ambience-perk">
                    <span className="om-perk-icon">✨</span>
                    <div>
                      <strong>Spotless Sanitization</strong>
                      <p>Dedicated continuous maintenance staff ensuring impeccable cleanliness.</p>
                    </div>
                  </div>
                  <div className="om-ambience-perk">
                    <span className="om-perk-icon">❄️</span>
                    <div>
                      <strong>Climate Controlled</strong>
                      <p>Central air filtration for optimum freshness and comfort.</p>
                    </div>
                  </div>
                </div>

                <div className="om-ambience-actions">
                  <Link to="/stores" className="om-btn om-btn-gold">
                    <span>View Full Store Directory</span>
                    <ArrowRight size={15} />
                  </Link>
                  <Link to="/visit" className="om-btn om-btn-outline">
                    <span>Plan Your Visit</span>
                  </Link>
                </div>
              </div>

              <div className="om-ambience-visual">
                <img
                  src="/images/orion/orion-dining-asian1.webp"
                  alt="Food court interior at Orion Mall Gorakhpur"
                  className="om-ambience-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
