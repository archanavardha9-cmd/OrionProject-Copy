import { Link } from 'react-router-dom'
import { Film, Gamepad2, Ticket, ArrowRight } from 'lucide-react'

const nowShowingMovies = [
  {
    id: 'pushpa-2',
    title: 'Pushpa 2: The Rule',
    genre: 'Action · Drama',
    rating: 'UA 16+',
    image: '/images/entertainment/movies/pushpa-2.webp',
    format: 'Dolby Atmos · 4K Laser',
  },
  {
    id: 'bhool-bhulaiyaa-3',
    title: 'Bhool Bhulaiyaa 3',
    genre: 'Horror · Comedy',
    rating: 'UA',
    image: '/images/entertainment/movies/bhool-bhulaiyaa-3.webp',
    format: 'Dolby 7.1 · Recliner',
  },
  {
    id: 'gladiator-2',
    title: 'Gladiator II',
    genre: 'Action · Epic',
    rating: 'A',
    image: '/images/entertainment/movies/gladiator-2.webp',
    format: 'IMAX Experience · 4K',
  },
  {
    id: 'moana-2',
    title: 'Moana 2',
    genre: 'Animation · Adventure',
    rating: 'U',
    image: '/images/entertainment/movies/moana-2.webp',
    format: '3D Dolby Atmos · Family Screen',
  },
]

export default function PreviewEntertainment({ secRef }) {
  return (
    <section ref={secRef} className="rsp-section rsp-section-entertainment" aria-label="Entertainment and Cinema">
      <div className="rsp-container">
        <div className="rsp-section-header">
          <span className="rsp-badge-tag">
            <Film size={13} />
            <span>CINEMA & ENTERTAINMENT</span>
          </span>
          <h2 className="rsp-section-title">
            State-of-the-Art Multiplex & Gaming Arenas
          </h2>
          <p className="rsp-section-lead">
            Experience the latest blockbusters in supreme luxury at the 5-screen PVR INOX multiplex,
            or challenge friends at our neon bowling lanes, virtual reality simulators, and arcade arenas.
          </p>
        </div>

        {/* Dual Entertainment Showcase: PVR Cinema + Family Game Arena */}
        <div className="rsp-ent-showcase-grid">
          {/* Left: Cinema Experience */}
          <div className="rsp-ent-feature-card">
            <div className="rsp-ent-image-wrap">
              <img
                src="/images/entertainment/cinema.webp"
                alt="PVR INOX Multiplex at Orion Mall"
                className="rsp-ent-image"
                loading="lazy"
              />
              <div className="rsp-ent-badge">
                <Film size={14} />
                <span>PVR INOX Multiplex · Level 03</span>
              </div>
            </div>
            <div className="rsp-ent-card-content">
              <h3>5 Screens of Pure Cinematic Splendor</h3>
              <p>
                Equipped with Dolby Atmos 360-degree immersive surround sound, Christie 4K Laser Projection,
                and ergonomically contoured motorized leather recliners with personal call-button butler service.
              </p>
              <div className="rsp-feature-bullets">
                <span>✓ Dolby Atmos 360° Sound</span>
                <span>✓ Ultra 4K Laser Clarity</span>
                <span>✓ Motorized Recliner Lounges</span>
                <span>✓ Gourmet In-Seat Butler Dining</span>
              </div>
            </div>
          </div>

          {/* Right: Fun City & Bowling */}
          <div className="rsp-ent-feature-card">
            <div className="rsp-ent-image-wrap">
              <img
                src="/images/entertainment/bowling.webp"
                alt="Neon Bowling & Gaming Arcade"
                className="rsp-ent-image"
                loading="lazy"
              />
              <div className="rsp-ent-badge">
                <Gamepad2 size={14} />
                <span>Fun City & VR Arena · Level 03</span>
              </div>
            </div>
            <div className="rsp-ent-card-content">
              <h3>Neon Bowling & Virtual Reality Odyssey</h3>
              <p>
                From 6 full-length UV neon bowling lanes with automated digital scoreboards to 9D motion VR rides,
                arcade claw games, and bumper cars—unlimited excitement for all ages.
              </p>
              <div className="rsp-feature-bullets">
                <span>✓ 6-Lane UV Glow Bowling</span>
                <span>✓ Immersive 9D VR Motion Rides</span>
                <span>✓ 50+ Modern Arcade Games</span>
                <span>✓ Birthday & Party Booking Arena</span>
              </div>
            </div>
          </div>
        </div>

        {/* Now Showing Cinema Reel */}
        <div className="rsp-now-showing-wrap">
          <div className="rsp-now-showing-header">
            <div>
              <span className="rsp-sub-tag">NOW SCREENING</span>
              <h3>Current Blockbusters at PVR INOX</h3>
            </div>
            <Link to="/entertainment" className="rsp-link-arrow">
              <span>View All Showtimes</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="rsp-movie-posters-grid">
            {nowShowingMovies.map((movie) => (
              <div key={movie.id} className="rsp-movie-card">
                <div className="rsp-movie-poster-wrap">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="rsp-movie-poster-img"
                    loading="lazy"
                  />
                  <div className="rsp-movie-format-pill">{movie.format}</div>
                </div>

                <div className="rsp-movie-info">
                  <span className="rsp-movie-rating">{movie.rating}</span>
                  <span className="rsp-movie-genre">{movie.genre}</span>
                  <h4 className="rsp-movie-title">{movie.title}</h4>

                  <Link to="/entertainment" className="rsp-btn-book">
                    <Ticket size={13} />
                    <span>Book Tickets</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
