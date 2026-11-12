import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Compass, ShoppingBag, MapPin, Clock, Car, Sparkles, ArrowRight } from 'lucide-react'

const pedestalsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const pedestalItemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function GrandClosing() {
  const sectionRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.15, 0.9])
  const yLift = useTransform(scrollYProgress, [0, 0.4], [50, 0])

  return (
    <section className="grand-closing-horizon-section" ref={sectionRef}>
      {/* Background ambient radiance */}
      <motion.div
        className="closing-radiance-glow"
        style={{ scale: prefersReducedMotion ? 1 : glowScale }}
      />

      <div className="grand-closing-horizon-container">
        {/* Open Panoramic Architectural Portal with Noticeable Emergence */}
        <motion.div
          className="closing-architectural-portal"
          initial={{ opacity: 0, y: 70, scale: 0.93 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-eyebrow-badge">
            <Sparkles size={14} />
            YOUR NEXT MEMORABLE DAY STARTS HERE
          </span>

          <h2 className="closing-portal-headline">
            Step Into the Extraordinary.<br />
            <em>Orion Mall Gorakhpur.</em>
          </h2>

          <p className="closing-portal-synopsis">
            Whether visiting for global retail shopping, dining with family at the Level 3 Food Court, or enjoying an evening premiere at PVR INOX, we welcome you to the city's foremost lifestyle sanctuary.
          </p>

          <div className="closing-actions-cluster">
            <Link to="/explore" className="btn-hero-primary">
              <Compass size={18} />
              <span>Launch 3D Explorer</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/stores" className="btn-hero-secondary">
              <ShoppingBag size={18} />
              <span>Browse All Stores</span>
            </Link>
          </div>

          {/* Floating Architectural Information Pedestals with Staggered Cascading Emergence */}
          <motion.div
            className="closing-pedestals-grid"
            variants={pedestalsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="pedestal-info-unit" variants={pedestalItemVariants}>
              <div className="pedestal-icon-circle">
                <MapPin size={22} className="pedestal-icon" />
              </div>
              <div className="pedestal-text">
                <h5>PRIME LOCATION</h5>
                <p>Mohaddipur, Gorakhpur, Uttar Pradesh (Adjacent to Radisson Blu)</p>
              </div>
            </motion.div>

            <motion.div className="pedestal-info-unit" variants={pedestalItemVariants}>
              <div className="pedestal-icon-circle">
                <Clock size={22} className="pedestal-icon" />
              </div>
              <div className="pedestal-text">
                <h5>OPERATING HOURS</h5>
                <p>Open All 7 Days · 10:00 AM to 10:30 PM (PVR INOX open late)</p>
              </div>
            </motion.div>

            <motion.div className="pedestal-info-unit" variants={pedestalItemVariants}>
              <div className="pedestal-icon-circle">
                <Car size={22} className="pedestal-icon" />
              </div>
              <div className="pedestal-text">
                <h5>COVERED PARKING & VALET</h5>
                <p>Multi-tier secure covered parking facility with valet assistance</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
