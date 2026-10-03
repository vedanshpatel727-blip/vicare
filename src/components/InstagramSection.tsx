import { socialSection } from '@/data/siteContent';
import { useReveal } from '@/hooks/useReveal';
import { Instagram } from 'lucide-react';

export default function InstagramSection() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="py-20 sm:py-28 bg-espresso">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto px-5 sm:px-8 text-center reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="w-14 h-14 mx-auto rounded-full bg-champagne/15 flex items-center justify-center mb-6">
          <Instagram size={26} strokeWidth={1.5} className="text-champagne-light" />
        </div>
        <p className="section-label mb-4 text-champagne-light">Instagram</p>
        <h2 className="font-serif text-3xl sm:text-4xl font-500 text-ivory">
          {socialSection.headline}
        </h2>
        <p className="mt-3 text-lg font-serif text-champagne-light">
          {socialSection.handle}
        </p>
        <p className="mt-4 text-base text-ivory/60 leading-relaxed max-w-md mx-auto">
          {socialSection.copy}
        </p>
        <a
          href={socialSection.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-ivory text-espresso text-sm font-sans font-medium tracking-wide rounded-full transition-all duration-300 hover:bg-cream"
        >
          <Instagram size={16} strokeWidth={1.5} />
          {socialSection.cta}
        </a>
      </div>
    </section>
  );
}
