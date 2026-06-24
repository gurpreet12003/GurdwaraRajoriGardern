import { UtensilsCrossed, Music, BookOpen, Baby, Heart, GraduationCap, HandHeart, Sparkles } from 'lucide-react';
import useInView from '../hooks/useInView';
const services = [
  {
    title: "Kirtan Seva",
    image: "/images/prayer-hall.jpg",
    desc: "Daily Shabad Kirtan by trained Ragis and Kirtaniye Jatha.",
  },
  {
    title: "Dispensary",
    image: "/images/dispansry.jpg",
    desc: "Free healthcare consultations, medicines, and wellness services for the Sangat.",
  },
  {
    title: "Educational",
    image: "/images/gniat.jpeg",
    desc: "Gurmat classes, seminars, and workshops for spiritual and academic learning.",
  },
  {
    title: "Langar Seva",
    image: "/images/langar-hall.jpg",
    desc: "Free community kitchen serving fresh meals to all visitors.",
  },
  {
    title: "Akhand Path",
    image: "/images/ankhand_path.jpg",
    desc: "Continuous 48-hour reading of Sri Guru Granth Sahib Ji.",
  },
  {
    title: "Naam Karan",
    image: "/images/nam_karan.jpg",
    desc: "Sacred naming ceremony for newborns.",
  },
  {
    title: "Anand Karaj",
    image: "/images/annad_karaj.jpg",
    desc: "Traditional Sikh wedding ceremony.",
  },
  {
    title: "Gurmat Classes",
    image: "/images/gurmat_class.png",
    desc: "Punjabi, Gurbani and Sikh history classes.",
  },
  {
    title: "Community Welfare",
    image: "/images/CAMP.jpg",
    desc: "Medical camps, blood donation and welfare activities.",
  },
  {
    title: "Amrit Sanchar",
    image: "/images/amrit_sanchar.jpg",
    desc: "Sacred initiation ceremony conducted periodically.",
  },
  
  {
    title: "Room Booking",
    image: "/images/room_booking.png",
    desc: "Reserve classrooms and halls for events, meetings, and workshops.",
  },
    {
    title: "Community Hall Booking",
    image: "/images/communtiy_hall.jpg",
    desc: "Spacious hall available for weddings, religious ceremonies, and community events with seating, sound system, and full arrangements.",
  },
];
export default function Services() {
  const { ref, isInView } = useInView();

  return (
    <section id="services" className="py-20 md:py-10 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-saffron-500 font-semibold text-sm uppercase tracking-widest">What We Offer</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-[#00003c]">
            Sangat <span className="text-saffron-600">Seva</span>
          </h2>
          <div className="mt-4 w-24 h-1 bg-saffron-500 mx-auto rounded-full" />
          <p className="mt-6 text-gray-600 text-lg">
            Dedicated to serving the community through spiritual, social, and educational programs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ${isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#00003c]/90 via-[#00003c]/25 to-transparent"></div>

                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-[220px]">
                <p className="text-gray-600 leading-relaxed mb-5 flex-grow">
                  {service.desc}
                </p>

                <button className="mt-auto w-full bg-[#FF8000] hover:bg-[#00003c] text-white py-3 rounded-xl font-semibold transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
