import { Link } from 'react-router-dom'
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react'

const upcomingEvents = [
  {
    id: 'season-of-light',
    title: 'Season of Light — Winter Festive Gala',
    category: 'Cultural Celebration',
    date: 'Dec 15 – Jan 05',
    time: '6:00 PM Onwards',
    location: 'Central Atrium',
    image: '/images/events/season-of-light.webp',
    description: 'A grand celebration featuring 40-foot illuminated light sculptures, live instrumental sitar fusion concerts, and evening artisan markets.',
  },
  {
    id: 'weekend-edit',
    title: 'The Haute Couture Weekend Edit',
    category: 'Fashion & Lifestyle',
    date: 'Every Saturday & Sunday',
    time: '4:00 PM – 9:00 PM',
    location: 'First Floor Promenade',
    image: '/images/events/weekend-edit.webp',
    description: 'Pop-up designer runways, personal styling masterclasses with celebrity fashion curators, and exclusive early access to spring collections.',
  },
  {
    id: 'cinema-night',
    title: 'Rooftop Cinema Under the Stars',
    category: 'Entertainment',
    date: 'Friday Evenings',
    time: '7:30 PM',
    location: 'Level 02 Sky Terrace',
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

export default function PreviewEvents({ secRef }) {
  return (
    <section ref={secRef} className="rsp-section rsp-section-events" aria-label="Events and Activities">
      <div className="rsp-container">
        <div className="rsp-section-header">
          <span className="rsp-badge-tag">
            <Calendar size={13} />
            <span>COMMUNITY & HAPPENINGS</span>
          </span>
          <h2 className="rsp-section-title">
            Celebrations, Live Concerts & Weekend Edits
          </h2>
          <p className="rsp-section-lead">
            Orion Mall Gorakhpur is more than a shopping center—it is the cultural heart of the city.
            Discover engaging family celebrations, seasonal festivals, and musical performances all year round.
          </p>
        </div>

        {/* Events Grid */}
        <div className="rsp-events-grid">
          {upcomingEvents.map((evt) => (
            <div key={evt.id} className="rsp-event-card">
              <div className="rsp-event-image-wrap">
                <img
                  src={evt.image}
                  alt={evt.title}
                  className="rsp-event-image"
                  loading="lazy"
                />
                <span className="rsp-event-category-pill">{evt.category}</span>
              </div>

              <div className="rsp-event-card-body">
                <div className="rsp-event-meta-row">
                  <span className="rsp-event-date">
                    <Calendar size={13} />
                    <span>{evt.date}</span>
                  </span>
                  <span className="rsp-event-time">
                    <Clock size={13} />
                    <span>{evt.time}</span>
                  </span>
                </div>

                <h3 className="rsp-event-title">{evt.title}</h3>
                <p className="rsp-event-desc">{evt.description}</p>

                <div className="rsp-event-card-footer">
                  <div className="rsp-event-location">
                    <MapPin size={13} />
                    <span>{evt.location}</span>
                  </div>
                  <Link to="/events" className="rsp-link-arrow">
                    <span>Event Details</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events Bar */}
        <div className="rsp-events-callout">
          <div>
            <h3>Never miss an upcoming performance or festival</h3>
            <p>Subscribe to our calendar or view complete event schedules and ticket reservations.</p>
          </div>
          <Link to="/events" className="rsp-btn-primary">
            <span>Explore Full Event Calendar</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}
