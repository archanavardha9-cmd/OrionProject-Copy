import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text } from '@react-three/drei'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Compass,
  Search,
  X,
  SlidersHorizontal,
  Layers,
  MapPin,
  Clock,
  Sparkles,
  Grid3X3,
  Globe,
  Tag,
} from 'lucide-react'
import * as THREE from 'three'
import { stores, findStore, floorLabel, searchStores } from '../../data/stores'
import { floors } from '../../data/floors'
import { showcaseBrands } from '../../data/showcaseBrands'
import { BrandLogos } from '../../data/brandLogos'
import PageTransition from '../../components/layout/PageTransition'
import './StoreSpace.css'

/* 3D Color Constants for WebGL Scene */
const FLOOR_COLORS = {
  0: '#ff6b6b',
  1: '#ffd166',
  2: '#4ecdc4',
  3: '#5dade2',
  4: '#b388ff',
}

function categoryTheme(category = '') {
  const c = category.toLowerCase()
  if (c.includes('electronic')) return { shape: 'icosa', accent: '#22d3ee', glow: '#818cf8' }
  if (c.includes('fashion') || c.includes('apparel') || c.includes('styling') || c.includes('denim'))
    return { shape: 'box', accent: '#fb7185', glow: '#fbbf24' }
  if (c.includes('dining') || c.includes('food'))
    return { shape: 'sphere', accent: '#fb923c', glow: '#fde047' }
  if (c.includes('entertainment') || c.includes('cinema'))
    return { shape: 'torus', accent: '#60a5fa', glow: '#c084fc' }
  if (c.includes('footwear') || c.includes('bag'))
    return { shape: 'octa', accent: '#34d399', glow: '#f472b6' }
  return { shape: 'octa', accent: '#7dd3fc', glow: '#fda4af' }
}

function hash01(input) {
  let h = 2166136261
  for (let i = 0; i < input.length; i += 1) {
    h ^= input.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return ((h >>> 0) % 10000) / 10000
}

function brandPosition(index, total) {
  const golden = Math.PI * (3 - Math.sqrt(5))
  const t = index / Math.max(total - 1, 1)
  const radius = 3.8 + t * 9.5
  const angle = index * golden
  const x = Math.cos(angle) * radius
  const z = Math.sin(angle) * radius * 0.72
  const y = -1.2 + (index % 6) * 0.65 + Math.sin(angle * 1.5) * 0.4
  return [x, y, z]
}

function BrandNode({ store, position, selected, dimmed, onSelect }) {
  const group = useRef()
  const material = useRef()
  const ring = useRef()
  const [hovered, setHovered] = useState(false)
  const theme = categoryTheme(store.category)
  const floorColor = FLOOR_COLORS[store.floor] ?? theme.accent
  const color = selected ? theme.glow : theme.accent
  const scaleBase = 0.52 + hash01(store.slug) * 0.48
  const active = selected || hovered

  useFrame((state, delta) => {
    if (!group.current) return
    const t = state.clock.elapsedTime
    const target = active ? scaleBase * 1.25 : scaleBase
    group.current.scale.lerp(new THREE.Vector3(target, target, target), 1 - Math.exp(-delta * 7))
    group.current.rotation.y += delta * (active ? 0.8 : 0.25)
    if (ring.current) {
      ring.current.rotation.z += delta * (selected ? 1.2 : 0.4)
    }
    if (material.current) {
      material.current.emissiveIntensity = THREE.MathUtils.lerp(
        material.current.emissiveIntensity,
        selected ? 1.5 : hovered ? 0.95 : 0.4,
        1 - Math.exp(-delta * 6)
      )
    }
  })

  return (
    <Float speed={selected ? 0.8 : 1.4} rotationIntensity={0.2} floatIntensity={0.4}>
      <group
        ref={group}
        position={position}
        onClick={(e) => {
          e.stopPropagation()
          onSelect(store.slug)
        }}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHovered(true)
          document.body.style.cursor = 'pointer'
        }}
        onPointerOut={() => {
          setHovered(false)
          document.body.style.cursor = 'default'
        }}
      >
        <mesh castShadow>
          {theme.shape === 'box' && <boxGeometry args={[1.1, 1.1, 1.1]} />}
          {theme.shape === 'sphere' && <sphereGeometry args={[0.72, 28, 28]} />}
          {theme.shape === 'icosa' && <icosahedronGeometry args={[0.78, 0]} />}
          {theme.shape === 'octa' && <octahedronGeometry args={[0.78, 0]} />}
          {theme.shape === 'torus' && <torusGeometry args={[0.54, 0.22, 16, 36]} />}
          <meshStandardMaterial
            ref={material}
            color={color}
            emissive={theme.glow}
            emissiveIntensity={0.4}
            roughness={0.2}
            metalness={0.4}
            transparent
            opacity={dimmed ? 0.28 : 0.95}
          />
        </mesh>

        <mesh ref={ring} rotation={[Math.PI / 2, 0, 0]} scale={selected ? 1.18 : 1}>
          <torusGeometry args={[1.02, selected ? 0.028 : 0.016, 12, 48]} />
          <meshBasicMaterial color={floorColor} transparent opacity={dimmed ? 0.15 : selected ? 0.95 : 0.5} />
        </mesh>

        <Text
          position={[0, 1.2, 0]}
          fontSize={selected ? 0.35 : 0.24}
          color={active ? '#ffffff' : '#f0f6ff'}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.015}
          outlineColor="rgba(0,0,0,0.8)"
          fillOpacity={dimmed ? 0.3 : 1}
        >
          {store.brand}
        </Text>
      </group>
    </Float>
  )
}

