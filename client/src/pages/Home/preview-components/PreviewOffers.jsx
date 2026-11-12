import { Link } from 'react-router-dom'
import { Tag, Percent, Gift, Crown, ArrowRight, Clock } from 'lucide-react'

const currentOffers = [
  {
    id: 'eoss-sale',
    badge: 'FASHION SAVINGS',
    discount: 'Up to 50% OFF',
    title: 'End of Season Luxury Fashion Sale',
    store: 'Across 40+ Fashion Flagships',
    validity: 'Valid till Sunday',
    description: 'Exclusive discounts on international designer collections, premium denim, suits, and formal footwear.',
    icon: Percent,
  },
  {
    id: 'dining-delight',
    badge: 'DINING PERK',
    discount: 'Flat 20% OFF',
    title: 'Gourmet Midweek Dining Treats',
    store: 'Selected Rooftop & Food Court Outlets',
    validity: 'Monday – Thursday',
    description: 'Indulge in handcrafted multi-course dinners and rooftop grills with special midweek culinary discounts.',
    icon: Tag,
  },
  {
    id: 'cinema-combo',
    badge: 'PVR INOX SPECIAL',
    discount: 'Complimentary Combo',
    title: 'Blockbuster Cinema Popcorn Upgrade',
    store: 'PVR INOX Multiplex Level 03',
    validity: 'All Afternoon Shows',
    description: 'Receive a free large caramel popcorn upgrade with any two recliner ticket bookings before 5:00 PM.',
    icon: Gift,
  },
  {
    id: 'privilege-club',
    badge: 'MALL LOYALTY',
    discount: '2X Reward Points',
    title: 'Orion Privilege Loyalty Bonanza',
    store: 'Mall-wide Spend Tracking',
    validity: 'Ongoing Membership',
    description: 'Earn double reward points on every transaction, redeemable for complimentary valet, gift vouchers and cinema passes.',
    icon: Crown,
  },
]

export default function PreviewOffers({ secRef }) {
  return (
    <section ref={secRef} className="rsp-section rsp-section-offers" aria-label="Offers and Promotions">
      <div className="rsp-container">
        <div className="rsp-section-header">
          <span className="rsp-badge-tag">
            <Percent size={13} />
            <span>EXCLUSIVE PROMOTIONS</span>
          </span>
          <h2 className="rsp-section-title">
            Curated Offers & Seasonal Savings
          </h2>
          <p className="rsp-section-lead">
            Elevate your shopping and dining experience with privileged discounts, festive bundle offers,
            and exclusive loyalty perks available only at Orion Mall Gorakhpur.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="rsp-offers-grid">
          {currentOffers.map((offer) => {
            const Icon = offer.icon
            return (
              <div key={offer.id} className="rsp-offer-card">
                <div className="rsp-offer-top">
                  <span className="rsp-offer-badge">{offer.badge}</span>
                  <div className="rsp-offer-icon-bubble">
                    <Icon size={16} />
                  </div>
                </div>

                <div className="rsp-offer-value">{offer.discount}</div>
                <h3 className="rsp-offer-title">{offer.title}</h3>
                <p className="rsp-offer-store">{offer.store}</p>
                <p className="rsp-offer-desc">{offer.description}</p>

                <div className="rsp-offer-footer">
                  <span className="rsp-offer-validity">
                    <Clock size={12} />
                    <span>{offer.validity}</span>
                  </span>
                  <Link to="/offers" className="rsp-link-arrow">
                    <span>Claim Offer</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Privilege Membership Banner */}
        <div className="rsp-loyalty-banner">
          <div className="rsp-loyalty-content">
            <span className="rsp-loyalty-tag">
              <Crown size={14} />
              <span>ORION PRIVILEGE MEMBERSHIP</span>
            </span>
            <h3>Join Eastern UP’s Most Rewarding Shopping Club</h3>
            <p>
              Members enjoy dedicated valet drop-offs, lounge access, invitations to preview sales,
              and points on every purchase across all 120+ stores and restaurants.
            </p>
          </div>
          <Link to="/offers" className="rsp-btn-primary">
            <span>Register for Free Today</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}

