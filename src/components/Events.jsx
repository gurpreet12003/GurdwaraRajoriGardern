import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import useInView from '../hooks/useInView';

const events = [
  {
    title: 'Gurpurab — Sri Guru Nanak Dev Ji',
    date: 'November 15, 2026',
    description: 'Grand celebration of the Prakash Utsav (Birth Anniversary) of Sri Guru Nanak Dev Ji with Akhand Path, Nagar Kirtan, and special Langar.',
    image: 'https://images.pexels.com/photos/28905555/pexels-photo-28905555.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tag: 'Gurpurab',
  },
  {
    title: 'Baisakhi Celebrations',
    date: 'April 13, 2026',
    description: 'Celebration of Khalsa Sajna Divas with special kirtan programs, Nagar Kirtan procession, and community feast.',
    image: 'https://images.pexels.com/photos/30630008/pexels-photo-30630008.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tag: 'Festival',
  },
  {
    title: 'Gurpurab — Sri Guru Gobind Singh Ji',
    date: 'January 5, 2026',
    description: 'Celebrating the Prakash Utsav of the Tenth Guru with Akhand Path Sahib, Kirtan Darbar, and Amrit Sanchar.',
    image: 'https://images.pexels.com/photos/28905559/pexels-photo-28905559.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tag: 'Gurpurab',
  },
  {
    title: 'Monthly Blood Donation Camp',
    date: 'Every 1st Sunday',
    description: 'Regular blood donation drive in collaboration with Red Cross to serve the community and save lives.',
    image: '/images/langar-hall.jpg',
    tag: 'Seva',
  },
];

export default function Events() {
  const { ref, isInView } = useInView();

  return (
    <section id="events" className="py-15 md:py-10 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-saffron-500 font-semibold text-sm uppercase tracking-widest">Upcoming</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-[#00003c]">
            Events & <span className="text-saffron-600">Celebrations</span>
          </h2>
          <div className="mt-4 w-24 h-1 bg-saffron-500 mx-auto rounded-full" />
          <p className="mt-6 text-gray-600 text-lg">
            Join us in celebrating the rich Sikh traditions and participating in community programs.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={event.title}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-4 left-4 bg-saffron-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {event.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                 
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-saffron-500" />
                    Rajouri Garden
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-saffron-700 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {event.description}
                </p>
                <button className="inline-flex items-center gap-2 text-saffron-600 font-semibold text-sm hover:text-saffron-700 group/btn transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
