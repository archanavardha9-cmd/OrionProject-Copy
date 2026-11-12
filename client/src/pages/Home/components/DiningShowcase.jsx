import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Utensils, ArrowUpRight, Clock, MapPin } from 'lucide-react'

// Strictly approved food outlets from Orion Mall directory (stores.js)
const approvedDiningSpots = [
  {
    id: 'kfc',
    slug: 'kfc',
    name: 'KFC',
    tagline: 'Finger Lickin’ Good',
    desc: 'Globally renowned quick-service fried chicken, crispy tenders, and burger combos.',
    floor: 'Level 3 · Food Court',
    tag: 'GLOBAL QUICK SERVICE',
    image: '/images/dining/restaurant.webp',
    accent: '#e11d48',
  },
  {
    id: 'burger-king',
    slug: 'burger-king',
    name: 'Burger King',
    tagline: 'Flame-Grilled Favorites',
    desc: 'Globally renowned quick-service flame-grilled Whoppers, crispy sides, and beverages.',
    floor: 'Level 3 · Food Court',
    tag: 'FLAME-GRILLED ICONS',
    image: '/images/dining/cafe.webp',
    accent: '#f97316',
  },
  {
    id: 'dominos-pizza',
    slug: 'dominos-pizza',
    name: 'Domino’s Pizza',
    tagline: 'Hot & Fresh Pizzas',
    desc: 'Popular dine-in and takeaway pizza hub serving hand-tossed pizzas, garlic breads, and pastas.',
    floor: 'Level 3 · Food Court',
    tag: 'PIZZA & PASTA',
    image: '/images/dining/foodcourt.webp',
    accent: '#2563eb',
  },
]

const railContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const railItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function DiningShowcase() {
  const [activeSpotIndex, setActiveSpotIndex] = useState(0)
  const activeSpot = approvedDiningSpots[activeSpotIndex]
  const sectionRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const bgParallax = useTransform(scrollYProgress, [0, 1], [-50, 50])

  return (
    <section className="dining-cinematic-panorama-section" id="dining" ref={sectionRef}>
      {/* Warm culinary ambient radiance */}
      <motion.div
        className="dining-ambient-warmth"
        style={{
          y: prefersReducedMotion ? 0 : bgParallax,
          background: `radial-gradient(circle at 60% 50%, ${activeSpot.accent}26 0%, rgba(30, 24, 28, 0.4) 50%, transparent 75%)`,
        }}
      />

      <div className="dining-panorama-container">
        {/* Section Header with Noticeable Rise on Scroll */}
        <motion.div
          className="dining-panorama-header"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <span className="section-eyebrow-badge dining-badge">
              <Utensils size={14} />
              FOOD COURT · LEVEL 3
            </span>
            <h2 className="section-cinematic-title">
              Savor the Flavors.<br />
              <em>Level 3 Food Court.</em>
            </h2>
          </div>
          <div className="dining-header-aside">
            <p className="section-cinematic-desc">
              Enjoy world-renowned quick-service favorites at Orion Mall’s spacious Level 3 Food Court concourse.
            </p>
            <Link to="/dining" className="btn-gold-accent">
              <span>View Food Court Details</span>
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </motion.div>

        {/* Panoramic Culinary Stage with Dynamic Aperture Expansion on Scroll */}
        <motion.div
          className="dining-panoramic-stage"
          initial={{ opacity: 0, y: 70, scale: 0.93 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          {/* Main Visual Viewport with Overlapping Detail Plate */}
          <div className="dining-viewport-frame">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSpot.id}
                className="dining-viewport-motion"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src={activeSpot.image}
                  alt={activeSpot.name}
                  className="dining-full-cover-img"
                  loading="lazy"
                />
                <div className="dining-viewport-gradient-overlay" />

                {/* Overlapping Floating Culinary Plate */}
                <motion.div
                  className="floating-culinary-info-plate"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                >
                  <div className="culinary-tag-strip">
                    <span
                      className="culinary-category-pill"
                      style={{ background: activeSpot.accent }}
                    >
                      {activeSpot.tag}
                    </span>
                    <span className="culinary-hours-pill">
                      <Clock size={13} /> 10:00 AM – 10:30 PM
                    </span>
                  </div>

                  <h3 className="culinary-spot-name">{activeSpot.name}</h3>
                  <p className="culinary-spot-cuisine">“{activeSpot.tagline}”</p>
                  <p className="culinary-spot-highlight">{activeSpot.desc}</p>

                  <div className="culinary-action-bar">
                    <span className="culinary-location-text">
                      <MapPin size={14} /> {activeSpot.floor}
                    </span>
                    <Link to={`/stores?slug=${activeSpot.slug}`} className="btn-culinary-visit">
                      <span>Store Profile</span>
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive 3-Pill Selector Rail with Cascading Staggered Emergence */}
          <motion.div
            className="dining-horizontal-selector-rail"
            variants={railContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {approvedDiningSpots.map((spot, index) => {
              const isSelected = index === activeSpotIndex
              return (
                <motion.button
                  key={spot.id}
                  type="button"
                  variants={railItemVariants}
                  className={`dining-rail-capsule ${isSelected ? 'is-active' : ''}`}
                  onClick={() => setActiveSpotIndex(index)}
                  style={
                    isSelected
                      ? {
                          borderColor: spot.accent,
                          background: `linear-gradient(135deg, ${spot.accent}26 0%, rgba(36, 26, 32, 0.95) 100%)`,
                          boxShadow: `0 6px 20px ${spot.accent}33`,
                        }
                      : {}
                  }
                >
                  <div
                    className="rail-capsule-pip"
                    style={{ background: spot.accent }}
                  />
                  <div className="rail-capsule-text">
                    <span className="rail-capsule-name">{spot.name}</span>
                    <span className="rail-capsule-sub">{spot.tag}</span>
                  </div>
                </motion.button>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
