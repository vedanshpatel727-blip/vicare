import { whyVicare } from '@/data/siteContent';
import { useReveal } from '@/hooks/useReveal';
import { Sparkles, Stethoscope, Crown, Heart, Shield, MessageSquare } from 'lucide-react';

const icons = [Sparkles, Stethoscope, Crown, Heart, Shield, MessageSquare];

export default function WhyVicare() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="why-vicare" className="py-24 sm:py-32 lg:py-40 bg-ivory">
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className={`text-center mb-14 lg:mb-20 reveal ${visible ? 'is-visible' : ''}`}>
          <p className="section-label mb-4">Why ViCare</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-500 text-espresso">
            Why Choose ViCare Aesthetique
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {whyVicare.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={item.title}
                className={`text-left px-6 py-8 rounded-2xl bg-cream border border-beige/40 transition-all duration-500 hover:shadow-md reveal ${
                  visible ? 'is-visible' : ''
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-champagne/12 flex items-center justify-center mb-5">
                  <Icon size={22} strokeWidth={1.5} className="text-champagne" />
                </div>
                <h3 className="font-serif text-lg font-500 text-espresso tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm text-espresso-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
