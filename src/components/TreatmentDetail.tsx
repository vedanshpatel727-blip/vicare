import { useEffect } from 'react';
import { Treatment, getWhatsAppLink } from '@/data/siteContent';
import { X, Check } from 'lucide-react';

interface Props {
  treatment: Treatment | null;
  onClose: () => void;
}

export default function TreatmentDetail({ treatment, onClose }: Props) {
  useEffect(() => {
    if (treatment) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [treatment]);

  if (!treatment) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center">
      <div
        className="absolute inset-0 bg-espresso/50 animate-fade-in"
        onClick={onClose}
      />

      <div className="relative w-full sm:max-w-lg bg-ivory rounded-t-[2rem] sm:rounded-[2rem] shadow-2xl p-8 sm:p-10 max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-espresso-light hover:text-espresso transition-colors"
          aria-label="Close"
        >
          <X size={22} strokeWidth={1.5} />
        </button>

        <p className="section-label mb-3">
          {treatment.category.charAt(0).toUpperCase() + treatment.category.slice(1)}
        </p>
        <h3 className="font-serif text-3xl sm:text-4xl font-500 text-espresso leading-tight">
          {treatment.name}
        </h3>

        <p className="mt-5 text-base text-espresso-light leading-relaxed">
          {treatment.overview}
        </p>

        <div className="mt-7">
          <p className="text-xs font-sans font-medium tracking-extra-wide uppercase text-espresso-light mb-3">
            Suitable Concerns
          </p>
          <div className="flex flex-wrap gap-2">
            {treatment.concerns.map((concern) => (
              <span
                key={concern}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-cream rounded-full text-sm text-espresso-light"
              >
                <Check size={13} strokeWidth={2} className="text-champagne" />
                {concern}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href={getWhatsAppLink(
              `Hi, I would like to book a consultation at ViCare Aesthetique. I'm interested in ${treatment.name}. Please share the available appointment slots.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="btn-primary flex-1"
          >
            Book a Consultation
          </a>
          <a
            href={getWhatsAppLink(
              `Hi ViCare Aesthetique, I'm interested in ${treatment.name}. I would like to book a consultation.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp flex-1"
          >
            WhatsApp
          </a>
        </div>

        <p className="mt-6 text-xs text-espresso-light leading-relaxed text-center">
          Treatment suitability varies by individual. Consultation with a qualified professional is recommended.
        </p>
      </div>
    </div>
  );
}
