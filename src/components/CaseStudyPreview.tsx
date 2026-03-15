import { Link } from 'react-router-dom';
import { cn } from '../utils/classNames';

/**
 * CaseStudyPreview Component
 * Teaser section for portfolio case study on home page.
 */
function CaseStudyPreview() {
  return (
    <section className="bg-gradient-casestudy py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
            Case Study
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
            Portafolio: <span className="text-primary-500">Design System + React</span>
          </h2>
          <p className="text-lg text-dark/70 leading-relaxed mb-8">
            Evolución del proyecto desde una base inicial hasta una arquitectura de componentes escalable.
          </p>
          <Link
            to="/proyectos/mi-portafolio-2026"
            className={cn(
              'inline-flex items-center justify-center',
              'px-8 py-4 text-base font-semibold',
              'bg-primary-400 text-dark rounded-lg',
              'hover:bg-primary-500 transition-all duration-300',
              'shadow-md hover:shadow-lg'
            )}
          >
            Ver proyecto
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CaseStudyPreview;
