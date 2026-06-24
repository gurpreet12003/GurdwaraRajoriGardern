import React from 'react'
import useInView from '../hooks/useInView';
const bookingCards = [
  {
    title: "Kirtan & Path Booking",
    image: "/images/prayer-hall.jpg",
    description:
      "Book Akhand Path Sahib, Sehaj Path Sahib, Kirtan Seva and Anand Karaj ceremonies.",
    button: "Book Now",
  },
  {
    title: "Dispensary Services",
    image: "/images/hero4.webp",
    description:
      "Healthcare support, medicines, consultations and community wellness services.",
    button: "View Facilities",
  },
  {
    title: "Donate & Support",
    image: "/images/CAMP.jpg",
    description:
      "Support Langar Seva, education, medical camps and humanitarian initiatives.",
    button: "Donate Now",
  },
  {
    title: "GNIAT",
    image: "/images/gniat.jpeg",
    description:
      "Professional education and skill development programs for students.",
    button: "Learn More",
  },
];
const Cards = () => {
      const { ref, isInView } = useInView();
  return (
    <section id="cards" className="py-20 px-10 md:py-20" ref={ref}>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {bookingCards.map((card, index) => (
    <div
      key={index}
      className="group overflow-hidden rounded-2xl shadow-xl bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-conatain transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#00003c]/90 via-[#00003c]/40 to-transparent" />

        <div className="absolute bottom-4 left-4">
          <h3 className="text-white text-2xl font-bold">
            {card.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 leading-relaxed mb-6">
          {card.description}
        </p>

        <button className="w-full bg-[#FF8000] text-white py-3 rounded-xl font-semibold hover:bg-[#e67300] transition-all duration-300">
          {card.button}
        </button>
      </div>
    </div>
  ))}
</div>
    </section>
  
  )
}

export default Cards
