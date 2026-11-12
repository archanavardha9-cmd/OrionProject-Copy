import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { Sparkles, Compass, MapPin, ArrowRight, Layers } from 'lucide-react'
import { Link } from 'react-router-dom'

const architecturalPillars = [
  {
    id: 'atrium',
    num: '01',
    tag: 'GRAND ARCHITECTURE',
    title: 'The Central Skylit Atrium',
    desc: 'Soaring multi-tiered atrium with panoramic glass walkways designed to welcome natural illumination throughout the mall.',
    image: '/images/homepage/mall-atrium.webp',
    level: 'Levels G through F4',
    highlight: 'Multi-tiered glass architecture and open shopping concourses',
    accent: '#d4af37',
  },
  {
    id: 'fashion',
    num: '02',
    tag: 'FASHION & LIFESTYLE',
    title: 'Curated Fashion Avenues',
    desc: 'Explore approved national and international fashion houses spanning everyday casuals, activewear, and celebration couture.',
    image: '/images/homepage/fashion-lifestyle.webp',
    level: 'Levels G, F1 & F2',
    highlight: 'Dedicated footwear, menswear, and womenswear collections',
    accent: '#38bdf8',
  },
  {
    id: 'dining',
    num: '03',
    tag: 'FOOD COURT',
    title: 'Level 3 Food Court',
    desc: 'Featuring renowned quick-service favorites including KFC, Burger King, and Domino’s Pizza in a comfortable dining space.',
    image: '/images/dining/foodcourt.webp',
    level: 'Level F3 · Food Court',
    highlight: 'KFC, Burger King, and Domino’s Pizza',
    accent: '#f97316',
  },
  {
    id: 'cinema',
    num: '04',
    tag: 'ENTERTAINMENT',
    title: 'PVR INOX Multiplex',
    desc: 'Four state-of-the-art auditoriums with digital projection, immersive surround sound, and comfortable seating.',
    image: '/images/entertainment/cinema.webp',
    level: 'Level F4 · Multiplex Zone',
    highlight: '4-screen cinema experience featuring the latest blockbusters',
    accent: '#a855f7',
  },
]

const stackContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const stackItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function MallIntro() {
  const [activeTab, setActiveTab] = useState(0)
  const currentPillar = architecturalPillars[activeTab]
  const sectionRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Dynamic parallax translation
  const bgAuraY = useTransform(scrollYProgress, [0, 1], [-50, 50])

  return (
    <section className="mall-intro-cohesive-section" id="mall-intro" ref={sectionRef}>
      {/* Rich ambient colored glow that shifts with scroll */}
      <motion.div
        className="intro-ambient-rich-glow"
        style={{
          y: prefersReducedMotion ? 0 : bgAuraY,
          background: `radial-gradient(circle at 75% 35%, ${currentPillar.accent}24 0%, transparent 70%)`,
        }}
      />

      <div className="mall-intro-inner-container">
        {/* Section Header with Noticeable Rise on Scroll */}
        <motion.div
          className="section-eyebrow-wrap text-center"
          initial={{ opacity: 0, y: 80, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-eyebrow-badge">
            <Sparkles size={14} />
            ORION MALL GORAKHPUR · MOHADDIPUR
          </span>
          <h2 className="section-cinematic-title">
            Architectural Wonder.<br />
            <em>Unrivalled Experience.</em>
          </h2>
          <p className="section-cinematic-desc">
            Conveniently situated in Mohaddipur, Orion Mall is Gorakhpur’s premier destination for retail, dining, and cinema.
          </p>
        </motion.div>

        {/* Asymmetrical Showcase with Dynamic 3D Perspective Emergence */}
        <motion.div
          className="asymmetric-architectural-stage"
          initial={{ opacity: 0, y: 70, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          {/* Left: Pillars Navigation Stack with Staggered Emergence */}
          <motion.div
            className="pillars-navigation-stack"
            variants={stackContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {architecturalPillars.map((pillar, index) => {
              const isActive = index === activeTab
              return (
                <motion.button
                  key={pillar.id}
                  type="button"
                  variants={stackItemVariants}
                  className={`pillar-selector-strip ${isActive ? 'is-selected' : ''}`}
                  onClick={() => setActiveTab(index)}
                  style={
                    isActive
                      ? {
                          borderColor: pillar.accent,
                          background: `linear-gradient(90deg, rgba(32, 44, 72, 0.95) 0%, ${pillar.accent}20 100%)`,
                          boxShadow: `0 8px 24px ${pillar.accent}28`,
                        }
                      : {}
                  }
                >
                  <div className="pillar-strip-left">
                    <span
                      className="pillar-numeral"
                      style={isActive ? { color: pillar.accent } : {}}
                    >
                      {pillar.num}
                    </span>
                    <div className="pillar-strip-copy">
                      <span className="pillar-badge-tag">{pillar.tag}</span>
                      <h4 className="pillar-strip-title">{pillar.title}</h4>
                      <p className="pillar-strip-level">{pillar.level}</p>
                    </div>
                  </div>
                  <div className="pillar-strip-action">
                    <div
                      className="pillar-indicator-dot"
                      style={isActive ? { background: pillar.accent } : {}}
                    />
                  </div>
                </motion.button>
              )
            })}
          </motion.div>

          {/* Right: Layered Visual Viewport with Depth Scale Reveal */}
          <div className="pillar-visual-layered-stage">
            <AnimatePresence mode="wait">
              <motion.div
            className="layered-image-group"
            key={currentPillar.id}
            initial={{ opacity: 0, scale: 0.94, y: 25 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
                {/* Primary Architectural Visual */}
                <div className="primary-architectural-viewport">
                  <img
                    src={currentPillar.image}
                    alt={currentPillar.title}
                    className="primary-architectural-photo"
                    loading="lazy"
                  />
                  <div className="primary-viewport-gradient" />
                  <span
                    className="primary-viewport-badge"
                    style={{ background: currentPillar.accent }}
                  >
                    {currentPillar.level}
                  </span>
                </div>

                {/* Overlapping Floating Plaque with Soft Glass Finish */}
                <motion.div
                  className="floating-architectural-plaque"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.15 }}
                >
                  <span className="plaque-highlight-label">HIGHLIGHT</span>
                  <p className="plaque-highlight-text">{currentPillar.highlight}</p>
                  <p className="plaque-desc-text">{currentPillar.desc}</p>

                  <div className="plaque-cta-row">
                    <Link to="/explore" className="btn-plaque-explore">
                      <Compass size={16} />
                      <span>Explore 3D Floorplan</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Bottom Architectural Ribbon with Rising Motion on Scroll */}
        <motion.div
          className="cohesive-atrium-ribbon"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="ribbon-content-split">
            <div>
              <span className="ribbon-kicker">ORION MALL GORAKHPUR</span>
              <h3 className="ribbon-headline">A Refined Destination for the Entire Family.</h3>
              <p className="ribbon-paragraph">
                From shopping for everyday wear to family dining and weekend blockbusters at PVR INOX, Orion Mall brings the best of retail and entertainment to Gorakhpur.
              </p>
            </div>
            <div className="ribbon-actions-box">
              <Link to="/explore" className="btn-gold-accent">
                <Layers size={17} />
                <span>Launch Interactive 3D Tour</span>
              </Link>
              <div className="ribbon-location-tag">
                <MapPin size={15} />
                <span>Mohaddipur, Gorakhpur · Near Radisson Blu</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
