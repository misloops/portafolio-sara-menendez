export type ServiceIconKey = 'design' | 'development' | 'optimization' | 'consulting';

export type Service = {
  icon: ServiceIconKey;
  title: string;
  description: string;
};

export type Project = {
  title: string;
  meta?: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  slug?: string;
  externalUrl?: string;
  imageFit?: 'contain' | 'cover';
  imagePosition?: 'center' | 'top' | 'bottom';
  imagePaddingClassName?: string;
  status?: string;
};

export type ContactItem = {
  title: string;
  value: string;
  href?: string;
  icon: string;
};

export const services: Service[] = [
  {
    icon: 'design',
    title: 'Diseño Web',
    description: 'Diseño moderno y responsive adaptado a tu marca y necesidades'
  },
  {
    icon: 'development',
    title: 'Desarrollo',
    description: 'Desarrollo de plataformas digitales escalables y performantes'
  },
  {
    icon: 'optimization',
    title: 'Optimización',
    description: 'Performance y SEO para máxima visibilidad en buscadores'
  },
  {
    icon: 'consulting',
    title: 'Consultoría',
    description: 'Asesoramiento estratégico para transformación digital'
  }
];

export const projects: Project[] = [
  {
    title: 'Mi Portafolio',
    meta: '2026',
    description: 'Web construída en React + TypesCript + Github Copilot + Visual Code',
    image: '/assets/projects/portafolio-2026/MIPORTAFOLIO_cover.jpg',
    tags: ['React', 'Diseño Web'],
    category: 'Portafolio',
    slug: 'mi-portafolio-2026',
    status: 'En construcción'
  },
  {
    title: 'EAE Business School',
    meta: '(Grupo Planeta) Barcelona 2023 - 2025',
    description: 'Web corporativa educativa en Drupal.\nDrupal + UX/UI + Accesibilidad\nCoordinación con marketing y SEO\nPrototipado en Figma y optimización de usabilidad',
    image: '/assets/projects/eae-business-school/EAE-BUSINESS_COVER.jpg',
    tags: ['Web Manager', 'Web Specialist', 'Drupal'],
    category: 'Case study',
    slug: 'eae-business-school',
    externalUrl: 'https://www.eaebarcelona.com/es/',
    imageFit: 'cover',
    imagePosition: 'top',
    imagePaddingClassName: 'p-4',
    status: 'Live'
  },
  {
    title: 'Alien CSI Bioblitz',
    meta: 'Barcelona 2022',
    description: 'Plataforma de ciencia ciudadana para monitorizar especies invasoras en Europa.',
    image: '/assets/projects/alien-csi-bioblitz/ALIEN-CSI_COVER.png',
    tags: ['Frontend', 'Drupal', 'Leaflet', 'Mapbox'],
    category: 'Case study',
    slug: 'alien-csi-bioblitz',
    externalUrl: 'https://web.archive.org/web/20220702235245/https://iasbioblitz.creaf.cat/',
    status: 'Completado'
  },
  {
    title: 'Ohmios Records Online',
    meta: 'Asturias 2023-2026',
    description: 'Tienda online  de discos en vinilo de música electrónica.',
    image: '/assets/projects/ohmios-records/OHMIOS-RECORDS_COVER.png',
    tags: ['Diseño Web', 'WordPress', 'Woocommerce'],
    category: 'Tienda Online',
    slug: 'ohmios-records',
    status: 'Completado'
  },
  {
    title: 'Trick Tales App',
    meta: 'Barcelona, ESDESIGN 2025',
    description: 'Diseño UX / UI de una aplicación para mascotas.',
    image: '/assets/projects/trick-tales/trick-tales_cover.jpg',
    tags: ['Diseño UX / UI', 'Figma'],
    category: 'App',
    slug: 'trick-tales-app',
    status: 'Completado'
  },
  {
    title: 'Menlo Artist',
    meta: '2025',
    description: 'WordPress portfolio para artista especializada en retratos de mascotas.',
    image: '/assets/projects/menlo-artist/MENLO_COVER.png',
    tags: ['WordPress', 'Diseño Web'],
    category: 'Portafolio',
    externalUrl: 'https://menloartist.com',
    status: 'Live'
  },
  {
    title: 'ARBOLA',
    meta: '2025',
    description: 'Diseño web en WordPress para un estudio de arquitectura.',
    image: '🏗️',
    tags: ['WordPress', 'Diseño Web'],
    category: 'Portafolio',
    externalUrl: 'https://arbola.cc/',
    status: 'Live'
  },
  {
    title: 'Mise en Scène',
    meta: 'Barcelona 2021-2022',
    description: 'Tienda online de moda de diseño de segunda mano.',
    image: '/assets/projects/mise-en-scene/MISE-EN-SCENE_COVER.png',
    tags: ['WordPress', 'Woocommerce'],
    category: 'Tienda Online',
    slug: 'mise-en-scene',
    externalUrl: 'https://www.misenscene.es/',
    status: 'Live'
  },
  {
    title: 'Beatriz Galindo Psicóloga',
    meta: '2026',
    description: 'Web portfolio para psicóloga especializada en trauma, apego y género.',
    image: '/assets/projects/beatriz-galindo/BEATRIZ-GALINDO_COVER.jpg',
    tags: ['WordPress', 'Diseño Web', 'Accesibilidad'],
    category: 'Portafolio',
    externalUrl: 'https://beatrizgalindonavarro.com/',
    status: 'Live'
  }
];

export const contactItems: ContactItem[] = [
  {
    title: 'WhatsApp',
    value: '+34 625 97 77 11',
    href: 'https://wa.me/34625977711',
    icon: '💬'
  },
  {
    title: 'Email',
    value: 'sara.m.pumariega@gmail.com',
    href: 'mailto:sara.m.pumariega@gmail.com',
    icon: '📧'
  },
  {
    title: 'Ubicación',
    value: 'España',
    icon: '📍'
  }
];

export const contactInitialState = {
  name: '',
  email: '',
  subject: '',
  message: ''
};
