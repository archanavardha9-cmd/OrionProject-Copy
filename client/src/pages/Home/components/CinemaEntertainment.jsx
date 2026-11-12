import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Clapperboard, Film, Clock, Calendar, Ticket, ArrowUpRight } from 'lucide-react'
import { movies } from '../../../data/movies'

const reelContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const reelItemVariants = {
  hidden: { opacity: 0, x: 25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function CinemaEntertainment() {
  const [tab, setTab] = useState('Now Showing')
  const [selectedMovie, setSelectedMovie] = useState(movies[0])
  const sectionRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const glowY = useTransform(scrollYProgress, [0, 1], [-50, 50])
  const filteredMovies = movies.filter((m) => m.status === tab)

  return (
    <section className="cinema-entertainment-section" id="entertainment" ref={sectionRef}>
      {/* Cinematic purple/violet ambient radiance */}
      <motion.div
        className="cinema-ambient-glow"
        style={{
          y: prefersReducedMotion ? 0 : glowY,
          background: 'radial-gradient(ellipse at 70% 30%, rgba(168, 85, 247, 0.26) 0%, rgba(99, 102, 241, 0.16) 40%, transparent 70%)',
        }}
      />

      <div className="cinema-container">
        {/* Section Header with Noticeable Rise on Scroll */}
        <motion.div
          className="cinema-header-strip"
          initial={{ opacity: 0, y: 80, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <span className="section-eyebrow-badge cinema-badge">
              <Clapperboard size={14} />
              PVR INOX MULTIPLEX · LEVEL 4
            </span>
            <h2 className="section-cinematic-title">
              The Silver Screen.<br />
              <em>State-of-the-Art Cinema.</em>
            </h2>
          </div>

          {/* Toggle Tabs: Now Showing vs Upcoming */}
          <div className="cinema-tab-switch">
            <button
              type="button"
              className={`cinema-tab-pill ${tab === 'Now Showing' ? 'is-active' : ''}`}
              onClick={() => {
                setTab('Now Showing')
                const first = movies.find((m) => m.status === 'Now Showing')
                if (first) setSelectedMovie(first)
              }}
            >
              <Film size={15} />
              <span>Now Showing</span>
            </button>
            <button
              type="button"
              className={`cinema-tab-pill ${tab === 'Upcoming' ? 'is-active' : ''}`}
              onClick={() => {
                setTab('Upcoming')
                const first = movies.find((m) => m.status === 'Upcoming')
                if (first) setSelectedMovie(first)
              }}
            >
              <Calendar size={15} />
              <span>Upcoming Releases</span>
            </button>
          </div>
        </motion.div>

        {/* Feature Spotlight Movie + Film Poster Grid with Dynamic Emergence */}
        <motion.div
          className="cinema-showcase-layout"
          initial={{ opacity: 0, y: 70, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          {/* Left: Featured Movie Spotlight Billboard */}
          <div className="movie-spotlight-card">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMovie.id}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.04, y: -15 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="spotlight-inner"
              >
                <div className="spotlight-poster-wrap">
                  <img
                    src={selectedMovie.poster}
                    alt={selectedMovie.title}
                    className="spotlight-poster-img"
                  />
                  <div className="spotlight-poster-glow" />
                  <span className="spotlight-rating-badge">{selectedMovie.rating}</span>
                </div>

                <div className="spotlight-info-wrap">
                  <span className="spotlight-screen-tag">{selectedMovie.screen}</span>
                  <h3 className="spotlight-title">{selectedMovie.title}</h3>

                  <div className="spotlight-specs-row">
                    <span className="spec-item"><Film size={14} /> {selectedMovie.genre}</span>
                    <span className="spec-item"><Clock size={14} /> {selectedMovie.duration}</span>
                    <span className="spec-item">{selectedMovie.language}</span>
                  </div>

                  <p className="spotlight-synopsis">{selectedMovie.description}</p>

                  <div className="spotlight-credits">
                    <p><strong>Cast:</strong> {selectedMovie.cast}</p>
                    <p><strong>Director:</strong> {selectedMovie.director}</p>
                  </div>

                  <div className="spotlight-showtimes-strip">
                    <span className="showtimes-label">
                      {selectedMovie.status === 'Now Showing' ? 'TODAY SHOWTIMES:' : 'EXPECTED RELEASE:'}
                    </span>
                    <div className="showtimes-pills">
                      {selectedMovie.showtimes.map((time) => (
                        <span key={time} className="showtime-pill">
                          {time}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="spotlight-action-row">
                    <Link to="/entertainment" className="btn-cinema-book">
                      <Ticket size={17} />
                      <span>{selectedMovie.status === 'Now Showing' ? 'Book Tickets at PVR INOX' : 'Set Movie Reminder'}</span>
                    </Link>
                    <Link to="/entertainment" className="btn-cinema-more">
                      <span>More in Entertainment</span>
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Movie Cards Reel with Cascading Emergence */}
          <div className="movie-reel-column">
            <h4 className="movie-reel-heading">
              {tab === 'Now Showing' ? 'IN CINEMAS THIS WEEK' : 'ANTICIPATED BLOCKBUSTERS'}
            </h4>
            <motion.div
              className="movie-reel-list"
              variants={reelContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {filteredMovies.map((movie) => {
                const isSelected = movie.id === selectedMovie.id
                return (
                  <motion.button
                    key={movie.id}
                    type="button"
                    variants={reelItemVariants}
                    className={`movie-reel-item ${isSelected ? 'is-active' : ''}`}
                    onClick={() => setSelectedMovie(movie)}
                  >
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      className="reel-item-thumb"
                    />
                    <div className="reel-item-copy">
                      <div className="reel-item-top">
                        <span className="reel-item-status">{movie.status}</span>
                        <span className="reel-item-duration">{movie.duration}</span>
                      </div>
                      <h5>{movie.title}</h5>
                      <p>{movie.genre}</p>
                      <span className="reel-item-screen">{movie.screen}</span>
                    </div>
                  </motion.button>
                )
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
