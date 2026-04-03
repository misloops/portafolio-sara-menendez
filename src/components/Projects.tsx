import { Link } from 'react-router-dom';
import { projects } from '../data/portfolio';
import { cn } from '../utils/classNames';
import ProjectCard from './ProjectCard';
import { useLanguage } from '../context/LanguageContext';

/**
 * Projects Component
 * Gallery of projects and case studies (home preview - 6 projects)
 * Following christinamday.com grid layout: 3 cols desktop, responsive
 */
function Projects() {
  const { t } = useLanguage();
  
  // Show only first 6 projects on home
  const featuredProjects = projects.slice(0, 6);

  return (
    <section id="proyectos" className={cn(
      'py-4 lg:py-10',
      'px-4 lg:px-6',
      'bg-transparent'
    )}>
      <div className={cn(
        'max-w-7xl mx-auto'
      )}>
        
        {/* Section Header - Centered */}
        <div className="mb-6 lg:mb-10 text-center">
          <h2 className={cn(
            'font-serif',
            'text-3xl md:text-4xl lg:text-5xl',
            'font-normal leading-tight',
            'text-dark mb-2 lg:mb-6'
          )}>
            {t('projects.title')}
          </h2>
          <p className={cn(
            'text-base md:text-lg',
            'text-dark/70',
            'leading-relaxed',
            'max-w-3xl mx-auto'
          )}>
            {t('projects.description')}
          </p>
        </div>

        {/* Projects Grid - 3 columns, 24-32px gap */}
        <div className={cn(
          'grid',
          'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
          'gap-6 lg:gap-10 mb-8 lg:mb-10'
        )}>
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>

        {/* CTA - Ver todos */}
        <div className="flex justify-center">
          <Link
            to="/proyectos"
            className={cn(
              'inline-flex items-center justify-center rounded-xl border',
              'px-4 py-2 lg:px-6 lg:py-3 min-h-10',
              'text-base font-semibold',
              'bg-[#c3dcc5] text-[#302e2e] border-[#c3dcc5]',
              'hover:bg-[#a8d0ab] hover:text-[#302e2e]',
              'transition-all duration-200 ease-out'
            )}
          >
            {t('projects.allProjects')}
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Projects;
