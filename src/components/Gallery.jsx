import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import useInView from "../hooks/useInView";
// const galleryCategories = [
//   {
//     category: "Gurudwara",
//     images: [
//       {
//         src: "/public/images/gurudwara-night.jpg",
//         alt: "Kirtan Seva",
//         caption: "Divine Shabad Kirtan in Darbar Sahib",
//       },
//       {
//         src: "/public/images/hero-gurudwara.jpg",
//         alt: "Kirtan Seva",
//         caption: "Divine Shabad Kirtan in Darbar Sahib",
//       },
//     ],
//   },
//   {
//     category: "Kirtan Seva",
//     images: [
//       {
//         src: "/images/prayer-hall.jpg",
//         alt: "Kirtan Seva",
//         caption: "Divine Shabad Kirtan in Darbar Sahib",
//       },
//     ],
//   },

//   {
//     category: "Langar Seva",
//     images: [
//       {
//         src: "/images/langar-hall.jpg",
//         alt: "Langar Seva",
//         caption: "Community Kitchen Serving Langar to Sangat",
//       },
//     ],
//   },

//   {
//     category: "Akhand Path",
//     images: [
//       {
//         src: "/public/images/ankhand path.jpg",
//         alt: "Akhand Path",
//         caption: "Continuous 48-hour Sri Guru Granth Sahib Ji Path",
//       },
//       {
//         src: "/public/images/prayer-hall.jpg",
//         alt: "Akhand Path",
//         caption: "Continuous 48-hour Sri Guru Granth Sahib Ji Path",
//       },
//     ],
//   },

//   {
//     category: "Naam Karan",
//     images: [
//       {
//         src: "/public/images/nam karan.jpg",
//         alt: "Naam Karan Ceremony",
//         caption: "Sacred Naming Ceremony for Newborns",
//       },
//     ],
//   },

//   {
//     category: "Anand Karaj",
//     images: [
//       {
//         src: "/public/images/annad karaj.jpg",
//         alt: "Anand Karaj",
//         caption: "Traditional Sikh Wedding Ceremony",
//       },
//     ],
//   },

//   {
//     category: "Gurmat Classes",
//     images: [
//       {
//         src: "/public/images/gurmat class.png",
//         alt: "Gurmat Classes",
//         caption: "Learning Punjabi, Gurbani & Sikh History",
//       },
//     ],
//   },

//   {
//     category: "Community Welfare",
//     images: [
//       {
//         src: "/public/images/CAMP.jpg",
//         alt: "Community Welfare",
//         caption: "Medical Camps & Social Welfare Activities",
//       },
//     ],
//   },

//   {
//     category: "Amrit Sanchar",
//     images: [
//       {
//         src: "/public/images/amrit sanchar.jpg",
//         alt: "Amrit Sanchar",
//         caption: "Sacred Khalsa Initiation Ceremony",
//       },
//     ],
//   },

//   {
//     category: "Dispensary",
//     images: [
//       {
//         src: "/public/images/dispansry.jpg",
//         alt: "Dispensary",
//         caption: "Free Medical Care & Health Services",
//       },
//     ],
//   },

//   {
//     category: "Educational Programs",
//     images: [
//       {
//         src: "/src/assets/WhatsApp Image 2026-06-24 at 12.52.51 PM.jpeg",
//         alt: "Educational Programs",
//         caption: "Seminars, Workshops & Spiritual Learning",
//       },
//     ],
//   },

//   {
//     category: "Room Booking",
//     images: [
//       {
//         src: "/public/images/room booking.png",
//         alt: "Room Booking",
//         caption: "Halls & Rooms for Events and Meetings",
//       },
//     ],
//   },

