import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Percent, Tag, Gift, ArrowRight, Check } from 'lucide-react'

const currentOffers = [
  {
    id: 'eoss-sale',
    badge: 'FASHION SAVINGS',
    discount: 'Up to 50% OFF',
    title: 'End of Season Luxury Fashion Sale',
    store: 'Across 40+ Fashion Flagships',
    validity: 'Valid till Sunday',
    description: 'Exclusive discounts on international designer collections, premium denim, suits, and formal footwear.',
    code: 'EOSS50',
  },
  {
    id: 'dining-delight',
    badge: 'DINING PERK',
    discount: 'Flat 20% OFF',
    title: 'Gourmet Midweek Dining Treats',
    store: 'Selected Rooftop & Food Court Outlets',
    validity: 'Monday – Thursday',
    description: 'Indulge in handcrafted multi-course dinners and rooftop grills with special midweek culinary discounts.',
    code: 'DINE20',
  },
  {
    id: 'cinema-combo',
    badge: 'PVR INOX SPECIAL',
    discount: 'Complimentary Combo',
    title: 'Blockbuster Cinema Popcorn Upgrade',
    store: 'PVR INOX Multiplex Level 05',
    validity: 'All Afternoon Shows',
    description: 'Receive a free large caramel popcorn upgrade with any two recliner ticket bookings before 5:00 PM.',
    code: 'PVRCARAMEL',
  },
  {
    id: 'privilege-club',
    badge: 'MALL LOYALTY',
    discount: '2X Reward Points',
    title: 'Orion Privilege Loyalty Bonanza',
    store: 'Mall-wide Spend Tracking',
    validity: 'Ongoing Membership',
    description: 'Earn double reward points on every transaction, redeemable for complimentary valet, gift vouchers and cinema passes.',
    code: 'ORIONVIP',
  },
]

export default function OffersPromotionsSection() {
  const [copiedCode, setCopiedCode] = useState(null)

  const handleCopy = (code) => {
    navigator.clipboard?.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <section className="rb-section rb-offers-section" aria-label="Offers and Promotions">
      <div className="rb-container">
        <div className="rb-section-header">
          <span className="rb-badge-tag tag-amber">
            <Percent size={13} />
            <span>EXCLUSIVE PROMOTIONS</span>
          </span>
          <h2 className="rb-section-title">
            Curated Offers & Seasonal Savings
          </h2>
          <p className="rb-section-lead">
            Elevate your shopping and dining journey with privileged seasonal discounts,
            exclusive retail perks, and loyalty rewards across our entire mall directory.
          </p>
        </div>

        <div className="rb-offers-grid">
          {currentOffers.map((offer) => (
            <div key={offer.id} className="rb-offer-card">
              <div>
                <span className="rb-offer-badge">{offer.badge}</span>
                <div className="rb-offer-discount">{offer.discount}</div>
                <h3 className="rb-offer-title">{offer.title}</h3>
                <p className="rb-offer-desc">{offer.description}</p>
              </div>

              <div>
                <div className="rb-offer-store-pill" style={{ marginBottom: '14px' }}>
                  <Tag size={13} color="#d97706" />
                  <span>{offer.store} · {offer.validity}</span>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(offer.code)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    background: copiedCode === offer.code ? '#dcfce7' : '#f8fafc',
                    color: copiedCode === offer.code ? '#15803d' : '#0f172a',
                    border: '1px solid rgba(0,0,0,0.08)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {copiedCode === offer.code ? (
                    <>
                      <Check size={14} />
                      <span>Copied: {offer.code}</span>
                    </>
                  ) : (
                    <span>Use Code: {offer.code}</span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/offers" className="rb-btn rb-btn-primary">
            <Gift size={17} />
            <span>Discover All Active Mall Offers</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
