import { featuredTreatments } from '@/data/siteContent';
import { useReveal } from '@/hooks/useReveal';
import FeaturedTreatmentCard from './FeaturedTreatmentCard';

interface Props {
  onSelectTreatment: (treatmentId: string) => void;
}

export default function FeaturedTreatments({ onSelectTreatment }: Props) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="featured" className="py-24 sm:py-32 lg:py-40 bg-ivory">
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className={`text-center mb-14 lg:mb-20 reveal ${visible ? 'is-visible' : ''}`}>
          <p className="section-label mb-4">Featured</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-500 text-espresso">
            Explore Our Treatments
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {featuredTreatments.map((treatment, i) => (
            <div
              key={treatment.treatmentId}
              className={`reveal ${visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <FeaturedTreatmentCard
                treatment={treatment}
                index={i}
                onSelect={() => onSelectTreatment(treatment.treatmentId)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
