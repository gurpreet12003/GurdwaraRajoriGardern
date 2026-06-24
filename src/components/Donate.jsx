import { Heart, HandHeart, Building2, UtensilsCrossed } from 'lucide-react';
import useInView from '../hooks/useInView';

const donationOptions = [
  {
    icon: <UtensilsCrossed className="w-7 h-7" />,
    title: 'Langar Seva',
    desc: 'Sponsor a day\'s langar to feed thousands of devotees and visitors.',
    
  },
  {
    icon: <HandHeart className="w-7 h-7" />,
    title: 'Akhand Path Seva',
    desc: 'Sponsor an Akhand Path for the spiritual benefit of your family.',
 
  },
  {
    icon: <Building2 className="w-7 h-7" />,
    title: 'Building Fund',
    desc: 'Contribute to the maintenance and development of the Gurudwara.',
   
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: 'General Donation',
    desc: 'Support the overall operations and community welfare programs.',
   
  },
];

export default function Donate() {
  const { ref, isInView } = useInView();

  return (
    <section id="donate" className="py-20 md:py-28 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-saffron-600 via-saffron-500 to bg-saffron-400" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-white/80 font-semibold text-sm uppercase tracking-widest">Support the Gurudwara</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white">
            Donate & Contribute
          </h2>
          <div className="mt-4 w-24 h-1 bg-white/50 mx-auto rounded-full" />
          <p className="mt-6 text-white/80 text-lg">
            Your generous contributions help sustain the Gurudwara's daily operations, Langar Seva, and community welfare programs. Every donation, big or small, makes a difference.
          </p>
        </div>

        {/* Donation Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {donationOptions.map((option, index) => (
            <div
              key={option.title}
              className={`bg-white/15 backdrop-blur-sm rounded-2xl p-7 border border-white/20 hover:bg-white/25 transition-all duration-500 group ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                {option.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{option.title}</h3>
              <p className="text-white/70 text-sm mb-4 leading-relaxed">{option.desc}</p>
              <p className="text-2xl font-bold text-white">{option.amount}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-700 delay-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-white/70 text-sm mb-6">
            For donations, please visit the Gurudwara office or contact us. Online transfer details available upon request.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-saffron-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <Heart className="w-5 h-5" />
            Contact for Donation
          </a>
        </div>
      </div>
    </section>
  );
}
