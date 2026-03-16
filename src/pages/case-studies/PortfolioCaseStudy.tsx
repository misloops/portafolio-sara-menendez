import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { cn, getChipClasses } from '../../utils/classNames';
import { CaseStudyPager } from '../../components/case-study/CaseStudyPager';

export function PortfolioCaseStudy() {
  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(120deg, #f2e8f0 0%, #ede6eb 8%, #e8dce8 10%, #d4c4d4 24%, #b8d4c0 45%, #a8d8b0 70%, #b0deb8 85%, #f0e8f0 100%)',
        backgroundAttachment: 'fixed'
      }}
    >
      <Header />

      {/* Hero Section - Following Home Hero Pattern */}
      <section className={cn(
        'relative',
        'pt-32 pb-16 lg:pt-40 lg:pb-24',
        'px-4 lg:px-6',
        'bg-transparent',
        'overflow-hidden'
      )}>
        <div className={cn(
          'relative z-10',
          'max-w-7xl mx-auto',
          'px-4 lg:px-6'
        )}>
          <div className={cn(
            'flex flex-col gap-4 lg:gap-8',
            'text-left',
            'max-w-4xl'
          )}>

            {/* Category Label */}
            <p className={cn(
              'text-sm font-semibold uppercase tracking-widest',
              'text-dark/60'
            )}>
              Design System & React
            </p>

            {/* Main Title */}
            <h1 className={cn(
              'font-serif',
              'text-4xl md:text-5xl lg:text-6xl',
              'font-normal leading-[1.02]',
              'text-dark'
            )}>
              Mi Portafolio 2026
            </h1>

            {/* Supporting copy */}
            <div className={cn(
              'flex flex-col gap-2 lg:gap-6',
              'max-w-3xl'
            )}>
              <p className="heading-subtitle">
                Migración desde WordPress y Framer a código nativo con React.
              </p>
              <p className={cn(
                'text-lg md:text-xl',
                'leading-[1.6]',
                'text-dark/75',
                'max-w-3xl'
              )}>
                De herramientas visuales a arquitectura técnica completa. Un case study sobre cómo construir un portafolio que sea a la vez galería de trabajo y demostración de capacidad técnica en React.
              </p>
            </div>

            {/* Skills/Tech Chips */}
            <div className={cn(
              'flex flex-wrap gap-2 lg:gap-3',
              'pt-2 lg:pt-4'
            )}>
              {['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Design System'].map((skill) => (
                <span
                  key={skill}
                  className={getChipClasses()}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 px-4 lg:px-6 bg-transparent">
        <div className="max-w-5xl mx-auto">
          <img
            src="/assets/projects/portafolio-2026/MIPORTAFOLIO_cover.jpg"
            alt="Mi Portafolio 2026 cover"
            className="w-full h-auto object-contain rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* INFORMACIÓN Section */}
      <section className="py-20 lg:py-28 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-[40px]">
            {/* Title - Left Column (40%) */}
            <h2 className="lg:col-span-4 font-serif text-3xl md:text-4xl font-bold text-dark">
              Por Qué Reconstruir
            </h2>
            
            {/* Spacer for right column alignment */}
            <div className="lg:col-span-6" />
            
            {/* Left Column - Text (40%) */}
            <div className="lg:col-span-4">
              <p className="text-lg text-dark/70 leading-relaxed mb-4">
                Mi portafolio anterior en WordPress + Framer era visualmente atractivo pero limitado técnicamente. Herramientas visuales que funcionan bien para prototipos rápidos, pero no reflejan habilidades en desarrollo real.
              </p>
              <p className="text-lg text-dark/70 leading-relaxed">
                Después de trabajar con clientes en proyectos reales—Drupal, WordPress, desarrollo custom con React—necesitaba un portafolio que no fuera solo galería bonita, sino demostración viva de arquitectura técnica, componentes reutilizables, y capacidad para construir sistemas escalables.
              </p>
            </div>

            {/* Right Column - Image Placeholder (60%) */}
            <div className="lg:col-span-6 flex items-start justify-center">
              <img
                src="/assets/projects/portafolio-2026/MIPORTAFOLIO_cover.jpg"
                alt="Portfolio 2026 Cover"
                className="w-full h-auto object-contain rounded-lg"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"%3E%3Crect fill="%23e8dce8" width="600" height="400"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="24" fill="%23888"%3EPortfolio Interface%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* RETO Section */}
      <section className="py-20 lg:py-28 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-8">
            El Desafío
          </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Challenge & Role */}
          <div>
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-bold text-dark mb-6">Limitaciones de Antes</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-4">
                  <span className="text-primary-400 font-bold text-xl mt-0.5">•</span>
                  <span className="text-lg text-dark/70">Herramientas visuales (WordPress + Framer). Bonitas, pero sin verdadera arquitectura técnica.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary-400 font-bold text-xl mt-0.5">•</span>
                  <span className="text-lg text-dark/70">No demostraba capacidad en React puro, TypeScript, o design systems escalables.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary-400 font-bold text-xl mt-0.5">•</span>
                  <span className="text-lg text-dark/70">Limitada capacidad de customización. Lo que ves es lo que hay.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary-400 font-bold text-xl mt-0.5">•</span>
                  <span className="text-lg text-dark/70">Imposible documentar arquitectura, decisiones técnicas, o sistema de componentes.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-dark mb-6">Mi Rol</h3>
              <p className="text-lg text-dark/70 leading-relaxed">
                Designer, Developer, Arquitecta del sistema. Responsable de definir: stack tecnológico, arquitectura de componentes, design tokens, sistema de tipografía y color, patrón de layout, workflow de construcción, y documentación.
              </p>
            </div>
          </div>

          {/* Right Column - Technical Approach */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-dark mb-6">Objetivos</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-primary-400 font-bold text-xl mt-0.5">✓</span>
                <span className="text-lg text-dark/70"><strong>Galería profesional</strong> de proyectos con capacidad de narrativa única por proyecto.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary-400 font-bold text-xl mt-0.5">✓</span>
                <span className="text-lg text-dark/70"><strong>Design system documentado</strong>: colores, tipografía, componentes, espaciado.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary-400 font-bold text-xl mt-0.5">✓</span>
                <span className="text-lg text-dark/70"><strong>Demostración técnica</strong> a través de arquitectura visible, código limpio, patterns reutilizables.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary-400 font-bold text-xl mt-0.5">✓</span>
                <span className="text-lg text-dark/70"><strong>Case studies documentados</strong> que expliquen por qué, no solo qué.</span>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </section>

      {/* TECH STACK Section */}
      <section className="py-20 lg:py-28 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-8">
            Tech Stack & Decisiones
          </h2>
          <div className="space-y-8">
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 border border-primary-300/20">
              <h3 className="text-2xl font-serif font-bold text-dark mb-4">React 18 + TypeScript</h3>
              <p className="text-lg text-dark/70 leading-relaxed mb-4">
                Componentes reutilizables, tipado fuerte, ecosistema robusto. React permite construir interfaces complejas manteniendo código limpio y mantenible.
              </p>
              <p className="text-sm text-dark/60">Por qué: Flexibilidad máxima, componentes reutilizables, y demostración clara de capacidad técnica.</p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 border border-primary-300/20">
              <h3 className="text-2xl font-serif font-bold text-dark mb-4">Tailwind CSS</h3>
              <p className="text-lg text-dark/70 leading-relaxed mb-4">
                Utility-first CSS que mantiene diseño y código sincronizados. Facilita iteración rápida y consistencia visual sin overhead de selectors CSS.
              </p>
              <p className="text-sm text-dark/60">Por qué: Velocidad, consistencia, y la trazabilidad de estilos directamente en markup.</p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 border border-primary-300/20">
              <h3 className="text-2xl font-serif font-bold text-dark mb-4">Vite</h3>
              <p className="text-lg text-dark/70 leading-relaxed mb-4">
                Build tool moderno. Hot module replacement instantáneo, bundling optimizado, velocidad de desarrollo incomparable a webpack.
              </p>
              <p className="text-sm text-dark/60">Por qué: Desarrollo rápido, builds eficientes, y setup mínimo necesario.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE Section */}
      <section className="py-20 lg:py-28 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-8">
            Arquitectura de Componentes
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-serif font-bold text-dark mb-4">Estructura de Carpetas</h3>
              <pre className="bg-dark/5 rounded-lg p-4 text-sm overflow-x-auto text-dark/80 font-mono">
{`src/
├── components/
│   ├── case-study/
│   │   ├── Hero personalizado
│   │   ├── Secciones reutilizables
│   │   └── Navegación case study
│   ├── Hero.tsx
│   ├── Header.tsx
│   ├── ProjectCard.tsx
│   └── ...
├── pages/
│   ├── case-studies/
│   │   ├── EAECaseStudy.tsx
│   │   └── PortfolioCaseStudy.tsx
│   ├── HomePage.tsx
│   ├── ProjectsPage.tsx
│   └── ...
├── data/
│   ├── portfolio.ts
│   └── caseStudies.ts
├── constants/
│   └── theme.ts
└── utils/
    └── classNames.ts`}
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-dark mb-4">Patrones Clave</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary-400 font-bold mt-1">•</span>
                  <div>
                    <p className="font-semibold text-dark">Componentes Modulares</p>
                    <p className="text-sm text-dark/70">Hero y caso de estudio: reutilizables pero adaptables.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-400 font-bold mt-1">•</span>
                  <div>
                    <p className="font-semibold text-dark">Wrappers por Sección</p>
                    <p className="text-sm text-dark/70">CaseStudySection: componente base para todas las secciones.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-400 font-bold mt-1">•</span>
                  <div>
                    <p className="font-semibold text-dark">Utilidades Centralizadas</p>
                    <p className="text-sm text-dark/70">getChipClasses(), cn(): lógica de estilos en un solo lugar.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-400 font-bold mt-1">•</span>
                  <div>
                    <p className="font-semibold text-dark">Orquestación de Rutas</p>
                    <p className="text-sm text-dark/70">CaseStudyPage: enrutador inteligente según slug.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN SYSTEM Section */}
      <section className="py-20 lg:py-28 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-8">
            Design System
          </h2>
          
          <div className="mb-12">
            <h3 className="text-xl font-serif font-bold text-dark mb-6">Paleta de Colores</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="w-full h-24 rounded-lg bg-[#98c29b] mb-2"></div>
                <p className="text-sm font-mono text-dark">Primary Green</p>
                <p className="text-xs text-dark/60">#98c29b</p>
              </div>
              <div>
                <div className="w-full h-24 rounded-lg bg-[#c3b7c3] mb-2"></div>
                <p className="text-sm font-mono text-dark">Secondary</p>
                <p className="text-xs text-dark/60">#c3b7c3</p>
              </div>
              <div>
                <div className="w-full h-24 rounded-lg bg-[#302e2e] mb-2"></div>
                <p className="text-sm font-mono text-dark">Dark Text</p>
                <p className="text-xs text-dark/60">#302e2e</p>
              </div>
              <div>
                <div className="w-full h-24 rounded-lg bg-[#faf8fa] border border-dark/10 mb-2"></div>
                <p className="text-sm font-mono text-dark">Light BG</p>
                <p className="text-xs text-dark/60">#faf8fa</p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-serif font-bold text-dark mb-6">Tipografía</h3>
            
            {/* Justificación */}
            <div className="mb-8 p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-primary-300/20">
              <p className="text-lg text-dark/75 leading-relaxed mb-3">
                Se eligieron dos tipografías complementarias: <strong>DM Serif Display</strong> para headings (marca y jerarquía) y <strong>Gilroy</strong> para body (claridad y versatilidad). Esta combinación refleja la dualidad del proyecto: diseño refinado + desarrollo accesible.
              </p>
              <p className="text-sm text-dark/60">
                La escala tipográfica respeta los estándares WCAG AA en contraste y tamaño mínimo, asegurando legibilidad en todos los dispositivos.
              </p>
            </div>

            {/* Jerarquía Visual */}
            <div className="space-y-6">
              {/* H1 - Headings */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-dark/60 mb-3">H1 - Headings</h4>
                  <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-2">Mi Portafolio 2026</h1>
                  <div className="space-y-1 text-xs text-dark/60 font-mono">
                    <p>DM Serif Display — Bold</p>
                    <p>Mobile: 40px | Tablet: 48px | Desktop: 56px</p>
                    <p>Line-height: 1.1</p>
                  </div>
                </div>

                {/* H2 - Section Titles */}
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-dark/60 mb-3">H2 - Secciones</h4>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-dark mb-2">Design System</h2>
                  <div className="space-y-1 text-xs text-dark/60 font-mono">
                    <p>DM Serif Display — Bold</p>
                    <p>Mobile: 32px | Tablet: 36px | Desktop: 40px</p>
                    <p>Line-height: 1.2</p>
                  </div>
                </div>

                {/* H3 - Subsections */}
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-dark/60 mb-3">H3 - Subsecciones</h4>
                  <h3 className="text-xl font-serif font-bold text-dark mb-2">Paleta de Colores</h3>
                  <div className="space-y-1 text-xs text-dark/60 font-mono">
                    <p>DM Serif Display — Bold</p>
                    <p>Mobile: 24px | Tablet: 28px | Desktop: 32px</p>
                    <p>Line-height: 1.3</p>
                  </div>
                </div>
              </div>

              {/* Body Text */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6 border-t border-dark/10">
                <div className="bg-gradient-to-br from-primary-100/20 to-secondary-100/20 rounded-lg p-6 border border-primary-300/30">
                  <p className="text-base md:text-lg text-dark/75 leading-relaxed mb-3">
                    Este es texto body en Gilroy Regular. Se utiliza para párrafos largos, descripciones de proyectos, y cualquier contenido editorial. La altura de línea (1.7x) asegura legibilidad cómoda.
                  </p>
                  <div className="space-y-1 text-xs text-dark/60 font-mono">
                    <p>Gilroy — Regular</p>
                    <p>Mobile: 15px / 25px | Tablet: 16px / 27px | Desktop: 17px / 29px</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary-100/20 to-secondary-100/20 rounded-lg p-6 border border-primary-300/30">
                  <p className="text-base md:text-lg font-medium text-dark/85 leading-relaxed mb-3">
                    Este texto usa Gilroy Medium para resaltar puntos clave dentro del body. Se aplica en leads, primeras líneas, o énfasis editorial sin usar bold completo.
                  </p>
                  <div className="space-y-1 text-xs text-dark/60 font-mono">
                    <p>Gilroy — Medium</p>
                    <p>Mobile: 16px / 27px | Tablet: 17px / 29px | Desktop: 18px / 30px</p>
                  </div>
                </div>
              </div>

              {/* Data/Caption */}
              <div className="bg-gradient-to-br from-secondary-100/20 to-primary-100/20 rounded-lg p-6 border border-primary-300/30">
                <p className="text-sm text-dark/60 leading-relaxed mb-2">
                  Texto data en Gilroy Regular para captions, labels, y meta-information. Menor tamaño pero mantiene buena lectura incluso en mobile.
                </p>
                <div className="space-y-1 text-xs text-dark/60 font-mono">
                  <p>Gilroy — Regular | Opacity: 60%</p>
                  <p>Mobile: 14px | Tablet: 15px | Desktop: 16px</p>
                </div>
              </div>
            </div>

            {/* Casos de Uso */}
            <div className="mt-8 pt-8 border-t border-dark/10">
              <h4 className="text-lg font-serif font-bold text-dark mb-4">Casos de Uso</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white/40 border border-primary-300/10">
                  <p className="font-semibold text-dark mb-2">Hero & Page Titles</p>
                  <p className="text-sm text-dark/70">H1 en DM Serif Display. Máximo impacto visual, identidad de marca.</p>
                </div>
                <div className="p-4 rounded-lg bg-white/40 border border-primary-300/10">
                  <p className="font-semibold text-dark mb-2">Section Headers</p>
                  <p className="text-sm text-dark/70">H2/H3 en DM Serif Display. Estructura jerárquica clara dentro de contenido.</p>
                </div>
                <div className="p-4 rounded-lg bg-white/40 border border-primary-300/10">
                  <p className="font-semibold text-dark mb-2">Body & Descripción</p>
                  <p className="text-sm text-dark/70">Gilroy Regular/Medium. Todo el contenido editorial, párrafos, listas.</p>
                </div>
                <div className="p-4 rounded-lg bg-white/40 border border-primary-300/10">
                  <p className="font-semibold text-dark mb-2">Labels & Chips</p>
                  <p className="text-sm text-dark/70">Gilroy Medium o Data weights. Tags, skills, meta-información.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CODE EXAMPLES Section */}
      <section className="py-20 lg:py-28 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-8">
            Ejemplos de Código
          </h2>
          
          <div className="space-y-12">
            {/* Code Example 1: cn() Utility */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-xl font-bold text-dark mb-4">Utility: <code className="text-sm bg-dark/5 px-2 py-1 rounded">cn()</code></h3>
                <p className="text-dark/70 mb-6 leading-relaxed">Centralizar la lógica de clases Tailwind. En lugar de escribir ternarios o condicionales anidados, usamos una función simple que maneja undefined, null y false.</p>
                <pre className="bg-dark/5 rounded-lg p-4 text-sm overflow-x-auto text-dark/80 font-mono leading-relaxed">
{`export function cn(
  ...classes: (string | undefined | null | false)[]
): string {
  return classes
    .filter(Boolean)
    .join(' ');
}

// Uso en componentes:
<div className={cn(
  'flex items-center',
  isActive && 'bg-primary',
  disabled && 'opacity-50',
  'rounded-lg'
)} />`}
                </pre>
              </div>
              <div className="bg-gradient-to-br from-primary-100/30 to-secondary-100/30 rounded-lg p-8 border border-primary-300/30 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <p className="text-dark/60 text-sm">Visual del componente con clases dinámicas</p>
                  <div className="mt-6 space-y-2">
                    <div className="flex gap-2 items-center">
                      <div className="w-3 h-3 rounded-full bg-primary-400" />
                      <p className="text-dark/70">Estados combinados</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="w-3 h-3 rounded-full bg-secondary-300" />
                      <p className="text-dark/70">Responsive adapting</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Code Example 2: ProjectCard Component */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="bg-gradient-to-br from-primary-100/30 to-secondary-100/30 rounded-lg p-8 border border-primary-300/30 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <p className="text-dark/60 text-sm mb-4">Card en acción</p>
                  <div className="inline-block bg-white/70 rounded-lg p-3 border border-primary-300/30 space-y-2">
                    <div className="w-32 h-24 bg-gradient-to-br from-primary-200 to-secondary-200 rounded"></div>
                    <p className="text-xs text-dark font-semibold">Project Title</p>
                    <p className="text-xs text-dark/70">Description...</p>
                    <div className="flex gap-1"><span className="text-xs bg-primary-200 px-2 py-1 rounded">Tag</span></div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark mb-4">Componente: ProjectCard</h3>
                <p className="text-dark/70 mb-6 leading-relaxed">Componente reutilizable para la galería de proyectos. Maneja imágenes dinámicas, tags responsivos, y efectos hover elegantes.</p>
                <pre className="bg-dark/5 rounded-lg p-4 text-sm overflow-x-auto text-dark/80 font-mono leading-relaxed max-h-64">
{`function ProjectCard({
  title,
  description,
  image,
  tags,
  slug
}: ProjectCardProps) {
  return (
    <article className={cn(
      'flex flex-col h-full group',
      'p-4 rounded-2xl',
      getCardClasses()
    )}>
      {/* Image Header */}
      <div className="h-56 -mx-4 -mt-4 
        rounded-t-2xl overflow-hidden">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-contain
            group-hover:scale-105 
            transition-transform"
        />
      </div>

      {/* Content */}
      <h3 className="text-lg font-serif 
        text-dark mt-6">
        {title}
      </h3>
      <p className="text-dark/70 
        line-clamp-3">
        {description}
      </p>
    </article>
  );
}`}
                </pre>
              </div>
            </div>

            {/* Code Example 3: Utility Function */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-xl font-bold text-dark mb-4">Utility: <code className="text-sm bg-dark/5 px-2 py-1 rounded">getChipClasses()</code></h3>
                <p className="text-dark/70 mb-6 leading-relaxed">Centralizar estilos de chips/tags que se repiten en múltiples lugares. Un single source of truth para el diseño de etiquetas.</p>
                <pre className="bg-dark/5 rounded-lg p-4 text-sm overflow-x-auto text-dark/80 font-mono leading-relaxed">
{`export function getChipClasses(): string {
  return cn(
    'inline-flex items-center',
    'rounded-full',
    'px-3 py-1.5 text-xs',
    'font-medium',
    'bg-primary-100/60',
    'text-primary-700',
    'border border-primary-300/40',
    'hover:bg-primary-100/90',
    'transition-colors duration-200'
  );
}

// Usable en cualquier lugar:
<span className={getChipClasses()}>
  React
</span>`}
                </pre>
              </div>
              <div className="bg-gradient-to-br from-primary-100/30 to-secondary-100/30 rounded-lg p-8 border border-primary-300/30 flex items-center justify-center min-h-[300px]">
                <div className="text-center space-y-4">
                  <p className="text-dark/60 text-sm">Chips/Tags renderizados</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Design System'].map((tag) => (
                      <span key={tag} className="inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium bg-primary-100/60 text-primary-700 border border-primary-300/40">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Code Example 4: Case Study Hero */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-xl font-bold text-dark mb-4">Componente: Hero de Case Study</h3>
                <p className="text-dark/70 mb-6 leading-relaxed">Estructura base reutilizada en todas las nuevas paginas de case study: label de rol, titulo, subtitulo y descripcion con layout consistente.</p>
                <pre className="bg-dark/5 rounded-lg p-4 text-sm overflow-x-auto text-dark/80 font-mono leading-relaxed max-h-72">
{`<section className={cn(
  'relative',
  'pt-32 pb-16 lg:pt-40 lg:pb-24',
  'px-4 lg:px-6',
  'bg-transparent',
  'overflow-hidden'
)}>
  <div className={cn(
    'relative z-10',
    'max-w-7xl mx-auto',
    'px-4 lg:px-6'
  )}>
    <div className={cn(
      'flex flex-col gap-4 lg:gap-8',
      'text-left',
      'max-w-4xl'
    )}>
      <p className="text-sm font-semibold uppercase tracking-widest text-dark/60">
        Frontend
      </p>
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.02] text-dark">
        ALIEN BIOBLITZ
      </h1>
      <p className="heading-subtitle">Proyecto de producto digital</p>
    </div>
  </div>
</section>`}
                </pre>
              </div>
              <div className="bg-gradient-to-br from-primary-100/30 to-secondary-100/30 rounded-lg p-8 border border-primary-300/30 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <p className="text-dark/60 text-sm mb-4">Preview estructura Hero</p>
                  <div className="inline-block text-left bg-white/70 rounded-lg p-4 border border-primary-300/30 max-w-sm">
                    <p className="text-xs uppercase tracking-widest text-dark/60 mb-2">Frontend</p>
                    <p className="font-serif text-lg text-dark mb-2">ALIEN BIOBLITZ</p>
                    <p className="text-sm text-dark/70">Layout reutilizable para nuevos case studies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW Section - TBD */}
      <section className="py-20 lg:py-28 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-8">
            Workflow & Decisiones
          </h2>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 border border-primary-300/20">
            <p className="text-lg text-dark/70 leading-relaxed">
              <em>Sección en construcción. Aquí documentaremos:</em>
            </p>
            <ul className="mt-4 space-y-2 text-lg text-dark/70">
              <li>• Cómo evolucionó el gradiente de fondo a través del proyecto</li>
              <li>• Decisiones sobre responsive design (mobile-first vs desktop-first)</li>
              <li>• Proceso de definir el estructura del Hero y por qué</li>
              <li>• Sistema de filtrado de proyectos por chips</li>
              <li>• Performance optimizations (image loading, CSS-in-JS, etc)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* KEY LEARNINGS Section - TBD */}
      <section className="py-20 lg:py-28 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-8">
            Lecciones & Evolución
          </h2>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 border border-primary-300/20">
            <p className="text-lg text-dark/70 leading-relaxed">
              <em>Sección en construcción. Documentaremos:</em>
            </p>
            <ul className="mt-4 space-y-2 text-lg text-dark/70">
              <li>• Desafíos encontrados (responsive design, performance, accesibilidad)</li>
              <li>• Soluciones implementadas y por qué funcionan</li>
              <li>• Cómo el sistema escala a nuevos proyectos</li>
              <li>• Procesos que evolucionarán en el futuro</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHAT THIS DEMONSTRATES Section - TBD */}
      <section className="py-20 lg:py-28 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-8">
            Qué Demuestra Este Proyecto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 border border-primary-300/20">
              <h3 className="text-xl font-bold text-dark mb-3">Design System Thinking</h3>
              <p className="text-dark/70">Construcción de sistema escalable que evoluciona con el proyecto, no al revés.</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 border border-primary-300/20">
              <h3 className="text-xl font-bold text-dark mb-3">Component Architecture</h3>
              <p className="text-dark/70">Componentes reutilizables que mantienen la lógica centralizada pero flexible.</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 border border-primary-300/20">
              <h3 className="text-xl font-bold text-dark mb-3">Modern React Patterns</h3>
              <p className="text-dark/70">Uso de hooks, compound components, TypeScript, y best practices actuales.</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 border border-primary-300/20">
              <h3 className="text-xl font-bold text-dark mb-3">Production-Ready Code</h3>
              <p className="text-dark/70">Código limpio, performante, accesible, y documentado desde el inicio.</p>
            </div>
          </div>
        </div>
      </section>

      <CaseStudyPager
        previousLabel="Volver a proyectos"
        previousHref="/proyectos"
        nextLabel="EAE Business School"
        nextHref="/proyectos/eae-business-school"
      />

      <Footer />
    </div>
  );
}
