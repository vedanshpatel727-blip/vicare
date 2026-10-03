import { stats } from '@/data/siteContent';
import { useReveal } from '@/hooks/useReveal';

export default function TrustBar() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="py-14 sm:py-16 bg-espresso">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 reveal ${
          visible ? 'is-visible' : ''
        }`}
      >
        {stats.map((item, i) => (
          <div
            key={item.label}
            className="text-center"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <p className="font-serif text-3xl sm:text-4xl font-500 text-ivory">
              {item.value}
            </p>
            <p className="mt-2 text-xs sm:text-sm tracking-wide text-ivory/50 uppercase">
              {item.label}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-[10px] text-ivory/30 tracking-wide">
        Placeholder figures — replace with verified clinic statistics.
      </p>
    </section>
  );
}
