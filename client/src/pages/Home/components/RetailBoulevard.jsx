import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, ArrowRight, Tag } from 'lucide-react'

const categories = ['All', 'Fashion & Runway', 'Footwear & Athleisure', 'Jewellery & Watches', 'Beauty & Lifestyle']

const brandLogosList = [
  { name: 'Zara', floor: 'Level 01', logo: '/images/brands/zara.png' },
  { name: "Levi's", floor: 'Level 01', logo: "/images/brands/levi's.png" },
  { name: 'Marks & Spencer', floor: 'Level 01', logo: '/images/brands/marks-and-spencer.png' },
  { name: 'Tommy Hilfiger', floor: 'Level 01', logo: '/images/brands/tommy-hilfiger.png' },
  { name: 'Skechers', floor: 'Level 02', logo: '/images/brands/skecherrs.png' },
  { name: 'Allen Solly', floor: 'Level 02', logo: '/images/brands/allen-solly.webp' },
  { name: 'Crocs', floor: 'Level 02', logo: '/images/brands/crocs.png' },
  { name: 'Being Human', floor: 'Level 01', logo: '/images/brands/being-human.png' },
  { name: 'Reebok', floor: 'Level 02', logo: '/images/brands/reebok.png' },
  { name: 'Sephora', floor: 'Level 01', logo: '/images/brands/sephora.png' },
  { name: 'Tanishq', floor: 'Level 01', logo: '/images/brands/tanishq.png' },
  { name: 'Calvin Klein', floor: 'Level 01', logo: '/images/brands/calvin-klein.png' },
]

const featuredStores = [
  {
    id: 'levis',
    name: "Levi's Flagship",
    category: 'Fashion & Runway',
    floor: 'Ground Floor · Level 01',
    image: '/images/stores/store1.webp',
    tagline: 'Iconic Tailored Denim & Sustainable Streetwear Collections',
    promo: 'New Season Arrival',
  },
  {
    id: 'skechers',
    name: 'Skechers Comfort Studio',
    category: 'Footwear & Athleisure',
    floor: 'Level 02 · Concourse',
    image: '/images/stores/store2.webp',
    tagline: 'Hyper Burst & Slip-in Technology Footwear for Active Lifestyles',
    promo: 'Trending Collection',
  },
  {
    id: 'allen-solly',
    name: 'Allen Solly Studio',
    category: 'Fashion & Runway',
    floor: 'Level 02 · Promenade',
    image: '/images/stores/store3.webp',
    tagline: 'Contemporary British Workwear, Smart Blazers & Sunday Casuals',
    promo: 'Up to 30% Off Edit',
  },
  {
    id: 'sephora',
    name: 'Sephora Haute Beauté',
    category: 'Beauty & Lifestyle',
    floor: 'Level 01 · Grand Concourse',
    image: '/images/stores/store4.webp',
    tagline: 'Curated Global Skincare, Fragrances & Bespoke Makeup Bars',
    promo: 'Exclusive Fragrance Drops',
  },
  {
    id: 'tanishq',
    name: 'Tanishq Jewels',
    category: 'Jewellery & Watches',
    floor: 'Level 01 · Atrium Promenade',
    image: '/images/stores/store5.webp',
    tagline: 'Exquisite 22K Gold, Solitaire Diamonds & Heirloom Bridal Art',
    promo: 'Festive Gold Exchange',
  },
  {
    id: 'crocs',
    name: 'Crocs Concept Store',
    category: 'Footwear & Athleisure',
    floor: 'Level 02 · Fashion Avenue',
    image: '/images/stores/store6.webp',
    tagline: 'Classic Clogs, Sandal Silhouettes & Limited Edition Jibbitz™ Charms',
    promo: 'New Color Drops',
  },
]

export default function RetailBoulevard() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? featuredStores
    : featuredStores.filter((s) => s.category === activeCategory)

  return (
    <section className="rb-section rb-retail-section" aria-label="Shopping and Haute Couture">
      <div className="rb-container">
        <div className="rb-section-header">
          <span className="rb-badge-tag tag-rose">
            <ShoppingBag size={13} />
            <span>GLOBAL LUXURY & HIGH STREET</span>
          </span>
          <h2 className="rb-section-title">
            The Haute Couture Promenade
          </h2>
          <p className="rb-section-lead">
            Eastern Uttar Pradesh's most complete destination for international labels, bespoke tailoring,
            designer timepieces, and luxury cosmetics. Discover over 150 signature flagships.
          </p>
        </div>

        {/* Horizontal Brand Runway Marquee */}
        <div className="rb-runway-marquee-container" aria-label="Featured Brand Ribbon">
          <div className="rb-runway-track">
            {[...brandLogosList, ...brandLogosList].map((brand, i) => (
              <div key={`${brand.name}-${i}`} className="rb-brand-card">
                <span className="rb-brand-name">{brand.name}</span>
                <span className="rb-brand-floor">{brand.floor}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="rb-category-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`rb-cat-pill ${activeCategory === cat ? 'is-active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetrical Featured Stores Grid */}
        <div className="rb-stores-asym-grid">
          {filtered.map((store) => (
            <div key={store.id} className="rb-store-item-card">
              <div className="rb-store-img-wrap">
                <img
                  src={store.image}
                  alt={store.name}
                  className="rb-store-cover-img"
                  loading="lazy"
                />
                <span className="rb-store-badge">
                  <Tag size={12} style={{ display: 'inline', marginRight: '4px' }} />
                  {store.promo}
                </span>
              </div>

              <div className="rb-store-body">
                <h3 className="rb-store-name">{store.name}</h3>
                <p className="rb-store-tagline">{store.tagline}</p>
                <div className="rb-store-meta-row">
                  <span>{store.floor}</span>
                  <span style={{ color: '#ea580c', fontWeight: 600 }}>{store.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Action */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/stores" className="rb-btn rb-btn-primary">
            <span>Explore All 150+ Flagship Stores</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
