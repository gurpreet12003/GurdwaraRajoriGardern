import useInView from "../../hooks/useInView";



const leaders = [
      {
        name: "Sardar Harmanjit Singh",
        role:"President",
        img: "https://gniat.com/wp-content/uploads/2025/11/Harmanjeet-Singh-President.png",
        quote:
            "With the blessings of Waheguru Ji, we are committed to maintaining our Gurudwara as a center of faith, unity and selfless service for all. May our collective efforts bring peace and prosperity.",
    },
    {
        name: "Sardar Bakshiharjit Singh",
        role: "Chairman",
        img: "/images/dispansary_chairman.png",
        quote:
            "Our Gurudwara is dedicated to the teachings of Sri Guru Granth Sahib Ji and the values of love, compassion and seva. We welcome everyone to join in our mission of serving humanity.",
    },
  
];

function LeaderCard({ name,role, img, quote }) {
    return (
        <div className="group relative bg-white/95 backdrop-blur-lg rounded-[32px] p-8 shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(255,128,0,0.25)]">

            {/* Top Accent */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FF8000] to-yellow-500" />

            {/* Quote Icon */}
            <div className="absolute top-6 right-8 text-7xl text-[#FF8000]/10 font-serif">
                "
            </div>

            {/* Image */}
            <div className="flex justify-center mb-6">
                <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-[#FF8000]/30 blur-xl scale-110" />

                    <img
                        src={img}
                        alt={role}
                        className="relative w-44 h-44 rounded-full object-cover border-[6px] border-white shadow-xl"
                    />
                </div>
            </div>

            {/* Title */}
           <div className="text-center mb-5">
    <h3 className="text-2xl font-bold text-[#00003c]">
        {name}
    </h3>

    <p className="text-[#FF8000] font-semibold mt-1 uppercase tracking-wider">
        {role}
    </p>
</div>

            <div className="w-20 h-1 bg-[#FF8000] rounded-full mx-auto mb-6" />

            {/* Message */}
            <p className="text-gray-700 leading-8 text-center italic">
                {quote}
            </p>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <h4 className="font-bold text-[#00003c]">
                    Guru Nanak Charitable
                </h4>

                <p className="text-sm text-gray-500">
                    Dispensary & Clinical Lab
                </p>

                <p className="text-sm text-[#FF8000] mt-2">
                    Gurudwara Sri Guru Singh Sabha, Rajouri Garden, New Delhi
                </p>
            </div>
        </div>
    );
}

export default function LeadershipMessages() {
    const { ref, isInView } = useInView();

    return (
        <section
            ref={ref}
            className="relative py-24 overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/images/gurudwara-night.jpg"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#00003c]/80" />
            </div>

            <div
                className={`relative z-10 max-w-7xl mx-auto px-6 transition-all duration-1000 ${isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                    }`}
            >
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 mb-6">
                        <span className="text-[#FF8000] text-xl">☬</span>
                        <span className="text-white font-medium">
                            Leadership Messages
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                        Messages from the
                        <br />
                        <span className="text-[#FF8000]">
                            Dispensary Committee
                        </span>
                    </h2>

                    <div className="flex items-center justify-center gap-3 mt-8">
                        <div className="w-16 h-[2px] bg-[#FF8000]" />
                        <div className="w-3 h-3 rounded-full bg-[#FF8000]" />
                        <div className="w-16 h-[2px] bg-[#FF8000]" />
                    </div>

                    <p className="mt-8 text-lg text-gray-300 max-w-3xl mx-auto leading-8">
                        Dedicated to the spirit of <span className="text-white">Seva</span>,
                        compassion, and community welfare, our leadership shares their vision
                        for serving humanity through Guru Nanak Sahib Ji's teachings.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {leaders.map((leader) => (
                        <LeaderCard key={leader.role} {...leader} />
                    ))}
                </div>

            </div>
        </section>
    );
}