//   {
//     category: "Community Hall Booking",
//     images: [
//       {
//         src: "/public/images/communtiy hall.jpg",
//         alt: "Community Hall",
//         caption: "Large Hall for Weddings, Samagam & Events",
//       },
//     ],
//   },
// ];
const galleryCategories = [
  {
    category: "Gurudwara",
    description:
      "Gurudwara Sri Guru Singh Sabha serves as a spiritual and community center where devotees gather for prayer, kirtan, seva, and religious celebrations throughout the year.",
    images: [
      {
        src: "/images/gurudwara-night.jpg",
        alt: "Gurudwara Night View",
        caption: "Beautifully illuminated Gurudwara Sahib at night",
      },
      {
        src: "/images/hero-gurudwara.jpg",
        alt: "Gurudwara Exterior",
        caption: "Main entrance of Gurudwara Sri Guru Singh Sabha",
      },
    ],
  },

  {
    category: "Kirtan Seva",
    description:
      "Daily Shabad Kirtan is performed by experienced Ragis and Kirtani Jathas, allowing the Sangat to connect spiritually through Gurbani and divine hymns.",
    images: [
      {
        src: "/images/prayer-hall.jpg",
        alt: "Kirtan Seva",
        caption: "Divine Shabad Kirtan in Darbar Sahib",
      },
    ],
  },

  {
    category: "Langar Seva",
    description:
      "Langar Seva provides free meals to all visitors without discrimination. Volunteers participate in cooking, serving, and maintaining the community kitchen.",
    images: [
      {
        src: "/images/langar-hall.jpg",
        alt: "Langar Seva",
        caption: "Community Kitchen Serving Langar to Sangat",
      },
    ],
  },

  {
    category: "Akhand Path",
    description:
      "Akhand Path Sahib is the continuous and uninterrupted recitation of Sri Guru Granth Sahib Ji, completed over approximately 48 hours with devotion and reverence.",
    images: [
      {
        src: "/images/ankhand_path.jpg",
        alt: "Akhand Path",
        caption: "Continuous 48-hour Sri Guru Granth Sahib Ji Path",
      },
      {
        src: "/images/prayer-hall.jpg",
        alt: "Akhand Path",
        caption: "Sangat participating during Akhand Path Sahib",
      },
    ],
  },

  {
    category: "Naam Karan",
    description:
      "Naam Karan is the sacred Sikh naming ceremony where a newborn receives a spiritual name through Hukamnama from Sri Guru Granth Sahib Ji.",
    images: [
      {
        src: "/images/nam_karan.jpg",
        alt: "Naam Karan Ceremony",
        caption: "Sacred Naming Ceremony for Newborns",
      },
    ],
  },

  {
    category: "Anand Karaj",
    description:
      "Anand Karaj is the Sikh marriage ceremony performed in the presence of Sri Guru Granth Sahib Ji, blessing the couple's spiritual journey together.",
    images: [
      {
        src: "/images/annad_karaj.jpg",
        alt: "Anand Karaj",
        caption: "Traditional Sikh Wedding Ceremony",
      },
    ],
  },

  {
    category: "Gurmat Classes",
    description:
      "Gurmat Classes provide education in Punjabi, Gurbani, Sikh history, and moral values to children and adults, helping preserve Sikh heritage.",
    images: [
      {
        src: "/images/gurmat_class.png",
        alt: "Gurmat Classes",
        caption: "Learning Punjabi, Gurbani & Sikh History",
      },
    ],
  },

  {
    category: "Community Welfare",
    description:
      "Community Welfare initiatives include medical camps, blood donation drives, relief efforts, and various social service activities benefiting society.",
    images: [
      {
        src: "/images/CAMP.jpg",
        alt: "Community Welfare",
        caption: "Medical Camps & Social Welfare Activities",
      },
    ],
  },

  {
    category: "Amrit Sanchar",
    description:
      "Amrit Sanchar is the sacred Khalsa initiation ceremony where Sikhs commit themselves to the teachings and discipline of Guru Gobind Singh Ji.",
    images: [
      {
        src: "/images/amrit_sanchar.jpg",
        alt: "Amrit Sanchar",
        caption: "Sacred Khalsa Initiation Ceremony",
      },
    ],
  },

  {
    category: "Dispensary",
    description:
      "The Gurudwara Dispensary provides healthcare consultations, medicines, and wellness services to the Sangat and local community free of cost.",
    images: [
      {
        src: "/images/dispansry.jpg",
        alt: "Dispensary",
        caption: "Free Medical Care & Health Services",
      },
    ],
  },

  {
    category: "Educational Programs",
    description:
      "Educational Programs include seminars, workshops, career guidance sessions, and spiritual learning opportunities for students and community members.",
    images: [
      {
        src: "/images/gniat.jpeg",
        alt: "Educational Programs",
        caption: "Seminars, Workshops & Spiritual Learning",
      },
    ],
  },

  {
    category: "Room Booking",
    description:
      "Rooms are available for accommodation, meetings, educational activities, and religious gatherings with comfortable facilities for visitors.",
    images: [
      {
        src: "/images/room_booking.png",
        alt: "Room Booking",
        caption: "Halls & Rooms for Events and Meetings",
      },
    ],
  },

  {
    category: "Community Hall Booking",
    description:
      "The Community Hall is available for weddings, religious functions, seminars, conferences, cultural programs, and community gatherings with complete event facilities.",
    images: [
      {
        src: "/images/communtiy_hall.jpg",
        alt: "Community Hall",
        caption: "Large Hall for Weddings, Samagam & Events",
      },
    ],
  },
];
// export default function Gallery() {
//   const { ref, isInView } = useInView();

//   const [selectedCategory, setSelectedCategory] = useState("Gurudwara");
//   const [selectedImage, setSelectedImage] = useState(null);

//   const activeCategory = galleryCategories.find(
//     (cat) => cat.category === selectedCategory
//   );

//   const images = activeCategory?.images || [];


//   return (
//     <section ref={ref} className="py-10 bg-white">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* Header */}
//         <h2 className="text-4xl font-bold text-center text-[#00003c]">
//           Photo <span className="text-[#ff8000]">Gallery</span>
//         </h2>

//         {/* CATEGORY FILTER */}
//         <div className="flex flex-wrap justify-center gap-3 mt-8">
//           {galleryCategories.map((cat) => (
//             <button
//               key={cat.category}
//               onClick={() => setSelectedCategory(cat.category)}
//               className={`px-4 py-2 rounded-full border transition ${selectedCategory === cat.category
//                 ? "bg-[#ff8000] text-white"
//                 : "border-gray-300 text-gray-700"
//                 }`}
//             >
//               {cat.category}
//             </button>
//           ))}
//         </div>

