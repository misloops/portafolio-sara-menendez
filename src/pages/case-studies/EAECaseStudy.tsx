import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { cn, getChipClasses } from '../../utils/classNames';
import { ScrollableCaseStudyImage } from '../../components/ScrollableCaseStudyImage';
import { BeforeAfterImageCompare } from '../../components/BeforeAfterImageCompare';
import { CaseStudyPager } from '../../components/case-study/CaseStudyPager';

export function EAECaseStudy() {
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
              WEB MANAGER
            </p>

            {/* Main Title */}
            <h1 className={cn(
              'font-serif',
              'text-4xl md:text-5xl lg:text-6xl',
              'font-normal leading-[1.02]',
              'text-dark'
            )}>
              EAE Barcelona School Business
            </h1>

            {/* Supporting copy */}
            <div className={cn(
              'flex flex-col gap-2 lg:gap-6',
              'max-w-3xl'
            )}>
              <p className="heading-subtitle">
                Web corporativa educativa.
              </p>
              <p className={cn(
                'text-lg md:text-xl',
                'leading-[1.6]',
                'text-dark/75',
                'max-w-3xl'
              )}>
                Web Manager. Año 2023-2025.
              </p>
            </div>

            {/* Skills/Tech Chips */}
            <div className={cn(
              'flex flex-wrap gap-2 lg:gap-3',
              'pt-2 lg:pt-4'
            )}>
              {['Drupal', 'UX Research', 'Web Manager', 'Optimización', 'A/B Testing'].map((skill) => (
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

      {/* INFORMACIÓN Section - Two Columns */}
      <section className="py-20 lg:py-28 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-[40px]">
            {/* Title - Left Column (40%) */}
            <h2 className="lg:col-span-4 font-serif text-3xl md:text-4xl font-bold text-dark">
              Información
            </h2>
            
            {/* Spacer for right column alignment */}
            <div className="lg:col-span-6" />
            
            {/* Left Column - Text (40%) */}
            <div className="lg:col-span-4">
              <p className="text-lg text-dark/70 leading-relaxed mb-4">
                En 2023, EAE Business School creó dos páginas web nuevas independientes, una para cada campus: Barcelona y Madrid. Ambas debían seguir el estilo de marca pero diferenciarse entre sí.
              </p>
              <p className="text-lg text-dark/70 leading-relaxed">
                Sin embargo, diferentes personas del equipo de Marketing habían gestionado la web según necesidades específicas. Esto provocó falta de consistencia visual y de contenido, requiriendo un acercamiento urgente de unificación estilística.
              </p>
            </div>

            {/* Right Column - Image (60%) */}
            <div className="lg:col-span-6 flex items-start justify-center">
              <ScrollableCaseStudyImage
                src="/assets/projects/eae-business-school/EAE-BUSINESS_COVER.jpg"
                alt="EAE Business School Cover"
                caption="Scroll interno para ver la página completa"
                viewportClassName="h-[300px] md:h-[420px] lg:h-[560px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* RETO Section - Two Columns */}
      <section className="py-20 lg:py-28 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-8">
            Reto y Mi Rol
          </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Challenge & Role */}
          <div>
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-bold text-dark mb-6">Reto</h3>
              <p className="text-lg text-dark/70 leading-relaxed mb-4">
                Actualizar y optimizar un site corporativo con miles de usuarios diarios, garantizando coherencia, accesibilidad y alineación con la estrategia digital. La web había sido lanzada pocos meses antes, pero presentaba problemas de consistencia visual, navegación poco clara y páginas de programas poco persuasivas.
              </p>
              <p className="text-lg text-dark/70 leading-relaxed">
                Había que unificar estilos, optimizar la arquitectura y crear plantillas escalables para campañas y contenidos.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-dark mb-6">Mi Rol</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-4">
                  <span className="text-primary-400 font-bold text-xl mt-0.5">•</span>
                  <span className="text-lg text-dark/70">Unificación de estilos visuales en toda la web.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary-400 font-bold text-xl mt-0.5">•</span>
                  <span className="text-lg text-dark/70">Rediseño de fichas de máster y áreas de estudio, con nuevas cabeceras, jerarquía de contenidos y formularios de captación visibles.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary-400 font-bold text-xl mt-0.5">•</span>
                  <span className="text-lg text-dark/70">Optimización del menú y arquitectura de información, mejorando la navegabilidad.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary-400 font-bold text-xl mt-0.5">•</span>
                  <span className="text-lg text-dark/70">Creación de nuevas landings adaptadas a campañas de marketing digital.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary-400 font-bold text-xl mt-0.5">•</span>
                  <span className="text-lg text-dark/70">Implementación de pruebas A/B y mejoras de usabilidad.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary-400 font-bold text-xl mt-0.5">•</span>
                  <span className="text-lg text-dark/70">Coordinación con equipos de marketing y SEO para garantizar coherencia y rendimiento.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Before/After compare */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-dark mb-6">Antes y Después</h3>
            <BeforeAfterImageCompare
              beforeSrc="/assets/projects/EAEweb_antes.png"
              afterSrc="/assets/projects/Nuevo diseño área.png"
              beforeAlt="EAE antes"
              afterAlt="EAE despues"
              beforeLabel="Antes"
              afterLabel="Despues"
            />
          </div>
        </div>
        </div>
      </section>

      {/* LOGROS Section - Single Column */}
      <section className="py-20 lg:py-28 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-8">
            Logros
          </h2>
        {/* Top Row - Results Text */}
        <div className="mb-12">
          <div className="bg-light/50 border border-primary-300/30 rounded-lg p-8 md:p-12">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <li className="flex items-start gap-4">
                <span className="text-primary-400 font-bold text-2xl mt-0">✓</span>
                <span className="text-lg text-dark/70">Consolidación de una identidad digital coherente y escalable.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary-400 font-bold text-2xl mt-0">✓</span>
                <span className="text-lg text-dark/70">Fichas de programas más visuales y persuasivas → mejor conversión de leads.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary-400 font-bold text-2xl mt-0">✓</span>
                <span className="text-lg text-dark/70">Navegación más intuitiva, reduciendo fricción del usuario.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary-400 font-bold text-2xl mt-0">✓</span>
                <span className="text-lg text-dark/70">Sistema de landings reutilizable para campañas de captación.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary-400 font-bold text-2xl mt-0">✓</span>
                <span className="text-lg text-dark/70">Base sólida para el crecimiento digital de la escuela.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Próximas imágenes */}
        <div className="rounded-2xl border border-gray-200/60 bg-[#ffffff5c] backdrop-blur-sm shadow-[0_8px_24px_rgba(48,46,46,0.08)] p-8 flex flex-col items-center justify-center gap-3 text-center min-h-[160px]">
          <svg className="w-10 h-10 text-dark/30" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="3"/>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16l5-5 4 4 3-3 6 6"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
          </svg>
          <p className="text-dark/50 font-medium">Capturas del proyecto próximamente</p>
          <p className="text-sm text-dark/35">Imágenes del antes/después y detalles de la implementación</p>
        </div>
        </div>
      </section>

      <CaseStudyPager
        previousLabel="Volver a proyectos"
        previousHref="/proyectos"
        nextLabel="ALIEN BIOBLITZ"
        nextHref="/proyectos/alien-csi-bioblitz"
      />

      <Footer />
    </div>
  );
}
