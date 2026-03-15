import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { CaseStudyHero } from '../../components/case-study/CaseStudyHero';

export function MiseEnSceneCaseStudy() {
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
        category="Case Study: E-Commerce"
        title="Mise en Scène"
        summary="Plataforma de e-commerce para tienda de disfraces y vestuario."
        context="Proyecto de comercio electrónico con enfoque en experiencia de usuario."
        role="UX/UI Designer"
        at="Proyecto Colaborativo"
        year="2025"
        tools={['Figma', 'UX Research', 'E-Commerce Design']}
        focusAreas={['E-Commerce', 'Fashion', 'Online Shopping']}
        stats={[
          { value: '1000+', label: 'Productos' },
          { value: '3', label: 'Categorías' },
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
