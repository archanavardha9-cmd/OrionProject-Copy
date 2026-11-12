import { Car, Zap, Accessibility, Wifi, Baby, ShieldCheck, HeartHandshake, Compass } from 'lucide-react'

const mallServices = [
  {
    icon: Car,
    title: 'Smart Valet & 1,200+ Parking Bays',
    desc: 'Covered multi-level parking with automated sensor guidance and dedicated valet drop-off porticos.',
  },
  {
    icon: Zap,
    title: 'EV Fast Charging Stations',
    desc: '12 high-capacity DC rapid chargers located on Basement Level 01 compatible with all major EV brands.',
  },
  {
    icon: Accessibility,
    title: 'Wheelchair & Mobility Care',
    desc: 'Complimentary motorized and manual wheelchairs with dedicated assistance at all mall entry portals.',
  },
  {
    icon: Wifi,
    title: 'High-Speed Mall-Wide Wi-Fi',
    desc: 'High-speed complimentary wireless connectivity across all six levels, dining concourses, and atriums.',
  },
  {
    icon: Baby,
    title: 'Pristine Baby Care Suites',
    desc: 'Private mother nursing rooms, diaper changing stations, and bottle warmers on every floor.',
  },
  {
    icon: ShieldCheck,
    title: '24/7 Guest Safety & First Aid',
    desc: 'Continuous surveillance, trained concierge emergency responders, and an on-site primary care medical room.',
  },
  {
    icon: HeartHandshake,
    title: 'Lost & Found Concierge',
    desc: 'Dedicated guest services desk on the Ground Floor to assist with personal item recovery and general inquiries.',
  },
  {
    icon: Compass,
    title: 'Interactive Wayfinding Kiosks',
    desc: 'Smart 3D digital touchscreens located on every concourse to guide you effortlessly to any store or dining outlet.',
  },
]

export default function FacilitiesHospitalitySection() {
  return (
    <section className="rb-section rb-facilities-section" aria-label="Mall Facilities and Services">
      <div className="rb-container">
        <div className="rb-section-header">
          <span className="rb-badge-tag tag-sky">
            <HeartHandshake size={13} />
            <span>EXEMPLARY HOSPITALITY</span>
          </span>
          <h2 className="rb-section-title">
            World-Class Facilities Designed Around You
          </h2>
          <p className="rb-section-lead">
            Every convenience has been thoughtfully planned to ensure a seamless, relaxed, and welcoming visit
            for families, shoppers, and travelers alike.
          </p>
        </div>

        <div className="rb-facilities-grid">
          {mallServices.map((svc) => {
            const Icon = svc.icon
            return (
              <div key={svc.title} className="rb-facility-card">
                <div className="rb-facility-icon-wrap">
                  <Icon size={24} />
                </div>
                <h3 className="rb-facility-title">{svc.title}</h3>
                <p className="rb-facility-desc">{svc.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

