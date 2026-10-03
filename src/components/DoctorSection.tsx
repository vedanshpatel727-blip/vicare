import { doctor, getWhatsAppLink } from '@/data/siteContent';
import { useReveal } from '@/hooks/useReveal';
import { Check, Award, Stethoscope } from 'lucide-react';

export default function DoctorSection() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="doctor" className="py-24 sm:py-32 lg:py-40 bg-ivory">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-center"
      >
        {/* Image */}
        <div className={`reveal-image ${visible ? 'is-visible' : ''}`}>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-cream">
              <img
                src={doctor.image}
                alt={doctor.imageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Text */}
        <div className={`reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '150ms' }}>
          <p className="section-label mb-5">Meet the Expert</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-500 leading-[1.15] text-espresso">
            {doctor.name}
          </h2>
          <p className="mt-3 text-base text-champagne-dark font-sans tracking-wide">
            {doctor.qualification}
          </p>
          <p className="mt-1 text-sm text-espresso-light">
            {doctor.specialization} · {doctor.experience}
          </p>

          <p className="mt-6 text-base text-espresso-light leading-relaxed max-w-lg">
            {doctor.bio}
          </p>

          {/* Expertise */}
          <div className="mt-8">
            <p className="text-xs font-sans font-medium tracking-extra-wide uppercase text-espresso-light mb-3">
              Areas of Expertise
            </p>
            <div className="flex flex-wrap gap-2">
              {doctor.expertise.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-cream rounded-full text-sm text-espresso"
                >
                  <Check size={13} strokeWidth={2} className="text-champagne" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Memberships */}
          <div className="mt-7">
            <p className="text-xs font-sans font-medium tracking-extra-wide uppercase text-espresso-light mb-3">
              Memberships & Certifications
            </p>
            <ul className="space-y-2">
              {doctor.memberships.map((m) => (
                <li key={m} className="flex items-start gap-2.5 text-sm text-espresso-light">
                  <Award size={15} strokeWidth={1.5} className="text-champagne mt-0.5 flex-shrink-0" />
                  {m}
                </li>
              ))}
            </ul>
          </div>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary mt-9 inline-flex"
          >
            <Stethoscope size={15} strokeWidth={1.5} />
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
