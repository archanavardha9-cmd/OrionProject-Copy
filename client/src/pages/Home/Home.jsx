/**
 * HOME.JSX — Orion Mall Gorakhpur
 * Cinematic continuous-video homepage with scroll-driven playback.
 *
 * Key design decisions:
 *  • ONE <video> element, fixed behind all sections, never restarts.
 *  • Video plays immediately on first scroll, pauses ~100 ms after stop.
 *  • Hero = full-viewport text overlay — no glass boxes.
 *  • Sections use semi-transparent dark backdrops so video stays visible.
 *  • Brands = drag/swipe horizontal carousel, logo-centric, no cards.
 */

import { useState, useRef, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import {
  Play, Pause, Volume2, VolumeX,
  ArrowRight, ArrowUpRight, ChevronDown,
  MapPin, Clock, Car, ShieldCheck,
  Film, Utensils, ShoppingBag,
} from 'lucide-react'
import PageTransition from '../../components/layout/PageTransition'
import { showcaseBrands } from '../../data/showcaseBrands'
import { BrandLogos } from '../../data/brandLogos.jsx'
import { movies } from '../../data/movies'
import { floors, floorLabel } from '../../data/floors'
import './Home.css'

/* ─────────────────────────────────────────────────────────────────────────
   Brand Carousel — drag / swipe / touch, momentum-free, looping list
───────────────────────────────────────────────────────────────────────── */
function BrandCarousel({ brands }) {
  const trackRef = useRef(null)
  const dragState = useRef({ dragging: false, startX: 0, scrollLeft: 0 })

  const onMouseDown = (e) => {
    dragState.current = {
      dragging: true,
      startX: e.pageX - trackRef.current.offsetLeft,
      scrollLeft: trackRef.current.scrollLeft,
    }
    trackRef.current.style.cursor = 'grabbing'
  }
  const onMouseLeave = () => {
    dragState.current.dragging = false
    if (trackRef.current) trackRef.current.style.cursor = 'grab'
  }
  const onMouseUp = () => {
    dragState.current.dragging = false
    if (trackRef.current) trackRef.current.style.cursor = 'grab'
  }
  const onMouseMove = (e) => {
    if (!dragState.current.dragging) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    const walk = (x - dragState.current.startX) * 1.6
    trackRef.current.scrollLeft = dragState.current.scrollLeft - walk
  }

  /* duplicate list for perceived infinite scroll */
  const all = [...brands, ...brands]

  return (
    <div
      className="om-brand-carousel"
      ref={trackRef}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {all.map((brand, i) => {
        const Logo = BrandLogos?.[brand.logoKey]
        return (
          <div key={`${brand.id}-${i}`} className="om-brand-item">
            <div className="om-brand-logo-wrap">
              {Logo ? <Logo /> : <span className="om-brand-fallback">{brand.name}</span>}
            </div>
            <span className="om-brand-name">{brand.name}</span>
            <span className="om-brand-tagline">{brand.tagline}</span>
          </div>
        )
      })}
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   Main HomePage
───────────────────────────────────────────────────────────────────────── */
export default function HomePage() {
  /* --- video + scroll-play refs ---------------------------------------- */
  const videoRef = useRef(null)
  const scrollTimerRef = useRef(null)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isVideoActive, setIsVideoActive] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [videoProgress, setVideoProgress] = useState(0)

  /* --- cinema tab state ------------------------------------------------- */
  const [activeMovieStatus, setActiveMovieStatus] = useState('Now Showing')
  const [activeFloorIndex, setActiveFloorIndex] = useState(0)

  /* --- scroll-play controller ------------------------------------------- */
  const handleScrollActivity = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    setIsScrolling(true)
    if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current)
    if (video.paused) {
      video.play().then(() => setIsVideoActive(true)).catch(() => {})
    }
    scrollTimerRef.current = setTimeout(() => {
      setIsScrolling(false)
      if (video && !video.paused) {
        video.pause()
        setIsVideoActive(false)
      }
    }, 100)
  }, [])

  useEffect(() => {
    const opts = { passive: true }
    window.addEventListener('scroll', handleScrollActivity, opts)
    window.addEventListener('wheel', handleScrollActivity, opts)
    window.addEventListener('touchmove', handleScrollActivity, opts)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause()
        setIsVideoActive(false)
        setIsScrolling(false)
      }
    })
    return () => {
      window.removeEventListener('scroll', handleScrollActivity)
      window.removeEventListener('wheel', handleScrollActivity)
      window.removeEventListener('touchmove', handleScrollActivity)
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current)
    }
  }, [handleScrollActivity])

  const onTimeUpdate = () => {
    if (videoRef.current?.duration) {
      setVideoProgress((videoRef.current.currentTime / videoRef.current.duration) * 100)
    }
  }
  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }
  const togglePlay = () => {
    if (!videoRef.current) return
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsVideoActive(true)).catch(() => {})
    } else {
      videoRef.current.pause()
      setIsVideoActive(false)
    }
  }

  const filteredMovies = movies.filter((m) => m.status === activeMovieStatus)
  const currentFloor = floors[activeFloorIndex] || floors[0]

  return (
    <PageTransition>
      <div className="om-home">

        {/* ═══════════════════════════════════════════════════════════════
            CONTINUOUS FIXED VIDEO BACKDROP — single instance, never restarts
            ═══════════════════════════════════════════════════════════════ */}
        <div className="om-video-bg" aria-hidden="true">
          <video
            ref={videoRef}
            className="om-video-el"
            src="/videos/home.mp4"
            loop
            muted={isMuted}
            playsInline
            preload="auto"
            onTimeUpdate={onTimeUpdate}
          />
          {/* Very subtle vignette — does NOT hide the video */}
          <div className="om-video-vignette" />
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            CINEMATIC HUD (bottom-right corner)
            ═══════════════════════════════════════════════════════════════ */}
        <aside className="om-hud" aria-label="Video controls">
          <div className="om-hud-pill">
            <span className={`om-hud-dot${isScrolling ? ' active' : ''}`} />
            <span className="om-hud-label">{isScrolling ? 'Playing' : 'Scroll to play'}</span>
            <div className="om-hud-bar">
              <div className="om-hud-fill" style={{ width: `${videoProgress}%` }} />
            </div>
            <button onClick={togglePlay} className="om-hud-btn" aria-label="Toggle play">
              {isVideoActive ? <Pause size={13} /> : <Play size={13} />}
            </button>
            <button onClick={toggleMute} className="om-hud-btn" aria-label="Toggle mute">
              {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
            </button>
          </div>
        </aside>

        {/* ═══════════════════════════════════════════════════════════════
            PAGE CONTENT — layered above the fixed video
            ═══════════════════════════════════════════════════════════════ */}
        <div className="om-content">

          {/* ─────────────────────────────────────────────────────────────
              1. HERO — full viewport, transparent, video is the star
              ───────────────────────────────────────────────────────────── */}
          <section className="om-hero" aria-label="Welcome to Orion Mall Gorakhpur">
            {/* Gradient at bottom for readability */}
            <div className="om-hero-gradient" />

            <div className="om-hero-inner">
              <span className="om-eyebrow">Mohaddipur · Gorakhpur</span>
              <h1 className="om-hero-h1">
                Where the City<br />
                <em>Comes Alive</em>
              </h1>
              <p className="om-hero-sub">
                Six floors of fashion, dining, cinema &amp; culture — all in one iconic place.
              </p>
              <div className="om-hero-ctas">
                <Link to="/stores" className="om-btn-primary">
                  <ShoppingBag size={16} />
                  <span>Explore Stores</span>
                </Link>
                <Link to="/visit" className="om-btn-ghost">
                  <span>Plan Your Visit</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Scroll hint */}
            <div className="om-scroll-hint">
              <ChevronDown size={22} />
            </div>
          </section>

          {/* ─────────────────────────────────────────────────────────────
              2. BRAND CAROUSEL — horizontal drag/swipe, large logos
              ───────────────────────────────────────────────────────────── */}
          <section className="om-section om-brands-section" aria-label="Featured Brands">
            <div className="om-section-bg" />
            <div className="om-container">
              <div className="om-section-header centered">
                <span className="om-eyebrow">Flagship Retail</span>
                <h2 className="om-section-h2">The Brands <em>You Love</em></h2>
                <p className="om-section-sub">Drag or swipe to explore</p>
              </div>
            </div>
            <BrandCarousel brands={showcaseBrands} />
          </section>

          {/* ─────────────────────────────────────────────────────────────
              3. DINING — compact visual row
              ───────────────────────────────────────────────────────────── */}
          <section className="om-section om-dining-section" aria-label="Dining">
            <div className="om-section-bg" />
            <div className="om-container">
              <div className="om-two-col">
                <div className="om-col-text">
                  <span className="om-eyebrow"><Utensils size={13} /> Dining</span>
                  <h2 className="om-section-h2">Taste the <em>World</em></h2>
                  <p className="om-section-sub">
                    Rooftop terraces, global cuisines, and cosy cafés — all under one roof.
                  </p>
                  <Link to="/dining" className="om-link-arrow">
                    <span>Explore Dining</span><ArrowRight size={15} />
                  </Link>
                </div>
                <div className="om-col-visual">
                  <img
                    src="/images/orion/dining-rooftop.webp"
                    alt="Rooftop dining at Orion Mall Gorakhpur"
                    className="om-visual-img"
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                  <div className="om-visual-pill">
                    <span>Open until 10:30 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ─────────────────────────────────────────────────────────────
              4. CINEMA — PVR INOX
              ───────────────────────────────────────────────────────────── */}
          <section className="om-section om-cinema-section" aria-label="Cinema">
            <div className="om-section-bg dark" />
            <div className="om-container">
              <div className="om-two-col reverse">
                <div className="om-col-text">
                  <span className="om-eyebrow"><Film size={13} /> Cinema</span>
                  <h2 className="om-section-h2">PVR INOX <em>5-Screen</em></h2>
                  <p className="om-section-sub">
                    Dolby Atmos 7.1 &amp; 4K laser projection — the finest cinema in Eastern UP.
                  </p>
                  <div className="om-movie-tabs">
                    {['Now Showing', 'Coming Soon'].map((s) => (
                      <button
                        key={s}
                        className={`om-tab${activeMovieStatus === s ? ' active' : ''}`}
                        onClick={() => setActiveMovieStatus(s)}
                      >{s}</button>
                    ))}
                  </div>
                  <div className="om-movies-list">
                    {filteredMovies.slice(0, 3).map((m) => (
                      <div key={m.id} className="om-movie-row">
                        <span className="om-movie-title">{m.title}</span>
                        <span className="om-movie-genre">{m.genre}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/entertainment" className="om-link-arrow">
                    <span>All Showtimes</span><ArrowRight size={15} />
                  </Link>
                </div>
                <div className="om-col-visual">
                  <img
                    src="/images/orion/pvr-inox.webp"
                    alt="PVR INOX cinema at Orion Mall"
                    className="om-visual-img"
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ─────────────────────────────────────────────────────────────
              5. FLOOR GUIDE — compact teaser
              ───────────────────────────────────────────────────────────── */}
          <section className="om-section om-floors-section" aria-label="Floor Guide">
            <div className="om-section-bg" />
            <div className="om-container">
              <div className="om-section-header centered">
                <span className="om-eyebrow">Six Levels</span>
                <h2 className="om-section-h2">Explore Every <em>Floor</em></h2>
              </div>
              <div className="om-floors-row">
                {floors.map((floor, i) => (
                  <button
                    key={floor.number}
                    className={`om-floor-btn${activeFloorIndex === i ? ' active' : ''}`}
                    onClick={() => setActiveFloorIndex(i)}
                  >
                    <span className="om-floor-num">{floorLabel(floor.number)}</span>
                    <span className="om-floor-name">{floor.name}</span>
                  </button>
                ))}
              </div>
              <div className="om-floor-detail">
                <h3 className="om-floor-detail-name">{currentFloor.name}</h3>
                <p className="om-floor-detail-desc">{currentFloor.description || currentFloor.highlights?.join(' · ')}</p>
                <Link to="/explore" className="om-link-arrow">
                  <span>3D Floor Map</span><ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </section>

          {/* ─────────────────────────────────────────────────────────────
              6. PLAN YOUR VISIT
              ───────────────────────────────────────────────────────────── */}
          <section className="om-section om-visit-section" aria-label="Plan Your Visit">
            <div className="om-section-bg dark" />
            <div className="om-container">
              <div className="om-two-col">
                <div className="om-col-text">
                  <span className="om-eyebrow"><MapPin size={13} /> Visit</span>
                  <h2 className="om-section-h2">Getting <em>Here</em></h2>
                  <div className="om-visit-facts">
                    <div className="om-fact">
                      <Clock size={18} />
                      <div>
                        <strong>10:00 AM – 10:30 PM</strong>
                        <span>Open every day</span>
                      </div>
                    </div>
                    <div className="om-fact">
                      <Car size={18} />
                      <div>
                        <strong>Multi-Level Parking</strong>
                        <span>Covered bays &amp; valet</span>
                      </div>
                    </div>
                    <div className="om-fact">
                      <MapPin size={18} />
                      <div>
                        <strong>Mohaddipur, Gorakhpur</strong>
                        <span>Near Radisson Blu Hotel</span>
                      </div>
                    </div>
                    <div className="om-fact">
                      <ShieldCheck size={18} />
                      <div>
                        <strong>Full Amenities</strong>
                        <span>Wheelchair access · Wi-Fi · ATMs</span>
                      </div>
                    </div>
                  </div>
                  <div className="om-ctas-row">
                    <a
                      href="https://maps.google.com/?q=Orion+Mall+Mohaddipur+Gorakhpur"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="om-btn-primary"
                    >
                      <MapPin size={15} /><span>Google Maps</span><ArrowUpRight size={14} />
                    </a>
                    <Link to="/visit" className="om-btn-ghost">
                      <span>Visitor Guide</span><ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
                <div className="om-col-visual">
                  <img
                    src="/images/orion/orion-corridor-real.webp"
                    alt="Orion Mall interior corridor"
                    className="om-visual-img"
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </PageTransition>
  )
}
