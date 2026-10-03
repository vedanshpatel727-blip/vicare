import { testimonials } from '@/data/siteContent';
import { useReveal } from '@/hooks/useReveal';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="testimonials" className="py-24 sm:py-32 lg:py-40 bg-ivory">
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className={`text-center mb-14 lg:mb-20 reveal ${visible ? 'is-visible' : ''}`}>
          <p className="section-label mb-4">Testimonials</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-500 text-espresso">
            Patient Experiences
          </h2>
          <p className="mt-4 text-base text-espresso-light max-w-xl mx-auto">
            These are editable placeholder testimonials. Replace with verified patient feedback before publishing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, i) => (
            <div
              key={item.id}
              className={`flex flex-col px-6 py-8 rounded-2xl bg-cream border border-beige/40 reveal ${
                visible ? 'is-visible' : ''
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote size={28} strokeWidth={1} className="text-champagne/40 mb-4" />
              <p className="text-sm text-espresso-light leading-relaxed flex-1">
                {item.text}
              </p>
              <div className="mt-5 pt-5 border-t border-beige/50">
                <div className="flex items-center gap-0.5 mb-2">
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <Star key={idx} size={14} strokeWidth={1.5} className="text-champagne fill-champagne" />
                  ))}
                </div>
                <p className="font-serif text-base text-espresso">{item.name}</p>
                <p className="text-xs text-espresso-soft mt-0.5">
                  {item.location} · {item.treatment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
