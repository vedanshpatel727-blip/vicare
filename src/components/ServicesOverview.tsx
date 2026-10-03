import { serviceCategories, serviceItems } from '@/data/siteContent';
import { useReveal } from '@/hooks/useReveal';
import { ArrowRight, Sparkles, Wind, Crown, Clock, Droplet, Sun, Zap, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Wind,
  Crown,
  Clock,
  Droplet,
  Sun,
  Zap,
};

export default function ServicesOverview() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="py-24 sm:py-32 lg:py-40 bg-cream">
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className={`text-center mb-14 lg:mb-20 reveal ${visible ? 'is-visible' : ''}`}>
          <p className="section-label mb-4">Our Services</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-500 text-espresso">
            Comprehensive Aesthetic Care
          </h2>
          <p className="mt-4 text-base text-espresso-light max-w-xl mx-auto">
            From skin and hair to facial aesthetics and laser treatments, explore our range of services organized by concern.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {serviceCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Sparkles;
            const items = serviceItems.filter((s) => s.category === cat.id);
            return (
              <div
                key={cat.id}
                className={`group px-6 py-8 rounded-2xl bg-ivory border border-beige/40 transition-all duration-500 hover:shadow-md reveal ${
                  visible ? 'is-visible' : ''
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-champagne/12 flex items-center justify-center mb-5">
                  <Icon size={22} strokeWidth={1.5} className="text-champagne" />
                </div>
                <h3 className="font-serif text-lg font-500 text-espresso tracking-wide">
                  {cat.label}
                </h3>
                <p className="mt-2.5 text-sm text-espresso-light leading-relaxed">
                  {cat.description}
                </p>
                {items.length > 0 && (
                  <ul className="mt-5 space-y-2">
                    {items.map((item) => (
                      <li key={item.id}>
                        <a
                          href="#treatments"
                          className="group/link flex items-center justify-between text-sm text-espresso hover:text-champagne transition-colors"
                        >
                          <span className="font-serif">{item.name}</span>
                          <ArrowRight
                            size={14}
                            strokeWidth={1.5}
                            className="text-espresso-light group-hover/link:text-champagne group-hover/link:translate-x-0.5 transition-all"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        <div className={`text-center mt-12 reveal ${visible ? 'is-visible' : ''}`}>
          <a href="#treatments" className="btn-primary">
            View All Treatments
          </a>
        </div>
      </div>
    </section>
  );
}
