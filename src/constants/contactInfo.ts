export interface ContactLink {
  href: string;
  title: string;
  isExternal?: boolean;
  ariaLabel: string;
}

export const contactData: ContactLink[] = [
  {
    href: 'mailto:sara.m.pumariega@gmail.com',
    title: 'Email',
    ariaLabel: 'Enviar email',
  },
  {
    href: 'tel:+34625977711',
    title: 'Teléfono',
    ariaLabel: 'Llamar por teléfono',
  },
  {
    href: 'https://wa.me/34625977711',
    title: 'WhatsApp',
    isExternal: true,
    ariaLabel: 'Chat por WhatsApp',
  },
  {
    href: 'https://www.linkedin.com/in/sara-men%C3%A9ndez/',
    title: 'LinkedIn',
    isExternal: true,
    ariaLabel: 'Perfil de LinkedIn',
  },
  {
    href: '/docs/CV_SARA_MENENDEZ_WEB_ES.pdf',
    title: 'CV',
    isExternal: true,
    ariaLabel: 'Descargar CV',
  },
];
