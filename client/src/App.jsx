import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation, useSearchParams } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ErrorBoundary from './components/common/ErrorBoundary'
import './styles/design-system.css'
import './App.css'

const AdminPage = lazy(() => import('./AdminPage'))
const ExplorerPage = lazy(() => import('./features/mall-explorer/Explorer'))

import HomePage from './pages/Home/Home'
import StoreSpacePage from './pages/StoreSpace/StoreSpace'
import DiningPage from './pages/Dining/Dining'
import EntertainmentPage from './pages/Entertainment/Entertainment'
import VisitPage from './pages/Visit/Visit'
import NotFoundPage from './pages/NotFound/NotFound'

const pageTitles = {
  '/': 'Orion Mall Gorakhpur — Premier Shopping, Dining & Entertainment',
  '/explore': 'Interactive 3D Walkthrough — Orion Mall Gorakhpur',
  '/stores': 'Stores & Boutiques Directory — Orion Mall Gorakhpur',
  '/dining': 'Dining, Food Court & Terraces — Orion Mall Gorakhpur',
  '/entertainment': 'PVR INOX 4K Laser Cinema & Entertainment — Orion Mall Gorakhpur',
  '/visit': 'Plan Your Visit, Hours & Transit — Orion Mall Gorakhpur',
}

function StoreRedirect() {
  const [searchParams] = useSearchParams()
  const qs = searchParams.toString()
  return <Navigate to={qs ? `/stores?${qs}` : '/stores'} replace />
}

function RoutedExperience() {
  const location = useLocation()
  const isAdmin = location.pathname.startsWith('/admin')
  const isExplore = location.pathname === '/explore'
  const [searchParams] = useSearchParams()
  const storeSlug = searchParams.get('slug')

  const title =
    pageTitles[location.pathname] ||
    (storeSlug && location.pathname === '/stores'
      ? `${storeSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())} — Orion Mall Gorakhpur`
      : isAdmin
      ? 'Mall Administration — Orion Mall'
      : 'Orion Mall Gorakhpur — More Than Shopping')

  useEffect(() => {
    document.title = title
    window.scrollTo(0, 0)
  }, [location.pathname, title])

  return (
    <>
      {!isAdmin && <Navbar />}
      <main className={isExplore ? 'route-main route-main-explore' : 'route-main'}>
        <ErrorBoundary key={location.pathname}>
          <Suspense fallback={<div className="route-loading" role="status">Loading Orion Mall Experience...</div>}>
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/stores" element={<StoreSpacePage />} />
              <Route path="/store" element={<StoreRedirect />} />
              <Route path="/dining" element={<DiningPage />} />
              <Route path="/entertainment" element={<EntertainmentPage />} />
              <Route path="/visit" element={<VisitPage />} />
              <Route path="/explore" element={<ExplorerPage />} />

              {/* Graceful redirects for deprecated / legacy routes */}
              <Route path="/events" element={<Navigate to="/entertainment" replace />} />
              <Route path="/events/*" element={<Navigate to="/entertainment" replace />} />
              <Route path="/offers" element={<Navigate to="/stores" replace />} />
              <Route path="/preview" element={<Navigate to="/" replace />} />

              <Route
                path="/admin/*"
                element={
                  <Suspense fallback={<div className="scene-loader admin-loader">Opening administration...</div>}>
                    <AdminPage />
                  </Suspense>
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      {!isAdmin && !isExplore && <Footer />}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <RoutedExperience />
    </BrowserRouter>
  )
}
