import { cn, getChipClasses } from '../utils/classNames';

/**
 * AboutMe Component
 * Professional bio section with photo, description, and expertise tags
 * Positioned after projects, before contact CTA
 */
function AboutMe() {
  const expertise = [
    'Diseño Web',
    'Diseño UX/UI',
    'Web Manager'
  ];

  return (
    <section id="sobre-mi" className={cn(
      'py-16 lg:py-28',
      'px-4 lg:px-6',
      'bg-transparent'
    )}>
      <div className={cn(
        'max-w-7xl mx-auto'
      )}>
        <div className={cn(
          'grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10',
          'max-w-7xl mx-auto'
        )}>
          
          {/* Left: Image */}
          <div className={cn(
            'md:col-span-4',
            'flex items-start justify-center'
          )}>
            <div className={cn(
              'w-full max-w-xs aspect-square rounded-lg',
              'bg-gradient-to-br from-primary-100 to-secondary-100',
              'flex items-center justify-center',
              'text-6xl'
            )}>
              👋
            </div>
          </div>

          {/* Right: Bio & Expertise */}
          <div className={cn(
            'md:col-span-8',
            'flex flex-col justify-start'
          )}>
            <h2 className={cn(
              'font-serif',
              'text-4xl lg:text-5xl',
              'font-bold leading-tight',
              'text-dark mb-4 lg:mb-8'
            )}>
              Sobre mí
            </h2>

            <div className={cn(
              'flex flex-col gap-2 lg:gap-6 mb-4 lg:mb-8',
              'text-base lg:text-lg',
              'text-dark/70',
              'max-w-xl leading-relaxed'
            )}>
              <p>
                Soy diseñadora y desarrolladora frontend apasionada por crear productos digitales que combinan forma y función. Con más de una década en el campo, he trabajado con startups y empresas consolidadas para llevar ideas de concepto a realidad.
              </p>
              <p>
                Mi enfoque híbrido—diseñar pensando en la implementación, codificar cuidando la experiencia—ayuda a los equipos a entregar mejores productos, más rápido.
              </p>
            </div>

            {/* Expertise Tags */}
            <div className={cn(
              'flex flex-wrap gap-2 lg:gap-6 mb-8'
            )}>
              {expertise.map((skill) => (
                <span
                  key={skill}
                  className={getChipClasses()}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Ver CV Button */}
            <a
              href="/docs/CV_SARA_MENENDEZ_WEB_ES.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center justify-center gap-2',
                'px-4 py-2 text-base min-h-10 lg:px-6 lg:py-3',
                'font-semibold rounded-xl',
                'bg-[#c3dcc5] text-[#302e2e]',
                'hover:bg-[#a8d0ab] hover:text-[#302e2e]',
                'transition-all duration-200 ease-out',
                'w-fit'
              )}
            >
              Ver mi CV
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <div className={cn(
          'mt-16 lg:mt-28 pt-16 lg:pt-28',
          'border-t border-[#dee2de]'
        )}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={cn(
              'font-serif',
              'text-3xl md:text-4xl lg:text-5xl',
              'font-normal text-dark mb-4 lg:mb-8'
            )}>
              ¿Tienes un Proyecto?
            </h2>
            <p className="text-xl text-dark/70 mb-6 lg:mb-10 leading-relaxed">
              Si tienes una idea o proyecto que necesita diseño, desarrollo o ambos, me encantaría hablar contigo.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 lg:gap-6 justify-center">
              <a
                href="/contacto"
                className={cn(
                  'inline-flex items-center justify-center rounded-xl border-2',
                  'px-4 py-2 text-base min-h-10 lg:px-6 lg:py-3',
                  'font-semibold',
                  'bg-white text-[#302e2e] border-[#302e2e]',
                  'hover:bg-[#9C7C9C] hover:text-white hover:border-[#9C7C9C]',
                  'transition-all duration-200 ease-out'
                )}
              >
                Conectemos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
