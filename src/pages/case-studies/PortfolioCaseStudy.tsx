import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { cn, getChipClasses } from '../../utils/classNames';
import { CaseStudyPager } from '../../components/case-study/CaseStudyPager';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../constants/translations';

export function PortfolioCaseStudy() {
  const { t, language } = useLanguage();
  const portfolioContent = translations[language === 'en' ? 'en' : 'es'].caseStudiesContent.portfolio;
  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundColor: '#f2f7f4',
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
              {portfolioContent.category}
            </p>

            {/* Main Title */}
            <h1 className={cn(
              'font-serif',
              'text-4xl md:text-5xl lg:text-6xl',
              'font-normal leading-[1.02]',
              'text-dark'
            )}>
              {portfolioContent.heroTitle}
            </h1>

            {/* Supporting copy */}
            <div className={cn(
              'flex flex-col gap-2 lg:gap-6',
              'max-w-3xl'
            )}>
              <p className="heading-subtitle">
                {portfolioContent.heroDescription}
              </p>
              <p className={cn(
                'text-lg md:text-xl',
                'leading-[1.6]',
                'text-dark/75',
                'max-w-3xl'
              )}>
                {portfolioContent.heroSubtitle}
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

      <section className="py-10 lg:py-20 px-4 lg:px-6 bg-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="w-full h-[320px] bg-[#e8dce8] flex items-center justify-center rounded-lg border border-dashed border-[#b8d4c0]" />
        </div>
      </section>

      {/* INFORMACIÓN Section */}
      <section className="py-10 lg:py-20 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-[40px]">
            {/* Title - Left Column (40%) */}
            <h2 className="lg:col-span-4 font-serif text-3xl md:text-4xl font-bold text-dark">
              {portfolioContent.whyRebuildTitle}
            </h2>
            
            {/* Spacer for right column alignment */}
            <div className="lg:col-span-6" />
            
            {/* Left Column - Text (40%) */}
            <div className="lg:col-span-4">
              <p className="text-lg text-dark/70 leading-relaxed mb-4">
                {portfolioContent.whyRebuildPara1}
              </p>
              <p className="text-lg text-dark/70 leading-relaxed">
                {portfolioContent.whyRebuildPara2}
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
                <div className="w-full h-[320px] bg-[#e8dce8] flex items-center justify-center rounded-lg border border-dashed border-[#b8d4c0]" />
            </div>
          </div>
        </div>
      </section>

      {/* RETO Section */}
      <section className="py-10 lg:py-20 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-8">
            {portfolioContent.challengeTitle}
          </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[40px]">
          {/* Left Column - Challenge & Role */}
          <div>
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-bold text-dark mb-6">{portfolioContent.oldLimitationsTitle}</h3>
              <ul className="space-y-3">
                {portfolioContent.oldLimitations.map((item: string) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="text-primary-400 font-bold text-xl mt-0.5">•</span>
                    <span className="text-lg text-dark/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-dark mb-6">{t('caseStudyLabels.myRole')}</h3>
              <p className="text-lg text-dark/70 leading-relaxed">
                {portfolioContent.myRoleText}
              </p>
            </div>
          </div>

          {/* Right Column - Technical Approach */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-dark mb-6">{portfolioContent.objectivesTitle}</h3>
            <ul className="space-y-4">
              {portfolioContent.objectiveItems.map((item: string) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="text-primary-400 font-bold text-xl mt-0.5">✓</span>
                  <span className="text-lg text-dark/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
      </section>

      {/* TECH STACK Section */}
      <section className="py-8 lg:py-16 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-8">
            {portfolioContent.techStackTitle}
          </h2>
          <div className="space-y-8">
            {portfolioContent.techItems.map((item: { title: string; body: string; why: string }) => (
              <div key={item.title} className="bg-white/50 backdrop-blur-sm rounded-lg p-8 border border-primary-300/20">
                <h3 className="text-2xl font-serif font-bold text-dark mb-4">{item.title}</h3>
                <p className="text-lg text-dark/70 leading-relaxed mb-4">{item.body}</p>
                <p className="text-sm text-dark/60">{item.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE Section */}
      <section className="py-8 lg:py-16 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-8">
            {portfolioContent.architectureTitle}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-serif font-bold text-dark mb-4">{portfolioContent.folderTitle}</h3>
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
              <h3 className="text-xl font-serif font-bold text-dark mb-4">{portfolioContent.patternsTitle}</h3>
              <ul className="space-y-3">
                {portfolioContent.patterns.map((p: { title: string; desc: string }) => (
                  <li key={p.title} className="flex items-start gap-3">
                    <span className="text-primary-400 font-bold mt-1">•</span>
                    <div>
                      <p className="font-semibold text-dark">{p.title}</p>
                      <p className="text-sm text-dark/70">{p.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN SYSTEM Section */}
      <section className="py-8 lg:py-16 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-8">
            {portfolioContent.designSystemTitle}
          </h2>
          
          <div className="mb-12">
            <h3 className="text-xl font-serif font-bold text-dark mb-6">{portfolioContent.colorsTitle}</h3>
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
            <h3 className="text-xl font-serif font-bold text-dark mb-6">{portfolioContent.typographyTitle}</h3>

            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-primary-300/20">

              <div className="overflow-x-auto">
                <table className="w-full table-auto text-left">
                  <thead>
                    <tr className="text-sm text-dark/60">
                      <th className="px-3 py-2">{portfolioContent.typographyHeaders[0]}</th>
                      <th className="px-3 py-2">{portfolioContent.typographyHeaders[1]}</th>
                      <th className="px-3 py-2">{portfolioContent.typographyHeaders[2]}</th>
                      <th className="px-3 py-2">{portfolioContent.typographyHeaders[3]}</th>
                      <th className="px-3 py-2">{portfolioContent.typographyHeaders[4]}</th>
                    </tr>
                  </thead>
                  <tbody className="align-top">
                    <tr className="border-t border-dark/6">
                      <td className="px-3 py-4 align-top font-semibold">{portfolioContent.typographyRows[0].role}</td>
                      <td className="px-3 py-4 align-top font-mono text-sm text-dark/70">DM Serif Display (serif)</td>
                      <td className="px-3 py-4 align-top">
                        <p className="font-serif text-2xl md:text-3xl text-dark">Diseño Web · Identidad · Interfaces</p>
                      </td>
                      <td className="px-3 py-4 align-top text-sm text-dark/60">H1: 48–84px (clamp) · H2: 32–56px · H3: 24–36px</td>
                      <td className="px-3 py-4 align-top text-sm text-dark/60">{portfolioContent.typographyRows[0].usage}</td>
                    </tr>

                    <tr className="border-t border-dark/6">
                      <td className="px-3 py-4 align-top font-semibold">{portfolioContent.typographyRows[1].role}</td>
                      <td className="px-3 py-4 align-top font-mono text-sm text-dark/70">Gilroy (sans)</td>
                      <td className="px-3 py-4 align-top">
                        <p className="text-base text-dark">Este portafolio está en constante evolución. Si ves algún detalle por pulir, probablemente ya esté en mi lista de mejoras.</p>
                      </td>
                      <td className="px-3 py-4 align-top text-sm text-dark/60">Base: 16px · Escalado contextual 16–20px</td>
                      <td className="px-3 py-4 align-top text-sm text-dark/60">{portfolioContent.typographyRows[1].usage}</td>
                    </tr>

                    <tr className="border-t border-dark/6">
                      <td className="px-3 py-4 align-top font-semibold">{portfolioContent.typographyRows[2].role}</td>
                      <td className="px-3 py-4 align-top font-mono text-sm text-dark/70">DM Serif Display Italic</td>
                      <td className="px-3 py-4 align-top">
                        <p className="heading-subtitle">Subtítulo en cursiva — énfasis y tono editorial</p>
                      </td>
                      <td className="px-3 py-4 align-top text-sm text-dark/60">~32px (desktop) · ~24–28px (tablet)</td>
                      <td className="px-3 py-4 align-top text-sm text-dark/60">{portfolioContent.typographyRows[2].usage}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CODE EXAMPLES Section */}
      <section className="py-8 lg:py-16 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          
          <div className="space-y-12">
            {/* Code Example 1: cn() Utility */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-xl font-bold text-dark mb-4">Utility: <code className="text-sm bg-dark/5 px-2 py-1 rounded">cn()</code></h3>
                <p className="text-dark/70 mb-6 leading-relaxed">{portfolioContent.cnUtilityDesc}</p>
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
  'py-10 lg:py-20',
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
        previousLabel={t('caseStudy.backTo')}
        previousHref="/proyectos"
        nextLabel={portfolioContent.pagerNext}
        nextHref="/proyectos/eae-business-school"
      />

      <Footer />
    </div>
  );
}
