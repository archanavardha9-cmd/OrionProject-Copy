import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Compass,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  ShoppingBag,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

export default function HeroMaster() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(7.93)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoaded = () => {
      if (video.duration && !isNaN(video.duration)) {
        setDuration(video.duration)
      }
    }

    const handleTime = () => {
      setCurrentTime(video.currentTime)
    }

    video.addEventListener('loadedmetadata', handleLoaded)
    video.addEventListener('timeupdate', handleTime)

    // Attempt autoplay
    video.play().catch(() => {
      setIsPlaying(false)
    })

    return () => {
      video.removeEventListener('loadedmetadata', handleLoaded)
      video.removeEventListener('timeupdate', handleTime)
    }
  }, [])

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    const next = !isMuted
    videoRef.current.muted = next
    setIsMuted(next)
  }

  const handleSeek = (e) => {
    if (!videoRef.current || !duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const pos = (e.clientX - rect.left) / rect.width
    const target = pos * duration
    videoRef.current.currentTime = target
    setCurrentTime(target)
  }

  const handleFullscreen = () => {
    if (!videoRef.current) return
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen()
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen()
    }
  }

  const progressPercent = duration ? (currentTime / duration) * 100 : 0

  return (
    <section className="rb-hero-section" aria-label="Orion Mall Welcome Hero">
      <div className="rb-container">
        <div className="rb-hero-grid">
          {/* Left Column: Editorial Headline & Brand Introduction */}
          <div className="rb-hero-content">
            <div className="rb-hero-live-pill">
              <span className="rb-live-dot" />
              <span>MOHADDIPUR · OPEN TODAY 10:00 AM – 10:30 PM</span>
            </div>

            <h1 className="rb-hero-title">
              Where Wonder <em>Unfolds</em> Every Day
            </h1>

            <p className="rb-hero-lead">
              Rising gracefully in Mohaddipur, Orion Mall is Eastern Uttar Pradesh's landmark
              retail and cultural haven. Spanning six expansive levels with over 150 global fashion
              flagships, open-air dining terraces, 5-screen PVR INOX laser multiplex, and effortless hospitality.
            </p>

            <div className="rb-hero-actions">
              <Link to="/stores" className="rb-btn rb-btn-accent">
                <ShoppingBag size={17} />
                <span>Explore 150+ Stores</span>
                <ArrowRight size={16} />
              </Link>

              <Link to="/explore" className="rb-btn rb-btn-secondary">
                <Compass size={17} />
                <span>Interactive 3D Explorer</span>
              </Link>
            </div>

            {/* Quick Metrics Bar */}
            <div className="rb-hero-metrics">
              <div className="rb-metric-item">
                <span className="rb-metric-val">150+</span>
                <span className="rb-metric-label">Global Brands</span>
              </div>
              <div className="rb-metric-item">
                <span className="rb-metric-val">6 Levels</span>
                <span className="rb-metric-label">Curated Spaces</span>
              </div>
              <div className="rb-metric-item">
                <span className="rb-metric-val">5 Screen</span>
                <span className="rb-metric-label">PVR INOX Multiplex</span>
              </div>
              <div className="rb-metric-item">
                <span className="rb-metric-val">1,200+</span>
                <span className="rb-metric-label">Smart Parking Bays</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Video Showcase Theater */}
          <div className="rb-hero-theater-wrap">
            <div className="rb-hero-video-frame">
              <video
                ref={videoRef}
                src="/videos/orion-walkthrough.mp4"
                className="rb-hero-video"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              />

              {/* Video Controls Overlay */}
              <div className="rb-video-controls-overlay">
                <div className="rb-video-top-bar">
                  <div className="rb-video-badge">
                    <Sparkles size={13} color="#ea580c" />
                    <span>Architectural Walkthrough</span>
                  </div>
                  <div className="rb-video-timecode">
                    00:0{currentTime.toFixed(1)}s / 00:0{duration.toFixed(1)}s
                  </div>
                </div>

                <div className="rb-video-bottom-bar">
                  <div
                    className="rb-video-scrub-bar"
                    onClick={handleSeek}
                    role="slider"
                    aria-label="Video timeline scrubber"
                    aria-valuenow={Math.round(progressPercent)}
                    tabIndex={0}
                  >
                    <div
                      className="rb-video-scrub-fill"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>

                  <div className="rb-video-control-btns">
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button
                        type="button"
                        className="rb-video-btn"
                        onClick={togglePlay}
                        aria-label={isPlaying ? 'Pause video' : 'Play video'}
                        title={isPlaying ? 'Pause' : 'Play'}
                      >
                        {isPlaying ? <Pause size={15} /> : <Play size={15} />}
                      </button>

                      <button
                        type="button"
                        className="rb-video-btn"
                        onClick={toggleMute}
                        aria-label={isMuted ? 'Unmute video audio' : 'Mute audio'}
                        title={isMuted ? 'Unmute' : 'Mute'}
                      >
                        {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                      </button>
                    </div>

                    <button
                      type="button"
                      className="rb-video-btn"
                      onClick={handleFullscreen}
                      aria-label="Toggle Fullscreen"
                      title="Fullscreen"
                    >
                      <Maximize2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
