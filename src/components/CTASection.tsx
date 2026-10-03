import { consultationCta, getWhatsAppLink } from '@/data/siteContent';
import { useReveal } from '@/hooks/useReveal';
import { MessageCircle } from 'lucide-react';

export default function CTASection() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="booking" className="py-24 sm:py-32 lg:py-40 bg-espresso">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-5 sm:px-8 text-center reveal ${visible ? 'is-visible' : ''}`}
      >
        <p className="section-label mb-5 text-champagne-light">Consultation</p>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-500 text-ivory leading-[1.15]">
          {consultationCta.headline}
        </h2>
        <p className="mt-6 text-base sm:text-lg text-ivory/70 leading-relaxed max-w-xl mx-auto">
          {consultationCta.copy}
        </p>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#25D366] text-white text-sm font-sans font-medium tracking-wide rounded-full transition-all duration-300 hover:bg-[#1ebe5d] hover:shadow-lg"
        >
          <MessageCircle size={18} strokeWidth={1.5} />
          {consultationCta.cta}
        </a>
      </div>
    </section>
  );
}
