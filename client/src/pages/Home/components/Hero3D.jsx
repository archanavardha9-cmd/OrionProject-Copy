import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { Compass, Sparkles, MapPin, ChevronDown } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Hero3D() {
  const prefersReducedMotion = useReducedMotion()
  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  // Subtle parallax on scroll
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0.1])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.06])
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  const scrollToBrandShowcase = (e) => {
    e.preventDefault()
    const target = document.getElementById('brand-showcase')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToMallIntro = (e) => {
    e.preventDefault()
    const target = document.getElementById('mall-intro')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="cinematic-hero-original" ref={heroRef}>
      {/* Real Orion Mall Exterior Dusk Visual - Complete, Uncropped, and Naturally Positioned */}
      <div className="hero-backdrop-environment">
        <motion.div
          className="hero-backdrop-media-wrap"
          style={{
            scale: prefersReducedMotion ? 1 : imageScale,
            y: prefersReducedMotion ? 0 : imageY,
          }}
        >
          <img
            src="/images/homepage/exterior.webp"
            alt="Orion Mall Gorakhpur Architectural Facade at Dusk"
            className="hero-backdrop-complete-photo"
            loading="eager"
          />
        </motion.div>

        {/* Soft, rich twilight directional shading: ensures text legibility on left while keeping mall facade bright on right */}
        <div className="hero-directional-shading" />
        <div className="hero-subtle-twilight-glow" />
        <div className="hero-amber-warmth-glow" />
      </div>

      {/* Foreground Unified Editorial Content with Coordinated Staggered Emergence */}
      <div className="hero-content-shell">
        <motion.div
          className="hero-content-inner"
          style={{
            y: prefersReducedMotion ? 0 : contentY,
            opacity: prefersReducedMotion ? 1 : contentOpacity,
          }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Top Live Badge */}
          <motion.div className="hero-kicker-strip" variants={itemVariants}>
            <span className="hero-live-pill">
              <span className="live-dot-pulse" />
              OPEN TODAY · 10:00 AM – 10:30 PM
            </span>
            <span className="hero-location-pill">
              <MapPin size={13} /> MOHADDIPUR · GORAKHPUR
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 className="hero-title" variants={itemVariants}>
            <span className="hero-title-top">WHERE LUXURY MEETS</span>
            <span className="hero-title-main">GORAKHPUR.</span>
          </motion.h1>

          {/* Synopsis */}
          <motion.p className="hero-synopsis" variants={itemVariants}>
            Gorakhpur’s premier architectural landmark offering world-class retail, celebratory dining, and state-of-the-art PVR INOX entertainment in the heart of Mohaddipur.
          </motion.p>

          {/* CTAs */}
          <motion.div className="hero-cta-group" variants={itemVariants}>
            <Link to="/explore" className="btn-hero-primary">
              <Compass size={18} />
              <span>Explore 3D Mall</span>
            </Link>
            <a
              href="#brand-showcase"
              onClick={scrollToBrandShowcase}
              className="btn-hero-secondary"
            >
              <Sparkles size={18} />
              <span>Browse Celebrity Showcase</span>
            </a>
          </motion.div>

          {/* Bottom Fast Stats */}
          <motion.div className="hero-status-bar" variants={itemVariants}>
            <div className="status-item">
              <span className="status-number">2,00,000+</span>
              <span className="status-label">SQ. FT. RETAIL & LEISURE</span>
            </div>
            <div className="status-divider" />
            <div className="status-item">
              <span className="status-number">4-SCREEN</span>
              <span className="status-label">PVR INOX MULTIPLEX</span>
            </div>
            <div className="status-divider" />
            <div className="status-item">
              <span className="status-number">1,000+</span>
              <span className="status-label">PARKING SPACES</span>
            </div>
            <div className="status-divider" />
            <div className="status-item">
              <span className="status-number">DAILY</span>
              <span className="status-label">10 AM – 10:30 PM</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Scroll Cue */}
      <a
        href="#mall-intro"
        onClick={scrollToMallIntro}
        className="hero-scroll-cue"
        aria-label="Scroll to introduction"
      >
        <span className="scroll-cue-text">SCROLL TO EXPERIENCE</span>
        <div className="scroll-cue-line">
          <ChevronDown size={15} className="scroll-cue-pip-arrow" />
        </div>
      </a>
    </section>
  )
}
