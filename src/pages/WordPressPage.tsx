import Header from '../components/Header';
import Footer from '../components/Footer';
import { cn } from '../utils/classNames';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/portfolio';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { UpdateDisclaimer } from '../components/UpdateDisclaimer';

const serviceIcons: Record<string, ReactNode> = {
  development: (
    <svg className="w-10 h-10 text-primary-400 stroke-current" fill="none" viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 21h8M12 17v4" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 9l3 3 3-3" />
    </svg>
  ),
  maintenance: (
    <svg className="w-10 h-10 text-primary-400 stroke-current" fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  redesign: (
    <svg className="w-10 h-10 text-primary-400 stroke-current" fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8v12m0 0l4-4m-4 4l-4-4" />
    </svg>
  )
};

export function WordPressPage() {
  const { t } = useLanguage();

  // Filter WordPress projects - 4 case studies with confirmed service descriptions
  const demoProjects = [
    {
      ...projects.find(p => p.slug === 'ohmios-records'),
      service: 'Diseño y desarrollo · Tienda online · Mantenimiento'
    },
    {
      ...projects.find(p => p.translationKey === 'menloArtist'),
      service: 'Diseño y desarrollo web'
    },
    {
      ...projects.find(p => p.translationKey === 'arbola'),
      service: 'Diseño y desarrollo web'
    },
    {
      ...projects.find(p => p.slug === 'mise-en-scene'),
      service: 'Rediseño web · Tienda online · Mantenimiento'
    }
  ].filter(Boolean);

  return (
    <div 
      className="min-h-screen" 
      style={{ 
        background: 'linear-gradient(120deg, #f2e8f0 0%, #ede6eb 8%, #e8dce8 10%, #d4c4d4 24%, #b8d4c0 45%, #a8d8b0 70%, #b0deb8 85%, #f0e8f0 100%)',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* 2. Configuración de Meta Tags para esta URL */}
      <Helmet>
        <title>Diseño y Desarrollo WordPress Profesional | Sara Menéndez</title>
        <meta name="description" content="Especialista en WordPress. Diseño páginas web corporativas, tiendas online y rediseños a medida. Sitios rápidos, seguros y optimizados para SEO." />
        <link rel="canonical" href="https://portafolio-sara-menendez.vercel.app/wordpress" />
      </Helmet>

      <Header />

      <UpdateDisclaimer />
      <div className="h-16 lg:h-20" />

      {/* Hero Section */}
      <section className={cn(
        'py-4 lg:py-10',
        'px-4 lg:px-6',
        'bg-transparent'
      )}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className={cn(
              'font-serif',
              'text-4xl md:text-5xl lg:text-6xl',
              'font-normal text-dark mb-4 lg:mb-8',
              'leading-tight'
            )}>
              Diseño y desarrollo WordPress
            </h1>
            <p className="heading-subtitle mb-4 lg:mb-8">
              WordPress es el gestor de contenidos más utilizado del mundo, y no es casualidad.
            </p>
            <p className="text-dark/80 font-semibold leading-relaxed max-w-2xl">
              Su flexibilidad, escalabilidad y facilidad de gestión lo convierten en una de las mejores opciones para empresas, marcas y profesionales que necesitan una web sólida y fácil de administrar.
            </p>
          </div>
        </div>
      </section>

      {/* 2 columnas informativas */}
      <section className="py-10 lg:py-16 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className={cn(
              'flex flex-col gap-3',
              'rounded-xl p-6 lg:p-8',
              'bg-[#e8e0eb]/70 backdrop-blur-sm',
              'border border-[#c3b7c3]/40'
            )}>
              <h3 className="text-xl font-serif font-bold text-dark">
                ¿Qué te puedo ofrecer?
              </h3>
              <p className="text-dark/70 leading-relaxed">
                Como diseñadora web freelance especializada en WordPress, llevo más de seis años creando, rediseñando y optimizando sitios web adaptados a las necesidades de cada cliente. Desde páginas corporativas hasta tiendas online, mi objetivo es que tu web no solo tenga una buena imagen, sino que funcione de forma eficiente y ayude a cumplir tus objetivos de negocio.
              </p>
            </div>
            <div className={cn(
              'flex flex-col gap-3',
              'rounded-xl p-6 lg:p-8',
              'bg-[#e8e0eb]/70 backdrop-blur-sm',
              'border border-[#c3b7c3]/40'
            )}>
              <h3 className="text-xl font-serif font-bold text-dark">
                ¿Por qué contar con una especialista en WordPress?
              </h3>
              <p className="text-dark/70 leading-relaxed">
                WordPress es una herramienta accesible, pero detrás de una web profesional hay mucho más que instalar un tema y añadir algunos plugins. La optimización, la seguridad, el rendimiento, la compatibilidad y el posicionamiento requieren conocimientos técnicos que marcan la diferencia entre una web que simplemente existe y una web que aporta valor al negocio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section - Cards */}
      <section className="py-10 lg:py-20 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className={cn(
            'font-serif',
            'text-3xl md:text-4xl',
            'font-bold text-dark mb-12'
          )}>
            Servicios
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Diseño y desarrollo */}
            <div className={cn(
              'bg-white/40 backdrop-blur-sm rounded-xl',
              'p-6 lg:p-8',
              'border border-[#d8ded8]',
              'hover:border-[#c3dcc5] hover:bg-white/60',
              'transition-all duration-300',
              'group'
            )}>
              <div className={cn(
                'mb-6 p-4 rounded-lg w-fit',
                'bg-[#f0f5f0]',
                'group-hover:bg-[#e8f0e8]',
                'transition-colors duration-300'
              )}>
                {serviceIcons.development}
              </div>
              <h3 className="text-xl font-serif font-bold text-dark mb-3">
                Diseño y desarrollo web desde 0
              </h3>
              <p className="text-dark/70 leading-relaxed">
                Creo tu presencia digital desde cero. Diseño responsive, desarrollo limpio y optimización para que tu web no solo se vea bien, sino que funcione y convierta.
              </p>
            </div>

            {/* Card 2: Mantenimiento */}
            <div className={cn(
              'bg-white/40 backdrop-blur-sm rounded-xl',
              'p-6 lg:p-8',
              'border border-[#d8ded8]',
              'hover:border-[#c3dcc5] hover:bg-white/60',
              'transition-all duration-300',
              'group'
            )}>
              <div className={cn(
                'mb-6 p-4 rounded-lg w-fit',
                'bg-[#f0f5f0]',
                'group-hover:bg-[#e8f0e8]',
                'transition-colors duration-300'
              )}>
                {serviceIcons.maintenance}
              </div>
              <h3 className="text-xl font-serif font-bold text-dark mb-3">
                Mantenimiento
              </h3>
              <p className="text-dark/70 leading-relaxed">
                Una web necesita cuidados constantes para seguir funcionando correctamente. Actualizaciones, seguridad, copias de respaldo y revisiones técnicas forman parte de un mantenimiento preventivo que evita problemas futuros.
                Un sitio web bien mantenido es más seguro, más rápido y mucho menos propenso a sufrir caídas o errores inesperados.
              </p>
            </div>

            {/* Card 3: Rediseño */}
            <div className={cn(
              'bg-white/40 backdrop-blur-sm rounded-xl',
              'p-6 lg:p-8',
              'border border-[#d8ded8]',
              'hover:border-[#c3dcc5] hover:bg-white/60',
              'transition-all duration-300',
              'group'
            )}>
              <div className={cn(
                'mb-6 p-4 rounded-lg w-fit',
                'bg-[#f0f5f0]',
                'group-hover:bg-[#e8f0e8]',
                'transition-colors duration-300'
              )}>
                {serviceIcons.redesign}
              </div>
              <h3 className="text-xl font-serif font-bold text-dark mb-3">
                Rediseño web
              </h3>
              <p className="text-dark/70 leading-relaxed">
                Si tu página se ha quedado anticuada, no refleja la calidad de tu empresa o simplemente no está generando resultados, puedo ayudarte a renovarla por completo.
                Trabajo la estructura, la experiencia de usuario, el diseño visual y el rendimiento para crear webs atractivas, intuitivas y preparadas para convertir visitas en oportunidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Casos Reales - 2 column grid */}
      <section className="py-10 lg:py-20 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className={cn(
            'font-serif',
            'text-3xl md:text-4xl',
            'font-bold text-dark mb-12 lg:mb-16'
          )}>
            Casos reales
          </h2>

          {/* Fila 1: Isabel Felip + Beatriz Galindo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 mb-10 lg:mb-12">
            {/* Textos fila 1 */}
            <div className="flex flex-col gap-2">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-dark leading-tight">Isabel Felip</h3>
              <p className="text-base font-semibold text-dark/70">Diseño y desarrollo web</p>
              <p className="text-sm italic text-dark/50">2026</p>
              <p className="text-base text-dark/70 leading-relaxed">Web para psicóloga y psicoterapeuta especializada en terapia familiar sistémica y trauma. Diseño cálido y accesible orientado a generar confianza y facilitar el primer contacto.</p>
              <a href="https://isabelfelip.com/" target="_blank" rel="noopener noreferrer" className={cn('self-start inline-flex items-center justify-center rounded-xl border mt-2', 'px-4 py-2 text-base font-semibold', 'bg-[#c3dcc5] text-[#302e2e] border-[#c3dcc5]', 'hover:bg-[#a8d0ab] transition-all duration-200')}>Ver online</a>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-dark leading-tight">Beatriz Galindo Psicóloga</h3>
              <p className="text-base font-semibold text-dark/70">Diseño y desarrollo web</p>
              <p className="text-sm italic text-dark/50">2026</p>
              <p className="text-base text-dark/70 leading-relaxed">Web portfolio para psicóloga especializada en trauma, apego y género. Diseño limpio y profesional que transmite calma y rigor clínico.</p>
              <a href="https://beatrizgalindonavarro.com/" target="_blank" rel="noopener noreferrer" className={cn('self-start inline-flex items-center justify-center rounded-xl border mt-2', 'px-4 py-2 text-base font-semibold', 'bg-[#c3dcc5] text-[#302e2e] border-[#c3dcc5]', 'hover:bg-[#a8d0ab] transition-all duration-200')}>Ver online</a>
            </div>
            {/* Imágenes fila 1 — alineadas */}
            <img src="/assets/projects/isabel-felip/ISABEL_FELIP_entera.jpg" alt="Isabel Felip" className="w-full h-auto rounded-lg shadow-lg" />
            <img src="/assets/projects/beatriz-galindo/B_GALINDO_entera.jpg" alt="Beatriz Galindo Psicóloga" className="w-full h-auto rounded-lg shadow-lg" />
          </div>

          {/* Fila 2: Aty Beauty + Menlo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 mb-10 lg:mb-12">
            {/* Textos fila 2 */}
            <div className="flex flex-col gap-2">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-dark leading-tight">Aty Beauty</h3>
              <p className="text-base font-semibold text-dark/70">Diseño y desarrollo web</p>
              <p className="text-sm italic text-dark/50">2025</p>
              <p className="text-base text-dark/70 leading-relaxed">Web corporativa para academia de belleza especializada en formación profesional. Diseño moderno y orientado a captación de alumnos.</p>
              <a href="https://atybeautyacademia.com/" target="_blank" rel="noopener noreferrer" className={cn('self-start inline-flex items-center justify-center rounded-xl border mt-2', 'px-4 py-2 text-base font-semibold', 'bg-[#c3dcc5] text-[#302e2e] border-[#c3dcc5]', 'hover:bg-[#a8d0ab] transition-all duration-200')}>Ver online</a>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-dark leading-tight">Menlo Artist</h3>
              <p className="text-base font-semibold text-dark/70">Diseño y desarrollo web</p>
              <p className="text-sm italic text-dark/50">2025</p>
              <p className="text-base text-dark/70 leading-relaxed">Portfolio WordPress para artista especializada en retratos de mascotas. Diseño minimalista centrado en galería de obra y captación de encargos.</p>
              <a href="https://menloartist.com" target="_blank" rel="noopener noreferrer" className={cn('self-start inline-flex items-center justify-center rounded-xl border mt-2', 'px-4 py-2 text-base font-semibold', 'bg-[#c3dcc5] text-[#302e2e] border-[#c3dcc5]', 'hover:bg-[#a8d0ab] transition-all duration-200')}>Ver online</a>
            </div>
            {/* Imágenes fila 2 — alineadas */}
            <img src="/assets/projects/aty-beauty/ATY_entera.jpg" alt="Aty Beauty" className="w-full h-auto rounded-lg shadow-lg" />
            <img src="/assets/projects/menlo-artist/MENLO_entera.jpg" alt="Menlo Artist" className="w-full h-auto rounded-lg shadow-lg" />
          </div>

          {/* Fila 3: Ohmios — columna completa */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 mt-10 lg:mt-12">
            <div className="flex flex-col gap-2">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-dark leading-tight">Ohmios Records</h3>
              <p className="text-base font-semibold text-dark/70">Diseño y desarrollo · Tienda online · Mantenimiento</p>
              <p className="text-sm italic text-dark/50">Asturias 2023–2026</p>
              <p className="text-base text-dark/70 leading-relaxed">Tienda online para sello de discos en vinilo de música electrónica. Desarrollo completo en WordPress + WooCommerce con diseño orientado a conversión.</p>
              <a href="https://ohmiosrecords.com/" target="_blank" rel="noopener noreferrer" className={cn('self-start inline-flex items-center justify-center rounded-xl border mt-2', 'px-4 py-2 text-base font-semibold', 'bg-[#c3dcc5] text-[#302e2e] border-[#c3dcc5]', 'hover:bg-[#a8d0ab] transition-all duration-200')}>Ver online</a>
            </div>
            <div className="hidden md:block" />
            <img src="/assets/projects/ohmios-records/OHMIOS_cover.png" alt="Ohmios Records" className="w-full h-auto rounded-lg shadow-lg" />
            <div className="hidden md:block" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 lg:py-20 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className={cn(
              'font-serif',
              'text-3xl md:text-4xl',
              'font-bold text-dark mb-4'
            )}>
              ¿Tu web necesita una mano?
            </h2>
            <p className={cn(
              'text-lg text-dark/75 mb-8',
              'leading-relaxed'
            )}>
              Cuéntame qué está pasando.
            </p>
            <Link
              to="/contacto"
              className={cn(
                'inline-flex items-center justify-center rounded-xl border',
                'px-6 py-3 lg:px-8 lg:py-4 min-h-12',
                'text-base lg:text-lg font-semibold',
                'bg-[#c3dcc5] text-[#302e2e] border-[#c3dcc5]',
                'hover:bg-[#a8d0ab] hover:text-[#302e2e]',
                'transition-all duration-200 ease-out'
              )}
            >
              Hablamos →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default WordPressPage;