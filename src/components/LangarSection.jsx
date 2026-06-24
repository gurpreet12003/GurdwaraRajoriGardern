import { Users, UtensilsCrossed, Clock, Heart } from 'lucide-react';
import useInView from '../hooks/useInView';

const stats = [
  {
    icon: <UtensilsCrossed className="w-6 h-6" />,
    value: "Daily",
    label: "Langar Seva",
  },
  {
  icon: <Heart className="w-6 h-6" />,
  value: "Everyone",
  label: "Welcome",
},
];
export default function LangarSection() {
  const { ref, isInView } = useInView();

  return (
   <section className="py-20 md:py-15 bg-white" ref={ref}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Heading */}
    <div
      className={`text-center mb-16 transition-all duration-700 ${
        isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <span className="text-[#FF8000] font-semibold text-sm uppercase tracking-widest">
        Guru Ka Langar
      </span>

      <h2 className="mt-3 text-3xl md:text-5xl font-bold text-[#00003c] leading-tight">
        A Tradition of Equality,
        <br />
        <span className="text-[#FF8000]">Service & Sharing</span>
      </h2>
                <div className="mt-4 w-25 h-1 bg-saffron-500 mx-auto rounded-full" />
    </div>

    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

      {/* Text Content */}
      <div
        className={`transition-all duration-700 delay-200 ${
          isInView
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10"
        }`}
      >
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Guru Ka Langar is one of the most cherished traditions of Sikhism.
          It was started by Sri Guru Nanak Dev Ji to promote the values of
          equality, selfless service, and community spirit. Through Langar,
          every person is welcomed and served a wholesome meal regardless of
          religion, caste, gender, nationality, or social background.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          At Gurudwara Sahib, Langar is lovingly prepared and served by
          volunteers (Sevadars) who dedicate their time and effort in the
          spirit of Seva. Everyone sits together in Pangat, symbolizing that
          all human beings are equal in the eyes of Waheguru.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Visitors are warmly invited to participate in Langar Seva, whether
          by helping prepare meals, serving food, cleaning utensils, or simply
          sharing a meal with the Sangat. Guru Ka Langar stands as a living
          example of Sikh values and the timeless message of humanity and
          togetherness.
        </p>

        {/* Stats
        <div className="grid grid-cols-2 gap-4 max-w-md">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-4 rounded-xl bg-orange-50 transition-all duration-500 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="w-10 h-10 mx-auto bg-[#FF8000] text-white rounded-lg flex items-center justify-center mb-2">
                {stat.icon}
              </div>

              <p className="text-xl font-bold text-gray-900">
                {stat.value}
              </p>

              <p className="text-xs text-gray-500 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div> */}
      </div>

      {/* Image */}
      <div
        className={`transition-all duration-700 delay-400 ${
          isInView
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-10"
        }`}
      >
        <div className="relative">
          <img
            src="/images/langar-hall.jpg"
            alt="Guru Ka Langar"
            className="w-full h-[450px] rounded-2xl shadow-2xl object-cover"
          />

          <div className="absolute -bottom-5 -left-5 bg-white p-5 rounded-2xl shadow-xl hidden md:flex items-center gap-3">
            <div className="w-12 h-12 bg-[#FF8000] rounded-full flex items-center justify-center">
              <UtensilsCrossed className="w-6 h-6 text-white" />
            </div>

            <div>
              <p className="font-bold text-gray-900">
                Guru Ka Langar
              </p>
              <p className="text-sm text-gray-500">
                Sarbat Da Bhala
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
  );
}
