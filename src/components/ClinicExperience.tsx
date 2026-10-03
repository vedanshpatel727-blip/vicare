import { clinicExperience } from '@/data/siteContent';
import { useReveal } from '@/hooks/useReveal';
import { ArrowRight } from 'lucide-react';

export default function ClinicExperience() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="overflow-hidden bg-cream">
      <div
        ref={ref}
        className={`grid lg:grid-cols-2 items-stretch reveal ${visible ? 'is-visible' : ''}`}
      >
        {/* Image */}
        <div className={`reveal-image ${visible ? 'is-visible' : ''}`}>
          <div className="h-[50vh] lg:h-full min-h-[400px]">
            <img
              src={clinicExperience.image}
              alt={clinicExperience.imageAlt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex items-center px-6 sm:px-12 lg:px-16 xl:px-20 py-16 lg:py-24">
          <div className="max-w-lg">
            <p className="section-label mb-5">The Space</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-500 text-espresso leading-[1.15]">
              {clinicExperience.headline}
            </h2>
            <p className="mt-6 text-base sm:text-lg text-espresso-light leading-relaxed max-w-md">
              {clinicExperience.copy}
            </p>
            <a
              href="#gallery"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 border border-espresso/25 text-espresso text-sm font-sans font-medium tracking-wide rounded-full transition-all duration-300 hover:bg-espresso hover:text-ivory"
            >
              {clinicExperience.cta}
              <ArrowRight size={15} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
