import { Link } from 'react-router-dom'
import { UtensilsCrossed, Clock, ArrowRight } from 'lucide-react'

const diningVenues = [
  {
    id: 'fine-dining',
    title: 'The Sky Terrace & Fine Dining',
    category: 'Fine Dining & Rooftop Lounge',
    floor: 'Level 02 Terrace',
    image: '/images/dining/restaurant.webp',
    description: 'Open-air rooftop seating offering panoramic views of Gorakhpur, live grills, craft beverages, and curated global cuisines.',
    highlights: ['Outdoor Sky Seating', 'Live Barbeque', 'Private Dining Rooms'],
  },
  {
    id: 'cafes',
    title: 'Artisan Cafés & Roasteries',
    category: 'Specialty Coffee & Bakeries',
    floor: 'Level 01 Central Plaza',
    image: '/images/dining/cafe.webp',
    description: 'Freshly roasted single-origin espresso, flaky artisanal croissants, Belgian waffles, and gourmet loose-leaf teas.',
    highlights: ['Starbucks', 'Handcrafted Pastries', 'High-Speed Wi-Fi'],
  },
  {
    id: 'food-court',
    title: 'Epicurean Food Hall',
    category: 'Multi-Cuisine Quick Dining',
    floor: 'Level 03 Concourse',
    image: '/images/dining/foodcourt.webp',
    description: 'Over 20 regional and international dining kiosks serving authentic North Indian thalis, sizzling sizzlers, wok specials, and burgers.',
    highlights: ['500+ Seating Capacity', 'Kids Highchairs Available', 'Digital Self-Ordering'],
  },
  {
    id: 'desserts',
    title: 'Sweet Delights & Gelaterias',
    category: 'Desserts & Shakes',
    floor: 'Level 02 Promenade',
    image: '/images/dining/dessert.webp',
    description: 'Handcrafted Italian gelato, hot churros with dark chocolate dip, bubble teas, and traditional saffron kulfi.',
    highlights: ['Authentic Gelato', 'Chocoholic Desserts', 'Vegan Options'],
  },
]

export default function PreviewDining({ secRef }) {
  return (
    <section ref={secRef} className="rsp-section rsp-section-dining" aria-label="Dining and Food Court">
      <div className="rsp-container">
        <div className="rsp-section-header">
          <span className="rsp-badge-tag">
            <UtensilsCrossed size={13} />
            <span>EPICUREAN PROMENADE</span>
          </span>
          <h2 className="rsp-section-title">
            Flavors From Around the World
          </h2>
          <p className="rsp-section-lead">
            Whether you desire a celebratory dinner under the stars, an artisanal espresso between shopping sprees,
            or a vibrant family feast at the food court, Orion Mall offers exceptional culinary delights for every palate.
          </p>
        </div>

        {/* Dining Showcase Grid */}
        <div className="rsp-dining-grid">
          {diningVenues.map((venue) => (
            <div key={venue.id} className="rsp-dining-card">
              <div className="rsp-dining-image-wrap">
                <img
                  src={venue.image}
                  alt={venue.title}
                  className="rsp-dining-image"
                  loading="lazy"
                />
                <span className="rsp-dining-floor-pill">{venue.floor}</span>
              </div>

              <div className="rsp-dining-card-body">
                <span className="rsp-dining-category">{venue.category}</span>
                <h3 className="rsp-dining-title">{venue.title}</h3>
                <p className="rsp-dining-desc">{venue.description}</p>

                <div className="rsp-dining-tags">
                  {venue.highlights.map((h, i) => (
                    <span key={i} className="rsp-dining-tag">
                      {h}
                    </span>
                  ))}
                </div>

                <div className="rsp-dining-footer">
                  <div className="rsp-dining-hours">
                    <Clock size={13} />
                    <span>Open 11:00 AM – 11:00 PM</span>
                  </div>
                  <Link to="/dining" className="rsp-link-arrow">
                    <span>Explore Menus</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dining Feature Callout */}
        <div className="rsp-dining-callout">
          <div className="rsp-dining-callout-content">
            <span className="rsp-badge-pill">CELEBRATE & GATHER</span>
            <h3>Host Your Special Gatherings on the Terrace</h3>
            <p>
              From intimate birthday celebrations to corporate banquets, our rooftop dining partners
              provide tailored event menus, dedicated hospitality staff, and panoramic sunset views.
            </p>
          </div>
          <Link to="/dining" className="rsp-btn-primary">
            <span>View All Dining Outlets</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}
