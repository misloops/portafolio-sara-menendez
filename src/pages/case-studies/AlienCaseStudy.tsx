import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { cn, getChipClasses } from '../../utils/classNames';
import { CaseStudyPager } from '../../components/case-study/CaseStudyPager';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../constants/translations';

export function AlienCaseStudy() {
  const { t, language } = useLanguage();
  const alienContent = translations[language === 'en' ? 'en' : 'es'].caseStudiesContent.alien;
  
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
            <p className={cn('text-sm font-semibold uppercase tracking-widest', 'text-dark/60')}>{t('caseStudiesContent.alien.category')}</p>

            <h1 className={cn('font-serif', 'text-4xl md:text-5xl lg:text-6xl', 'font-normal leading-[1.02]', 'text-dark')}>
              {t('caseStudiesContent.alien.heroTitle')}
            </h1>

            <div className={cn('flex flex-col gap-2 lg:gap-6', 'max-w-3xl')}>
              <p className="heading-subtitle">
                {t('caseStudiesContent.alien.heroDescription')}
              </p>
              <p className={cn('text-lg md:text-xl', 'leading-[1.6]', 'text-dark/75', 'max-w-3xl')}>
                {t('caseStudiesContent.alien.heroSubtitle')}
              </p>
            </div>

            <div className={cn('flex flex-wrap gap-2 lg:gap-3', 'pt-2 lg:pt-4')}>
              {alienContent.tools.map((chip: string) => (
                <span key={chip} className={getChipClasses()}>{chip}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-[75%]">
            <img
              src="/assets/projects/alien-csi-bioblitz/ALIEN-CSI_COVER.png"
              alt="Alien CSI cover"
              className="w-full h-auto object-contain rounded-2xl shadow-lg"
            />
          </div>
          <div className="w-full lg:w-[25%] flex flex-col gap-3">
            <h3 className="font-serif text-xl font-bold text-dark">{t('caseStudyLabels.information')}</h3>
            <p className="text-base text-dark/75 leading-relaxed">
              {t('caseStudiesContent.alien.information').split('\n\n')[0]}
            </p>
            <p className="text-base text-dark/75 leading-relaxed">
              {t('caseStudiesContent.alien.information').split('\n\n')[1]}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-5">{t('caseStudyLabels.problem')}</h2>
            <p className="text-lg text-dark/75 leading-relaxed">
              {t('caseStudiesContent.alien.problem')}
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/assets/projects/alien-csi-bioblitz/ALIEN_1.png"
              alt="ALIEN 1"
              className="w-auto h-auto max-h-[520px] object-contain rounded-2xl shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-5">{t('caseStudyLabels.objective')}</h2>
            <ul className="space-y-3 text-lg text-dark/75">
              {alienContent.objectives.map((objective: string) => (
                <li key={objective} className="flex gap-3"><span className="text-primary-400 font-bold">•</span><span>{objective}</span></li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="/assets/projects/alien-csi-bioblitz/ALIEN_2_mapa%20interactivo.png"
              alt="ALIEN mapa interactivo"
              className="w-full h-auto max-h-[460px] object-contain rounded-2xl shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-3">{t('caseStudyLabels.strategicDesign')}</h2>
          <p className="text-lg text-dark/75 mb-8">{t('caseStudiesContent.alien.phasesTitle')}</p>

          <div className="space-y-8">
            <article className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-center rounded-2xl border border-gray-200/60 bg-[#ffffff5c] backdrop-blur-sm shadow-[0_8px_24px_rgba(48,46,46,0.08)] p-6 md:p-8">
              <div className="lg:col-span-4">
                <h3 className="text-2xl font-bold text-dark mb-3">{alienContent.phaseTitles.preEvent}</h3>
                <p className="text-dark/75 leading-relaxed">
                  {t('caseStudiesContent.alien.phases.preEvent')}
                </p>
              </div>
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <img
                  src="/assets/projects/alien-csi-bioblitz/ALIEN_3_pre-event.png"
                  alt="ALIEN pre evento"
                  className="w-full h-auto max-h-[420px] object-contain rounded-xl shadow-md"
                />
              </div>
            </article>

            <article className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-center rounded-2xl border border-gray-200/60 bg-[#ffffff5c] backdrop-blur-sm shadow-[0_8px_24px_rgba(48,46,46,0.08)] p-6 md:p-8">
              <div className="lg:col-span-4">
                <h3 className="text-2xl font-bold text-dark mb-3">{alienContent.phaseTitles.duringEvent}</h3>
                <p className="text-dark/75 leading-relaxed">
                  {t('caseStudiesContent.alien.phases.duringEvent')}
                </p>
              </div>
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <img
                  src="/assets/projects/alien-csi-bioblitz/ALIEN_4_during-event.png"
                  alt="ALIEN durante evento"
                  className="w-full h-auto max-h-[420px] object-contain rounded-xl shadow-md"
                />
              </div>
            </article>

            <article className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-center rounded-2xl border border-gray-200/60 bg-[#ffffff5c] backdrop-blur-sm shadow-[0_8px_24px_rgba(48,46,46,0.08)] p-6 md:p-8">
              <div className="lg:col-span-4">
                <h3 className="text-2xl font-bold text-dark mb-3">{alienContent.phaseTitles.postEvent}</h3>
                <p className="text-dark/75 leading-relaxed">
                  {t('caseStudiesContent.alien.phases.postEvent')}
                </p>
              </div>
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <img
                  src="/assets/projects/alien-csi-bioblitz/ALIEN_5_post-event.jpg"
                  alt="ALIEN post evento"
                  className="w-full h-auto max-h-[420px] object-contain rounded-xl shadow-md"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      <CaseStudyPager
        previousLabel={t('caseStudy.backTo')}
        previousHref="/proyectos"
        nextLabel={alienContent.pagerNext}
        nextHref="/proyectos/ohmios-records"
      />

      <Footer />
    </div>
  );
}
