import { cn } from '../utils/classNames';
import Logo from './Logo';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn(
      'py-16 md:py-20 lg:py-24',
      'px-6 md:px-12 lg:px-16',
        'bg-gradient-to-br from-[#faf8fa] via-[#e8dce8] to-[#b8d4c0]',
      'border-t border-neutral-200'
    )}>
      <div className={cn(
        'max-w-7xl mx-auto'
      )}>
        
        <div className={cn(
          'grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12'
        )}>
          {/* Brand */}
          <div>
            <Logo className="mb-3" imageClassName="h-10 w-auto max-w-none object-contain" />
            <p className={cn(
              'text-base text-dark/70',
              'leading-relaxed'
            )}>
              Diseño web y desarrollo React con enfoque estratégico y criterio.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className={cn(
              'font-semibold text-dark mb-4',
              'text-sm uppercase tracking-widest'
            )}>
              Navegación
            </h4>
            <ul className={cn(
              'space-y-3'
            )}>
              <li>
                <a href="/#inicio" className={cn(
                  'text-base text-dark/70 no-underline hover:text-[#9C7C9C]',
                  'transition-colors font-medium'
                )}>
                  Inicio
                </a>
              </li>
              <li>
                <a href="/#proyectos" className={cn(
                  'text-base text-dark/70 no-underline hover:text-[#9C7C9C]',
                  'transition-colors font-medium'
                )}>
                  Proyectos
                </a>
              </li>
              <li>
                <a href="/contacto" className={cn(
                  'text-base text-dark/70 no-underline hover:text-[#9C7C9C]',
                  'transition-colors font-medium'
                )}>
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className={cn(
              'font-semibold text-dark mb-4',
              'text-sm uppercase tracking-widest'
            )}>
              Conecta conmigo
            </h4>
            <div className={cn(
              'flex flex-wrap gap-4'
            )}>
              <a 
                href="https://linkedin.com/in/sara-menendez"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'text-base text-dark/70 no-underline hover:text-[#9C7C9C]',
                  'transition-colors font-medium'
                )}
              >
                LinkedIn
              </a>
              <a 
                href="mailto:sara.m.pumariega@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'text-base text-dark/70 no-underline hover:text-[#9C7C9C]',
                  'transition-colors font-medium'
                )}
              >
                Email
              </a>
              <a 
                href="tel:+34625977711"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'text-base text-dark/70 no-underline hover:text-[#9C7C9C]',
                  'transition-colors font-medium'
                )}
              >
                Teléfono
              </a>
              <a 
                href="https://wa.me/34625977711"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'text-base text-dark/70 no-underline hover:text-[#9C7C9C]',
                  'transition-colors font-medium'
                )}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={cn(
          'border-t border-[#dee2de]',
          'pt-8',
          'flex flex-col md:flex-row md:justify-between md:items-center gap-6'
        )}>
          <p className={cn(
            'text-dark/60 text-sm font-medium'
          )}>
            © {currentYear}. Todos los derechos reservados.
          </p>
          <div className={cn(
            'flex gap-8 text-sm'
          )}>
            <a href="/#proyectos" className={cn(
              'text-base text-dark/70 no-underline hover:text-[#9C7C9C]',
              'transition-colors font-medium'
            )}>
              Ver proyectos
            </a>
            <a href="/contacto" className={cn(
              'text-base text-dark/70 no-underline hover:text-[#9C7C9C]',
              'transition-colors font-medium'
            )}>
              Trabajemos juntas
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
