import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { cn, getChipClasses } from '../../utils/classNames';
import { CaseStudyPager } from '../../components/case-study/CaseStudyPager';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../constants/translations';
import { Helmet } from 'react-helmet-async'; // 1. Importamos Helmet

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
      {/* 2. Inyección de Meta Tags Dinámicas */}
      <Helmet>
        <title>Caso de Estudio: EAE Business School | Sara Menéndez</title>
        <meta name="description" content="Análisis de gestión, optimización de conversión y control de calidad web (QA) mediante Jira para el sitio web corporativo de EAE Business School." />
        <link rel="canonical" href="https://portafolio-sara-menendez.vercel.app/proyectos/eae-business-school" />
      </Helmet>

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

            {/* View Online Button */}
            <div className={cn(
              'pt-2 lg:pt-4',
              'flex items-center'
            )}>
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
        </div>
      </section>

      {/* INFORMACIÓN Section - Two Columns */}
      <section className="pt-10 lg:pt-12 pb-20 lg:pb-28 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-[40px] items-end">
            {/* Left Column - Title + Text (40%) */}
            <div className="lg:col-span-4">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-4">
                {t('caseStudyLabels.information')}
              </h2>
              <p className="text-lg text-dark/70 leading-relaxed mb-4">
                {eaeContent.information[0]}
              </p>
              <p className="text-lg text-dark/70 leading-relaxed">
                {eaeContent.information[1]}
              </p>
            </div>

            {/* Right Column - Image (60%) */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="w-full max-w-[550px] rounded-2xl border border-dark/15 bg-white/65 shadow-[0_20px_45px_rgba(48,46,46,0.12)] backdrop-blur-sm overflow-hidden">
                <img
                  src="/assets/projects/eae-business-school/EAE-BUSINESS_COVER.jpg"
                  alt="Rediseño visual de la interfaz de la plataforma académica EAE Business School"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RETO Section - Two Columns */}
      <section className="py-20 lg:py-28 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          {/* Titles row */}
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-[40px] mb-12">
            {/* Title - Left Column (Mi rol) */}
            <h2 className="lg:col-span-5 font-serif text-3xl md:text-4xl font-bold text-dark">
              {t('caseStudyLabels.myRole')}
            </h2>

            {/* Title - Right Column (Reto) */}
            <h2 className="lg:col-span-5 font-serif text-3xl md:text-4xl font-bold text-dark">
              {t('caseStudyLabels.challenge')}
            </h2>
          </div>

          {/* Content row with card below Reto */}
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-[40px]">
            {/* Left Column - Role List (50%) */}
            <div className="lg:col-span-5 lg:p-6 flex flex-col gap-4">
              {/* First item - No bullet, bold */}
              <p className="text-lg font-bold text-dark mb-4">{eaeContent.roleItems[0]}</p>
              
              {/* Rest of items - Bullets */}
              <ul className="space-y-3 flex-1">
                {eaeContent.roleItems.slice(1).map((item: string) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="text-primary-400 font-bold text-xl mt-0.5">•</span>
                    <span className="text-lg text-dark/70">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Info Card - Below Mi Rol */}
              <div className="rounded-2xl border border-neutral-300/40 bg-[#dee2de]/25 backdrop-blur-sm shadow-[0_8px_24px_rgba(48,46,46,0.08)] p-8 md:p-12">
                <p className="text-base md:text-lg text-dark/75 leading-relaxed">
                  Además de gestionar y supervisar con diferentes departamentos y ser la intermediadora entre ellos. Una de mis principales tareas era velar por la seguridad y reportar incidencias directamente con el equipo de desarrolladores mediante la herramienta <span className="font-bold">Jira</span>, con un seguimiento de las <span className="font-bold">incidencias</span> y su validación.
                </p>
              </div>
            </div>

            {/* Right Column - Challenge List + Card (50%) */}
            <div className="lg:col-span-5 lg:p-6 flex flex-col gap-4">
              {/* Challenge List */}
              {/* First item - No bullet, bold */}
              <p className="text-lg font-bold text-dark">{eaeContent.challengeItems[0]}</p>
              
              {/* Rest of items - Bullets */}
              <ul className="space-y-3 flex-1">
                {eaeContent.challengeItems.slice(1).map((item: string) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="text-primary-400 font-bold text-xl mt-0.5">•</span>
                    <span className="text-lg text-dark/70">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Info Card - Below Reto */}
              <div className="rounded-2xl border border-neutral-300/40 bg-[#dee2de]/25 backdrop-blur-sm shadow-[0_8px_24px_rgba(48,46,46,0.08)] p-8 md:p-12">
                <p className="text-base md:text-lg text-dark/75 leading-relaxed">
                  Abajo se muestra cómo estaba la web cuando empecé en el proyecto y en la imagen de la derecha se puede ver un año después un cambio notable, no solo a nivel de diseño, sino a nivel de conversión de leads. Este cambio vino acompañado del lanzamiento de la <span className="font-bold">nueva campaña de comunicación</span>, culminación del trabajo de diferentes equipos de profesionales.
                </p>
              </div>
            </div>
          </div>

          {/* Antes / Después images section */}
          <div className="mt-20 lg:mt-28 grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-[40px]">
            <div className="lg:col-span-5 flex justify-center">
              <figure className="flex flex-col items-center w-full">
                <h3 className="mb-4 font-serif text-lg md:text-xl font-bold text-dark">Antes — marzo 2023</h3>
                <img
                  src="/assets/projects/eae-business-school/EAE_BUSINESS_antes.jpg"
                  alt="Captura de la interfaz de la página web de EAE Business School antes del rediseño (marzo 2023)"
                  className="w-[550px] h-auto object-contain rounded-lg"
                  loading="eager"
                />
              </figure>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <figure className="flex flex-col items-center w-full">
                <h3 className="mb-4 font-serif text-lg md:text-xl font-bold text-dark">Después — marzo 2024</h3>
                <img
                  src="/assets/projects/eae-business-school/EAE_BUSINESS_despues.jpg"
                  alt="Captura de la interfaz optimizada de la página web de EAE Business School tras un año de rediseño (marzo 2024)"
                  className="w-[550px] h-auto object-contain rounded-lg"
                  loading="eager"
                />
              </figure>
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
