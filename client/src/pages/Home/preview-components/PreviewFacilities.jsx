import { Car, Wifi, Accessibility, Baby, ShieldCheck, HeartHandshake, Compass, Zap } from 'lucide-react'

const mallServices = [
  {
    icon: Car,
    title: 'Smart Valet & Multi-Level Parking',
    desc: 'Covered parking for over 1,200 vehicles with automated space sensors and dedicated valet drop-off.',
  },
  {
    icon: Zap,
    title: 'EV Fast Charging Stations',
    desc: 'Multiple high-capacity DC fast chargers on Basement Level 01 compatible with all major EV models.',
  },
  {
    icon: Accessibility,
    title: 'Wheelchair & Mobility Care',
    desc: 'Complimentary wheelchairs and dedicated assistance at all major mall entry portals.',
  },
  {
    icon: Wifi,
    title: 'High-Speed Mall Wi-Fi',
    desc: 'Seamless, high-speed wireless connectivity available across all 4 floors, dining areas, and atriums.',
  },
  {
    icon: Baby,
    title: 'Pristine Baby Care Rooms',
    desc: 'Private nursing suites, diaper changing stations, and bottle warmers on every level.',
  },
  {
    icon: ShieldCheck,
    title: '24/7 Guest Security & First Aid',
    desc: 'Continuous surveillance, trained concierge emergency first-responders, and central medical aid room.',
  },
  {
    icon: HeartHandshake,
    title: 'Lost & Found Concierge',
    desc: 'Dedicated guest desk on the Ground Floor to assist with lost personal items and inquiries.',
  },
  {
    icon: Compass,
    title: 'Interactive Wayfinding Kiosks',
    desc: 'Touchscreen digital maps on every concourse to easily guide you to any store or dining outlet.',
  },
]

export default function PreviewFacilities({ secRef }) {
  return (
    <section ref={secRef} className="rsp-section rsp-section-facilities" aria-label="Mall Facilities and Services">
      <div className="rsp-container">
        <div className="rsp-section-header">
          <span className="rsp-badge-tag">
            <HeartHandshake size={13} />
            <span>EXEMPLARY HOSPITALITY</span>
          </span>
          <h2 className="rsp-section-title">
            World-Class Facilities Designed Around You
          </h2>
          <p className="rsp-section-lead">
            Every convenience has been thoughtfully planned to ensure a seamless, relaxed, and welcoming visit
            for families, shoppers, and travelers alike.
          </p>
        </div>

        {/* 8-Card Facilities Grid */}
        <div className="rsp-facilities-grid">
          {mallServices.map((service, idx) => {
            const Icon = service.icon
            return (
              <div key={idx} className="rsp-facility-card">
                <div className="rsp-facility-icon-wrap">
                  <Icon size={20} />
                </div>
                <h3 className="rsp-facility-title">{service.title}</h3>
                <p className="rsp-facility-desc">{service.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

