import PageTransition from '../../components/layout/PageTransition'
import ContinuousBackground from './components/ContinuousBackground'
import Hero3D from './components/Hero3D'
import MallIntro from './components/MallIntro'
import BrandShowcase from './components/BrandShowcase'
import FloorExplorerTeaser from './components/FloorExplorerTeaser'
import DiningShowcase from './components/DiningShowcase'
import CinemaEntertainment from './components/CinemaEntertainment'
import GrandClosing from './components/GrandClosing'
import './home-cinematic.css'

export default function HomePage() {
  return (
    <PageTransition>
      <div className="home-cinematic-wrapper">
        {/* Continuous Living Background (Animated light rays, particles & chromatic depth) */}
        <ContinuousBackground />

        {/* 1. Cinematic Architectural Hero Section with Complete, Uncropped Mall Image */}
        <Hero3D />

        {/* 2. Luminous Architectural Introduction (Layered Asymmetrical Visuals) */}
        <MallIntro />

        {/* 3. Haute Couture Brand Showcase (Official SVG Logos + Celebrity Runway) */}
        <BrandShowcase />

        {/* 4. Interactive Vertical Floor Explorer (Tier Stack & Orbital Brands) */}
        <FloorExplorerTeaser />

        {/* 5. Epicurean Promenade (Panoramic Dining Experience) */}
        <DiningShowcase />

        {/* 6. PVR INOX Multiplex (Widescreen Cinema Stage) */}
        <CinemaEntertainment />

        {/* 7. Grand Closing Call to Action & Architectural Portal */}
        <GrandClosing />
      </div>
    </PageTransition>
  )
}
