import { Link } from 'react-router-dom';
import { cn } from '../../utils/classNames';

type CaseStudyPagerProps = {
  previousLabel: string;
  previousHref: string;
  nextLabel: string;
  nextHref: string;
};

export function CaseStudyPager({
  previousLabel,
  previousHref,
  nextLabel,
  nextHref
}: CaseStudyPagerProps) {
  return (
    <section className="py-16 lg:py-20 px-4 lg:px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            to={previousHref}
            className={cn(
              'rounded-2xl border border-[#d8ded8] px-6 py-5',
              'bg-[#ffffff5c] backdrop-blur-sm',
              'hover:bg-[#e3e8e3] transition-colors duration-200'
            )}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-dark/60 mb-1">Volver</p>
            <p className="text-lg font-semibold text-dark">{previousLabel}</p>
          </Link>

          <Link
            to={nextHref}
            className={cn(
              'rounded-2xl border border-[#d8ded8] px-6 py-5 text-left md:text-right',
              'bg-[#ffffff5c] backdrop-blur-sm',
              'hover:bg-[#e3e8e3] transition-colors duration-200'
            )}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-dark/60 mb-1">Siguiente case study</p>
            <p className="text-lg font-semibold text-dark">{nextLabel}</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
