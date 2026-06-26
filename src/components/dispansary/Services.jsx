import { useState } from "react";
import useInView from "../../hooks/useInView";
const facilities = [
  {
    title: "Eye Care",
    image: "/images/eyecare.jpg",
    shortDesc: "Vision testing and eye treatment.",
    fullDesc:
      "Complete eye examinations, vision testing, diagnosis, and treatment for various eye-related conditions.",
  },
  {
    title: "Dental",
    image: "/images/dental.jpg",
    shortDesc: "Routine dental checkups and oral care.",
    fullDesc:
      "Comprehensive dental care including routine checkups, tooth extraction, fillings, cleaning, and oral health consultations.",
  },
  {
    title: "Physiotherapy",
    image: "/images/physio.jpg",
    shortDesc: "Pain relief and rehabilitation services.",
    fullDesc:
      "Professional physiotherapy services for pain management, rehabilitation, mobility improvement, and recovery.",
  },
  {
    title: "Ultrasound / MRI / Echo",
    image: "/images/mri.jpg",
    shortDesc: "Advanced diagnostic imaging.",
    fullDesc:
      "Advanced diagnostic imaging services including Ultrasound, MRI scans, and Echocardiography for accurate diagnosis.",
  },
  {
    title: "Laboratory",
    image: "/images/lab.jpg",
    shortDesc: "Comprehensive pathology testing.",
    fullDesc:
      "Modern pathology and laboratory services offering a wide range of diagnostic and health screening tests.",
  },
  {
    title: "EECP",
    image: "/images/eecp.jpg",
    shortDesc: "Advanced cardiac support therapy.",
    fullDesc:
      "Enhanced External Counter Pulsation therapy for improving blood circulation and supporting cardiac health.",
  },
  {
    title: "Acupressure",
    image: "/images/acupressure.jpg",
    shortDesc: "Natural wellness and healing therapy.",
    fullDesc:
      "Natural healing therapy using pressure points to promote wellness, relaxation, and pain relief.",
  },
  {
    title: "Homeopathy",
    image: "/images/homeopathy.jpg",
    shortDesc: "Holistic homeopathic treatment.",
    fullDesc:
      "Holistic homeopathic treatments focused on restoring balance and supporting overall health and well-being.",
  },
  
  {
    title: "Dialysis",
    image: "/images/dialysis.jpg",
    shortDesc: "Modern dialysis treatment services.",
    fullDesc:
      "Safe and reliable dialysis treatment with modern equipment and experienced healthcare professionals.",
  },
];
export default function Facilities() {
  const { ref, isInView } = useInView();
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section ref={ref} className="py-15 md:py-10 bg-white " id="services">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#FF8000] font-semibold uppercase tracking-wider">
            Medical Facilities
          </span>

          <h2 className="mt-3 text-4xl font-bold text-[#00003c]">
            Healthcare <span className="text-[#FF8000]">Services</span>
          </h2>

          <div className="w-24 h-1 bg-[#FF8000] mx-auto mt-4 rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#00003c]/90 via-[#00003c]/20 to-transparent" />

                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                  {facility.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  {expandedCard === index
                    ? facility.fullDesc
                    : facility.shortDesc}
                </p>

                <button
                  onClick={() => toggleCard(index)}
                  className="mt-3 text-[#FF8000] font-semibold hover:underline"
                >
                  {expandedCard === index ? "Read Less" : "Read More"}
                </button>

                <button className="mt-5 w-full bg-[#FF8000] hover:bg-[#00003c] text-white py-3 rounded-xl font-semibold transition-all duration-300">
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