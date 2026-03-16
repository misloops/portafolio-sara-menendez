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
    description: 'Construyendo una base sólida y escalable con TypeScript, Tailwind CSS y componentes React reutilizables. Design system centralizado.',
    image: '/assets/projects/portafolio-2026/MIPORTAFOLIO_cover.jpg',
    tags: ['React', 'Diseño Web'],
    category: 'Portafolio',
    slug: 'mi-portafolio-2026',
    status: 'En construcción'
  },
  {
    title: 'EAE Business School',
    meta: '(Grupo Planeta) Barcelona 2023 - 2025',
    description: 'Web corporativa educativa en Drupal. Unificación visual, optimización de navegación y rediseño de fichas de programa para incrementar la captación de leads. +40% conversión.',
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
    description: 'Plataforma de ciencia ciudadana para monitorizar especies invasoras en Europa. Frontend desarrollado con Leaflet para mapa interactivo, recopilación de observaciones en tiempo real y análisis de datos en vivo.',
    image: '/assets/projects/alien-csi-bioblitz/ALIEN-CSI_COVER.png',
    tags: ['Diseño Web', 'Diseño UX / UI'],
    category: 'Case study',
    slug: 'alien-csi-bioblitz',
    externalUrl: 'https://web.archive.org/web/20220702235245/https://iasbioblitz.creaf.cat/',
    status: 'Completado'
  },
  {
    title: 'Ohmios Records',
    description: 'E-commerce para sello musical independiente. Diseño minimalista con identidad cultural, navegación mobile optimizada.',
    image: '/assets/projects/ohmios-records/OHMIOS-RECORDS_COVER.png',
    tags: ['WordPress', 'Diseño UX / UI', 'Web Manager'],
    category: 'Tienda Online',
    slug: 'ohmios-records',
    status: 'Completado'
  },
  {
    title: 'Trick Tales App',
    description: 'Aplicación para mascotas con enfoque en UX/UI. Experiencia intuitiva y diseño centrado en el usuario para facilitar la conexión entre dueños y sus mascotas.',
    image: '/assets/projects/trick-tales/trick-tales_cover.jpg',
    tags: ['Diseño UX / UI', 'Figma', 'Diseño Web'],
    category: 'App',
    slug: 'trick-tales-app',
    status: 'Completado'
  },
  {
    title: 'Menlo Artist',
    description: 'WordPress portfolio para artista especializada en retratos de mascotas. Galería responsive con filtrado, contacto directo y blog de procesos artísticos.',
    image: '/assets/projects/menlo-artist/MENLO_COVER.png',
    tags: ['WordPress', 'Diseño Web'],
    category: 'Portafolio',
    externalUrl: 'https://menloartist.com',
    status: 'Live'
  },
  {
    title: 'ARBOLA',
    description: 'WordPress web para estudio de arquitectura. Portfolio de proyectos con galería visual, planos y renderizados de obras arquitectónicas.',
    image: '🏗️',
    tags: ['WordPress', 'Diseño Web'],
    category: 'Portafolio',
    externalUrl: 'https://arbola.cc/',
    status: 'Live'
  },
  {
    title: 'Mise en Scène',
    description: 'E-commerce boutique en pandemia. Tienda online con sistema de filtrado por marcas y espíritu editorial. Comunidad fiel conectada desde Instagram.',
    image: '/assets/projects/mise-en-scene/MISE-EN-SCENE_COVER.png',
    tags: ['WordPress', 'Web Manager', 'Diseño UX / UI'],
    category: 'Tienda Online',
    slug: 'mise-en-scene',
    externalUrl: 'https://www.misenscene.es/',
    status: 'Live'
  },
  {
    title: 'Beatriz Galindo Psicóloga',
    description: 'Web portfolio para psicóloga especializada en trauma, apego y género. Diseño elegante y profesional con enfoque en accesibilidad y confianza.',
    image: '/assets/projects/beatriz-galindo/BEATRIZ-GALINDO_COVER.jpg',
    tags: ['WordPress', 'Diseño Web', 'Diseño UX / UI'],
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
