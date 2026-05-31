import Header from '../components/Header';
import Footer from '../components/Footer';
import { cn, getChipClasses } from '../utils/classNames';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/portfolio';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4v.01" />
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6c-.5.5-1 1.5-1 3 0 3 1 5 3 5s3-2 3-5c0-1.5-.5-2.5-1-3" />
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
      <Header />

      {/* Hero Section */}
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
            {/* Main Title */}
            <h1 className={cn(
              'font-serif',
              'text-4xl md:text-5xl lg:text-6xl',
              'font-normal leading-[1.02]',
              'text-dark'
            )}>
              Diseño y Desarrollo WordPress
            </h1>

            {/* Para quién es - Exact copy */}
            <p className={cn(
              'text-lg md:text-xl',
              'leading-[1.6]',
              'text-dark/75',
              'max-w-3xl'
            )}>
              WordPress es el gestor de contenidos más utilizado del mundo, y no es casualidad. Su flexibilidad, escalabilidad y facilidad de gestión lo convierten en una de las mejores opciones para empresas, marcas y profesionales que necesitan una web sólida y fácil de administrar.
Como diseñadora web freelance especializada en WordPress, llevo más de seis años creando, rediseñando y optimizando sitios web adaptados a las necesidades de cada cliente. Desde páginas corporativas hasta tiendas online, mi objetivo es que tu web no solo tenga una buena imagen, sino que funcione de forma eficiente y ayude a cumplir tus objetivos de negocio.<br></br>

<strong>¿Por qué contar con una especialista en WordPress?</strong><br></br>
WordPress es una herramienta accesible, pero detrás de una web profesional hay mucho más que instalar un tema y añadir algunos plugins.
La optimización, la seguridad, el rendimiento, la compatibilidad y el posicionamiento requieren conocimientos técnicos que marcan la diferencia entre una web que simplemente existe y una web que aporta valor al negocio.
Trabajar con una profesional especializada ayuda a evitar problemas habituales como:
    <li>Fallos de seguridad y vulnerabilidades.</li>
    <li>Pérdida de posicionamiento en buscadores.</li>
    <li>Lentitud en la carga de la página.</li>
    <li>Errores tras actualizaciones.</li>
    <li>Pérdida de información por falta de copias de seguridad.</li>
    <li>Costes elevados derivados de desarrollos mal ejecutados.</li>
En la mayoría de los casos, prevenir siempre resulta más económico que reparar.
            </p>
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

      {/* Casos Reales - Alternating Layout */}
      <section className="py-10 lg:py-20 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className={cn(
            'font-serif',
            'text-3xl md:text-4xl',
            'font-bold text-dark mb-16'
          )}>
            Casos reales
          </h2>

          <div className="space-y-16 lg:space-y-24">
            {demoProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={project.slug || project.title}
                  className={cn(
                    'grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 items-center'
                  )}
                >
                  {/* Image Container */}
                  <div className={cn(
                    'flex items-center justify-center',
                    !isEven && 'lg:order-2'
                  )}>
                    <div className="w-full p-4 lg:p-6">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-contain rounded-lg shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Text Container */}
                  <div className={cn(
                    'flex flex-col gap-2 lg:gap-3 p-4 lg:p-6',
                    !isEven && 'lg:order-1',
                    'text-left'
                  )}>
                    <h3 className={cn(
                      'font-serif',
                      'text-3xl md:text-4xl',
                      'font-bold text-dark leading-tight'
                    )}>
                      {project.title}
                    </h3>

                    <p className={cn(
                      'font-serif text-base font-bold',
                      'text-dark/70'
                    )}>
                      {project.service}
                    </p>

                    <p className={cn(
                      'font-serif text-sm italic',
                      'text-dark/60'
                    )}>
                      {project.meta}
                    </p>

                    <p className={cn(
                      'text-lg text-dark/75 leading-relaxed pt-2'
                    )}>
                      {project.description}
                    </p>

                    {project.externalUrl && (
                      <div className="pt-3">
                        <a
                          href={project.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            'inline-flex items-center justify-center rounded-xl border',
                            'px-4 py-2 lg:px-6 lg:py-3 min-h-10',
                            'text-base font-semibold',
                            'bg-[#c3dcc5] text-[#302e2e] border-[#c3dcc5]',
                            'hover:bg-[#a8d0ab] hover:text-[#302e2e]',
                            'transition-all duration-200 ease-out'
                          )}
                        >
                          Ver proyecto
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
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
