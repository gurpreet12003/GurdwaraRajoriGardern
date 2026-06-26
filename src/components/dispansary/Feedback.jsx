import { Star, Quote } from "lucide-react";

const feedbacks = [
  {
    name: "Harpreet Singh",
    role: "Patient",
    feedback:
      "The doctors are very experienced and caring. I received excellent treatment and guidance without any difficulty.",
    rating: 5,
  },
  {
    name: "Manjit Kaur",
    role: "Community Member",
    feedback:
      "The dispensary provides affordable healthcare services with great dedication. The staff is very supportive and respectful.",
    rating: 5,
  },
  {
    name: "Rajinder Singh",
    role: "Patient",
    feedback:
      "The medical facilities and specialist consultations are extremely helpful. A wonderful initiative for the community.",
    rating: 5,
  },
];

export default function FeedbackSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#FF8000] font-semibold uppercase tracking-widest text-sm">
            Testimonials
          </span>

          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-[#272979]">
            Patient Feedback
          </h2>

          <div className="w-24 h-1 bg-[#FF8000] rounded-full mx-auto mt-4" />

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
            Hear what patients and community members have to say about
            Guru Nanak Charitable Dispensary & Clinical Lab.
          </p>
        </div>

        {/* Feedback Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedbacks.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-14 h-14 text-[#FF8000]" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-5">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#FF8000] text-[#FF8000]"
                  />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-gray-600 leading-7 mb-6">
                "{item.feedback}"
              </p>

              {/* User Info */}
              <div className="border-t pt-5">
                <h4 className="font-bold text-[#272979]">
                  {item.name}
                </h4>

                <p className="text-sm text-[#FF8000]">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      

      </div>
    </section>
  );
}