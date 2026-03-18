import { EmailIcon, PhoneIcon, LinkedInIcon, CVIcon, WhatsAppIcon } from '../components/icons';
import type { ComponentType } from 'react';

/**
 * Centralized icon mapping for contact links.
 * Exports components (not JSX) so this file can remain a `.ts` file.
 */
export const iconMap: Record<string, ComponentType<any>> = {
  Email: EmailIcon,
  'Teléfono': PhoneIcon,
  WhatsApp: WhatsAppIcon,
  LinkedIn: LinkedInIcon,
  CV: CVIcon,
};

export default iconMap;
