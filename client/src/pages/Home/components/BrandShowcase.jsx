import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles, MapPin, Award } from 'lucide-react'
import { showcaseBrands } from '../../../data/showcaseBrands'
import { BrandLogos } from '../../../data/brandLogos'

export default function BrandShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const current = showcaseBrands[activeIndex]
  const LogoComponent = BrandLogos[current.logoKey]
  const containerRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const bgParallax = useTransform(scrollYProgress, [0, 1], [-60, 60])
  const stageScale = useTransform(scrollYProgress, [0, 0.4], [0.93, 1])

  const handleNext = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % showcaseBrands.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + showcaseBrands.length) % showcaseBrands.length)
  }

  const handleSelect = (idx) => {
    setDirection(idx > activeIndex ? 1 : -1)
    setActiveIndex(idx)
  }

  return (
    <section className="brand-showcase-section" id="brand-showcase" ref={containerRef}>
      {/* Background Ambient Lighting based on brand accent color with parallax */}
      <motion.div
        className="brand-ambient-glow"
        style={{
          y: prefersReducedMotion ? 0 : bgParallax,
          background: `radial-gradient(ellipse at 50% 40%, ${current.accent}36 0%, rgba(20, 28, 48, 0.4) 50%, transparent 75%)`,
        }}
      />

      <div className="brand-showcase-container">
        {/* Section Header with Noticeable Scroll Emergence */}
        <motion.div
          className="section-eyebrow-wrap text-center"
          initial={{ opacity: 0, y: 80, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-eyebrow-badge">
            <Sparkles size={14} />
            CELEBRATED BRANDS · ICONIC VISIONS
          </span>
          <h2 className="section-cinematic-title">
            The Haute Showcase.<br />
            <em>Curated Elegance.</em>
          </h2>
          <p className="section-cinematic-desc">
            Explore premier national and international fashion houses represented by India's biggest icons—all ready for you at Orion Mall Gorakhpur.
          </p>
        </motion.div>

        {/* Central Cinematic Stage with Layered Motion on Scroll */}
        <motion.div
          className="brand-stage-shell"
          initial={{ opacity: 0, y: 70, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Giant Brand Name in Background with Perspective Scale */}
          <div className="brand-backdrop-typography" aria-hidden="true">
            <AnimatePresence mode="wait">
              <motion.span
                key={current.id}
                initial={{ opacity: 0, scale: 0.88, y: 45 }}
                animate={{ opacity: 0.12, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.1, y: -45 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                style={{ color: current.accent }}
              >
                {current.name.toUpperCase()}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="brand-stage-grid">
            {/* Left: Brand Story & Specifications */}
            <div className="brand-info-column">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: direction * -40, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: direction * 40, y: -20 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="brand-info-card"
                >
                  <div className="brand-meta-tags">
                    <span className="brand-counter">
                      {String(activeIndex + 1).padStart(2, '0')} / {String(showcaseBrands.length).padStart(2, '0')}
                    </span>
                    <span className="brand-floor-badge">
                      <MapPin size={13} /> {current.floorName}
                    </span>
                    <span className="brand-cat-badge">{current.category}</span>
                  </div>

                  <h3 className="brand-headline-name">{current.name}</h3>
                  <p className="brand-headline-tagline">“{current.tagline}”</p>

                  <div className="brand-ambassador-pill">
                    <Award size={16} />
                    <span>Featuring <strong>{current.celebrity}</strong></span>
                  </div>

                  <p className="brand-story-text">{current.story}</p>

                  <div className="brand-cta-wrap">
                    <Link
                      to={`/stores?slug=${current.slug}`}
                      className="btn-brand-visit"
                      style={{
                        background: `linear-gradient(135deg, #ffffff 0%, ${current.accent}25 100%)`,
                        boxShadow: `0 8px 24px ${current.accent}35`,
                      }}
                    >
                      <span>Visit {current.name} Space</span>
                      <ArrowUpRight size={17} />
                    </Link>
                    <Link to="/stores" className="btn-brand-all">
                      <span>View All Brands</span>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Authentic Logo + Celebrity Floating Visual with Rim Light Bloom */}
            <div className="brand-visual-column">
              <div className="brand-visual-stage">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    className="brand-visual-group"
                    initial={{ opacity: 0, scale: 0.92, y: 45 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.05, y: -45 }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Authentic Vector SVG Logo Floating Above Celebrity */}
                    <motion.div
                      className="brand-authentic-logo-wrap"
                      animate={prefersReducedMotion ? {} : { y: [0, -7, 0] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      {LogoComponent ? (
                        <LogoComponent className="brand-authentic-svg" />
                      ) : (
                        <h4 className="brand-fallback-logo">{current.name}</h4>
                      )}
                    </motion.div>

                    {/* Celebrity Model Cutout with Rim Light and Subtle Motion */}
                    <div className="celebrity-figure-wrap">
                      <div
                        className="celebrity-rim-glow"
                        style={{
                          background: `radial-gradient(circle at 50% 60%, ${current.accent}65 0%, transparent 68%)`,
                        }}
                      />
                      <motion.img
                        src={current.image}
                        alt={`${current.celebrity} for ${current.name}`}
                        className="celebrity-clean-img"
                        loading="eager"
                        animate={prefersReducedMotion ? {} : { y: [0, -5, 0] }}
                        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Prev / Next Stage Controls */}
              <div className="brand-nav-arrows">
                <button
                  type="button"
                  className="brand-nav-btn"
                  onClick={handlePrev}
                  aria-label="Previous brand"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="brand-dots-indicator">
                  {showcaseBrands.map((b, i) => (
                    <button
                      key={b.id}
                      type="button"
                      className={`brand-dot ${i === activeIndex ? 'is-active' : ''}`}
                      onClick={() => handleSelect(i)}
                      aria-label={`Jump to ${b.name}`}
                      style={i === activeIndex ? { background: current.accent } : {}}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  className="brand-nav-btn"
                  onClick={handleNext}
                  aria-label="Next brand"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Horizontal Brand Switcher Bar with Noticeable Emergence */}
          <motion.div
            className="brand-selector-rail"
            aria-label="Brand list selector"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.2 }}
          >
            <div className="brand-selector-scroll">
              {showcaseBrands.map((brand, idx) => {
                const isActive = idx === activeIndex
                return (
                  <button
                    key={brand.id}
                    type="button"
                    className={`brand-rail-item ${isActive ? 'is-selected' : ''}`}
                    onClick={() => handleSelect(idx)}
                    style={
                      isActive
                        ? {
                            borderColor: brand.accent,
                            background: `linear-gradient(135deg, ${brand.accent}26 0%, rgba(24, 34, 58, 0.95) 100%)`,
                          }
                        : {}
                    }
                  >
                    <span className="rail-item-num" style={isActive ? { color: brand.accent } : {}}>
                      0{idx + 1}
                    </span>
                    <span className="rail-item-name">{brand.name}</span>
                    <span className="rail-item-celeb">{brand.celebrity}</span>
                  </button>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