//         {/* GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
//           {images.map((img, index) => (
//             <div
//               key={index}
//               onClick={() => setSelectedImage(img)}
//               className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
//             >
//               <div className="relative overflow-hidden">
//                 <img
//                   src={img.src}
//                   alt={img.alt}
//                   className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
//                 />

//                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
//                   <div className="p-4 text-white">
//                     <h3 className="font-bold text-lg">{img.alt}</h3>
//                     <p className="text-sm line-clamp-2">
//                       {img.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="p-4">
//                 <h3 className="font-semibold text-[#00003c] text-lg">
//                   {img.alt}
//                 </h3>
//                 <p className="text-gray-500 text-sm mt-1">
//                   {img.caption}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>        </div>


//       {/* LIGHTBOX */}
     
//     {selectedImage && (
//   <div
//     className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//     onClick={() => setSelectedImage(null)}
//   >
//     <div
//       onClick={(e) => e.stopPropagation()}
//       className="relative bg-white rounded-3xl overflow-hidden max-w-6xl w-full grid md:grid-cols-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
//     >
//       {/* Close Button */}
//       <button
//         onClick={() => setSelectedImage(null)}
//         className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white shadow-lg hover:bg-[#ff8000] hover:text-white transition-all duration-300 flex items-center justify-center"
//       >
//         <X size={20} />
//       </button>

//       {/* Left Image */}
//       <div className="relative bg-gray-100">
//         <img
//           src={selectedImage.src}
//           alt={selectedImage.alt}
//           className="w-full h-full object-cover min-h-[450px]"
//         />

//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

//         {/* Image Caption */}
//         <div className="absolute bottom-0 left-0 right-0 p-6">
//           <p className="text-white text-lg font-semibold">
//             {selectedImage.caption}
//           </p>
//         </div>
//       </div>

//       {/* Right Content */}
//       <div className="p-8 md:p-10 flex flex-col">
        
//         {/* Category Badge */}
//         <div className="mb-4">
//           <span className="bg-orange-100 text-[#ff8000] px-4 py-1 rounded-full text-sm font-medium">
//             {selectedCategory}
//           </span>
//         </div>

//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold text-[#00003c] mb-3">
//           {selectedImage.alt}
//         </h2>

//         {/* Divider */}
//         <div className="w-20 h-1 bg-[#ff8000] rounded-full mb-6"></div>

//         {/* Description Title */}
        
// <p className="text-gray-600 leading-8 text-base">
//   {activeCategory?.description}
// </p>

//         {/* Bottom Info Card */}
//         <div className="mt-auto pt-8">

//         </div>
//       </div>
//     </div>
//   </div>
// )}
//     </section>
//   );
// }

export default function Gallery() {
  const { ref } = useInView();

  const [selectedCategory, setSelectedCategory] = useState("Gurudwara");
  const [selectedImage, setSelectedImage] = useState(null);

  const activeCategory = galleryCategories.find(
    (cat) => cat.category === selectedCategory
  );

  const images = activeCategory?.images || [];

  return (
    <section ref={ref} className="py-15 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#00003c]">
          Photo <span className="text-[#ff8000]">Gallery</span>
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8">
          {galleryCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setSelectedCategory(cat.category)}
              className={`px-3 sm:px-4 py-2 text-sm sm:text-base rounded-full border transition-all duration-300 ${
                selectedCategory === cat.category
                  ? "bg-[#ff8000] text-white border-[#ff8000]"
                  : "border-gray-300 text-gray-700 hover:border-[#ff8000] hover:text-[#ff8000]"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-10">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(img)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-bold text-lg">{img.alt}</h3>
                    <p className="text-sm line-clamp-2">
                      {activeCategory?.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-[#00003c] text-lg">
                  {img.alt}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-2xl overflow-hidden max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 max-h-[95vh] overflow-y-auto shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-white shadow-lg hover:bg-[#ff8000] hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              <X size={20} />
            </button>

            {/* Image Section */}
            <div className="relative bg-gray-100">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-[250px] sm:h-[350px] md:h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <p className="text-white text-base sm:text-lg font-semibold">
                  {selectedImage.caption}
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-5 sm:p-6 md:p-10 flex flex-col">
              <div className="mb-4">
                <span className="bg-orange-100 text-[#ff8000] px-4 py-1 rounded-full text-sm font-medium">
                  {selectedCategory}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00003c] mb-3">
                {selectedImage.alt}
              </h2>

              <div className="w-20 h-1 bg-[#ff8000] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-7 text-sm sm:text-base">
                {activeCategory?.description}
              </p>

              <div className="mt-6 p-4 rounded-xl bg-orange-50 border border-orange-100">
                <h4 className="font-semibold text-[#00003c] mb-2">
                  Highlights
                </h4>

                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Community participation and seva</li>
                  <li>✓ Spiritual and educational activities</li>
                  <li>✓ Open for all visitors and devotees</li>
                  <li>✓ Preserving Sikh values and heritage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}