function CameraRig({ target }) {
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0))
  useFrame((state, delta) => {
    const desiredTarget = target ? new THREE.Vector3(target[0], target[1], target[2]) : new THREE.Vector3(0, 0, 0)
    currentLookAt.current.lerp(desiredTarget, 1 - Math.exp(-delta * 3))
    state.camera.lookAt(currentLookAt.current)
  })
  return null
}

function StoreSpaceScene({ selectedSlug, onSelect }) {
  const nodes = useMemo(() => {
    return stores.map((store, index) => ({
      store,
      position: brandPosition(index, stores.length),
    }))
  }, [])

  const selectedNode = nodes.find((n) => n.store.slug === selectedSlug)

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 15, 10]} intensity={1.2} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#C89B5C" />

      {nodes.map(({ store, position }) => (
        <BrandNode
          key={store.slug}
          store={store}
          position={position}
          selected={store.slug === selectedSlug}
          dimmed={Boolean(selectedSlug) && store.slug !== selectedSlug}
          onSelect={onSelect}
        />
      ))}

      <CameraRig target={selectedNode?.position || null} />
    </>
  )
}

export default function StoreSpacePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const slug = searchParams.get('slug')
  const store = slug ? findStore(slug) : null

  // View mode: 'directory' (default, accessible, visual) or '3d'
  const [viewMode, setViewMode] = useState('directory')

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFloor, setSelectedFloor] = useState('All')
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Modal detail state
  const [modalStore, setModalStore] = useState(store)

  useEffect(() => {
    if (slug) {
      const found = findStore(slug)
      if (found) setModalStore(found)
    }
  }, [slug])

  // All categories from store list
  const allCategories = useMemo(() => {
    const cats = new Set(stores.map((s) => s.category))
    return ['All', ...Array.from(cats)]
  }, [])

  // Filtered store listing
  const filteredStores = useMemo(() => {
    let result = stores
    if (searchQuery.trim()) {
      result = searchStores(searchQuery)
    }
    if (selectedFloor !== 'All') {
      result = result.filter((s) => s.floor === Number(selectedFloor))
    }
    if (selectedCategory !== 'All') {
      result = result.filter((s) => s.category === selectedCategory)
    }
    return result
  }, [searchQuery, selectedFloor, selectedCategory])

  const openStoreModal = (targetStore) => {
    setModalStore(targetStore)
    setSearchParams({ slug: targetStore.slug }, { replace: true })
  }

  const closeStoreModal = () => {
    setModalStore(null)
    setSearchParams({}, { replace: true })
  }

  // Find showcase details if available
  const getShowcaseDetail = (storeSlug) => {
    return showcaseBrands.find((b) => b.slug === storeSlug)
  }

  return (
    <PageTransition>
      <div className="om-stores-page">
        {/* =========================================================
            HEADER & VIEW MODE SELECTOR
           ========================================================= */}
        <div className="om-stores-hero">
          <div className="om-container">
            <div className="om-stores-hero-inner">
              <div>
                <span className="om-section-badge">
                  <Sparkles size={13} />
                  <span>ORION MALL GORAKHPUR DIRECTORY</span>
                </span>
                <h1 className="om-stores-title">
                  All Approved Boutiques, <em>One Singular Destination</em>
                </h1>
                <p className="om-stores-lead">
                  Browse {stores.length} verified flagship destinations across six levels of Orion Mall. Search by brand name, filter by floor level, or explore by category.
                </p>
              </div>

              {/* View Switcher Button */}
              <div className="om-view-toggle-wrap">
                <button
                  type="button"
                  className={`om-view-toggle-btn ${viewMode === 'directory' ? 'active' : ''}`}
                  onClick={() => setViewMode('directory')}
                  aria-label="Switch to grid directory view"
                >
                  <Grid3X3 size={16} />
                  <span>Editorial Grid</span>
                </button>
                <button
                  type="button"
                  className={`om-view-toggle-btn ${viewMode === '3d' ? 'active' : ''}`}
                  onClick={() => setViewMode('3d')}
                  aria-label="Switch to 3D constellation view"
                >
                  <Globe size={16} />
                  <span>3D Constellation</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            DIRECTORY VIEW (DEFAULT)
           ========================================================= */}
        {viewMode === 'directory' && (
          <div className="om-container om-stores-directory-wrap">
            {/* Search & Filter Toolbar */}
            <div className="om-stores-toolbar">
              {/* Search Bar */}
              <div className="om-stores-search-box">
                <Search size={18} className="om-search-icon" />
                <input
                  type="text"
                  placeholder="Search by brand name (Levi's, Skechers, KFC...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="om-stores-search-input"
                  aria-label="Search stores"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="om-search-clear"
                    aria-label="Clear search"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Floor Filters */}
              <div className="om-floor-filter-pills" role="radiogroup" aria-label="Filter by floor">
                <button
                  type="button"
                  className={`om-floor-pill ${selectedFloor === 'All' ? 'active' : ''}`}
                  onClick={() => setSelectedFloor('All')}
                >
                  All Floors
                </button>
                {floors.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    className={`om-floor-pill ${selectedFloor === String(f.number) ? 'active' : ''}`}
                    onClick={() => setSelectedFloor(String(f.number))}
                  >
                    {f.label} ({f.name})
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter Scroll */}
            <div className="om-category-filter-strip">
              <span className="om-cat-strip-label">Categories:</span>
              <div className="om-cat-strip-scroll">
                {allCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`om-cat-chip ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Status Bar */}
            <div className="om-stores-results-meta">
              <span>
                Showing <strong>{filteredStores.length}</strong> of {stores.length} destinations
                {searchQuery && ` matching "${searchQuery}"`}
                {selectedFloor !== 'All' && ` on Floor ${selectedFloor}`}
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              </span>

              {(searchQuery || selectedFloor !== 'All' || selectedCategory !== 'All') && (
                <button
                  type="button"
                  className="om-clear-filters-btn"
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedFloor('All')
                    setSelectedCategory('All')
                  }}
                >
                  <X size={14} />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>

            {/* Store Cards Grid */}
            {filteredStores.length > 0 ? (
              <div className="om-stores-grid">
                {filteredStores.map((item) => {
                  const showcase = getShowcaseDetail(item.slug)
                  const Logo = showcase ? BrandLogos[showcase.logoKey] : null

                  return (
                    <div
                      key={item.id}
                      className="om-store-card"
                      onClick={() => openStoreModal(item)}
                    >
                      <div className="om-store-card-header">
                        <span className="om-store-floor-pill">
                          {floorLabel(item.floor)}
                        </span>
                        <span className="om-store-cat-pill">
                          {item.category}
                        </span>
                      </div>

                      <div className="om-store-card-brand-box">
                        {Logo ? (
                          <div className="om-store-logo-wrap">
                            <Logo />
                          </div>
                        ) : (
                          <div className="om-store-brand-text-logo">
                            {item.brand}
                          </div>
                        )}
                      </div>

                      <div className="om-store-card-content">
                        <h3 className="om-store-card-name">{item.brand}</h3>
                        <p className="om-store-card-desc">{item.description}</p>

                        {showcase && showcase.celebrity && (
                          <div className="om-store-ambassador-tag">
                            <span>Ambassador: {showcase.celebrity}</span>
                          </div>
                        )}
                      </div>

                      <div className="om-store-card-footer">
                        <span className="om-store-view-btn">
                          <span>Details</span>
                          <ArrowRight size={14} />
                        </span>
                        <button
                          type="button"
                          className="om-store-map-pin"
                          onClick={(e) => {
                            e.stopPropagation()
                            navigate(`/explore?store=${item.slug}`)
                          }}
                          title={`Locate ${item.brand} on 3D map`}
                        >
                          <Compass size={14} />
                          <span>3D Map</span>
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="om-stores-empty">
                <Search size={36} className="om-empty-icon" />
                <h3>No stores match your search</h3>
                <p>Try searching for a different brand name, or clear the active floor and category filters.</p>
                <button
                  type="button"
                  className="om-btn om-btn-dark"
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedFloor('All')
                    setSelectedCategory('All')
                  }}
                >
                  View All {stores.length} Stores
                </button>
              </div>
            )}
          </div>
        )}

        {/* =========================================================
            3D CONSTELLATION VIEW (TOGGLEABLE)
           ========================================================= */}
        {viewMode === '3d' && (
          <div className="om-stores-3d-wrapper">
            <div className="om-3d-hint-bar">
              <span className="om-live-dot" />
              <span>Click or tap any orbiting brand sphere to focus. Rotate to explore spatial nodes.</span>
            </div>

            <div className="om-3d-canvas-container">
              <Canvas
                dpr={[1, 1.75]}
                camera={{ position: [0, 2.2, 14], fov: 50, near: 0.1, far: 85 }}
                gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
              >
                <color attach="background" args={['#0D1612']} />
                <Suspense fallback={null}>
                  <StoreSpaceScene
                    selectedSlug={modalStore?.slug || null}
                    onSelect={(selectedSlug) => {
                      const found = findStore(selectedSlug)
                      if (found) openStoreModal(found)
                    }}
                  />
                </Suspense>
              </Canvas>
            </div>
          </div>
        )}

        {/* =========================================================
            STORE DETAIL MODAL / DRAWER
           ========================================================= */}
        {modalStore && (
          <div className="om-store-modal-overlay" onClick={closeStoreModal} role="dialog" aria-modal="true">
            <div
              className="om-store-modal-card"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="om-modal-close-btn"
                onClick={closeStoreModal}
                aria-label="Close details"
              >
                <X size={20} />
              </button>

              <div className="om-modal-badge-row">
                <span className="om-modal-floor-badge">
                  {floorLabel(modalStore.floor)}
                </span>
                <span className="om-modal-cat-badge">
                  {modalStore.category}
                </span>
              </div>

              <h2 className="om-modal-title">{modalStore.brand}</h2>
              <p className="om-modal-desc">{modalStore.description}</p>

              {/* Showcase specific info if available */}
              {(() => {
                const showcase = getShowcaseDetail(modalStore.slug)
                if (!showcase) return null
                return (
                  <div className="om-modal-showcase-box">
                    <p className="om-modal-tagline">"{showcase.tagline}"</p>
                    <p className="om-modal-story">{showcase.story}</p>
                    {showcase.celebrity && (
                      <div className="om-modal-ambassador-pill">
                        <Sparkles size={14} />
                        <span>Brand Ambassador: <strong>{showcase.celebrity}</strong></span>
                      </div>
                    )}
                  </div>
                )
              })()}

              <div className="om-modal-meta-grid">
                <div className="om-meta-cell">
                  <Clock size={16} className="om-meta-icon" />
                  <div>
                    <strong>Hours Today</strong>
                    <span>10:00 AM – 10:30 PM</span>
                  </div>
                </div>

                <div className="om-meta-cell">
                  <MapPin size={16} className="om-meta-icon" />
                  <div>
                    <strong>Floor Location</strong>
                    <span>{floorLabel(modalStore.floor)} · Level {modalStore.floor}</span>
                  </div>
                </div>
              </div>

              <div className="om-modal-actions">
                <button
                  type="button"
                  className="om-btn om-btn-gold om-modal-btn"
                  onClick={() => navigate(`/explore?store=${modalStore.slug}`)}
                >
                  <Compass size={17} />
                  <span>Locate in 3D Walkthrough</span>
                </button>
                <button
                  type="button"
                  className="om-btn om-btn-outline om-modal-btn"
                  onClick={closeStoreModal}
                >
                  <span>Close Window</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  )
}
