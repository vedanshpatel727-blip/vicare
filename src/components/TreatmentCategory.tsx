import { useState } from 'react';
import { treatmentCategories, treatments, Treatment } from '@/data/siteContent';
import { useReveal } from '@/hooks/useReveal';
import { ChevronDown } from 'lucide-react';

interface Props {
  onSelectTreatment: (treatment: Treatment) => void;
}

export default function TreatmentCategory({ onSelectTreatment }: Props) {
  const [activeCategory, setActiveCategory] = useState(treatmentCategories[0].key);
  const { ref, visible } = useReveal<HTMLDivElement>();

  const filtered = treatments.filter((t) => t.category === activeCategory);

  return (
    <section id="treatments" className="py-24 sm:py-32 lg:py-40 bg-cream">
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className={`text-center mb-12 lg:mb-16 reveal ${visible ? 'is-visible' : ''}`}>
          <p className="section-label mb-4">All Treatments</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-500 text-espresso">
            Find Your Treatment
          </h2>
        </div>

        {/* Desktop tabs */}
        <div className="hidden md:flex justify-center flex-wrap gap-2 mb-12">
          {treatmentCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 text-sm font-sans font-medium tracking-wide rounded-full transition-all duration-300 ${
                activeCategory === cat.key
                  ? 'bg-espresso text-ivory'
                  : 'bg-ivory text-espresso-light hover:bg-beige hover:text-espresso'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Mobile dropdown */}
        <div className="md:hidden mb-10 max-w-sm mx-auto">
          <div className="relative">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value as typeof activeCategory)}
              className="w-full appearance-none bg-ivory text-espresso px-5 py-3.5 pr-12 text-sm font-sans font-medium tracking-wide rounded-full border border-beige cursor-pointer focus:outline-none focus:border-champagne"
            >
              {treatmentCategories.map((cat) => (
                <option key={cat.key} value={cat.key}>
                  {cat.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={18}
              strokeWidth={1.5}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-espresso-light pointer-events-none"
            />
          </div>
        </div>

        {/* Treatment list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {filtered.map((treatment, i) => (
            <button
              key={treatment.id}
              onClick={() => onSelectTreatment(treatment)}
              className={`group flex items-center justify-between px-6 py-5 bg-ivory rounded-xl text-left transition-all duration-300 hover:bg-beige/60 hover:shadow-sm reveal ${
                visible ? 'is-visible' : ''
              }`}
              style={{ transitionDelay: `${Math.min(i * 50, 400)}ms` }}
            >
              <span className="font-serif text-lg text-espresso group-hover:text-champagne transition-colors">
                {treatment.name}
              </span>
              <ChevronDown
                size={16}
                strokeWidth={1.5}
                className="text-espresso-light -rotate-90 group-hover:text-champagne transition-colors"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
