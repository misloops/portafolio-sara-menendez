import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { cn, getChipClasses } from '../../utils/classNames';
import { CaseStudyPager } from '../../components/case-study/CaseStudyPager';
import { HorizontalImageGallery, type ImageGroup } from '../../components/case-study/HorizontalImageGallery';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../constants/translations';

export function TrickTalesCaseStudy() {
  const { t, language } = useLanguage();
  const trickTalesContent = translations[language === 'en' ? 'en' : 'es'].caseStudiesContent.trickTales;

  const processGroups: ImageGroup[] = [
    {
      title: trickTalesContent.processGroupTitles[0].title,
      note: trickTalesContent.processGroupTitles[0].note,
      images: [
        { src: '/assets/projects/trick-tales/colores.png', alt: 'Colores' },
        { src: '/assets/projects/trick-tales/sistema-colores.png', alt: 'Sistema de colores' },
        { src: '/assets/projects/trick-tales/tipografias.png', alt: 'Tipografías' },
        { src: '/assets/projects/trick-tales/iconos.png', alt: 'Iconos' },
        { src: '/assets/projects/trick-tales/botones.png', alt: 'Botones' },
        { src: '/assets/projects/trick-tales/cards.png', alt: 'Cards' },
        { src: '/assets/projects/trick-tales/sombras-y-bordes.png', alt: 'Sombras y bordes' }
      ]
    },
    {
      title: trickTalesContent.processGroupTitles[1].title,
      note: trickTalesContent.processGroupTitles[1].note,
      images: [
        { src: '/assets/projects/trick-tales/arquitectura-informacion.png', alt: 'Arquitectura de información' },
        { src: '/assets/projects/trick-tales/w1---splash.png', alt: 'Wireframe splash' },
        { src: '/assets/projects/trick-tales/w2---onboarding-2.png', alt: 'Wireframe onboarding 2' },
        { src: '/assets/projects/trick-tales/w3---onboarding-3.png', alt: 'Wireframe onboarding 3' },
        { src: '/assets/projects/trick-tales/w4---onboarding-4.png', alt: 'Wireframe onboarding 4' },
        { src: '/assets/projects/trick-tales/w5---onboarding-5.png', alt: 'Wireframe onboarding 5' },
        { src: '/assets/projects/trick-tales/w6---onboarding-6.png', alt: 'Wireframe onboarding 6' },
        { src: '/assets/projects/trick-tales/w7---onboarding-7.png', alt: 'Wireframe onboarding 7' },
        { src: '/assets/projects/trick-tales/w8----log-in.png', alt: 'Wireframe log in' },
        { src: '/assets/projects/trick-tales/w8----log-in-1.png', alt: 'Wireframe log in 1' },
        { src: '/assets/projects/trick-tales/w8----log-in-2.png', alt: 'Wireframe log in 2' },
        { src: '/assets/projects/trick-tales/w8----sing-up.png', alt: 'Wireframe sign up' },
        { src: '/assets/projects/trick-tales/w8----sing-up-1.png', alt: 'Wireframe sign up 1' }
      ]
    }
  ];

  const finalScreenGroups: ImageGroup[] = [
    {
      title: trickTalesContent.finalScreenGroupTitles[0],
      images: [
        { src: '/assets/projects/trick-tales/onboard-1.png', alt: 'Onboarding 1' },
        { src: '/assets/projects/trick-tales/onboard-2.png', alt: 'Onboarding 2' },
        { src: '/assets/projects/trick-tales/onboard-3.png', alt: 'Onboarding 3' },
        { src: '/assets/projects/trick-tales/onboard-4.png', alt: 'Onboarding 4' },
        { src: '/assets/projects/trick-tales/onboard-5.png', alt: 'Onboarding 5' },
        { src: '/assets/projects/trick-tales/onboard-6.png', alt: 'Onboarding 6' }
      ]
    },
    {
      title: trickTalesContent.finalScreenGroupTitles[1],
      images: [
        { src: '/assets/projects/trick-tales/entrenamiento.png', alt: 'Entrenamiento principal' },
        { src: '/assets/projects/trick-tales/entrenamiento-1.png', alt: 'Entrenamiento detalle 1' },
        { src: '/assets/projects/trick-tales/entrenamiento-2.png', alt: 'Entrenamiento detalle 2' },
        { src: '/assets/projects/trick-tales/salud.png', alt: 'Salud principal' },
        { src: '/assets/projects/trick-tales/salud-1.png', alt: 'Salud detalle' },
        { src: '/assets/projects/trick-tales/peso.png', alt: 'Peso' },
        { src: '/assets/projects/trick-tales/peso-1.png', alt: 'Peso detalle' },
        { src: '/assets/projects/trick-tales/nuevo-pesaje.png', alt: 'Nuevo pesaje' },
        { src: '/assets/projects/trick-tales/feedback-peso.png', alt: 'Feedback peso' },
        { src: '/assets/projects/trick-tales/feedback-peso-1.png', alt: 'Feedback peso 1' },
        { src: '/assets/projects/trick-tales/logros.png', alt: 'Logros' },
        { src: '/assets/projects/trick-tales/logros-1.png', alt: 'Logros detalle' },
        { src: '/assets/projects/trick-tales/pantalla-de-felicitacion.png', alt: 'Pantalla de felicitación' },
        { src: '/assets/projects/trick-tales/pantalla-de-felicitacion-1.png', alt: 'Pantalla de felicitación 1' },
        { src: '/assets/projects/trick-tales/pantalla-de-felicitacion-2.png', alt: 'Pantalla de felicitación 2' }
      ]
    },
    {
      title: trickTalesContent.finalScreenGroupTitles[2],
      images: [
        { src: '/assets/projects/trick-tales/mis-mascotas.png', alt: 'Mis mascotas' },
        { src: '/assets/projects/trick-tales/mis-mascotas-1.png', alt: 'Mis mascotas detalle' },
        { src: '/assets/projects/trick-tales/perfil-de-mascota.png', alt: 'Perfil de mascota' },
        { src: '/assets/projects/trick-tales/perfil-de-mascota-1.png', alt: 'Perfil de mascota 1' },
        { src: '/assets/projects/trick-tales/perfil-de-mascota_editable.png', alt: 'Perfil de mascota editable' },
        { src: '/assets/projects/trick-tales/agregar-mascota.png', alt: 'Agregar mascota' },
        { src: '/assets/projects/trick-tales/agregar-mascota-1.png', alt: 'Agregar mascota 1' },
        { src: '/assets/projects/trick-tales/agregar-mascota-2.png', alt: 'Agregar mascota 2' },
        { src: '/assets/projects/trick-tales/agregar-mascota-3.png', alt: 'Agregar mascota 3' },
        { src: '/assets/projects/trick-tales/agregar-mascota-4.png', alt: 'Agregar mascota 4' },
        { src: '/assets/projects/trick-tales/agregar-mascota-5.png', alt: 'Agregar mascota 5' },
        { src: '/assets/projects/trick-tales/agregar-mascota-6.png', alt: 'Agregar mascota 6' },
        { src: '/assets/projects/trick-tales/agregar-mascota-7.png', alt: 'Agregar mascota 7' }
      ]
    },
    {
      title: trickTalesContent.finalScreenGroupTitles[3],
      images: [
        { src: '/assets/projects/trick-tales/mis-citas.png', alt: 'Mis citas' },
        { src: '/assets/projects/trick-tales/mis-citas-1.png', alt: 'Mis citas detalle' },
        { src: '/assets/projects/trick-tales/ver-cita.png', alt: 'Ver cita' },
        { src: '/assets/projects/trick-tales/ver-cita-1.png', alt: 'Ver cita detalle' },
        { src: '/assets/projects/trick-tales/agregar-cita.png', alt: 'Agregar cita' },
        { src: '/assets/projects/trick-tales/agregar-cita-1.png', alt: 'Agregar cita 1' },
        { src: '/assets/projects/trick-tales/feedback-cita.png', alt: 'Feedback cita' },
        { src: '/assets/projects/trick-tales/feedback-cita2.png', alt: 'Feedback cita 2' },
        { src: '/assets/projects/trick-tales/medicamentos-y-vacunas.png', alt: 'Medicamentos y vacunas' },
        { src: '/assets/projects/trick-tales/medicamentos-y-vacunas-1.png', alt: 'Medicamentos y vacunas detalle' },
        { src: '/assets/projects/trick-tales/agregar-medicamento.png', alt: 'Agregar medicamento' },
        { src: '/assets/projects/trick-tales/agregar-medicamento-1.png', alt: 'Agregar medicamento 1' },
        { src: '/assets/projects/trick-tales/feedback-medicamento.png', alt: 'Feedback medicamento' },
        { src: '/assets/projects/trick-tales/feedback-med.png', alt: 'Feedback med' },
        { src: '/assets/projects/trick-tales/agregar-vacuna.png', alt: 'Agregar vacuna' },
        { src: '/assets/projects/trick-tales/agregar-vacuna-1.png', alt: 'Agregar vacuna 1' },
        { src: '/assets/projects/trick-tales/feedback-vacuna.png', alt: 'Feedback vacuna' },
        { src: '/assets/projects/trick-tales/feedback-vacuna-1.png', alt: 'Feedback vacuna 1' },
        { src: '/assets/projects/trick-tales/certificado-vacuna.png', alt: 'Certificado vacuna' }
      ]
    }
  ];
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
            <p className={cn('text-sm font-semibold uppercase tracking-widest', 'text-dark/60')}>
              {trickTalesContent.category}
            </p>

            <h1 className={cn('font-serif', 'text-4xl md:text-5xl lg:text-6xl', 'font-normal leading-[1.02]', 'text-dark')}>
              {trickTalesContent.heroTitle}
            </h1>

            <div className={cn('flex flex-col gap-2 lg:gap-6', 'max-w-3xl')}>
              <p className="heading-subtitle">{trickTalesContent.heroDescription}</p>
              <p className={cn('text-lg md:text-xl', 'leading-[1.6]', 'text-dark/75', 'max-w-3xl')}>
                {trickTalesContent.heroSubtitle}
              </p>
            </div>

            <div className={cn('flex flex-wrap gap-2 lg:gap-3', 'pt-2 lg:pt-4')}>
              {trickTalesContent.chips.map((chip: string) => (
                <span key={chip} className={getChipClasses()}>{chip}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 px-4 lg:px-6 bg-transparent">
        <div className="max-w-5xl mx-auto">
          <img
            src="/assets/projects/trick-tales/trick-tales_cover.jpg"
            alt="Trick Tales cover"
            className="w-full h-auto object-contain rounded-2xl shadow-lg"
          />
        </div>
      </section>

      <section className="py-16 lg:py-20 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-primary-300/30 bg-[#ffffff5c] backdrop-blur-sm p-6">
            <h2 className="font-serif text-2xl font-bold text-dark mb-3">{t('caseStudyLabels.challenge')}</h2>
            <p className="text-dark/75 leading-relaxed">{trickTalesContent.challengeText}</p>
          </div>
          <div className="rounded-2xl border border-primary-300/30 bg-[#ffffff5c] backdrop-blur-sm p-6">
            <h2 className="font-serif text-2xl font-bold text-dark mb-3">{t('caseStudyLabels.objective')}</h2>
            <p className="text-dark/75 leading-relaxed">{trickTalesContent.objectiveText}</p>
          </div>
          <div className="rounded-2xl border border-primary-300/30 bg-[#ffffff5c] backdrop-blur-sm p-6">
            <h2 className="font-serif text-2xl font-bold text-dark mb-3">{trickTalesContent.enfoqueTitle}</h2>
            <p className="text-dark/75 leading-relaxed">{trickTalesContent.enfoqueText}</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark">{trickTalesContent.processTitle}</h2>
          <p className="text-lg text-dark/75 max-w-4xl">
            {trickTalesContent.processDesc}
          </p>
          <HorizontalImageGallery groups={processGroups} />
        </div>
      </section>

      <section className="py-16 lg:py-20 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-6">{trickTalesContent.resultTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trickTalesContent.resultCards.map((card: { title: string; text: string }) => (
              <div key={card.title} className="rounded-2xl border border-primary-300/30 bg-[#ffffff5c] backdrop-blur-sm p-6">
                <h3 className="text-xl font-bold text-dark mb-2">{card.title}</h3>
                <p className="text-dark/75">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark">{trickTalesContent.finalTitle}</h2>
          <HorizontalImageGallery groups={finalScreenGroups} />
        </div>
      </section>

      <CaseStudyPager
        previousLabel={t('caseStudy.backTo')}
        previousHref="/proyectos"
        nextLabel={trickTalesContent.pagerNext}
        nextHref="/proyectos/alien-csi-bioblitz"
      />

      <Footer />
    </div>
  );
}
