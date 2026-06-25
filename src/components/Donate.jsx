import React from "react";

const Donate = () => {
  return (
    <section id="donation" className="relative py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/donation.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/60 via-[#0a1628]/50 to-[#0a1628]/95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,124,0,0.18),transparent_55%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-orange-400 font-semibold tracking-widest text-xl uppercase mb-3">
            ✦ Daan Seva
          </p>

          <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-5">
            Support the Gurdwara Seva
          </h2>

          <p className="text-white/75 text-lg lg:text-xl leading-relaxed">
            Your donation is an act of seva. It keeps the Guru's house open,
            supports the sangat, and helps every program continue with love,
            dignity, and equality.
          </p>

          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-400 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto mb-10 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-orange-300 mb-3">
            Why Your Donation Matters
          </h3>

          <p className="text-white/65 text-base lg:text-lg leading-relaxed">
            Every contribution becomes food for a hungry person, medicine for
            someone in need, education for the next generation, and care for
            the sacred Gurdwara space.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {[
            {
              number: "01",
              title: "Guru ka Langar",
              desc: "Supports daily meals served with equality and respect.",
            },
            {
              number: "02",
              title: "Free Dispensary",
              desc: "Helps provide medicines, checkups, and care for all.",
            },
            {
              number: "03",
              title: "Gurmat Education",
              desc: "Funds books, classes, and learning for children and adults.",
            },
            {
              number: "04",
              title: "Gurdwara Maintenance",
              desc: "Keeps the Darbar Sahib clean, welcoming, and peaceful.",
            },
          ].map((cause) => (
          <div
  key={cause.number}
  className="group bg-white/8 backdrop-blur-md border border-orange-500/25 rounded-2xl p-6 hover:bg-[#FF8000] hover:border-orange-400/70 transition-all duration-300"
>
  <span className="text-orange-400 text-sm font-bold tracking-widest transition-colors duration-300 group-hover:text-white">
    {cause.number}
  </span>

  <h4 className="mt-5 text-xl font-extrabold text-white transition-colors duration-300 group-hover:text-white">
    {cause.title}
  </h4>

  <p className="mt-3 text-white/70 text-sm leading-relaxed transition-colors duration-300 group-hover:text-white">
    {cause.desc}
  </p>
</div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-full text-lg shadow-lg shadow-orange-500/35 hover:scale-105 hover:shadow-orange-500/55 transition-all duration-300"
          >
            Donate 
          </a>
        </div>
      </div>
    </section>
  );
};

export default Donate;