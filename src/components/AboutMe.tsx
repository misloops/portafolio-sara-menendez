import { cn, getButtonClasses } from '../utils/classNames';
import profilePlaceholderIcon from '../assets/icons/1757370620719.jpg';

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
              
              {/* Contact Icons - Mobile, inline below image */}
              <div className="flex flex-row gap-1">
                {/* Email */}
                <a
                  href="mailto:sara.m.pumariega@gmail.com"
                  className="w-8 h-8 flex items-center justify-center text-dark transition-all duration-200 hover:bg-[#e3e8e3] rounded-full p-1"
                  title="Email"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <rect x="2" y="4" width="20" height="16" rx="2.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2 7l10 7 10-7" />
                  </svg>
                </a>

                {/* Phone */}
                <a
                  href="tel:+34625977711"
                  className="w-8 h-8 flex items-center justify-center text-dark transition-all duration-200 hover:bg-[#e3e8e3] rounded-full p-1"
                  title="Teléfono"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.6a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.48-1.28a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.6.62A2 2 0 0 1 22 16.92z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/34625977711"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center text-dark transition-all duration-200 hover:bg-[#e3e8e3] rounded-full p-1"
                  title="WhatsApp"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.52 3.48A11.9 11.9 0 0 0 3.83 20.08L2 22l1.98-.52a11.9 11.9 0 0 0 16.54-18z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.2 7.8c.3-.7.6-.7.9-.7h.8c.2 0 .4.1.5.3.2.4.7 1.7.8 1.8.1.2.1.4 0 .6-.1.2-.2.4-.4.6l-.4.4c-.2.2-.3.3-.1.6.2.3.8 1.3 1.8 2.1 1.2 1 2.1 1.4 2.4 1.6.3.1.5.1.7-.1l.7-.8c.2-.2.4-.3.7-.2l1.9.9c.2.1.3.2.4.4.1.2.1 1-.1 1.5-.2.5-1.2 1-1.7 1.1-.5 0-1.1.2-3.7-.8-3.1-1.2-5.1-4.4-5.2-4.6-.1-.2-1.2-1.6-1.2-3.1 0-1.5.8-2.2 1-2.5z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/sara-menendez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center text-dark transition-all duration-200 hover:bg-[#e3e8e3] rounded-full p-1"
                  title="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10v7" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7.5h.01" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 17v-4a2 2 0 0 1 4 0v4" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 13v-3" />
                  </svg>
                </a>

                {/* CV */}
                <a
                  href="/docs/CV_SARA_MENENDEZ_WEB_ES.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center text-dark transition-all duration-200 hover:bg-[#e3e8e3] rounded-full p-1"
                  title="CV"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="16" rx="2.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9h8" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 13h8" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 17h5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.8 3.2l1.8 1.8" />
                  </svg>
                </a>
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
            
            {/* Contact Icons - Desktop only */}
            <div className="flex items-center gap-4 overflow-visible">
              {/* Email */}
              <a
                href="mailto:sara.m.pumariega@gmail.com"
                className="w-14 h-14 flex items-center justify-center text-dark transition-all duration-200 hover:bg-[#e3e8e3] rounded-full overflow-visible"
                title="Email"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="2.5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 7l10 7 10-7" />
                </svg>
              </a>

              {/* Phone */}
              <a
                href="tel:+34625977711"
                className="w-14 h-14 flex items-center justify-center text-dark transition-all duration-200 hover:bg-[#e3e8e3] rounded-full overflow-visible"
                title="Teléfono"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.6a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.48-1.28a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.6.62A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/34625977711"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center text-dark transition-all duration-200 hover:bg-[#e3e8e3] rounded-full"
                title="WhatsApp"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.6 6.4c-1.6-1.6-3.7-2.4-5.9-2.4-4.6 0-8.3 3.7-8.3 8.3 0 1.5.4 2.9 1.1 4.2l-1.2 4.5 4.5-1.2c1.2.6 2.6 1 4 1 4.6 0 8.3-3.7 8.3-8.3 0-2.2-.9-4.3-2.5-5.9zM11.7 18.2c-1.2 0-2.3-.3-3.3-.9l-.2-.1-2.5.7.7-2.5-.2-.2c-.6-1-1-2.2-1-3.5 0-3.8 3.1-6.9 6.9-6.9 1.8 0 3.5.7 4.8 2s2 3 2 4.8c0 3.8-3.1 6.9-6.9 6.9z"/>
                  <path d="M8.5 7.5c-.1 0-.3 0-.4.1-.2 0-.3.1-.5.2-.1.1-.2.3-.2.5 0 .4.2.8.5 1.1l.8.8c.3.3.7.5 1.1.5s.8-.2 1.1-.5l.8-.8c.3-.3.5-.7.5-1.1 0-.2-.1-.4-.2-.5-.1-.1-.3-.2-.5-.2-.1 0-.3 0-.4.1l-.8.8c-.1.1-.2.1-.3 0l-.8-.8c-.1-.1-.2-.1-.3 0z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/sara-menendez"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center text-dark transition-all duration-200 hover:bg-[#e3e8e3] rounded-full overflow-visible"
                title="LinkedIn"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10v7" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7.5h.01" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 17v-4a2 2 0 0 1 4 0v4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 13v-3" />
                </svg>
              </a>

              {/* CV */}
              <a
                href="/docs/CV_SARA_MENENDEZ_WEB_ES.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center text-dark transition-all duration-200 hover:bg-[#e3e8e3] rounded-full overflow-visible"
                title="CV"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="16" rx="2.5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 9h8" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 13h8" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 17h5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.8 3.2l1.8 1.8" />
                </svg>
              </a>
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
