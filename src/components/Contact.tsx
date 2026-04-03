import { cn } from '../utils/classNames';
import { useLanguage } from '../context/LanguageContext';

function Contact() {
  const { t } = useLanguage();
  
  return (
    <section id="contacto" className={cn(
      'relative',
      'pt-12 pb-16 lg:pt-16 lg:pb-24',
      'px-4 lg:px-6',
      'bg-transparent'
    )}>
      <div className={cn(
        'relative z-10',
        'max-w-7xl mx-auto',
        'px-4 lg:px-6'
      )}>
        <div className={cn(
          'flex flex-col gap-4 lg:gap-8',
          'text-left',
          'max-w-7xl'
        )}>
          <h1 className={cn(
            'font-serif',
            'text-4xl md:text-5xl lg:text-6xl',
            'font-normal leading-[1.02]',
            'text-dark'
          )}>
            {t('contact.title')}
          </h1>

          <div className={cn('flex flex-col gap-2 lg:gap-6', 'max-w-3xl')}>
            <p className="heading-subtitle">{t('contact.subtitle')}</p>
            <p className={cn('text-lg md:text-xl', 'leading-[1.6]', 'text-dark/75', 'max-w-3xl')}>
              {t('contact.description')}
            </p>
          </div>

          <div className="w-full flex justify-start pt-4 lg:pt-6">
            <div className="w-full max-w-3xl">
              <div className="grid grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">

            {/* Email */}
            <a
              href="mailto:sara.m.pumariega@gmail.com"
              className="w-full min-h-[72px] sm:min-h-[96px] px-2 sm:px-4 py-3 sm:py-4 rounded-2xl border border-[#dbe3db] bg-[#ffffff66] shadow-[0_8px_24px_rgba(48,46,46,0.08)] flex flex-col items-center justify-center gap-1.5 sm:gap-2 text-dark transition-all duration-200 hover:bg-[#e8eee8] hover:shadow-[0_10px_28px_rgba(48,46,46,0.12)]"
              aria-label={t('contact.email')}
              title={t('contact.email')}
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center">
                <svg className="w-6 h-6 overflow-visible" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2.5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 7l10 7 10-7" />
                </svg>
              </div>
              <span className="text-sm font-medium tracking-wide">{t('contact.email')}</span>
            </a>

            {/* Teléfono */}
            <a
              href="tel:+34625977711"
              className="w-full min-h-[72px] sm:min-h-[96px] px-2 sm:px-4 py-3 sm:py-4 rounded-2xl border border-[#dbe3db] bg-[#ffffff66] shadow-[0_8px_24px_rgba(48,46,46,0.08)] flex flex-col items-center justify-center gap-1.5 sm:gap-2 text-dark transition-all duration-200 hover:bg-[#e8eee8] hover:shadow-[0_10px_28px_rgba(48,46,46,0.12)]"
              aria-label={t('contact.phone')}
              title={t('contact.phone')}
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center">
                <svg className="w-6 h-6 overflow-visible" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.6a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.48-1.28a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.6.62A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <span className="text-sm font-medium tracking-wide">{t('contact.phone')}</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/34625977711"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[72px] sm:min-h-[96px] px-2 sm:px-4 py-3 sm:py-4 rounded-2xl border border-[#dbe3db] bg-[#ffffff66] shadow-[0_8px_24px_rgba(48,46,46,0.08)] flex flex-col items-center justify-center gap-1.5 sm:gap-2 text-dark transition-all duration-200 hover:bg-[#e8eee8] hover:shadow-[0_10px_28px_rgba(48,46,46,0.12)]"
              aria-label={t('contact.whatsapp')}
              title={t('contact.whatsapp')}
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center">
                <svg className="w-6 h-6 overflow-visible" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.52 3.48A11.9 11.9 0 0 0 3.83 20.08L2 22l1.98-.52a11.9 11.9 0 0 0 16.54-18z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.2 7.8c.3-.7.6-.7.9-.7h.8c.2 0 .4.1.5.3.2.4.7 1.7.8 1.8.1.2.1.4 0 .6-.1.2-.2.4-.4.6l-.4.4c-.2.2-.3.3-.1.6.2.3.8 1.3 1.8 2.1 1.2 1 2.1 1.4 2.4 1.6.3.1.5.1.7-.1l.7-.8c.2-.2.4-.3.7-.2l1.9.9c.2.1.3.2.4.4.1.2.1 1-.1 1.5-.2.5-1.2 1-1.7 1.1-.5 0-1.1.2-3.7-.8-3.1-1.2-5.1-4.4-5.2-4.6-.1-.2-1.2-1.6-1.2-3.1 0-1.5.8-2.2 1-2.5z" />
                </svg>
              </div>
              <span className="text-sm font-medium tracking-wide">{t('contact.whatsapp')}</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/sara-menendez"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[72px] sm:min-h-[96px] px-2 sm:px-4 py-3 sm:py-4 rounded-2xl border border-[#dbe3db] bg-[#ffffff66] shadow-[0_8px_24px_rgba(48,46,46,0.08)] flex flex-col items-center justify-center gap-1.5 sm:gap-2 text-dark transition-all duration-200 hover:bg-[#e8eee8] hover:shadow-[0_10px_28px_rgba(48,46,46,0.12)]"
              aria-label={t('contact.linkedin')}
              title={t('contact.linkedin')}
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center">
                <svg className="w-6 h-6 overflow-visible" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10v7" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7.5h.01" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 17v-4a2 2 0 0 1 4 0v4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 13v-3" />
                </svg>
              </div>
              <span className="text-sm font-medium tracking-wide">{t('contact.linkedin')}</span>
            </a>

            {/* CV */}
            <a
              href="/docs/CV_SARA_MENENDEZ_WEB_ES.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[72px] sm:min-h-[96px] px-2 sm:px-4 py-3 sm:py-4 rounded-2xl border border-[#dbe3db] bg-[#ffffff66] shadow-[0_8px_24px_rgba(48,46,46,0.08)] flex flex-col items-center justify-center gap-1.5 sm:gap-2 text-dark transition-all duration-200 hover:bg-[#e8eee8] hover:shadow-[0_10px_28px_rgba(48,46,46,0.12)]"
              aria-label={t('contact.cv')}
              title={t('contact.cv')}
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center">
                <svg className="w-6 h-6 overflow-visible" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="16" rx="2.5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 9h8" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 13h8" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 17h5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.8 3.2l1.8 1.8" />
                </svg>
              </div>
              <span className="text-sm font-medium tracking-wide">{t('contact.cv')}</span>
            </a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
