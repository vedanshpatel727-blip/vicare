import { getWhatsAppLink } from '@/data/siteContent';
import { MessageCircle } from 'lucide-react';

interface Props {
  message?: string;
  label?: string;
  className?: string;
}

export default function WhatsAppButton({
  message,
  label = 'WhatsApp',
  className = '',
}: Props) {
  return (
    <a
      href={getWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-whatsapp ${className}`}
      aria-label={`Contact us on WhatsApp`}
    >
      <MessageCircle size={16} strokeWidth={1.5} />
      {label}
    </a>
  );
}
