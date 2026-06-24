import useInView from '../hooks/useInView';

export default function QuoteBanner() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative py-20 md:py-28 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/gurudwara-night.jpg"
          alt="Gurudwara at Night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-royal-950/80" />
      </div>

      <div className={`relative z-10 max-w-4xl mx-auto px-4 text-center transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Decorative */}
        <div className="text-saffron-400 text-6xl mb-6">☬</div>

        {/* Gurmukhi Quote */}
        <p className="text-saffron-300 text-xl md:text-2xl font-medium mb-6 leading-relaxed">
          ਨਾਨਕ ਨਾਮ ਚੜ੍ਹਦੀ ਕਲਾ, ਤੇਰੇ ਭਾਣੇ ਸਰਬੱਤ ਦਾ ਭਲਾ
        </p>

        {/* English Translation */}
        <blockquote className="text-white text-2xl md:text-4xl font-bold leading-snug mb-6">
          "O Nanak, may the Naam (God's Name) bring ever-rising spirits, <br className="hidden md:block" />
          and by Your Will, may there be peace and prosperity for all."
        </blockquote>

        <div className="w-20 h-0.5 bg-saffron-400 mx-auto mb-6" />

        <p className="text-white/60 text-lg">
          — Ardas (Sikh Prayer)
        </p>
      </div>
    </section>
  );
}
