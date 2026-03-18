import { cn, getButtonClasses } from '../utils/classNames';
import profilePlaceholderIcon from '../assets/icons/1757370620719.jpg';
import ContactCard from './ContactCard';
import { LinkedInIcon, CVIcon } from './icons';

/**
 * AboutMe Component
 * Professional bio section with photo, description, and expertise tags
 * Positioned after projects, before contact CTA
 */
function AboutMe() {
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
          'flex flex-col md:grid md:grid-cols-12',
          'gap-[40px]',
          'max-w-5xl mx-auto',
          'items-start'
        )}>
          
          {/* Bio & Expertise */}
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

            {/* Portrait - Mobile only, appears below title */}
            <div className={cn(
              'md:hidden',
              'flex items-center gap-4 w-full mb-6'
            )}>
              <img
                src={profilePlaceholderIcon}
                alt="Sara Martínez"
                className="w-[96px] h-[96px] object-cover rounded-[22px] flex-shrink-0"
                style={{ imageRendering: 'auto' }}
                loading="lazy"
              />
              
              <div className="w-full grid grid-cols-2 gap-4">
                <ContactCard href="https://linkedin.com/in/sara-menendez" title="LinkedIn" icon={<LinkedInIcon />} ariaLabel="Abrir LinkedIn" isExternal />
                <ContactCard href="/docs/CV_SARA_MENENDEZ_WEB_ES.pdf" title="CV" icon={<CVIcon />} ariaLabel="Abrir CV" isExternal />
              </div>
            </div>

            <div className={cn(
              'flex flex-col gap-2 lg:gap-6 mb-4 lg:mb-8',
              'text-base lg:text-lg',
              'text-dark/70',
              'max-w-xl leading-relaxed'
            )}>
              <p>
                ¡Hola! Soy Sara, diseñadora web y especialista en UX/UI con formación en Historia del Arte y un sólido recorrido en mediación cultural. Mi carrera comenzó en museos y espacios culturales (MNCARS, librerías como La Central y Fnac), donde aprendí a valorar la importancia. Con el tiempo llevé esa experiencia al entorno digital: primero como freelance y más tarde como Webmaster Manager en Grupo Planeta (EAE Business School), uniendo diseño visual, usabilidad y estrategia digital.
              </p>
              <p>
                Hoy combino mi bagaje humanístico con mi experiencia técnica en diseño web (WordPress, Drupal, Prestashop, Figma, Framer), creando proyectos que no solo funcionan, sino que transmiten identidad, coherencia y sentido.
              </p>
            </div>
          </div>

          {/* Portrait & Icons - Desktop only, left aligned */}
          <div className={cn(
            'hidden md:flex md:col-span-4',
            'flex-col items-start gap-6'
          )}>
            <img
              src={profilePlaceholderIcon}
              alt="Sara Martínez"
              className="w-[100px] h-[100px] lg:w-[100px] lg:h-[100px] object-cover rounded-full flex-shrink-0"
              style={{ imageRendering: 'auto' }}
              loading="lazy"
            />
            
            <div className="w-full grid grid-cols-2 gap-4">
              <ContactCard href="https://linkedin.com/in/sara-menendez" title="LinkedIn" icon={<LinkedInIcon />} ariaLabel="Abrir LinkedIn" isExternal />
              <ContactCard href="/docs/CV_SARA_MENENDEZ_WEB_ES.pdf" title="CV" icon={<CVIcon />} ariaLabel="Abrir CV" isExternal />
            </div>
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
            <div className="flex flex-row gap-4 lg:gap-6 justify-center flex-wrap">
              <a
                href="/contacto"
                className={getButtonClasses('primary')}
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
