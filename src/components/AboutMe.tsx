import { cn, getButtonClasses } from '../utils/classNames';
import profilePlaceholderIcon from '../assets/portrait/retrato.png';
import { useLanguage } from '../context/LanguageContext';
// Using simple text links for AboutMe (keeps visual weight light and consistent)

/**
 * AboutMe Component
 * Professional bio section with photo, description, and expertise tags
 * Positioned after projects, before contact CTA
 */
function AboutMe() {
  const { t } = useLanguage();
  
  // Parse multiline description from translations
  const bioText = t('aboutMe.description');
  const bioparagraphs = bioText.split('\n\n');
  
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
          'gap-6 md:gap-[40px]',
          'max-w-5xl mx-auto',
          'items-center'
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
              {t('aboutMe.title')}
            </h2>

            {/* Portrait - Mobile only, appears below title */}
            <div className={cn(
              'md:hidden',
              'flex flex-col items-start gap-4 w-full mb-6'
            )}>
              <img
                src={profilePlaceholderIcon}
                alt="Sara Martínez"
                className="w-[180px] h-[180px] object-cover rounded-2xl flex-shrink-0"
                style={{ imageRendering: 'auto' }}
                loading="lazy"
              />
              
              <div className="w-full mt-4 flex flex-row items-start gap-4">
                <a href="https://linkedin.com/in/sara-menendez" target="_blank" rel="noopener noreferrer" className="text-link underline underline-offset-2">LinkedIn</a>
                <a href="/docs/CV_SARA_MENENDEZ_WEB_ES.pdf" target="_blank" rel="noopener noreferrer" className="text-link underline underline-offset-2">CV</a>
              </div>
            </div>

            <div className={cn(
              'flex flex-col gap-2 lg:gap-6 mb-4 lg:mb-8',
              'text-base lg:text-lg',
              'text-dark/70',
              'max-w-xl leading-relaxed'
            )}>
              {bioparagraphs.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Portrait & Icons - Desktop only, left aligned */}
          <div className={cn(
            'hidden md:flex md:col-span-4',
            'flex-col items-center gap-6'
          )}>
            <img
              src={profilePlaceholderIcon}
              alt="Sara Martínez"
              className="w-[200px] h-[200px] lg:w-[240px] lg:h-[240px] object-cover rounded-2xl flex-shrink-0"
              style={{ imageRendering: 'auto' }}
              loading="lazy"
            />
            
            <div className="flex flex-row gap-4">
              <a href="https://linkedin.com/in/sara-menendez" target="_blank" rel="noopener noreferrer" className="text-link underline underline-offset-2">LinkedIn</a>
              <a href="/docs/CV_SARA_MENENDEZ_WEB_ES.pdf" target="_blank" rel="noopener noreferrer" className="text-link underline underline-offset-2">CV</a>
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
              {t('aboutMe.projectTitle')}
            </h2>
            <p className="text-xl text-dark/70 mb-6 lg:mb-10 leading-relaxed">
              {t('aboutMe.projectDescription')}
            </p>
            <div className="flex flex-row gap-4 lg:gap-6 justify-center flex-wrap">
              <a
                href="/contacto"
                className={getButtonClasses('primary')}
              >
                {t('aboutMe.projectCta')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
