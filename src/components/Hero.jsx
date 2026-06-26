import { ChevronDown } from "lucide-react";

export default function Hero({
  bgImage,
   bgPosition = "center center",
  title,
  subtitle,
  description,
  primaryBtnText,
  primaryBtnLink,
  secondaryBtnText,
  secondaryBtnLink,
  showMoolMantar = false,
}) {
  const hasContent =
  title ||
  subtitle ||
  description ||
  primaryBtnText ||
  secondaryBtnText ||
  showMoolMantar;
  return (
    <section className="relative h-[100vh] xl:h-[75vh] flex items-center justify-center overflow-hidden" id="hero">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover"
            style={{ objectPosition: bgPosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
</div>

{hasContent && (
  <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">

    {showMoolMantar && (
      <p className="text-saffron-300 text-base md:text-lg xl:text-xl mb-4">
        ੴ ਸਤਿ ਨਾਮੁ ਕਰਤਾ ਪੁਰਖੁ ਨਿਰਭਉ ਨਿਰਵੈਰੁ
      </p>
    )}

    {title && (
      <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
        {title}
      </h1>
    )}

    {subtitle && (
      <p className="text-lg xl:text-xl text-white/90 mb-3">
        {subtitle}
      </p>
    )}

    {description && (
      <p className="text-white/90 max-w-2xl mx-auto mb-8">
        {description}
      </p>
    )}
{(primaryBtnText || secondaryBtnText) && (
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    {primaryBtnText && (
      <a
        href={primaryBtnLink}
        className="px-8 py-4 bg-saffron-500 text-white rounded-full transition-all duration-300 hover:bg-saffron-600 hover:scale-105 hover:shadow-lg"
      >
        {primaryBtnText}
      </a>
    )}

    {secondaryBtnText && (
      <a
        href={secondaryBtnLink}
        className="px-8 py-4 border-2 border-white text-white rounded-full transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-105 hover:shadow-lg"
      >
        {secondaryBtnText}
      </a>
    )}
  </div>
)}
  </div>
)}
    </section>
  );
}