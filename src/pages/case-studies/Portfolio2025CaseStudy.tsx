import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { CaseStudyHero } from '../../components/case-study/CaseStudyHero';
import { useLanguage } from '../../context/LanguageContext';

export function Portfolio2025CaseStudy() {
  const { t } = useLanguage();
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
      <div className="h-20" />

      <CaseStudyHero
        category="Case Study: Portfolio"
        title="Mi Portafolio"
        summary="Diseño y desarrollo de mi portafolio profesional actual."
        context="Un proyecto personal para mostrar mi evolución como diseñadora y desarrolladora."
        role="UX/UI Designer & Developer"
        at="Proyecto Personal"
        year="2026"
        tools={['React', 'TypeScript', 'Tailwind CSS', 'Figma']}
        focusAreas={['Portfolio', 'Brand Design', 'Web Development']}
        stats={[
          { value: '1', label: 'Versión' },
          { value: 'Portfolio', label: 'Tipo' },
          { value: '2026', label: 'Año' },
        ]}
      />

      <section className="py-20 lg:py-28 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-6">Contenido Próximamente</h2>
          <p className="text-lg text-dark/70">Sección en desarrollo...</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
