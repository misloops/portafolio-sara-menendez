import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { cn, getButtonClasses, getChipClasses } from '../utils/classNames';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolio';

/**
 * ProjectsPage Component
 * Full gallery of all projects with modern design system
 */

// Tags permitidos para filtrado
const ALLOWED_TAGS = [
  'Diseño Web',
  'Diseño UX / UI',
  'Web Manager',
  'WordPress',
  'Drupal',
  'Prestashop',
  'Figma',
  'React'
];

function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Filter projects based on selected tag
  const filteredProjects = useMemo(() => {
    if (!selectedTag) return projects;
    return projects.filter(project => project.tags.includes(selectedTag));
  }, [selectedTag]);

  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(120deg, #f2e8f0 0%, #ede6eb 8%, #e8dce8 10%, #d4c4d4 24%, #b8d4c0 45%, #a8d8b0 70%, #b0deb8 85%, #f0e8f0 100%)',
        backgroundAttachment: 'fixed'
      }}
    >
      <Header />

      {/* Header Spacer */}
      <div className="h-16 lg:h-20" />

      {/* Page Hero */}
      <section className={cn(
        'py-4 lg:py-10',
        'px-4 lg:px-6',
        'bg-transparent'
      )}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className={cn(
              'font-serif',
              'text-5xl md:text-6xl lg:text-7xl',
              'font-normal text-dark mb-4 lg:mb-8',
              'leading-tight'
            )}>
              Proyectos
            </h1>
            <p className="heading-subtitle mb-3 lg:mb-4">
              Colección de proyectos diseñados y desarrollados.
            </p>
            <p className="text-base md:text-[17px] leading-[25px] md:leading-[26px] lg:leading-[29px] text-dark/75">
              Desde plataformas educativas y e-commerce hasta ciencia ciudadana y diseño de sistemas.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className={cn(
        'py-10 lg:py-16',
        'px-4 lg:px-6',
        'bg-transparent'
      )}>
        <div className="max-w-7xl mx-auto">
          {/* Filter Chips */}
          <p className="text-sm font-semibold uppercase tracking-widest text-dark/60 mb-3">
            Filtros
          </p>
          <div className={cn(
            'flex flex-wrap gap-2 mb-8 pb-6 border-b border-dark/10'
          )}>
            <button
              onClick={() => setSelectedTag(null)}
              className={cn(
                getChipClasses(),
                'px-2.5 py-0.5 lg:px-3 lg:py-1.5',
                selectedTag === null 
                  ? 'bg-[#8f628f] text-[#1f1a1f] border-[#8f628f] hover:bg-[#7e557e] hover:border-[#7e557e]' 
                  : 'hover:bg-[#e9dfe9] hover:border-[#d4c4d4]'
              )}
            >
              Todos
            </button>
            {ALLOWED_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={cn(
                  getChipClasses(),
                  'px-2.5 py-0.5 lg:px-3 lg:py-1.5',
                  selectedTag === tag 
                    ? 'bg-[#8f628f] text-[#1f1a1f] border-[#8f628f] hover:bg-[#7e557e] hover:border-[#7e557e]' 
                    : 'hover:bg-[#e9dfe9] hover:border-[#d4c4d4]',
                  'transition-all duration-200'
                )}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className={cn(
            'grid',
            'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
            'gap-6 lg:gap-10'
          )}>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                {...project}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={cn(
        'py-20 lg:py-32',
        'px-4 lg:px-6',
        'bg-transparent'
      )}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={cn(
            'font-serif',
            'text-3xl md:text-4xl lg:text-5xl',
            'font-normal text-dark mb-4 lg:mb-8'
          )}>
            ¿Tienes un Proyecto?
          </h2>
          <p className="text-xl text-dark/70 mb-6 lg:mb-10 leading-relaxed">
            Si tienes una idea o proyecto que necesita diseño, desarrollo o ambos, me encantaría hablar contigo.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 lg:gap-6 justify-center">
            <a
              href="/contacto"
              className={getButtonClasses('primary')}
            >
              Conectemos
            </a>
          </div>
        </div>
      </section>

      {/* Footer with spacing */}
      <div className={cn(
        'py-12 lg:py-20',
        'bg-transparent'
      )}>
        <Footer />
      </div>
    </div>
  );
}

export default ProjectsPage;
