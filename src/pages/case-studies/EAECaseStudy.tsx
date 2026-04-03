import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { cn, getChipClasses } from '../../utils/classNames';
import { ScrollableCaseStudyImage } from '../../components/ScrollableCaseStudyImage';
import { BeforeAfterImageCompare } from '../../components/BeforeAfterImageCompare';
import { CaseStudyPager } from '../../components/case-study/CaseStudyPager';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../constants/translations';

export function EAECaseStudy() {
  const { t, language } = useLanguage();
  const eaeContent = translations[language === 'en' ? 'en' : 'es'].caseStudiesContent.eae;
  
  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(120deg, #f2e8f0 0%, #ede6eb 8%, #e8dce8 10%, #d4c4d4 24%, #b8d4c0 45%, #a8d8b0 70%, #b0deb8 85%, #f0e8f0 100%)',
        backgroundAttachment: 'fixed'
      }}
    >
      <Header />

      {/* Hero Section - Following Home Hero Pattern */}
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

            {/* Category Label */}
            <p className={cn(
              'text-sm font-semibold uppercase tracking-widest',
              'text-dark/60'
            )}>
              {eaeContent.category}
            </p>

            {/* Main Title */}
            <h1 className={cn(
              'font-serif',
              'text-4xl md:text-5xl lg:text-6xl',
              'font-normal leading-[1.02]',
              'text-dark'
            )}>
              {eaeContent.heroTitle}
            </h1>

            {/* Supporting copy */}
            <div className={cn(
              'flex flex-col gap-2 lg:gap-6',
              'max-w-3xl'
            )}>
              <p className="heading-subtitle">
                {eaeContent.heroDescription}
              </p>
              <p className={cn(
                'text-lg md:text-xl',
                'leading-[1.6]',
                'text-dark/75',
                'max-w-3xl'
              )}>
                {eaeContent.heroSubtitle}
              </p>
            </div>

            {/* Skills/Tech Chips */}
            <div className={cn(
              'flex flex-wrap gap-2 lg:gap-3',
              'pt-2 lg:pt-4'
            )}>
              {eaeContent.chips.map((chip: string) => (
                <span key={chip} className={getChipClasses()}>{chip}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INFORMACIÓN Section - Two Columns */}
      <section className="py-20 lg:py-28 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-[40px]">
            {/* Title - Left Column (40%) */}
            <h2 className="lg:col-span-4 font-serif text-3xl md:text-4xl font-bold text-dark">
              {t('caseStudyLabels.information')}
            </h2>
            
            {/* Spacer for right column alignment */}
            <div className="lg:col-span-6" />
            
            {/* Left Column - Text (40%) */}
            <div className="lg:col-span-4">
              <p className="text-lg text-dark/70 leading-relaxed mb-4">
                {eaeContent.information[0]}
              </p>
              <p className="text-lg text-dark/70 leading-relaxed">
                {eaeContent.information[1]}
              </p>
            </div>

            {/* Right Column - Image (60%) */}
            <div className="lg:col-span-6 flex items-start justify-center">
              <ScrollableCaseStudyImage
                src="/assets/projects/eae-business-school/EAE-BUSINESS_COVER.jpg"
                alt="EAE Business School Cover"
                caption="Scroll interno para ver la página completa"
                viewportClassName="h-[300px] md:h-[420px] lg:h-[560px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* RETO Section - Two Columns */}
      <section className="py-20 lg:py-28 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-8">
            {t('caseStudyLabels.challenge')} {t('caseStudyLabels.myRole').replace('Mi ', '')}
          </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Challenge & Role */}
          <div>
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-bold text-dark mb-6">{t('caseStudyLabels.challenge')}</h3>
              <p className="text-lg text-dark/70 leading-relaxed mb-4">
                {eaeContent.challengeBody[0]}
              </p>
              <p className="text-lg text-dark/70 leading-relaxed">
                {eaeContent.challengeBody[1]}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-dark mb-6">{t('caseStudyLabels.myRole')}</h3>
              <ul className="space-y-3">
                {eaeContent.roleItems.map((item: string) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="text-primary-400 font-bold text-xl mt-0.5">•</span>
                    <span className="text-lg text-dark/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Before/After compare */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-dark mb-6">{t('caseStudyLabels.beforeAfter')}</h3>
            <BeforeAfterImageCompare
              beforeSrc="/assets/projects/EAEweb_antes.png"
              afterSrc="/assets/projects/Nuevo diseño área.png"
              beforeAlt="EAE antes"
              afterAlt="EAE despues"
              beforeLabel={t('caseStudyLabels.before')}
              afterLabel={t('caseStudyLabels.after')}
            />
          </div>
        </div>
        </div>
      </section>

      {/* LOGROS Section - Single Column */}
      <section className="py-20 lg:py-28 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-8">
            {t('caseStudyLabels.achievements')}
          </h2>
        {/* Top Row - Results Text */}
        <div className="mb-12">
          <div className="bg-light/50 border border-primary-300/30 rounded-lg p-8 md:p-12">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {eaeContent.achievementItems.map((item: string) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="text-primary-400 font-bold text-2xl mt-0">✓</span>
                  <span className="text-lg text-dark/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Próximas imágenes */}
        <div className="rounded-2xl border border-gray-200/60 bg-[#ffffff5c] backdrop-blur-sm shadow-[0_8px_24px_rgba(48,46,46,0.08)] p-8 flex flex-col items-center justify-center gap-3 text-center min-h-[160px]">
          <svg className="w-10 h-10 text-dark/30" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="3"/>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16l5-5 4 4 3-3 6 6"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
          </svg>
          <p className="text-dark/50 font-medium">{t('caseStudyLabels.upcomingScreenshots')}</p>
          <p className="text-sm text-dark/35">{t('caseStudyLabels.upcomingScreenshotsDesc')}</p>
        </div>
        </div>
      </section>

      {/* Ver online CTA */}
      <section className="py-12 lg:py-16 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <p className="text-lg text-dark/70">{t('caseStudyLabels.viewOnline')}</p>
            <a
              href="https://www.eaebarcelona.com/es/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#f2f4f1] text-[#302e2e] border border-[#e8e8e6] font-semibold rounded-xl hover:bg-[#c3b7c3] transition-all duration-200 shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_16px_rgba(195,183,195,0.2)]"
            >
              {t('caseStudyLabels.viewOnlineButton')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <CaseStudyPager
        previousLabel={t('caseStudy.backTo')}
        previousHref="/proyectos"
        nextLabel={eaeContent.pagerNext}
        nextHref="/proyectos/alien-csi-bioblitz"
      />

      <Footer />
    </div>
  );
}
