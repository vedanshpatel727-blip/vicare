import { hero, getWhatsAppLink } from '@/data/siteContent';

export default function Hero() {
  return (
    <section id="home" className="pt-20 lg:pt-20">
      {/* Desktop split layout */}
      <div className="hidden md:grid grid-cols-[45%_55%] min-h-[calc(100vh-5rem)]">
        {/* Left — content */}
        <div className="flex items-center bg-ivory px-12 lg:px-16 xl:px-20">
          <div className="max-w-lg">
            <p className="section-label mb-6 animate-fade-up" style={{ animationDelay: '0.15s' }}>
              {hero.label}
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-500 leading-[1.1] text-espresso whitespace-pre-line animate-fade-up" style={{ animationDelay: '0.3s' }}>
              {hero.title}
            </h1>
            <p className="mt-6 text-base lg:text-lg text-espresso-light max-w-md leading-relaxed animate-fade-up" style={{ animationDelay: '0.45s' }}>
              {hero.subtitle}
            </p>
            <div className="mt-9 flex flex-row gap-3 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {hero.primaryCta}
              </a>
              <a href="#treatments" className="btn-secondary">
                {hero.secondaryCta}
              </a>
            </div>
            <p className="mt-8 text-xs font-sans font-medium tracking-wide text-espresso-soft animate-fade-up" style={{ animationDelay: '0.75s' }}>
              {hero.trustIndicator}
            </p>
          </div>
        </div>

        {/* Right — sharp image */}
        <div className="relative overflow-hidden">
          <img
            src={hero.image}
            alt={hero.imageAlt}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
      </div>

      {/* Mobile — text first, image second */}
      <div className="md:hidden">
        <div className="bg-ivory px-5 pt-10 pb-12">
          <p className="section-label mb-5 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            {hero.label}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-500 leading-[1.12] text-espresso whitespace-pre-line animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {hero.title}
          </h1>
          <p className="mt-5 text-base text-espresso-light leading-relaxed animate-fade-up" style={{ animationDelay: '0.45s' }}>
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full"
            >
              {hero.primaryCta}
            </a>
            <a href="#treatments" className="btn-secondary w-full">
              {hero.secondaryCta}
            </a>
          </div>
          <p className="mt-6 text-xs font-sans font-medium tracking-wide text-espresso-soft animate-fade-up" style={{ animationDelay: '0.75s' }}>
            {hero.trustIndicator}
          </p>
        </div>
        <div className="relative h-[55vh] overflow-hidden">
          <img
            src={hero.image}
            alt={hero.imageAlt}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
