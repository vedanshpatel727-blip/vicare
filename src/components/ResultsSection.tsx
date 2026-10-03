import { results } from '@/data/siteContent';
import { useReveal } from '@/hooks/useReveal';
import { Camera } from 'lucide-react';

export default function ResultsSection() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="results" className="py-24 sm:py-32 lg:py-40 bg-cream">
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className={`text-center mb-14 lg:mb-20 reveal ${visible ? 'is-visible' : ''}`}>
          <p className="section-label mb-4">Results</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-500 text-espresso">
            Treatment Outcomes
          </h2>
          <p className="mt-4 text-base text-espresso-light max-w-xl mx-auto">
            Illustrative treatment cards showing the types of concerns we address. Individual results vary and are not guaranteed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {results.map((item, i) => (
            <div
              key={item.id}
              className={`group reveal ${visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-ivory border border-beige/40">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 text-champagne-light text-xs font-sans font-medium tracking-wide uppercase mb-1">
                    <Camera size={12} strokeWidth={1.5} />
                    Result Card
                  </div>
                  <h3 className="font-serif text-lg text-ivory">{item.label}</h3>
                </div>
              </div>
              <p className="mt-3 text-xs text-espresso-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <p className={`mt-10 text-center text-xs text-espresso-soft reveal ${visible ? 'is-visible' : ''}`}>
          These are illustrative cards, not verified patient results. Actual outcomes vary by individual.
          Consult a qualified professional to understand what to expect.
        </p>
      </div>
    </section>
  );
}
