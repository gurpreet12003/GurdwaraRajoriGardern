import { useState } from "react";
import useInView from "../hooks/useInView";


const services = [
  {
    title: "Kirtan Seva",
    image: "/images/prayer-hall.jpg",
    shortDesc: "Daily Shabad Kirtan by trained Ragis and Kirtaniye Jatha.",
    fullDesc:
      "Daily Shabad Kirtan by trained Ragis and Kirtaniye Jatha, creating a spiritual atmosphere and connecting the Sangat with Gurbani through devotional singing.",
  },
  {
    title: "Dispensary",
    image: "/images/dispansry.jpg",
    shortDesc: "Free healthcare consultations and medicines.",
    fullDesc:
      "Free healthcare consultations, medicines, and wellness services for the Sangat, helping the community maintain good health and well-being.",
  },
  {
    title: "Educational",
    image: "/images/gniat.jpeg",
    shortDesc: "Gurmat classes, seminars, and workshops.",
    fullDesc:
      "Gurmat classes, seminars, workshops, and educational programs that support both spiritual growth and academic learning for all age groups.",
  },
  {
    title: "Langar Seva",
    image: "/images/langar-hall.jpg",
    shortDesc: "Free community kitchen serving fresh meals.",
    fullDesc:
      "Free community kitchen serving fresh meals to all visitors regardless of caste, creed, or background, reflecting the Sikh values of equality and service.",
  },
  {
    title: "Akhand Path",
    image: "/images/ankhand_path.jpg",
    shortDesc: "Continuous 48-hour reading of Sri Guru Granth Sahib Ji.",
    fullDesc:
      "Continuous 48-hour reading of Sri Guru Granth Sahib Ji conducted with devotion and respect for spiritual upliftment and blessings.",
  },
  {
    title: "Naam Karan",
    image: "/images/nam_karan.jpg",
    shortDesc: "Sacred naming ceremony for newborns.",
    fullDesc:
      "Traditional Sikh naming ceremony where a newborn receives a name inspired by Gurbani in the presence of the Sangat.",
  },
  {
    title: "Anand Karaj",
    image: "/images/annad_karaj.jpg",
    shortDesc: "Traditional Sikh wedding ceremony.",
    fullDesc:
      "Sacred Sikh wedding ceremony conducted according to Sikh traditions and teachings in the presence of Sri Guru Granth Sahib Ji.",
  },
  {
    title: "Gurmat Classes",
    image: "/images/gurmat_class.png",
    shortDesc: "Punjabi, Gurbani and Sikh history classes.",
    fullDesc:
      "Classes focused on Punjabi language, Gurbani recitation, Sikh history, and values to help younger generations stay connected to their heritage.",
  },
  {
    title: "Community Welfare",
    image: "/images/CAMP.jpg",
    shortDesc: "Medical camps and welfare activities.",
    fullDesc:
      "Regular medical camps, blood donation drives, social welfare initiatives, and humanitarian services benefiting the wider community.",
  },
  {
    title: "Amrit Sanchar",
    image: "/images/amrit_sanchar.jpg",
    shortDesc: "Sacred initiation ceremony conducted periodically.",
    fullDesc:
      "Sacred initiation ceremony through which Sikhs formally join the Khalsa Panth and commit to Sikh principles and discipline.",
  },
  {
    title: "Room Booking",
    image: "/images/room_booking.png",
    shortDesc: "Reserve rooms for meetings and events.",
    fullDesc:
      "Convenient room booking facilities for meetings, educational sessions, workshops, guest accommodation, and community activities.",
  },
  {
    title: "Community Hall Booking",
    image: "/images/communtiy_hall.jpg",
    shortDesc:
      "Spacious hall available for weddings and community events.",
    fullDesc:
      "Spacious hall available for weddings, Anand Karaj ceremonies, religious gatherings, seminars, cultural programs, and community events with seating arrangements, sound system, stage setup, parking facilities, and complete event support.",
  },
];


export default function Services() {
  const { ref, isInView } = useInView();
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 md:py-15 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#FF8000] font-semibold uppercase tracking-wider">
            What We Offer
          </span>

          <h2 className="mt-3 text-4xl font-bold text-[#00003c]">
            Sangat <span className="text-[#FF8000]">Seva</span>
          </h2>

          <div className="w-24 h-1 bg-[#FF8000] mx-auto mt-4 rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 self-start ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#00003c]/90 via-[#00003c]/20 to-transparent" />

                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  {expandedCard === index
                    ? service.fullDesc
                    : service.shortDesc}
                </p>

                <button
                  onClick={() => toggleCard(index)}
                  className="mt-3 text-[#FF8000] font-semibold hover:underline"
                >
                  {expandedCard === index
                    ? "Read Less"
                    : "Read More"}
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