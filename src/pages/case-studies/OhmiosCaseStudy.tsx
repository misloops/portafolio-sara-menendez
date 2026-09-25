import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { CaseStudyHero } from '../../components/case-study/CaseStudyHero';

export function OhmiosCaseStudy() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          'linear-gradient(180deg, #d99a8a 0%, #e8927c 20%, #efb5a6 40%, #e7ccc2 55%, #e3e6e3 70%, #c3c7c3 85%, #dee2de 100%)',
        backgroundAttachment: 'fixed'
      }}
    >
      <Header />
      <div className="h-20" />

      <CaseStudyHero
        category="Case Study: Music Platform"
        title="Ohmios Records"
        summary="Plataforma de distribución musical independiente."
        context="Proyecto tienda online de música  emergentes."
        role="UX/UI Designer"
        at="Proyecto Colaborativo"
        year="2025"
        tools={['Figma', 'UX Research', 'Music Platform Design']}
        focusAreas={['Music', 'Platform', 'Independent Artists']}
        stats={[
          { value: '500+', label: 'Artistas' },
          { value: '5000+', label: 'Canciones' },
          { value: '2025', label: 'Año' },
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
