import { useEffect, useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { siteInfo, navigation, social, getWhatsAppLink } from '@/data/siteContent';
import WhatsAppButton from './WhatsAppButton';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-ivory shadow-[0_1px_0_0_rgba(43,33,28,0.08)]'
            : 'bg-ivory'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" aria-label={siteInfo.name} className="leading-none">
              <span className="block font-serif text-xl sm:text-2xl font-600 tracking-wide text-espresso">
                VICARE
              </span>
              <span className="block text-[10px] tracking-ultra-wide uppercase text-champagne mt-0.5">
                Aesthetique
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-9">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-sans font-normal text-espresso-light hover:text-espresso transition-colors duration-200 tracking-wide"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-espresso-light hover:text-champagne transition-colors duration-200"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !px-6 !py-2.5 text-xs"
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -mr-2 text-espresso"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-300 ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-espresso/40"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-sm bg-ivory shadow-2xl transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between h-20 px-6 border-b border-espresso/10">
            <span className="leading-none">
              <span className="block font-serif text-xl font-600 text-espresso">VICARE</span>
              <span className="block text-[9px] tracking-ultra-wide uppercase text-champagne mt-0.5">Aesthetique</span>
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 -mr-2 text-espresso"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>
          <div className="flex flex-col px-6 py-8 gap-1">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="py-3.5 text-lg font-serif text-espresso border-b border-espresso/8 hover:text-champagne transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="btn-primary mt-6 w-full"
            >
              Book Appointment
            </a>
            <div onClick={() => setMenuOpen(false)}>
              <WhatsAppButton className="mt-3 w-full" />
            </div>
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 w-full py-3.5 border border-espresso/25 text-espresso text-sm font-sans font-medium tracking-wide rounded-full transition-all duration-300 hover:bg-espresso hover:text-ivory"
            >
              <Instagram size={16} strokeWidth={1.5} />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
