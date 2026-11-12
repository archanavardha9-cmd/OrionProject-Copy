import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

export default function ContinuousBackground() {
  const canvasRef = useRef(null)
  const videoRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll()

  // Subtle parallax translation for background ambient lighting
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  useEffect(() => {
    if (prefersReducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    // Gentle, realistic ambient stardust particles
    const particleCount = 38
    const particles = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.5,
        color: i % 2 === 0 ? 'rgba(212, 175, 55, ' : 'rgba(56, 189, 248, ',
        alpha: Math.random() * 0.35 + 0.1,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: -Math.random() * 0.3 - 0.1,
        pulseVal: Math.random() * Math.PI,
        pulseSpeed: Math.random() * 0.015 + 0.005,
      })
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.speedX
        p.y += p.speedY
        p.pulseVal += p.pulseSpeed

        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        const dynamicAlpha = p.alpha * (0.7 + Math.sin(p.pulseVal) * 0.3)

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color}${dynamicAlpha})`
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [prefersReducedMotion])

  return (
    <div className="continuous-bg-wrapper" aria-hidden="true">
      {/* Background Video Player: Plays realistic mall footage seamlessly if provided */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="continuous-bg-video"
        onError={(e) => {
          // If video file is not found, gracefully hide video element
          e.currentTarget.style.display = 'none'
        }}
      >
        <source src="/videos/mall-background.mp4" type="video/mp4" />
      </video>

      {/* Realistic ambient architectural light atmosphere */}
      <motion.div
        className="continuous-ambient-atmosphere"
        style={{ y: prefersReducedMotion ? 0 : bgY }}
      >
        <div className="ambient-beam beam-gold" />
        <div className="ambient-beam beam-sapphire" />
        <div className="ambient-beam beam-warm" />
      </motion.div>

      {/* Subtle floating particles canvas */}
      <canvas ref={canvasRef} className="continuous-particle-canvas" />

      {/* Seamless global overlay maintaining text legibility across all sections */}
      <div className="continuous-cohesion-overlay" />
    </div>
  )
}
