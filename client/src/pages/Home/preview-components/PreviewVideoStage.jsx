export default function PreviewVideoStage({ videoRef, handleLoadedMetadata }) {
  return (
    <div className="rsp-video-stage" aria-hidden="true">
      <video
        ref={videoRef}
        src="/videos/orion-walkthrough.mp4"
        className="rsp-video-element"
        playsInline
        muted
        preload="auto"
        onLoadedMetadata={handleLoadedMetadata}
      />
      {/* Light architectural ambient veil for high readability with natural depth */}
      <div className="rsp-light-veil" />
      <div className="rsp-top-light-scrim" />
      <div className="rsp-bottom-light-scrim" />
    </div>
  )
}

