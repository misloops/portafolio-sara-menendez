export type CaseStudyFact = {
  label: string;
  value: string;
};

export type CaseStudySection = {
  title: string;
  intro?: string;
  paragraphs: string[];
  bullets?: string[];
};

export type CaseStudyPhase = {
  title: string;
  description: string;
  bullets: string[];
};

export type CaseStudyHighlight = {
  label: string;
  detail: string;
};

export type CaseStudyImage = {
  src: string;
  alt: string;
};

export type CaseStudyImageSection = {
  title: string;
  images: CaseStudyImage[];
};

export type CaseStudyHeroImage = {
  src: string;
  alt: string;
};

export type CaseStudyOverview = {
  description: string;
  image: CaseStudyImage;
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  eyebrow: string;
  subtitle: string;
  year: string;
  role: string;
  stack: string[];
  services: string[];
  summary: string;
  heroBadge: string;
  heroImage?: CaseStudyHeroImage;
  facts: CaseStudyFact[];
  overview?: CaseStudyOverview;
  challenge: CaseStudySection;
  goals: CaseStudySection;
  approach: CaseStudySection;
  phases?: CaseStudyPhase[];
  solution: CaseStudySection;
  results: CaseStudySection;
  highlights: CaseStudyHighlight[];
  learnings?: CaseStudySection;
  imageSections?: CaseStudyImageSection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'eae-business-school',
    title: 'EAE Business School (Grupo Planeta)',
    client: 'Web corporativa educativa en Drupal',
    eyebrow: 'Case study corporativa',
    subtitle:
      'Unificacion visual, optimizacion de navegacion y plantillas escalables para captacion y contenidos.',
    year: '2023-2026',
    role: 'Webmaster Manager + UX/UI',
    stack: ['Drupal', 'Figma', 'UX/UI', 'Accesibilidad', 'CRO'],
    services: ['Arquitectura de informacion', 'Rediseño de plantillas', 'Coordinacion marketing + SEO'],
    summary:
      'La web se habia lanzado pocos meses antes, pero presentaba inconsistencia visual, navegacion poco clara y fichas de programa con baja capacidad de conversion.',
    heroBadge: 'Case study activo',
    heroImage: {
      src: '/assets/projects/eae-business-school/EAE-BUSINESS_COVER.jpg',
      alt: 'Portada del caso EAE Business School'
    },
    facts: [
      { label: 'Proyecto', value: 'EAE Business School' },
      { label: 'Contexto', value: 'Grupo Planeta' },
      { label: 'Plataforma', value: 'Drupal' },
      { label: 'Foco', value: 'UX, CRO, consistencia' }
    ],
    challenge: {
      title: 'Reto',
      paragraphs: [
        'La web habia sido gestionada por distintos perfiles y se perdio consistencia visual y editorial.',
        'Era necesario unificar estilos, optimizar navegacion y reforzar las paginas de programa para mejorar captacion.'
      ],
      bullets: [
        'Estructura y navegacion poco claras',
        'Fichas de master poco persuasivas',
        'Necesidad de plantillas escalables para campañas',
        'Alineacion con branding y reconocimiento de campus'
      ]
    },
    goals: {
      title: 'Objetivo',
      paragraphs: [
        'Iniciar una implementacion de contenido y diseño para lograr una web optimizada, visualmente atractiva y alineada con la marca EAE.',
        'Mantener diferenciacion entre campus sin perder coherencia del ecosistema digital.'
      ],
      bullets: [
        'Optimizar IA y menu',
        'Mejorar tiempos de carga y CRO',
        'Incrementar visibilidad y leads',
        'Integrar nuevas funcionalidades'
      ]
    },
    approach: {
      title: 'Mi rol y proceso',
      paragraphs: [
        'Unificacion de estilos visuales, rediseño de fichas de master, mejora de jerarquia de contenidos y formularios visibles.',
        'Coordinacion con marketing y SEO, pruebas A/B y optimizacion continua para aumentar conversion y navegabilidad.'
      ],
      bullets: [
        'Unificacion de estilo',
        'Nueva arquitectura de informacion',
        'Restyling alineado con campaña offline',
        'Implementacion SEO + CRO'
      ]
    },
    solution: {
      title: 'Solucion',
      paragraphs: [
        'Se rediseñaron estructuras de menu y paginas clave, se introdujeron breadcrumbs y se reforzaron CTAs en cards y formularios.',
        'El sistema resultante permitio crear nuevas landings de forma reutilizable para captacion.'
      ],
      bullets: [
        'Navegacion mas intuitiva',
        'Fichas de programa mas visuales',
        'Plantillas reutilizables para campañas',
        'Base solida para crecimiento digital'
      ]
    },
    results: {
      title: 'Logros',
      paragraphs: [
        'Consolidacion de identidad digital coherente y escalable en todo el sitio.',
        'Mejora de conversion de leads en paginas de programa y reduccion de friccion en navegacion.'
      ],
      bullets: [
        'Mayor claridad de recorrido',
        'Mejor capacidad de captacion',
        'Sistema de landings reutilizable',
        'Mejor alineacion de equipos'
      ]
    },
    highlights: [
      { label: 'Impacto', detail: 'Web mas consistente y orientada a conversion.' },
      { label: 'Colaboracion', detail: 'Trabajo transversal con marketing y SEO.' },
      { label: 'Escalabilidad', detail: 'Plantillas y estructura preparadas para crecimiento.' }
    ],
    imageSections: [
      {
        title: 'Antes / despues y mejoras clave',
        images: [
          { src: '/assets/projects/eae-business-school/EAE-BUSINESS_COVER.jpg', alt: 'Portada EAE' },
          { src: '/assets/projects/EAEweb_antes.png', alt: 'EAE antes' },
          { src: '/assets/projects/Nuevo diseño área.png', alt: 'EAE nuevo diseño de area' },
          { src: '/assets/projects/placeholders/case-study-placeholder-1.svg', alt: 'Placeholder ficha antes y despues' },
          { src: '/assets/projects/placeholders/case-study-placeholder-2.svg', alt: 'Placeholder menu antiguo y nuevo' }
        ]
      }
    ]
  },
  {
    slug: 'alien-csi-bioblitz',
    title: 'ALIEN CSI BIOBLITZ',
    client: '',
    eyebrow: 'Producto digital',
    subtitle: 'Front-end + UX/UI – Experiencia digital inclusiva – Integración de narrativa visual y datos',
    year: '2022',
    role: 'Frontend',
    stack: ['Drupal', 'Leaflet', 'Mapbox'],
    services: ['Diseño de producto', 'Ciencia ciudadana'],
    summary:
      'La plataforma web The Invasive Alien Species Bioblitz es un proyecto diseñado para monitorizar y analizar las especies invasoras. Durante el evento, científicos, familias, estudiantes, profesores, y otros miembros de la comunidad recogerán información de cada área.',
    heroBadge: 'Producto digital',
    heroImage: {
      src: '/assets/projects/alien-csi-bioblitz/ALIEN-CSI_COVER.png',
      alt: 'ALIEN CSI BIOBLITZ'
    },
    facts: [
      { label: 'Proyecto', value: 'ALIEN CSI BIOBLITZ' },
      { label: 'Tipo', value: 'Plataforma' },
      { label: 'Rol', value: 'Frontend + UX/UI' },
      { label: 'Duración', value: '2022' }
    ],
    overview: {
      description: 'La plataforma web The Invasive Alien Species Bioblitz es un proyecto diseñado para monitorizar y analizar las especies invasoras. Durante el evento, científicos, familias, estudiantes, profesores, y otros miembros de la comunidad recogerán información de cada área.',
      image: {
        src: '/assets/projects/alien-csi-bioblitz/ALIEN_1.png',
        alt: 'Plataforma IAS BioBlitz'
      }
    },
    challenge: {
      title: 'Problema',
      paragraphs: [
        'Hay un desconocimiento muy amplio del público en general sobre este hecho científico que afecta directamente a nuestro frágil hábitat en el que vivimos.'
      ]
    },
    goals: {
      title: 'Objetivo',
      paragraphs: [],
      bullets: [
        'Difundir el conocimiento sobre las especies invasoras en Europa',
        'Atraer público a participar en el evento en el que se necesita recoger en un área específica y en un corto periodo de tiempo, cuantas más especies invasoras a analizar, mejor',
        'Promover IAS BioBlitz',
        'Educar sobre el impacto de las especies invasoras',
        'Atraer a la participación, antes, durante y después del evento'
      ]
    },
    approach: {
      title: 'Solución',
      paragraphs: [
        'El proyecto está dividido en tres fases:'
      ]
    },
    phases: [
      {
        title: 'Pre-evento',
        description: 'The main goal in the pre event phase is to provide biologists with a platform to promote the event and educate society about the species they aim to track during the bioblitz. The homepage provides a map with all the participating regions and individual landing pages per region in their local languages. Mapa interactivo con geolocalización en esta fase, en el mapa se pueden ver los países participantes con un icono de localización que al hacer hover sobre el te da una primera información del país y las especies que son características de la zona. Para obtener más información clicando sobre cada país te llevará directamente a su propia página en la que aparecerá toda la información de la región en concreto, en dos idiomas, inglés y original.',
        bullets: []
      },
      {
        title: 'Durante el evento',
        description: 'Durante el evento los participantes tienen que descargar la App iNaturalist para poder capturar las observaciones. La App usa tecnología IA para la verificación de la imagen. Debido a un presupuesto limitado y que iNaturalist ofrece un buen servicio gratuito, decidimos integrar la API en la web BioBlitz. Durante el evento, los datos que se recogen se comienzan a volcar en la página web, en el mapa interactivo irán sumando el número de especies por región recogidas.',
        bullets: []
      },
      {
        title: 'Post-evento',
        description: 'Todas las observaciones son analizadas por los científicos y son publicados en la web junto a gráficos.',
        bullets: []
      }
    ],
    solution: {
      title: '',
      paragraphs: []
    },
    results: {
      title: '',
      paragraphs: [],
      bullets: []
    },
    highlights: [
      { label: '', detail: '' }
    ],
    imageSections: [
      {
        title: 'Estrategia visual',
        images: [
          { src: '/assets/projects/alien-csi-bioblitz/ALIEN_2_mapa%20interactivo.png', alt: 'Mapa interactivo' }
        ]
      },
      {
        title: 'Pre-evento',
        images: [
          { src: '/assets/projects/alien-csi-bioblitz/ALIEN_3_pre-event.png', alt: 'Pre-evento' }
        ]
      },
      {
        title: 'Durante el evento',
        images: [
          { src: '/assets/projects/alien-csi-bioblitz/ALIEN_4_during-event.png', alt: 'Durante el evento' }
        ]
      },
      {
        title: 'Post-evento',
        images: [
          { src: '/assets/projects/alien-csi-bioblitz/ALIEN_5_post-event.jpg', alt: 'Post-evento' }
        ]
      }
    ]
  },
  {
    slug: 'ohmios-records',
    title: 'Ohmios Records',
    client: 'E-commerce para sello musical',
    eyebrow: 'Case study e-commerce',
    subtitle:
      'Proyecto que une musica independiente y diseno digital con una tienda funcional y rapida.',
    year: '2024',
    role: 'Desarrollo + UX/UI',
    stack: ['WordPress', 'WooCommerce', 'UX/UI'],
    services: ['E-commerce', 'Diseño minimal', 'Navegacion mobile'],
    summary:
      'El sello necesitaba vender vinilos y lanzamientos digitales sin perder identidad cultural.',
    heroBadge: 'Case study activo',
    heroImage: {
      src: '/assets/projects/ohmios-records/OHMIOS-RECORDS_COVER.png',
      alt: 'Portada Ohmios Records'
    },
    facts: [
      { label: 'Proyecto', value: 'Ohmios Records' },
      { label: 'Tipo', value: 'E-commerce musical' },
      { label: 'Stack', value: 'WordPress + WooCommerce' },
      { label: 'Foco', value: 'Compra + identidad cultural' }
    ],
    challenge: {
      title: 'Reto',
      paragraphs: [
        'Construir una tienda online funcional, rapida y sencilla de gestionar.',
        'Mantener tono cultural y fresco alineado con el publico musical.'
      ],
      bullets: ['Velocidad y claridad', 'Experiencia en movil', 'Consistencia de marca']
    },
    goals: {
      title: 'Objetivo',
      paragraphs: [
        'Mejorar experiencia de compra para seguidores del sello sin perder personalidad.',
        'Dar autonomia al cliente para gestion del catalogo.'
      ],
      bullets: ['Flujo de compra claro', 'Navegacion simple', 'Identidad musical presente']
    },
    approach: {
      title: 'Mi rol',
      paragraphs: [
        'Desarrollo completo en WordPress + WooCommerce y diseño UX/UI minimalista.',
        'Optimización de usabilidad y navegacion en mobile para sesiones de compra rapidas.'
      ],
      bullets: ['Desarrollo completo', 'UI minimal funcional', 'Adaptacion al publico musical']
    },
    solution: {
      title: 'Solucion',
      paragraphs: [
        'Se diseño una tienda clara y ligera, con estructura de catalogo centrada en descubrimiento y compra.',
        'La web mantiene una estetica coherente con la cultura musical independiente.'
      ],
      bullets: ['Catalogo ordenado', 'Checkout simplificado', 'Estetica consistente']
    },
    results: {
      title: 'Resultado',
      paragraphs: [
        'Mejora en la experiencia de compra para seguidores y mayor coherencia de marca.',
        'Proyecto estable y facil de operar para nuevos lanzamientos.'
      ],
      bullets: ['Mejor usabilidad', 'Mejor experiencia mobile', 'Gestion sencilla del sitio']
    },
    highlights: [
      { label: 'Valor', detail: 'Equilibrio entre funcionalidad y cultura de marca.' },
      { label: 'Tecnologia', detail: 'WordPress + WooCommerce bien optimizado.' },
      { label: 'Resultado', detail: 'E-commerce usable y coherente visualmente.' }
    ],
    imageSections: [
      {
        title: 'Desktop, mobile y detalle',
        images: [
          { src: '/assets/projects/ohmios-records/OHMIOS-RECORDS_COVER.png', alt: 'Portada Ohmios' },
          { src: '/assets/projects/placeholders/case-study-placeholder-1.svg', alt: 'Placeholder desktop Ohmios' },
          { src: '/assets/projects/placeholders/case-study-placeholder-2.svg', alt: 'Placeholder mobile Ohmios' },
          { src: '/assets/projects/placeholders/case-study-placeholder-3.svg', alt: 'Placeholder detalle Ohmios' },
          { src: '/assets/projects/placeholders/case-study-placeholder-2.svg', alt: 'Placeholder pantalla extra Ohmios' }
        ]
      }
    ]
  },
  {
    slug: 'trick-tales-app',
    title: 'Trick Tales',
    client: 'App de entrenamiento y salud para mascotas',
    eyebrow: 'Case study UX/UI app',
    subtitle:
      'Experiencia movil con foco en pantallas finales, arquitectura de informacion y sistema visual.',
    year: '2025',
    role: 'UX/UI Designer',
    stack: ['Figma', 'UX Research', 'Arquitectura de informacion', 'UI System'],
    services: ['Diseno de app', 'Flujos de uso', 'Sistema de componentes'],
    summary:
      'Proyecto colaborativo orientado a acompañar a duenos primerizos desde onboarding hasta seguimiento diario.',
    heroBadge: 'Case study activo',
    heroImage: {
      src: '/assets/projects/trick-tales/trick-tales_cover.jpg',
      alt: 'Portada Trick Tales'
    },
    facts: [
      { label: 'Proyecto', value: 'Trick Tales' },
      { label: 'Tipo', value: 'App movil' },
      { label: 'Foco', value: 'UX/UI + salud + entrenamiento' },
      { label: 'Pantallas', value: '60+' }
    ],
    challenge: {
      title: 'Reto',
      paragraphs: [
        'Unificar tareas dispersas (salud, citas, vacunas, entrenamiento) en una experiencia clara.',
        'Crear una app motivadora, util y facil de adoptar en el dia a dia.'
      ],
      bullets: ['Reducir friccion', 'Aumentar constancia', 'Organizar informacion compleja']
    },
    goals: {
      title: 'Objetivo',
      paragraphs: [
        'Priorizar pantallas finales de alto valor visual sin perder claridad de flujo.',
        'Mostrar arquitectura de informacion y algun wireframe para evidenciar proceso.'
      ],
      bullets: ['Onboarding claro', 'Módulos funcionales', 'Sistema visual consistente']
    },
    approach: {
      title: 'Enfoque',
      paragraphs: [
        'Se organizo la app por bloques de uso con jerarquia y componentes reutilizables.',
        'El relato visual prioriza resultados finales, arquitectura y piezas de sistema.'
      ],
      bullets: ['Arquitectura de informacion', 'Pantallas finales', 'Componentes UI', 'Detalle visual']
    },
    solution: {
      title: 'Solucion',
      paragraphs: [
        'La app integra salud, entrenamiento y gestion diaria con un flujo coherente de principio a fin.',
        'Se consolido un lenguaje visual para escalar nuevas funciones sin romper consistencia.'
      ],
      bullets: ['Flujo integral', 'Pantallas de accion', 'Sistema de diseno reusable']
    },
    results: {
      title: 'Resultado',
      paragraphs: [
        'Caso fuerte en portfolio por profundidad visual y cobertura de escenarios de uso.',
        'Combina narrativa de producto, interfaz final y evidencia de proceso.'
      ],
      bullets: ['Narrativa completa', 'UI de alta calidad', 'Estructura lista para evolucion']
    },
    highlights: [
      { label: 'Fortaleza', detail: 'Amplio set de pantallas finales.' },
      { label: 'Proceso', detail: 'Arquitectura + sistema visual claramente documentables.' },
      { label: 'Resultado', detail: 'Caso diferencial dentro del portfolio.' }
    ],
    imageSections: [
      {
        title: 'Pantallas finales destacadas',
        images: [
          { src: '/assets/projects/trick-tales/trick-tales_cover.jpg', alt: 'Cover Trick Tales' },
          { src: '/assets/projects/trick-tales/splash.png', alt: 'Splash Trick Tales' },
          { src: '/assets/projects/trick-tales/onboard-1.png', alt: 'Onboarding 1' },
          { src: '/assets/projects/trick-tales/entrenamiento.png', alt: 'Pantalla entrenamiento' },
          { src: '/assets/projects/trick-tales/salud.png', alt: 'Pantalla salud' },
          { src: '/assets/projects/trick-tales/mis-mascotas.png', alt: 'Pantalla mis mascotas' }
        ]
      },
      {
        title: 'Arquitectura y wireframe',
        images: [
          { src: '/assets/projects/trick-tales/arquitectura-informacion.png', alt: 'Arquitectura de informacion' },
          { src: '/assets/projects/trick-tales/w1---splash.png', alt: 'Wireframe splash' },
          { src: '/assets/projects/trick-tales/w2---onboarding-2.png', alt: 'Wireframe onboarding' }
        ]
      }
    ]
  }
];

export const caseStudiesBySlug = Object.fromEntries(
  caseStudies.map((caseStudy) => [caseStudy.slug, caseStudy])
);
