import { cn } from '../../utils/classNames';

export type HeroStat = {
  value: string;
  label: string;
};

export type CaseStudyHeroProps = {
  category: string;
  title: string;
  summary: string;
  context: string;
  role: string;
  at: string;
  year: string;
  tools: string[];
  focusAreas: string[];
  stats: HeroStat[];
};

export function CaseStudyHero({
  category,
  title,
  summary,
  context,
  role,
  at,
  year,
  tools,
  focusAreas,
  stats,
}: CaseStudyHeroProps) {
  return (
    <section className={cn(
      'relative overflow-hidden',
      'py-20 lg:py-28',
      'px-6 md:px-12 lg:px-16',
      'bg-white'
    )}>
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <p className={cn(
          'text-sm font-semibold uppercase tracking-widest',
          'text-dark/60 mb-8'
        )}>
          {category}
        </p>

        {/* Main Title */}
        <h1 className={cn(
          'font-serif',
          'text-5xl lg:text-6xl',
          'font-bold text-dark',
          'mb-8 leading-tight'
        )}>
          {title}
        </h1>

        {/* Summary */}
        <p className="heading-subtitle" style={{ maxWidth: '60rem', marginBottom: '3rem' }}>
          {summary}
        </p>

        {/* Context */}
        <p className={cn(
          'text-lg',
          'text-dark/70 leading-relaxed',
          'max-w-3xl mb-16 pb-16 border-b border-dark/10'
        )}>
          {context}
        </p>

        {/* Metadata Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-dark/60 mb-2">
              Rol
            </p>
            <p className="text-lg text-dark font-medium">{role}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-dark/60 mb-2">
              Proyecto
            </p>
            <p className="text-lg text-dark font-medium">{at}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-dark/60 mb-2">
              Año
            </p>
            <p className="text-lg text-dark font-medium">{year}</p>
          </div>
        </div>

        {/* Focus Areas / Tools Chips */}
        {tools.length > 0 && (
          <div className="mb-16">
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}

        {focusAreas.length > 0 && (
          <div className="mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-dark/60 mb-4">
              Áreas de Enfoque
            </p>
            <div className="flex flex-wrap gap-3">
              {focusAreas.map((area, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 pt-16 border-t border-dark/10">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-4xl lg:text-5xl font-bold text-primary-400 mb-2">
                {stat.value}
              </p>
              <p className="text-sm font-semibold uppercase tracking-widest text-dark/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
