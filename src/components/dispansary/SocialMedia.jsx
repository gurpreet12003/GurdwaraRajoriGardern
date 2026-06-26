import {
  Calendar,
  ArrowRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const posts = [
  {
    title: "Free Medical Camp Successfully Conducted",
    date: "15 June 2026",
    image: "/images/CAMP.jpg",
    description:
      "Hundreds of patients benefited from free consultations, medicines and health check-ups.",
  },
  {
    title: "Eye Check-up & Vision Awareness Camp",
    date: "10 June 2026",
    image: "/images/eyecare.jpg",
    description:
      "Specialized eye examinations were provided by experienced ophthalmologists.",
  },
  {
    title: "New Orthopaedic Specialist Joined",
    date: "05 June 2026",
    image: "/images/physio.jpg",
    description:
      "Expanding healthcare services with expert orthopaedic consultation and treatment.",
  },
];

const socials = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    link: "#",
    bg: "hover:bg-blue-600",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "#",
    bg: "hover:bg-pink-600",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    link: "#",
    bg: "hover:bg-red-600",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    link: "#",
    bg: "hover:bg-green-600",
  },
];

export default function SocialMediaFeed() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#FF8000] font-semibold uppercase tracking-widest text-sm">
            Stay Connected
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#272979]">
            Latest Updates & Community Activities
          </h2>

          <div className="w-24 h-1 bg-[#FF8000] rounded-full mx-auto mt-4" />

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Follow our healthcare initiatives, medical camps, awareness
            programs, and community service activities.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-60 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-[#FF8000] text-sm font-medium">
                  <Calendar size={16} />
                  {post.date}
                </div>

                <h3 className="mt-3 text-xl font-bold text-[#272979]">
                  {post.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {post.description}
                </p>

                <button className="mt-6 flex items-center gap-2 text-[#FF8000] font-semibold hover:gap-3 transition-all">
                  Read More
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Social Banner */}
        <div className="mt-20 bg-[#272979] rounded-[32px] p-10 md:p-14 relative overflow-hidden">

          <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#FF8000]/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Follow Us On Social Media
            </h3>

            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Stay updated with doctor schedules, health awareness campaigns,
              medical camps, and community welfare initiatives.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">
              {socials.map((social, index) => {
                const Icon = social.icon;

                return (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 ${social.bg}`}
                  >
                    <Icon size={26} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}