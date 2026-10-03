import { blogPosts } from '@/data/siteContent';
import { useReveal } from '@/hooks/useReveal';
import { ArrowRight } from 'lucide-react';

export default function BlogSection() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="blog" className="py-24 sm:py-32 lg:py-40 bg-ivory">
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className={`text-center mb-14 lg:mb-20 reveal ${visible ? 'is-visible' : ''}`}>
          <p className="section-label mb-4">Insights</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-500 text-espresso">
            Skin & Aesthetic Care Insights
          </h2>
          <p className="mt-4 text-base text-espresso-light max-w-xl mx-auto">
            Educational articles on skincare, treatments, and aesthetic care to help you make informed decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {blogPosts.map((post, i) => (
            <article
              key={post.id}
              className={`group cursor-pointer reveal ${visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden bg-cream">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-5">
                <p className="text-xs font-sans font-medium tracking-extra-wide uppercase text-champagne mb-2">
                  {post.category}
                </p>
                <h3 className="font-serif text-xl sm:text-2xl font-500 text-espresso group-hover:text-champagne transition-colors duration-300 leading-snug">
                  {post.title}
                </h3>
                <p className="mt-2.5 text-sm text-espresso-light leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-sans font-medium tracking-wide uppercase text-champagne">
                  Read More
                  <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
