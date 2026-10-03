import { gallery, GalleryImage } from '@/data/siteContent';
import { useReveal } from '@/hooks/useReveal';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

export default function Gallery() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % gallery.length));
  }, []);
  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + gallery.length) % gallery.length));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <section id="gallery" className="py-24 sm:py-32 lg:py-40 bg-ivory">
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className={`text-center mb-14 lg:mb-20 reveal ${visible ? 'is-visible' : ''}`}>
          <p className="section-label mb-4">Gallery</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-400 text-espresso">
            A Glimpse of ViCare
          </h2>
        </div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 [&>*]:mb-3 sm:[&>*]:mb-4">
          {gallery.map((image: GalleryImage, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className={`group block w-full overflow-hidden rounded-xl sm:rounded-2xl break-inside-avoid reveal ${
                visible ? 'is-visible' : ''
              }`}
              style={{ transitionDelay: `${Math.min(i * 60, 500)}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/90 backdrop-blur-md animate-fade-in">
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-3 text-ivory/80 hover:text-ivory transition-colors z-10"
            aria-label="Close"
          >
            <X size={28} strokeWidth={1.5} />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 text-ivory/70 hover:text-ivory transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={32} strokeWidth={1.5} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 text-ivory/70 hover:text-ivory transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={32} strokeWidth={1.5} />
          </button>
          <img
            src={gallery[lightboxIndex].src}
            alt={gallery[lightboxIndex].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
          />
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-ivory/60 tracking-wide">
            {gallery[lightboxIndex].alt}
          </p>
        </div>
      )}
    </section>
  );
}
