import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[100vh] xl:h-[75vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/img1.jpeg"
          alt="Gurudwara Sri Guru Singh Sabha"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-saffron-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">

        {/* Mool Mantar */}
        <p className="animate-fade-in-up text-saffron-300 text-base md:text-lg xl:text-xl font-medium mb-3 md:mb-4 tracking-wide"
          style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
          ੴ ਸਤਿ ਨਾਮੁ ਕਰਤਾ ਪੁਰਖੁ ਨਿਰਭਉ ਨਿਰਵੈਰੁ
        </p>

        {/* Title */}
        <h1 className="animate-fade-in-up text-3xl  lg:text-5xl xl:text-6xl font-bold text-white mb-3 md:mb-4 leading-tight"
          style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
          Gurudwara Sri Guru
          <br />
          <span className="text-saffron-300">Singh Sabha</span>
        </h1>

        {/* Location */}
        <p className="animate-fade-in-up text-lg md:text-lg xl:text-xl text-white/90 mb-2 font-light"
          style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>
          Rajouri Garden, New Delhi
        </p>

        {/* Description */}
        <p className="animate-fade-in-up text-white/90 text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-xl md:max-w-2xl mx-auto"
          style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}>
          A sacred abode of peace, devotion, and community service.
          <br className="hidden md:block" />
          Open to all, serving all — in the spirit of Sikh teachings.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center"
          style={{ animationDelay: '1s', opacity: 0, animationFillMode: 'forwards' }}>

          <a
            href="#schedule"
            className="px-6 md:px-8 py-3 md:py-4 bg-saffron-500 text-white rounded-full font-semibold text-base md:text-sm hover:bg-saffron-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            View Daily Schedule
          </a>

          <a
            href="#about"
            className="px-6 md:px-8 py-3 md:py-4 border-2 border-white/40 text-white rounded-full font-semibold text-base md:text-sm hover:bg-white/10 hover:border-white/60 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}