import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, ArrowRight, Tag } from 'lucide-react'

const categories = ['All', 'Fashion & Runway', 'Footwear & Athleisure', 'Jewellery & Watches', 'Beauty & Lifestyle']

const featuredStores = [
  {
    id: 'levis',
    name: "Levi's",
    category: 'Fashion & Runway',
    floor: 'Ground Floor',
    image: "/images/brands/levi's.png",
    tagline: 'Iconic Denim & Contemporary Cuts',
    promo: 'New Season Arrival',
  },
  {
    id: 'skechers',
    name: 'Skechers',
    category: 'Footwear & Athleisure',
    floor: 'First Floor',
    image: '/images/brands/skecherrs.png',
    tagline: 'Hyper Burst & Slip-in Tech Footwear',
    promo: 'Trending Collection',
  },
  {
    id: 'allen-solly',
    name: 'Allen Solly',
    category: 'Fashion & Runway',
    floor: 'First Floor',
    image: '/images/brands/allen-solly.webp',
    tagline: 'Contemporary British Workwear',
    promo: 'Up to 30% Off Selected Styles',
  },
  {
    id: 'crocs',
    name: 'Crocs',
    category: 'Footwear & Athleisure',
    floor: 'Second Floor',
    image: '/images/brands/crocs.png',
    tagline: 'Classic Clogs & Jibbitz™ Charms',
    promo: 'New Color Drops',
  },
  {
    id: 'being-human',
    name: 'Being Human',
    category: 'Fashion & Runway',
    floor: 'Ground Floor',
    image: '/images/brands/being-human.png',
    tagline: 'Conscious Casual Streetwear',
    promo: 'Special Festive Edit',
  },
  {
    id: 'reebok',
    name: 'Reebok',
    category: 'Footwear & Athleisure',
    floor: 'First Floor',
    image: '/images/brands/reebok.png',
    tagline: 'Performance Fitness & Heritage Sneakers',
    promo: 'Flat 20% on Footwear',
  },
  {
    id: 'van-heusen',
    name: 'Van Heusen',
    category: 'Fashion & Runway',
    floor: 'First Floor',
    image: '/images/brands/van-heusen.png',
    tagline: 'Power Dressing, Suits & Bespoke Formalwear',
    promo: 'Exclusive Tuxedo Range',
  },
  {
    id: 'peter-england',
    name: 'Peter England',
    category: 'Fashion & Runway',
    floor: 'Ground Floor',
    image: '/images/brands/peter-england.png',
    tagline: 'Everyday Essentials & Smart Casuals',
    promo: 'Special Combo Deals',
  },
]

export default function PreviewRetail({ secRef }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredStores =
    activeCategory === 'All'
      ? featuredStores
      : featuredStores.filter((s) => s.category === activeCategory)

  return (
    <section ref={secRef} className="rsp-section rsp-section-retail" aria-label="Shopping and Retail">
      <div className="rsp-container">
        <div className="rsp-section-header">
          <span className="rsp-badge-tag">
            <ShoppingBag size={13} />
            <span>THE COUTURE BOULEVARD</span>
          </span>
          <h2 className="rsp-section-title">
            Over 120 Curated Fashion & Lifestyle Flagships
          </h2>
          <p className="rsp-section-lead">
            From internationally celebrated apparel and bespoke tailoring to precision athletic footwear
            and fine jewellery ateliers. Experience Eastern UP’s most complete luxury shopping promenade.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="rsp-filter-pills" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`rsp-filter-pill ${activeCategory === cat ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Store Cards Grid */}
        <div className="rsp-stores-grid">
          {filteredStores.map((store) => (
            <div key={store.id} className="rsp-store-card">
              <div className="rsp-store-brand-banner">
                <span className="rsp-store-floor-badge">{store.floor}</span>
                <span className="rsp-store-promo-pill">
                  <Tag size={12} />
                  <span>{store.promo}</span>
                </span>
              </div>

              <div className="rsp-store-logo-wrap">
                <img
                  src={store.image}
                  alt={`${store.name} Logo`}
                  className="rsp-store-logo-img"
                  loading="lazy"
                />
              </div>

              <div className="rsp-store-card-body">
                <span className="rsp-store-category">{store.category}</span>
                <h3 className="rsp-store-name">{store.name}</h3>
                <p className="rsp-store-tagline">{store.tagline}</p>

                <div className="rsp-store-card-footer">
                  <Link to={`/stores?slug=${store.id}`} className="rsp-store-link">
                    <span>View Store Details</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Directory Callout Bar */}
        <div className="rsp-directory-callout">
          <div className="rsp-callout-text">
            <h3>Looking for a specific boutique or category?</h3>
            <p>Explore all 4 floors, operating hours, floor plans and exclusive in-store collections.</p>
          </div>
          <Link to="/stores" className="rsp-btn-primary">
            <span>Browse Full Store Directory</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}
