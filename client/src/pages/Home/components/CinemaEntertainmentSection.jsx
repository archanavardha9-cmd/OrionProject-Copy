import { Link } from 'react-router-dom'
import { Film, ArrowRight, Ticket, Gamepad2 } from 'lucide-react'

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

export default function CinemaEntertainmentSection() {
  return (
    <section className="rb-section rb-cinema-section" aria-label="Entertainment and Cinema">
      <div className="rb-container">
        <div className="rb-section-header">
          <span className="rb-badge-tag tag-violet">
            <Film size={13} />
            <span>CINEMA & ENTERTAINMENT</span>
          </span>
          <h2 className="rb-section-title">
            State-of-the-Art Multiplex & Family Gaming
          </h2>
          <p className="rb-section-lead">
            Experience the latest blockbusters in supreme luxury at the 5-screen PVR INOX multiplex,
            or challenge friends at our neon bowling lanes, virtual reality simulators, and Fun City arcade.
          </p>
        </div>

        <div className="rb-cinema-marquee-box">
          {/* Top Row: Multiplex Story & Badges */}
          <div className="rb-cinema-hero-row">
            <div className="rb-cinema-hero-copy">
              <span className="rb-badge-tag tag-violet">PVR INOX LUXURY SCREENS</span>
              <h3>5-Screen Dolby Atmos 4K Laser Multiplex</h3>
              <p>
                Equipped with ultra-luxurious motorized leather recliners, laser crystal projection,
                and personalized butler service delivering handcrafted snacks and refreshments straight to your seat.
              </p>

              <div className="rb-cinema-feature-chips">
                <span className="rb-cinema-chip">4K Laser Projection</span>
                <span className="rb-cinema-chip">Dolby Atmos Spatial Audio</span>
                <span className="rb-cinema-chip">Plush Recliner Auditoriums</span>
                <span className="rb-cinema-chip">In-Seat Gourmet Dining</span>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link to="/entertainment" className="rb-btn rb-btn-primary">
                  <Ticket size={17} />
                  <span>Book Movie Tickets</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Fun City Gaming Zone Spotlight */}
            <div
              style={{
                background: 'linear-gradient(135deg, #ede9fe 0%, #f5f3ff 100%)',
                padding: '34px',
                borderRadius: '20px',
                border: '1px solid rgba(124, 58, 237, 0.2)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <Gamepad2 size={24} color="#7c3aed" />
                <h4 style={{ margin: 0, fontSize: '1.3rem', color: '#0f172a', fontWeight: 700 }}>
                  Fun City & Neon Bowling Arena
                </h4>
              </div>
              <p style={{ margin: '0 0 20px', fontSize: '0.94rem', color: '#334155', lineHeight: 1.6 }}>
                Gorakhpur’s largest indoor entertainment hub featuring multi-lane neon bowling, VR racing rigs,
                bumper cars, prize redemption arcades, and soft-play birthday party zones for children.
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span className="rb-chip" style={{ background: '#ffffff', color: '#7c3aed' }}>6-Lane Bowling</span>
                <span className="rb-chip" style={{ background: '#ffffff', color: '#7c3aed' }}>VR 360 Simulator</span>
                <span className="rb-chip" style={{ background: '#ffffff', color: '#7c3aed' }}>Kids Soft Play</span>
              </div>
            </div>
          </div>

          {/* Bottom Row: Now Showing Carousel */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#0f172a', fontWeight: 700 }}>
                Now Showing at PVR INOX
              </h4>
              <Link to="/entertainment" style={{ color: '#7c3aed', fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none' }}>
                View All Showtimes →
              </Link>
            </div>

            <div className="rb-movies-carousel-grid">
              {nowShowingMovies.map((movie) => (
                <div key={movie.id} className="rb-movie-card">
                  <div className="rb-movie-poster-wrap">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="rb-movie-poster"
                      loading="lazy"
                    />
                  </div>
                  <div className="rb-movie-meta">
                    <h5 className="rb-movie-title">{movie.title}</h5>
                    <div className="rb-movie-genre">{movie.genre} · {movie.rating}</div>
                    <span className="rb-movie-format-tag">{movie.format}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
