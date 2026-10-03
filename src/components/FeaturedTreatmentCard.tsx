import { FeaturedTreatment } from '@/data/siteContent';
import { ArrowRight } from 'lucide-react';

interface Props {
  treatment: FeaturedTreatment;
  onSelect: () => void;
  index: number;
}

export default function FeaturedTreatmentCard({ treatment, onSelect }: Props) {
  return (
    <button
      onClick={onSelect}
      className="group text-left flex flex-col"
    >
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-cream">
        <img
          src={treatment.image}
          alt={treatment.imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="mt-5">
        <h3 className="font-serif text-xl sm:text-2xl font-500 text-espresso group-hover:text-champagne transition-colors duration-300">
          {treatment.name}
        </h3>
        <p className="mt-2 text-sm text-espresso-light leading-relaxed">
          {treatment.description}
        </p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-sans font-medium tracking-wide uppercase text-champagne">
          View Treatment
          <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </button>
  );
}
