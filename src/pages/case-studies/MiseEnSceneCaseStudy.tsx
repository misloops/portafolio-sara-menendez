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

      {/* Ver online CTA */}
      <section className="py-12 lg:py-16 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <p className="text-lg text-dark/70">¿Quieres ver el proyecto en vivo?</p>
            <a
              href="https://www.misenscene.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#f2f4f1] text-[#302e2e] border border-[#e8e8e6] font-semibold rounded-xl hover:bg-[#c3b7c3] transition-all duration-200 shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_16px_rgba(195,183,195,0.2)]"
            >
              Ver online
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
