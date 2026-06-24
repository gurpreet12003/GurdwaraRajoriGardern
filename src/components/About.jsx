import { Heart, Users, BookOpen, Star } from 'lucide-react';
import useInView from '../hooks/useInView';

const values = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Spiritual Learning',
    desc: 'Regular path and kirtan sessions to deepen spiritual understanding of Gurbani.',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Selfless Service',
    desc: 'Seva (selfless service) is at the heart of all activities — Langar, cleaning, and community outreach.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Community Unity',
    desc: 'Bringing together families and individuals in the spirit of equality and togetherness.',
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: 'Cultural Heritage',
    desc: 'Preserving and promoting Sikh heritage through education, celebrations, and youth programs.',
  },
];

export default function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-saffron-500 font-semibold text-sm uppercase tracking-widest">About Us</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-[#00003c]">
            A Place of <span className="text-saffron-600">Divine Grace</span>
          </h2>
          <div className="mt-4 w-24 h-1 bg-saffron-500 mx-auto rounded-full" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <div className={`transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <img
                src="/src/assets/hero1.png"
                alt="Prayer Hall - Darbar Sahib"
                className="w-full rounded-2xl shadow-2xl object-cover aspect-[5/4]"
              />
              <div className="absolute -bottom-6 -right-6 bg-saffron-500 text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <p className="text-3xl font-bold">50+</p>
                <p className="text-sm font-medium">Years of Service</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className={`transition-all duration-700 delay-400 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Serving the Sangat with Devotion & Love
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Gurudwara Sri Guru Singh Sabha, Rajouri Garden, stands as a beacon of Sikh faith and community 
              spirit in the heart of West Delhi. Established with the blessings of the Guru, this sacred 
              institution has been serving the spiritual and social needs of the Sangat (congregation) for 
              over five decades.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our Gurudwara is open to people of all faiths, backgrounds, and walks of life. Following the 
              teachings of Sri Guru Granth Sahib Ji, we strive to create an environment of peace, equality, 
              and spiritual upliftment. The daily prayers, kirtan, and langar seva continue to touch the 
              lives of thousands.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Whether you seek spiritual solace, wish to participate in community service, or simply want to 
              experience the warmth of the Sikh community, you are always welcome at our doors.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#services" className="px-6 py-3 bg-saffron-500 text-white rounded-full font-semibold hover:bg-saffron-600 transition-all duration-300 shadow-md">
                Our Services
              </a>
              <a href="#contact" className="px-6 py-3 border-2 border-saffron-500 text-saffron-600 rounded-full font-semibold hover:bg-saffron-50 transition-all duration-300">
                Visit Us
              </a>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`group bg-gradient-to-br from-saffron-50 to-white p-8 rounded-2xl border border-saffron-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${600 + index * 150}ms` }}
            >
              <div className="w-14 h-14 bg-saffron-500 text-white rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
