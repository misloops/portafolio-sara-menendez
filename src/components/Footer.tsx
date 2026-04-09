import { cn } from '../utils/classNames';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';

function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className={cn(
      'py-10 md:py-16 lg:py-24',
      'px-6 md:px-12 lg:px-16',
        'bg-gradient-to-br from-[#faf8fa] via-[#e8dce8] to-[#b8d4c0]',
      'border-t border-neutral-200'
    )}>
      <div className={cn(
        'max-w-7xl mx-auto'
      )}>
        
        <div className={cn(
          'grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-10 md:mb-12'
        )}>
          {/* Brand */}
          <div>
            <Logo className="mb-3" imageClassName="h-10 w-auto max-w-none object-contain" />
          </div>

          {/* Navigation */}
          <div>
            <h4 className={cn(
              'font-semibold text-dark mb-4',
              'text-sm uppercase tracking-widest'
            )}>
              {t('footer.navigation')}
            </h4>
            <ul className={cn(
              'space-y-3'
            )}>
              <li>
                <a href="/#inicio" className={cn(
                  'text-link',
                  'transition-colors font-medium'
                )}>
                  {t('footer.links.inicio')}
                </a>
              </li>
              <li>
                <a href="/#proyectos" className={cn(
                  'text-link',
                  'transition-colors font-medium'
                )}>
                  {t('footer.links.proyectos')}
                </a>
              </li>
              <li>
                <a href="/contacto" className={cn(
                  'text-link',
                  'transition-colors font-medium'
                )}>
                  {t('footer.links.contacto')}
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
              {t('footer.connectWith')}
            </h4>
            <div className={cn(
              'flex flex-wrap gap-4'
            )}>
              <a 
                href="https://www.linkedin.com/in/sara-men%C3%A9ndez/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'text-link',
                  'transition-colors font-medium'
                )}
              >
                {t('footer.links.linkedin')}
              </a>
              <a 
                href="mailto:sara.m.pumariega@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'text-link',
                  'transition-colors font-medium'
                )}
              >
                {t('footer.links.email')}
              </a>
              <a 
                href="tel:+34625977711"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'text-link',
                  'transition-colors font-medium'
                )}
              >
                {t('footer.links.phone')}
              </a>
              <a 
                href="https://wa.me/34625977711"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'text-link',
                  'transition-colors font-medium'
                )}
              >
                {t('footer.links.whatsapp')}
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
            © {currentYear}. {t('footer.copyright').replace('© 2026', '')}
          </p>
          <div className={cn(
            'flex gap-8 text-sm'
          )}>
            <a href="/#proyectos" className={cn(
              'text-link',
              'transition-colors font-medium'
            )}>
              {t('footer.viewProjects')}
            </a>
            <a href="/contacto" className={cn(
              'text-link',
              'transition-colors font-medium'
            )}>
              {t('footer.workTogether')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
