import {
  siteInfo,
  contact,
  social,
  clinicHours,
  googleMapsEmbedUrl,
  getWhatsAppLink,
  getTelLink,
} from '@/data/siteContent';
import { useReveal } from '@/hooks/useReveal';
import { Phone, MessageCircle, MapPin, Instagram, Mail, Clock, Calendar, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const contactItems = [
    { icon: Phone, label: 'Call', value: contact.phoneDisplay, href: getTelLink() },
    { icon: MessageCircle, label: 'WhatsApp', value: contact.phoneDisplay, href: getWhatsAppLink() },
    { icon: Instagram, label: 'Instagram', value: social.instagramHandle, href: social.instagram },
    { icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-40 bg-cream">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="text-center mb-14 lg:mb-20">
          <p className="section-label mb-4">Contact</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-500 text-espresso">
            Get in Touch
          </h2>
          <p className="mt-4 text-base text-espresso-light">
            {siteInfo.name} — {siteInfo.location}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left — contact details and hours */}
          <div className="space-y-8">
            {/* Quick contact cards */}
            <div className="grid grid-cols-2 gap-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex flex-col items-start px-5 py-5 bg-ivory rounded-xl transition-all duration-300 hover:shadow-md"
                  >
                    <div className="w-10 h-10 rounded-full bg-champagne/12 flex items-center justify-center mb-3 transition-colors group-hover:bg-champagne/20">
                      <Icon size={18} strokeWidth={1.5} className="text-champagne" />
                    </div>
                    <p className="text-xs font-sans font-medium tracking-wide uppercase text-espresso-light mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm text-espresso font-serif break-all">{item.value}</p>
                  </a>
                );
              })}
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 px-5 py-5 bg-ivory rounded-xl">
              <MapPin size={18} strokeWidth={1.5} className="text-champagne mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-sans font-medium tracking-wide uppercase text-espresso-light mb-1">
                  Clinic Address
                </p>
                <p className="text-sm text-espresso font-serif leading-relaxed">{contact.address}</p>
                <a
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 inline-block text-xs text-champagne hover:text-champagne-dark transition-colors"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="px-5 py-5 bg-ivory rounded-xl">
              <div className="flex items-center gap-2.5 mb-4">
                <Clock size={18} strokeWidth={1.5} className="text-champagne" />
                <p className="text-xs font-sans font-medium tracking-wide uppercase text-espresso-light">
                  Opening Hours
                </p>
              </div>
              <ul className="space-y-2.5">
                {clinicHours.map((entry) => (
                  <li key={entry.day} className="flex items-center justify-between text-sm">
                    <span className="text-espresso font-serif">{entry.day}</span>
                    <span className="text-espresso-light">{entry.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full"
            >
              <Calendar size={16} strokeWidth={1.5} />
              Book an Appointment
            </a>
          </div>

          {/* Right — Google Maps embed */}
          <div className="flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden bg-ivory border border-beige/40 min-h-[400px] lg:min-h-[480px] flex-1">
              <iframe
                src={googleMapsEmbedUrl}
                title="ViCare Aesthetique clinic location on Google Maps"
                className="w-full h-full absolute inset-0"
                style={{ border: 0, minHeight: '400px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              href={contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full justify-center"
            >
              <ExternalLink size={15} strokeWidth={1.5} />
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
