import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Film,
  Compass,
  Tv,
  Gamepad2,
  Clock,
  Sparkles,
  Ticket,
  Volume2,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
} from 'lucide-react'
import PageTransition from '../../components/layout/PageTransition'
import { movies } from '../../data/movies'
import './Entertainment.css'

export default function EntertainmentPage() {
  const [activeTab, setActiveTab] = useState('Now Showing')

  const filteredMovies = movies.filter((m) => m.status === activeTab)

  return (
    <PageTransition>
      <div className="om-ent-page">
        {/* =========================================================
            1. CINEMA HERO MASTHEAD
           ========================================================= */}
        <section className="om-ent-hero" aria-label="PVR INOX Cinema & Entertainment">
          <div className="om-container">
            <div className="om-ent-hero-inner">
              <span className="om-section-badge dark">
                <Film size={13} />
                <span>LEVEL 4 · PVR INOX MULTIPLEX</span>
              </span>

              <h1 className="om-ent-hero-title">
                Cinematic Wonder in <em>Dolby Atmos & 4K Laser</em>
              </h1>

              <p className="om-ent-hero-lead">
                Step into Eastern Uttar Pradesh's premier multi-screen cinema destination. Immerse yourself in hyper-realistic 4K laser projection, multidimensional Dolby Atmos acoustics, and ultra-luxurious recliner seating.
              </p>

              <div className="om-ent-specs-row">
                <div className="om-spec-pill">
                  <span className="om-spec-dot" />
                  <strong>5 Premium Screens</strong>
                  <span>Audi 1 to Audi 5</span>
                </div>
                <div className="om-spec-pill">
                  <span className="om-spec-dot" />
                  <strong>Dolby Atmos 7.1</strong>
                  <span>Immersive 360° Sound</span>
                </div>
                <div className="om-spec-pill">
                  <span className="om-spec-dot" />
                  <strong>4K Laser Projection</strong>
                  <span>Crisp Contrast & Colour</span>
                </div>
                <div className="om-spec-pill">
                  <span className="om-spec-dot" />
                  <strong>Plush Recliners</strong>
                  <span>Ergonomic Luxury Seating</span>
                </div>
              </div>

              <div className="om-ent-hero-actions">
                <a href="#showtimes" className="om-btn om-btn-gold">
                  <Ticket size={16} />
                  <span>View Today’s Showtimes</span>
                </a>
                <Link to="/explore?store=pvr-inox" className="om-btn om-btn-outline-white">
                  <Compass size={16} />
                  <span>Locate Cinema on 3D Map</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. MOVIE SCHEDULE & POSTERS SHOWCASE
           ========================================================= */}
        <section id="showtimes" className="om-ent-movies-section" aria-label="Movie Showtimes">
          <div className="om-container">
            <div className="om-ent-section-header">
              <div>
                <span className="om-section-badge">
                  <Sparkles size={13} />
                  <span>BOX OFFICE SCHEDULE</span>
                </span>
                <h2 className="om-section-title">
                  Now Showing & <em>Upcoming Premieres</em>
                </h2>
                <p className="om-section-subtitle">
                  Browse verified schedules, audio languages, and showtimes for films currently lighting up our screens at Orion Mall.
                </p>
              </div>

              {/* Status Switcher Tabs */}
              <div className="om-ent-tabs" role="tablist">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'Now Showing'}
                  className={`om-pill-btn ${activeTab === 'Now Showing' ? 'active' : ''}`}
                  onClick={() => setActiveTab('Now Showing')}
                >
                  <span className="om-live-dot" />
                  <span>Now Showing</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'Upcoming'}
                  className={`om-pill-btn ${activeTab === 'Upcoming' ? 'active' : ''}`}
                  onClick={() => setActiveTab('Upcoming')}
                >
                  <Calendar size={13} />
                  <span>Upcoming Premieres</span>
                </button>
              </div>
            </div>

            {/* Movies Grid */}
            <div className="om-ent-movies-grid">
              {filteredMovies.map((movie) => (
                <div key={movie.id} className="om-ent-movie-card">
                  <div className="om-ent-poster-frame">
                    <img
                      src={movie.poster}
                      alt={`${movie.title} official movie poster`}
                      className="om-ent-poster-img"
                      loading="lazy"
                    />
                    <div className="om-ent-rating-tag">{movie.rating}</div>
                    <div className="om-ent-screen-tag">{movie.screen}</div>
                  </div>

                  <div className="om-ent-card-body">
                    <div className="om-ent-genre-row">
                      <span className="om-ent-genre">{movie.genre}</span>
                      <span className="om-ent-duration">{movie.duration}</span>
                    </div>

                    <h3 className="om-ent-movie-title">{movie.title}</h3>
                    <div className="om-ent-lang-badge">
                      <Volume2 size={13} />
                      <span>{movie.language}</span>
                    </div>

                    <p className="om-ent-plot">{movie.description}</p>

                    <div className="om-ent-cast-box">
                      {movie.director && <div><strong>Director:</strong> {movie.director}</div>}
                      {movie.cast && <div><strong>Cast:</strong> {movie.cast}</div>}
                    </div>

                    <div className="om-ent-showtimes-block">
                      <div className="om-showtimes-label">
                        {movie.status === 'Now Showing' ? 'Today’s Showtimes:' : 'Premiere Date:'}
                      </div>
                      <div className="om-showtimes-chips">
                        {movie.showtimes.map((time, idx) => (
                          <span key={idx} className="om-showtime-chip">
                            {time}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="om-ent-card-actions">
                      <a
                        href="https://www.pvrcinemas.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="om-btn om-btn-dark om-book-btn"
                      >
                        <Ticket size={15} />
                        <span>Book on PVR INOX</span>
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            3. ARCADE & FAMILY ENTERTAINMENT ZONE
           ========================================================= */}
        <section className="om-ent-arcade-section" aria-label="Family Entertainment and Gaming">
          <div className="om-container">
            <div className="om-arcade-card">
              <div className="om-arcade-text">
                <span className="om-section-badge emerald">
                  <Gamepad2 size={13} />
                  <span>FAMILY ENTERTAINMENT</span>
                </span>
                <h2 className="om-arcade-title">
                  The Orion Gaming Zone & <em>Arcade Arena</em>
                </h2>
                <p className="om-arcade-lead">
                  Next door to the cinema, the Orion Game Zone brings together next-generation VR simulators, ten-pin bowling lanes, bumper cars, and modern interactive arcade games for all age groups.
                </p>

                <div className="om-arcade-perks-grid">
                  <div className="om-arcade-perk">
                    <span className="om-perk-emoji">🎳</span>
                    <div>
                      <strong>Ten-Pin Bowling Lanes</strong>
                      <p>Automated scoring, neon mood lighting, and family spectator lounges.</p>
                    </div>
                  </div>
                  <div className="om-arcade-perk">
                    <span className="om-perk-emoji">🕶️</span>
                    <div>
                      <strong>VR 360° Simulators</strong>
                      <p>High-adrenaline virtual reality rollercoasters and aerial flight rigs.</p>
                    </div>
                  </div>
                  <div className="om-arcade-perk">
                    <span className="om-perk-emoji">🕹️</span>
                    <div>
                      <strong>Prize & Retro Arcades</strong>
                      <p>Classic racing cockpits, basketball hoops, and ticket redemption prizes.</p>
                    </div>
                  </div>
                  <div className="om-arcade-perk">
                    <span className="om-perk-emoji">🍿</span>
                    <div>
                      <strong>Cinema Gourmet Treats</strong>
                      <p>Hot butter popcorn, cheesy nachos, and specialty cold beverages.</p>
                    </div>
                  </div>
                </div>

                <div className="om-arcade-actions">
                  <Link to="/explore?store=pvr-inox" className="om-btn om-btn-dark">
                    <Compass size={16} />
                    <span>Locate on 3D Map</span>
                  </Link>
                  <Link to="/visit" className="om-btn om-btn-outline">
                    <span>Plan Your Visit</span>
                  </Link>
                </div>
              </div>

              <div className="om-arcade-visual">
                <img
                  src="/images/orion/orion-gamezone.webp"
                  alt="Orion Mall Family Game Zone"
                  className="om-arcade-img"
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
