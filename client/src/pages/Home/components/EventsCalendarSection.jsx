import { Link } from 'react-router-dom'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'

const upcomingEvents = [
  {
    id: 'season-of-light',
    title: 'Season of Light — Winter Festive Gala',
    category: 'Cultural Celebration',
    date: 'Dec 15 – Jan 05',
    time: '6:00 PM Onwards',
    location: 'Central Atrium',
    image: '/images/events/season-of-light.webp',
    description: 'A grand celebration featuring 40-foot illuminated light sculptures, live instrumental sitar fusion concerts, and evening artisan festive markets.',
  },
  {
    id: 'weekend-edit',
    title: 'The Haute Couture Weekend Edit',
    category: 'Fashion & Lifestyle',
    date: 'Every Saturday & Sunday',
    time: '4:00 PM – 9:00 PM',
    location: 'First Floor Promenade',
    image: '/images/events/weekend-edit.webp',
    description: 'Pop-up designer runways, personal styling masterclasses with celebrity fashion curators, and exclusive early access to seasonal collections.',
  },
  {
    id: 'cinema-night',
    title: 'Rooftop Cinema Under the Stars',
    category: 'Entertainment',
    date: 'Friday Evenings',
    time: '7:30 PM',
    location: 'Level 04 Sky Terrace',
    image: '/images/events/cinema-night.webp',
    description: 'Complimentary outdoor screenings of classic cinema masterpieces on our massive terrace screen with artisan popcorn and hot cocoa.',
  },
  {
    id: 'gather-around',
    title: 'Flavors of Awadh Food Festival',
    category: 'Culinary Masterclass',
    date: 'Upcoming Weekend',
    time: '12:00 PM – 10:00 PM',
    location: 'Food Court & Terrace',
    image: '/images/events/gather-around.webp',
    description: 'Experience authentic royal Awadhi biryanis, melt-in-mouth galouti kebabs, and live chef demonstrations from master culinary artisans.',
  },
]

export default function EventsCalendarSection() {
  return (
    <section className="rb-section rb-events-section" aria-label="Events and Cultural Celebrations">
      <div className="rb-container">
        <div className="rb-section-header">
          <span className="rb-badge-tag tag-rose">
            <Calendar size={13} />
            <span>COMMUNITY & HAPPENINGS</span>
          </span>
          <h2 className="rb-section-title">
            Celebrations, Live Concerts & Weekend Edits
          </h2>
          <p className="rb-section-lead">
            Orion Mall Gorakhpur is the cultural heart of the city—a vibrant gathering ground
            for live musical performances, designer showcases, and festive holiday galas.
          </p>
        </div>

        <div className="rb-events-grid">
          {upcomingEvents.map((evt) => (
            <div key={evt.id} className="rb-event-card">
              <div className="rb-event-img-wrap">
                <img
                  src={evt.image}
                  alt={evt.title}
                  className="rb-event-img"
                  loading="lazy"
                />
              </div>

              <div className="rb-event-body">
                <div>
                  <span className="rb-event-date-badge">{evt.date}</span>
                  <h3 className="rb-event-title">{evt.title}</h3>
                  <p className="rb-event-desc">{evt.description}</p>
                </div>

                <div className="rb-event-venue-meta">
                  <MapPin size={14} color="#e11d48" />
                  <span>{evt.location} · {evt.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/events" className="rb-btn rb-btn-primary">
            <Calendar size={17} />
            <span>Browse All Mall Events & Galas</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
