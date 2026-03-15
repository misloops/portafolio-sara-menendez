import { CaseStudyPager } from './case-study/CaseStudyPager';
import type { CaseStudy } from '../data/caseStudies';

type CaseStudyTemplateProps = {
  caseStudy: CaseStudy;
};

function CaseStudyTemplate({ caseStudy }: CaseStudyTemplateProps) {
  return (
    <div className="bg-transparent">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16 lg:py-20">
        <h1 className="text-4xl lg:text-5xl font-serif font-bold text-dark mb-8">
          {caseStudy.title}
        </h1>
        <p className="text-xl text-dark/70 leading-relaxed mb-8">
          {caseStudy.overview?.description || 'Contenido próximamente'}
        </p>
      </div>
      <CaseStudyPager
        previousLabel="Volver a proyectos"
        previousHref="/proyectos"
        nextLabel="Mi Portafolio 2026"
        nextHref="/proyectos/mi-portafolio-2026"
      />
    </div>
  );
}

export default CaseStudyTemplate;
