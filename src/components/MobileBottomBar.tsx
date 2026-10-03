import { getWhatsAppLink } from '@/data/siteContent';
import { MessageCircle, CalendarCheck } from 'lucide-react';

export default function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex gap-2 p-3 bg-ivory border-t border-espresso/10">
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white text-sm font-medium rounded-full"
      >
        <MessageCircle size={18} strokeWidth={1.5} />
        WhatsApp
      </a>
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 bg-espresso text-ivory text-sm font-medium rounded-full"
      >
        <CalendarCheck size={18} strokeWidth={1.5} />
        Book Appointment
      </a>
    </div>
  );
}
