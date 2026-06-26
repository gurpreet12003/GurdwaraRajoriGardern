import { Heart, Users, BookOpen, Star } from "lucide-react";
import useInView from "../../hooks/useInView";

const values = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Patient Care",
    desc: "Compassionate healthcare services focused on the well-being of every patient.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community Health",
    desc: "Regular medical camps and awareness programs for the local community.",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Health Education",
    desc: "Guidance on preventive care, nutrition, and healthy living practices.",
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Seva Through Medicine",
    desc: "Providing healthcare support in the spirit of selfless service and humanity.",
  },
];

export default function MedicalServices() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-15  md:py-10 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-saffron-500 font-semibold text-sm uppercase tracking-widest">
            Guru Nanak Charitable Dispensary & Clinical Lab
          </span>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-[#00003c]">
            Community{" "}
            <span className="text-saffron-600">Healthcare & Wellness</span>
          </h2>

          <div className="mt-4 w-24 h-1 bg-saffron-500 mx-auto rounded-full" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <img
                src="/images/dispansary.png"
                alt="Gurudwara Dispensary"
                className="w-full rounded-2xl border-2 border-[#FF8000] shadow-2xl object-cover aspect-[5/4]"
              />

              <div className="absolute -bottom-6 -right-6 bg-[#272979] text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <p className="text-3xl font-bold">10,000+</p>
                <p className="text-sm font-medium">Patients Served</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Serving Humanity Through Healthcare
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              The Gurudwara Dispensary is dedicated to providing affordable and
              accessible healthcare services to the community. Guided by the
              Sikh principle of Seva (selfless service), we strive to support
              individuals and families with quality medical care, consultations,
              and wellness initiatives.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our medical services include general health check-ups, physician
              consultations, medicine distribution, health awareness programs,
              and preventive healthcare guidance. Experienced doctors and
              healthcare professionals regularly serve patients with compassion
              and dedication.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We welcome people from all backgrounds and communities. Through
              medical camps, blood donation drives, and healthcare outreach
              programs, the dispensary continues to make a positive impact on
              the lives of thousands of beneficiaries every year.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-[#FF8000] text-white rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 shadow-md">
                Medical Services
              </button>

              <button className="px-6 py-3 bg-[#FF8000] text-white rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 shadow-md">
                Health Camps
              </button>

              <button className="px-6 py-3 bg-[#FF8000] text-white rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 shadow-md">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`group bg-gradient-to-br from-saffron-50 to-white p-8 rounded-2xl border border-saffron-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${600 + index * 150}ms` }}
            >
              <div className="w-14 h-14 bg-[#FF8000] text-white rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>

              <h4 className="text-lg font-bold text-gray-900 mb-3">
                {value.title}
              </h4>

              <p className="text-gray-600 text-sm leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}