import { cn, getChipClasses } from '../../utils/classNames';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { CaseStudyPager } from '../../components/case-study/CaseStudyPager';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../constants/translations';

export function OhmiosRecordsCaseStudy() {
  const { t, language } = useLanguage();
  const ohmiosContent = translations[language === 'en' ? 'en' : 'es'].caseStudiesContent.ohmios;
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          'linear-gradient(120deg, #f2e8f0 0%, #ede6eb 8%, #e8dce8 10%, #d4c4d4 24%, #b8d4c0 45%, #a8d8b0 70%, #b0deb8 85%, #f0e8f0 100%)',
        backgroundAttachment: 'fixed'
      }}
    >
      <Header />

      <section
        className={cn(
          'relative',
          'pt-32 pb-16 lg:pt-40 lg:pb-24',
          'px-4 lg:px-6',
          'bg-transparent',
          'overflow-hidden'
        )}
      >
        <div className={cn('relative z-10', 'max-w-7xl mx-auto', 'px-4 lg:px-6')}>
          <div className={cn('flex flex-col gap-4 lg:gap-8', 'text-left', 'max-w-4xl')}>
            <p className={cn('text-sm font-semibold uppercase tracking-widest', 'text-dark/60')}>{ohmiosContent.category}</p>

            <h1 className={cn('font-serif', 'text-4xl md:text-5xl lg:text-6xl', 'font-normal leading-[1.02]', 'text-dark')}>
              {ohmiosContent.heroTitle}
            </h1>

            <div className={cn('flex flex-col gap-2 lg:gap-6', 'max-w-3xl')}>
              <p className="heading-subtitle">{ohmiosContent.heroDescription}</p>
              <p className={cn('text-lg md:text-xl', 'leading-[1.6]', 'text-dark/75', 'max-w-3xl')}>
                {ohmiosContent.heroSubtitle}
              </p>
            </div>

            <div className={cn('flex flex-wrap gap-2 lg:gap-3', 'pt-2 lg:pt-4')}>
              {ohmiosContent.chips.map((chip: string) => (
                <span key={chip} className={getChipClasses()}>{chip}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cover Image & Challenge/Objective Section */}
      <section className="py-12 lg:py-16 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Left Column - Challenge & Objective Cards (40%) */}
            <div className="flex flex-col gap-6 lg:col-span-2">
              <article className="rounded-2xl border border-primary-300/25 bg-[#ffffff5c] backdrop-blur-sm p-6 md:p-8">
                <h3 className="font-serif text-2xl font-bold text-dark mb-4">{t('caseStudyLabels.challenge')}</h3>
                <p className="text-base md:text-[17px] leading-[28px] text-dark/80">
                  {ohmiosContent.challengeText}
                </p>
              </article>

              <article className="rounded-2xl border border-primary-300/25 bg-[#ffffff5c] backdrop-blur-sm p-6 md:p-8">
                <h3 className="font-serif text-2xl font-bold text-dark mb-4">{t('caseStudyLabels.objective')}</h3>
                <ul className="space-y-3 text-base md:text-[17px] leading-[28px] text-dark/80">
                  {ohmiosContent.objectiveItems.map((item: string) => (
                    <li key={item} className="flex gap-3"><span className="text-primary-400 font-bold">•</span><span>{item}</span></li>
                  ))}
                </ul>
              </article>
            </div>

            {/* Right Column - Cover Image (60%) */}
            <div className="flex items-center justify-center lg:col-span-3">
              <img
                src="/assets/projects/ohmios-records/OHMIOS_cover.png"
                alt="Ohmios Records Online - Cover"
                className="w-full h-auto object-contain rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-8 items-start">
          <div className="lg:col-span-4 rounded-2xl border border-primary-300/25 bg-[#ffffff5c] backdrop-blur-sm p-6 md:p-8">
            <h3 className="font-serif text-2xl font-bold text-dark mb-4">{t('caseStudyLabels.myRole')}</h3>
            <p className="text-base md:text-[17px] leading-[28px] text-dark/80 mb-4">
              {ohmiosContent.myRoleBody}
            </p>
            <ul className="space-y-3 text-base md:text-[17px] leading-[28px] text-dark/80">
              {ohmiosContent.myRoleItems.map((item: string) => (
                <li key={item} className="flex gap-3"><span className="text-primary-400 font-bold">•</span><span>{item}</span></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="rounded-2xl border border-primary-300/25 bg-[#ffffff5c] backdrop-blur-sm p-6">
              <h3 className="font-serif text-2xl font-bold text-dark mb-3">{t('caseStudyLabels.solution')}</h3>
              <p className="text-dark/80 leading-relaxed">
                {ohmiosContent.solutionText}
              </p>
            </article>
            <article className="rounded-2xl border border-primary-300/25 bg-[#ffffff5c] backdrop-blur-sm p-6">
              <h3 className="font-serif text-2xl font-bold text-dark mb-3">{t('caseStudyLabels.results')}</h3>
              <p className="text-dark/80 leading-relaxed">
                {ohmiosContent.resultsText}
              </p>
            </article>
            <article className="rounded-2xl border border-primary-300/25 bg-[#ffffff5c] backdrop-blur-sm p-6 md:col-span-2">
              <h3 className="font-serif text-2xl font-bold text-dark mb-3">{ohmiosContent.highlightsTitle}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-dark/80">
                <p>{ohmiosContent.highlight1}</p>
                <p>{ohmiosContent.highlight2}</p>
                <p>{ohmiosContent.highlight3}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <CaseStudyPager
        previousLabel={t('caseStudy.backTo')}
        previousHref="/proyectos"
        nextLabel={ohmiosContent.pagerNext}
        nextHref="/proyectos/trick-tales-app"
      />

      <Footer />
    </div>
  );
}
