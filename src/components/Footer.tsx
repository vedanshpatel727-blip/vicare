import {
  siteInfo,
  footer,
  footerLinks,
  navigation,
  contact,
  social,
  getWhatsAppLink,
  getTelLink,
} from '@/data/siteContent';
import { Instagram, MessageCircle, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory/80 pt-20 pb-28 md:pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <span className="block font-serif text-2xl font-600 text-ivory leading-none">
              VICARE
            </span>
            <span className="block text-[10px] tracking-ultra-wide uppercase text-champagne mt-1">
              Aesthetique
            </span>
            <p className="mt-4 text-sm text-ivory/60 leading-relaxed max-w-xs">
              {siteInfo.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-sans font-medium tracking-extra-wide uppercase text-champagne-light mb-4">
              {footer.quickLinksLabel}
            </p>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-ivory/60 hover:text-ivory transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments + About */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-sans font-medium tracking-extra-wide uppercase text-champagne-light mb-4">
                {footer.treatmentsLabel}
              </p>
              <ul className="space-y-2.5">
                {footerLinks.treatments.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-ivory/60 hover:text-ivory transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-sans font-medium tracking-extra-wide uppercase text-champagne-light mb-4">
                {footer.aboutLabel}
              </p>
              <ul className="space-y-2.5">
                {footerLinks.about.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-ivory/60 hover:text-ivory transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-sans font-medium tracking-extra-wide uppercase text-champagne-light mb-4">
              {footer.contactLabel}
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={getTelLink()}
                  className="flex items-center gap-2.5 text-sm text-ivory/60 hover:text-ivory transition-colors"
                >
                  <Phone size={15} strokeWidth={1.5} className="text-champagne" />
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-ivory/60 hover:text-ivory transition-colors"
                >
                  <MessageCircle size={15} strokeWidth={1.5} className="text-champagne" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-ivory/60 hover:text-ivory transition-colors"
                >
                  <Instagram size={15} strokeWidth={1.5} className="text-champagne" />
                  Instagram · {social.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-ivory/60 hover:text-ivory transition-colors"
                >
                  <MapPin size={15} strokeWidth={1.5} className="text-champagne" />
                  Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-10 pt-6 border-t border-ivory/10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <div className="flex gap-6">
            {footerLinks.legal.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs text-ivory/50 hover:text-ivory transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-6 pt-6 border-t border-ivory/10 text-xs text-ivory/40 leading-relaxed max-w-2xl">
          {footer.disclaimer}
        </p>

        {/* Copyright */}
        <p className="mt-6 text-xs text-ivory/40">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
