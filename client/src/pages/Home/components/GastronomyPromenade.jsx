import { Link } from 'react-router-dom'
import { UtensilsCrossed, ArrowRight } from 'lucide-react'

const diningVenues = [
  {
    id: 'fine-dining',
    title: 'The Sky Terrace & Fine Dining',
    category: 'Fine Dining & Rooftop Lounge',
    floor: 'Level 04 Terrace',
    image: '/images/dining/restaurant.webp',
    description: 'Open-air rooftop seating offering panoramic views of Gorakhpur, live charcoal grills, craft mocktails, and curated North Indian and Continental delicacies.',
    highlights: ['Outdoor Sky Seating', 'Live Barbeque Nation', 'Private Family Lounges'],
  },
  {
    id: 'cafes',
    title: 'Artisan Cafés & Roasteries',
    category: 'Specialty Coffee & Bakeries',
    floor: 'Level 01 Central Atrium',
    image: '/images/dining/cafe.webp',
    description: 'Freshly ground single-origin espresso, flaky buttery croissants, Belgian chocolate waffles, and gourmet teas in a sun-drenched atrium setting.',
    highlights: ['Costa Coffee', 'Handcrafted Pastries', 'High-Speed Wi-Fi'],
  },
  {
    id: 'food-court',
    title: 'Epicurean Food Hall',
    category: 'Multi-Cuisine Quick Dining',
    floor: 'Level 04 Concourse',
    image: '/images/dining/foodcourt.webp',
    description: 'Over 20 regional and international dining kitchens serving authentic North Indian thalis, sizzling sizzlers, wok specials, crisp dosas, and burgers.',
    highlights: ['Haldiram’s & KFC', '500+ Seating Capacity', 'Digital Self-Ordering'],
  },
  {
    id: 'desserts',
    title: 'Sweet Delights & Gelaterias',
    category: 'Desserts & Shakes',
    floor: 'Level 02 Promenade',
    image: '/images/dining/dessert.webp',
    description: 'Authentic Italian gelato, hot churros with dark chocolate dip, thick milkshakes, and traditional artisanal saffron kulfi.',
    highlights: ['Baskin Robbins', 'Waffle Cones', 'Vegan Options'],
  },
]

export default function GastronomyPromenade() {
  return (
    <section className="rb-section rb-dining-section" aria-label="Dining and Food Court">
      <div className="rb-container">
        <div className="rb-section-header">
          <span className="rb-badge-tag tag-coral">
            <UtensilsCrossed size={13} />
            <span>EPICUREAN PROMENADE</span>
          </span>
          <h2 className="rb-section-title">
            Flavors From Around the World
          </h2>
          <p className="rb-section-lead">
            Whether you desire a celebratory dinner under the stars, an artisanal espresso between
            shopping sprees, or a vibrant family feast, Orion Mall presents unforgettable culinary experiences.
          </p>
        </div>

        <div className="rb-dining-masonry-grid">
          {diningVenues.map((venue) => (
            <div key={venue.id} className="rb-dining-venue-card">
              <div className="rb-dining-img-container">
                <img
                  src={venue.image}
                  alt={venue.title}
                  className="rb-dining-img"
                  loading="lazy"
                />
                <span className="rb-dining-badge">{venue.floor}</span>
              </div>

              <div className="rb-dining-card-body">
                <span style={{ fontSize: '0.8rem', color: '#ea580c', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>
                  {venue.category}
                </span>
                <h3 className="rb-dining-card-title">{venue.title}</h3>
                <p className="rb-dining-card-desc">{venue.description}</p>

                <div className="rb-dining-highlights-chips">
                  {venue.highlights.map((h) => (
                    <span key={h} className="rb-chip">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/dining" className="rb-btn rb-btn-accent">
            <UtensilsCrossed size={17} />
            <span>View All Dining Outlets & Menus</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
