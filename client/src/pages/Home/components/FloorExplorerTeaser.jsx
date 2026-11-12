import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Compass, ArrowUpRight, Layers, Store } from 'lucide-react'
import { floors } from '../../../data/floors'
import { storesByFloor } from '../../../data/stores'

const floorVisuals = {
  0: {
    heroStore: "Levi's, Being Human, Max Fashion, Crocs, UCB",
    theme: 'Global Fashion & High-Street Retail',
    accent: '#d4af37',
    image: '/images/mall/ground-floor.webp',
    levelName: 'GROUND LEVEL',
  },
  1: {
    heroStore: 'Allen Solly, Peter England, Pepe Jeans, Skechers, Reebok, Mufti',
    theme: "Men's Sartorial & International Footwear",
    accent: '#38bdf8',
    image: '/images/mall/first-floor.webp',
    levelName: 'FIRST LEVEL',
  },
  2: {
    heroStore: 'W for Woman, Soch, Aurelia, Van Heusen Woman',
    theme: "Women's Ethnic Couture & Western Elegance",
    accent: '#f43f5e',
    image: '/images/mall/second-floor.webp',
    levelName: 'SECOND LEVEL',
  },
  3: {
    heroStore: 'KFC, Burger King, Domino’s Pizza',
    theme: 'Fast Food & Dining Concourse',
    accent: '#f97316',
    image: '/images/dining/foodcourt.webp',
    levelName: 'THIRD LEVEL',
  },
  4: {
    heroStore: 'PVR INOX 4-Screen Multiplex',
    theme: 'Blockbuster Cinema & Entertainment',
    accent: '#a855f7',
    image: '/images/entertainment/cinema.webp',
    levelName: 'FOURTH LEVEL',
  },
}

const spineContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
}

const spineItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function FloorExplorerTeaser() {
  const [selectedFloor, setSelectedFloor] = useState(0)
  const floorData = floors.find((f) => f.number === selectedFloor) || floors[0]
  const floorStores = storesByFloor(selectedFloor)
  const visual = floorVisuals[selectedFloor] || floorVisuals[0]
  const sectionRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const bgParallax = useTransform(scrollYProgress, [0, 1], [-40, 40])

  return (
    <section className="floor-teaser-showcase-section" id="mall-explorer" ref={sectionRef}>
      {/* Rich ambient glow keyed to active floor accent with parallax */}
      <motion.div
        className="floor-ambient-color-glow"
        style={{
          y: prefersReducedMotion ? 0 : bgParallax,
          background: `radial-gradient(circle at 65% 50%, ${visual.accent}24 0%, rgba(20, 28, 48, 0.3) 60%, transparent 80%)`,
        }}
      />

      <div className="floor-teaser-inner-container">
        {/* Section Header with Noticeable Rise on Scroll */}
        <motion.div
          className="section-eyebrow-wrap text-center"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-eyebrow-badge">
            <Layers size={14} />
            VERTICAL ARCHITECTURAL DIRECTORY
          </span>
          <h2 className="section-cinematic-title">
            Explore the Vertical Realm.<br />
            <em>Floor by Floor.</em>
          </h2>
          <p className="section-cinematic-desc">
            Navigate through Orion Mall’s multi-tiered architectural layout across all levels in Mohaddipur, Gorakhpur.
          </p>
        </motion.div>

        {/* 3D Vertical Architectural Elevation Stack with Dynamic Emergence */}
        <motion.div
          className="architectural-elevation-stage"
          initial={{ opacity: 0, y: 70, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          {/* Left: Level Selector Spine with Staggered Cascading Buttons */}
          <div className="elevation-spine-nav">
            <span className="spine-nav-header">SELECT LEVEL</span>
            <motion.div
              className="spine-levels-list"
              variants={spineContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {floors.map((fl) => {
                const isCurrent = fl.number === selectedFloor
                const vis = floorVisuals[fl.number] || floorVisuals[0]
                const count = storesByFloor(fl.number).length

                return (
                  <motion.button
                    key={fl.id}
                    type="button"
                    variants={spineItemVariants}
                    className={`spine-tier-btn ${isCurrent ? 'is-active' : ''}`}
                    onClick={() => setSelectedFloor(fl.number)}
                    style={
                      isCurrent
                        ? {
                            borderColor: vis.accent,
                            background: `linear-gradient(135deg, ${vis.accent}24 0%, rgba(30, 42, 68, 0.95) 100%)`,
                            boxShadow: `0 8px 24px ${vis.accent}33`,
                          }
                        : {}
                    }
                  >
                    <div className="tier-indicator-pill" style={{ color: vis.accent }}>
                      {fl.label}
                    </div>
                    <div className="tier-info-text">
                      <h5>{fl.name}</h5>
                      <span className="tier-count-sub">{count} Approved Outlets</span>
                    </div>
                    <div
                      className="tier-status-pip"
                      style={isCurrent ? { background: vis.accent } : {}}
                    />
                  </motion.button>
                )
              })}
            </motion.div>
          </div>

          {/* Right: Promenade Showcase with Depth Settle */}
          <div className="elevation-promenade-display">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFloor}
                className="promenade-visual-shell"
                initial={{ opacity: 0, scale: 0.95, x: 25 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 1.04, x: -25 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Full Panoramic Visual */}
                <div className="promenade-panoramic-view">
                  <img
                    src={visual.image}
                    alt={`${floorData.label} - ${floorData.name}`}
                    className="promenade-full-img"
                    loading="lazy"
                  />
                  <div className="promenade-edge-vignette" />

                  {/* Top Floating Floor Identity Overlay */}
                  <div className="promenade-floating-header">
                    <div>
                      <span className="promenade-level-tag" style={{ color: visual.accent }}>
                        {visual.levelName}
                      </span>
                      <h3 className="promenade-floor-title">{floorData.name}</h3>
                      <p className="promenade-floor-theme">{visual.theme}</p>
                    </div>

                    <Link
                      to={`/explore?floor=${selectedFloor}`}
                      className="btn-promenade-launch-3d"
                      style={{
                        background: `linear-gradient(135deg, ${visual.accent}, #d4af37)`,
                      }}
                    >
                      <Compass size={17} />
                      <span>Launch 3D Explorer</span>
                    </Link>
                  </div>
                </div>

                {/* Bottom Details Bar with Verified Store Badges */}
                <div className="promenade-details-anchor">
                  <div className="promenade-key-stores">
                    <span className="key-stores-label">FEATURED OUTLETS:</span>
                    <p className="key-stores-list">{visual.heroStore}</p>
                  </div>

                  <div className="promenade-store-capsules">
                    {floorStores.slice(0, 6).map((store) => (
                      <Link
                        key={store.id}
                        to={`/stores?slug=${store.slug}`}
                        className="store-capsule-link"
                      >
                        <Store size={13} style={{ color: visual.accent }} />
                        <span>{store.brand}</span>
                        <ArrowUpRight size={12} className="capsule-arrow" />
                      </Link>
                    ))}
                    {floorStores.length > 6 && (
                      <Link
                        to={`/stores?floor=${selectedFloor}`}
                        className="store-capsule-more"
                        style={{ color: visual.accent, borderColor: `${visual.accent}55` }}
                      >
                        +{floorStores.length - 6} More
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
