import { EmailIcon, PhoneIcon, LinkedInIcon, CVIcon, WhatsAppIcon } from '../components/icons';

/**
 * centralized icon mapping for contact links
 * Used by Contact.tsx and AboutMe.tsx
 */
export const iconMap: Record<string, React.ReactNode> = {
  'Email': <EmailIcon />,
  'Teléfono': <PhoneIcon />,
  'WhatsApp': <WhatsAppIcon />,
  'LinkedIn': <LinkedInIcon />,
  'CV': <CVIcon />,
};
