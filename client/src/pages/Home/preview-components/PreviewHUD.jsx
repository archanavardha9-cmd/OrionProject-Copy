import { Play, Pause, RotateCcw, ArrowDown } from 'lucide-react'

export default function PreviewHUD({
  scrollProgress,
  videoDuration,
  currentTimeDisplay,
  activeSection,
  isPlayingAutopilot,
  toggleAutopilot,
  scrollToSection,
  sections,
}) {
  return (
    <>
      {/* Top Floating HUD Header */}
      <header className="rsp-hud-header" aria-label="Experience controls">
        <div className="rsp-hud-badge">
          <span className="rsp-pulse-dot" />
          <span className="rsp-hud-badge-title">ORION MALL GORAKHPUR</span>
          <span className="rsp-hud-badge-divider">·</span>
          <span className="rsp-hud-badge-status">OPEN TODAY 10 AM – 10 PM</span>
        </div>

        <div className="rsp-hud-controls">
          <button
            type="button"
            className={`rsp-control-btn ${isPlayingAutopilot ? 'is-active' : ''}`}
            onClick={toggleAutopilot}
            title="Auto-scroll the page or scroll manually"
          >
            {isPlayingAutopilot ? <Pause size={14} /> : <Play size={14} />}
            <span>{isPlayingAutopilot ? 'Pause Tour' : 'Auto Co-pilot'}</span>
          </button>
          <button
            type="button"
            className="rsp-control-btn"
            onClick={() => scrollToSection(1)}
            title="Return to the beginning"
          >
            <RotateCcw size={14} />
            <span>Reset</span>
          </button>
        </div>
      </header>

      {/* Side Quick Navigation Rail (Desktop) */}
      <nav className="rsp-side-rail" aria-label="Section shortcuts">
        {sections.map((sec, idx) => (
          <button
            key={sec.id}
            type="button"
            className={`rsp-rail-item ${activeSection === idx + 1 ? 'is-active' : ''}`}
            onClick={() => scrollToSection(idx + 1)}
            title={sec.label}
          >
            <span className="rsp-rail-label">{sec.label}</span>
            <span className="rsp-rail-dot" />
          </button>
        ))}
      </nav>

      {/* Bottom Floating Telemetry & Scrubber */}
      <footer className="rsp-hud-bottom" aria-label="Playback controls and timeline">
        <div className="rsp-scrub-indicator">
          <span className="rsp-progress-val">
            {Math.round(scrollProgress * 100).toString().padStart(2, '0')}%
          </span>
          <div className="rsp-progress-track">
            <div
              className="rsp-progress-fill"
              style={{ width: `${Math.round(scrollProgress * 100)}%` }}
            />
          </div>
          <span className="rsp-timecode">
            {currentTimeDisplay.toFixed(1)}s / {videoDuration.toFixed(1)}s
          </span>
        </div>

        {/* Section Quick Pills */}
        <div className="rsp-nav-pills">
          {sections.slice(0, 6).map((sec, idx) => (
            <button
              key={sec.id}
              type="button"
              className={`rsp-nav-pill ${activeSection === idx + 1 ? 'is-active' : ''}`}
              onClick={() => scrollToSection(idx + 1)}
            >
              {sec.label}
            </button>
          ))}
        </div>

        <div className="rsp-scroll-hint">
          <span>Scroll to explore</span>
          <ArrowDown size={14} />
        </div>
      </footer>
    </>
  )
}

