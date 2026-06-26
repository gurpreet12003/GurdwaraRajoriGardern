import {
  HeartPulse,
  Stethoscope,
  Pill,
  Microscope,
  Users,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: HeartPulse,
    title: "Affordable Medical Consultation",
    description:
      "Experienced doctors provide consultations across multiple specialties for the community.",
  },
  {
    icon: Pill,
    title: "Affordable Medicines",
    description:
      "Quality medicines are provided at highly subsidized rates for patients in need.",
  },
  {
    icon: Microscope,
    title: "Clinical Laboratory",
    description:
      "Diagnostic and pathology services with modern equipment and reliable reports.",
  },
  {
    icon: Stethoscope,
    title: "Specialist Doctors",
    description:
      "Regular visits from physicians, surgeons, dentists, eye specialists, and more.",
  },
  {
    icon: Users,
    title: "Community Healthcare",
    description:
      "Serving the Sangat and society through medical camps and wellness initiatives.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Care",
    description:
      "Dedicated healthcare services guided by the spirit of Seva and compassion.",
  },
];

export default function DispensaryFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#FF8000] font-semibold uppercase tracking-widest text-sm">
            Our Services
          </span>

          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-[#272979]">
            Dispensary Features
          </h2>

          <div className="w-24 h-1 bg-[#FF8000] rounded-full mx-auto mt-4" />

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
            Guru Nanak Charitable Dispensary & Clinical Lab is committed to
            providing quality healthcare services with compassion, dedication,
            and the spirit of selfless service.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group bg-white border border-orange-100 rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#FF8000] text-white flex items-center justify-center mb-6 group-hover:bg-[#272979] transition-all">
                  <Icon className="w-8 h-8 text-white group-hover:text-white transition-all" />
                </div>

                <h3 className="text-xl font-bold text-[#272979] mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-[#272979] rounded-3xl p-8 md:p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Serving Humanity Through Healthcare
          </h3>

          <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
            Inspired by the Sikh principles of Seva and compassion, our
            dispensary strives to make quality healthcare accessible to
            everyone, regardless of background or financial status.
          </p>
        </div>
      </div>
    </section>
  );
}