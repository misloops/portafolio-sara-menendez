import { cn, getChipClasses, getButtonClasses } from '../utils/classNames';
import Button from './Button';

interface HeroProps {
  onActionClick?: (action: string) => void;
}

/**
 * Hero Component
 * Main landing section with headline, description, and CTA buttons
 * Following christinamday.com design patterns with Sara's brand colors
 */
function Hero({ onActionClick }: HeroProps) {
  return (
    <section className={cn(
      'relative',
      'pt-24 pb-16 lg:pt-40 lg:pb-24',
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
          'flex flex-col gap-2 lg:gap-4',
          'text-left',
          'max-w-4xl'
        )}>

          {/* Main Headline with integrated color accent - Serif, 48-56px desktop */}
          <h1 className={cn(
            'font-serif',
            'text-4xl md:text-5xl lg:text-6xl',
            'font-normal leading-[1.02]',
            'text-dark'
          )}>
            <span className="text-gradient-hero font-bold">Diseño Web</span>
            <br />
            Creo experiencias web con identidad, usabilidad y criterio estético
          </h1>

          {/* Supporting copy - Improved intro */}
          <div className={cn(
            'flex flex-col gap-2 lg:gap-4',
            'max-w-3xl'
          )}>
            <p className="heading-subtitle">
              Soy Sara y trabajo diseñando, desarrollando y optimizando sitios web con foco en experiencia de usuario y estructura clara.
            </p>
            {/* ...existing code... */}
          </div>

          {/* Skills/Tech Chips */}
          <div className={cn(
            'flex flex-wrap gap-2 lg:gap-4',
            'pt-2 lg:pt-4'
          )}>
            {['Web Manager', 'Diseño UX/UI', 'WordPress', 'Drupal', 'Figma'].map((skill) => (
              <span
                key={skill}
                className={getChipClasses()}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className={cn(
            'flex flex-row gap-2 lg:gap-4',
            'pt-2 lg:pt-4',
            'items-center flex-wrap'
          )}>
            <a
              href="mailto:sara.m.pumariega@gmail.com"
              className={getButtonClasses('primary')}
            >
              Escríbeme
            </a>

            <a
              href="/#proyectos"
              onClick={(e) => {
                e.preventDefault();
                onActionClick?.('proyectos');
              }}
              className={cn(
                'inline-flex items-center justify-center rounded-xl border',
                'px-4 py-2 text-base min-h-10 lg:px-6 lg:py-3',
                'font-semibold',
                'bg-[#c3dcc5] text-[#302e2e] border-[#c3dcc5]',
                'hover:bg-[#a8d0ab] hover:text-[#302e2e]',
                'transition-all duration-200 ease-out'
              )}
            >
              Proyectos
            </a>

            <button
              onClick={() => onActionClick?.('sobre-mi')}
              className={cn(
                'inline-flex items-center justify-center gap-2',
                'text-base font-semibold',
                'text-dark hover:text-[#9C7C9C]',
                'bg-transparent border-none',
                'transition-colors duration-200',
                'cursor-pointer hover:underline'
              )}
            >
              Sobre mí
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Background Gradients */}
      <div className={cn(
        'absolute inset-0',
        'overflow-hidden pointer-events-none -z-0'
      )}>
        <div className={cn(
          'absolute right-0 top-1/4',
          'w-96 h-96 rounded-full',
          'bg-gradient-to-br from-[#b3d2b7] to-[#dbe8dd]',
          'opacity-50 blur-3xl'
        )} />
        <div className={cn(
          'absolute -left-20 bottom-0',
          'w-80 h-80 rounded-full',
          'bg-gradient-to-tr from-[#bfd7c3] to-[#ecefe7]',
          'opacity-45 blur-3xl'
        )} />
      </div>
    </section>
  );
}

function getCvLinkClasses() {
  return [
    'inline-flex items-center justify-center',
    'px-4 py-2 lg:px-6 lg:py-3 min-h-10',
    'text-base font-semibold rounded-xl border',
    'bg-[#f2f4f1] text-[#302e2e] border-[#d5dbd4]',
    'shadow-[0_4px_12px_rgba(48,46,46,0.08)]',
    'hover:bg-[#e8ece7] hover:border-[#c8d0c7] hover:shadow-[0_8px_20px_rgba(48,46,46,0.12)]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#98c29b]/60',
    'active:translate-y-[1px] transition-all duration-200 ease-out'
  ].join(' ');
}

export default Hero;