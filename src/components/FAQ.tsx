import { faqs } from '@/data/siteContent';
import { useReveal } from '@/hooks/useReveal';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-32 lg:py-40 bg-cream">
      <div ref={ref} className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className={`text-center mb-14 lg:mb-20 reveal ${visible ? 'is-visible' : ''}`}>
          <p className="section-label mb-4">FAQ</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-500 text-espresso">
            Frequently Asked Questions
          </h2>
        </div>

        <div className={`space-y-3 reveal ${visible ? 'is-visible' : ''}`}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-ivory rounded-xl border border-beige/40 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg text-espresso">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 text-champagne">
                    {isOpen ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm text-espresso-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
