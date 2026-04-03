import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';
import Navigation from './Navigation';
import { LanguageSwitcher } from './LanguageSwitcher';
import { cn } from '../utils/classNames';
import { WhatsAppIcon } from './icons';

interface HeaderProps {
  onNavigate?: (section: string) => void;
  activeSection?: string;
}

/**
 * Header Component
 * Main navigation header with responsive mobile menu
 * Uses design system colors (secondary background)
 */
function Header({ onNavigate, activeSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleMenuClose = () => setIsMenuOpen(false);

  const handleNavigate = (section: string) => {
    onNavigate?.(section);
    handleMenuClose();
  };

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50',
      'bg-transparent',
      isScrolled
        ? 'shadow-[0_12px_32px_rgba(48,46,46,0.15)] backdrop-blur-sm'
        : ''
    )}>
      <div className={cn(
        'flex items-center justify-between',
        'max-w-7xl mx-auto',
        'px-4 lg:px-6',
        'py-4 lg:py-6',
        'border-b border-[#dee2de]/30 transition-all duration-200'
      )}>
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo imageClassName="h-10 w-auto max-w-none object-contain" />
        </div>

        <div className="hidden md:flex items-center gap-10 lg:gap-10">
          {/* Navigation - Desktop */}
          <Navigation onNavigate={onNavigate} activeSection={activeSection} />

          <a
            href="https://wa.me/34625977711"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'w-10 h-10 rounded-full',
              'bg-transparent text-dark',
              'inline-flex items-center justify-center',
              'border border-transparent',
              'hover:bg-[#e3e8e3] transition-all duration-200'
            )}
            aria-label="Abrir WhatsApp"
            title="WhatsApp"
          >
            <WhatsAppIcon className="w-6 h-6" />
          </a>

          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={cn(
            'md:hidden',
            'w-10 h-10 rounded-full inline-flex items-center justify-center',
            'hover:bg-[#e3e8e3] transition-colors duration-200',
            'text-neutral-800'
          )}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu - Animated */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#edf2ec] border-t border-[#d8ded8] shadow-[0_8px_24px_rgba(48,46,46,0.10)]">
          <div className="px-4 py-4 space-y-2">
            <Navigation
              onNavigate={handleNavigate}
              activeSection={activeSection}
            />
            <div className="pt-4 border-t border-[#d8ded8] flex flex-col items-center gap-4">
              <a
                href="https://wa.me/34625977711"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'w-10 h-10 rounded-full',
                  'bg-[#eef2ee] text-dark',
                  'inline-flex items-center justify-center',
                  'border border-transparent',
                  'hover:bg-[#e3e8e3] transition-all duration-200'
                )}
                aria-label="Abrir WhatsApp"
                title="WhatsApp"
              >
                <WhatsAppIcon className="w-6 h-6" />
              </a>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
