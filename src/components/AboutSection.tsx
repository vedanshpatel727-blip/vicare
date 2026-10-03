import { about } from '@/data/siteContent';
import { useReveal } from '@/hooks/useReveal';
import { Check } from 'lucide-react';

export default function AboutSection() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-24 sm:py-32 lg:py-40 bg-cream">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
      >
        {/* Image */}
        <div className={`reveal-image ${visible ? 'is-visible' : ''}`}>
          <div className="relative">
            <div className="aspect-[4/5] sm:aspect-[5/4] rounded-[2rem] overflow-hidden">
              <img
                src={about.image}
                alt={about.imageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Text */}
        <div className={`reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '150ms' }}>
          <p className="section-label mb-5">About ViCare</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-500 leading-[1.15] text-espresso">
            {about.headline}
          </h2>
          <p className="mt-6 text-base sm:text-lg text-espresso-light leading-relaxed max-w-md">
            {about.copy}
          </p>

          <ul className="mt-7 space-y-3">
            {about.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-espresso">
                <Check size={16} strokeWidth={2} className="text-champagne mt-0.5 flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>

          <a href="#doctor" className="btn-secondary mt-8">
            {about.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
