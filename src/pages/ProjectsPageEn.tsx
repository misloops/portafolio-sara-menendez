import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { cn, getButtonClasses, getChipClasses } from '../utils/classNames';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolio';
import { useLanguage } from '../context/LanguageContext';
import { Helmet } from 'react-helmet-async';

/**
 * ProjectsPageEn Component
 * Full gallery of all projects with modern design system (English version)
 */

// Tags permitidos para filtrado
const ALLOWED_TAGS = [
  'Web Design',
  'UX/UI Design',
  'Web Manager',
  'WordPress',
  'Drupal',
  'Prestashop',
  'Figma',
  'React'
];

function ProjectsPageEn() {
  const { t, setLanguage } = useLanguage();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

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
        backgroundAttachment: 'fixed',
      }}
    >
      <Helmet>
        <title>Projects and Case Studies | Sara Menéndez</title>
        <meta name="description" content="Explore my portfolio of web design and technical development. Case studies in React, WordPress, Shopify and custom digital solutions." />
        <link rel="canonical" href="https://portafolio-sara-menendez.vercel.app/projects-en" />
      </Helmet>

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
              {t('projectsPage.title')}
            </h1>
            <p className="heading-subtitle mb-3 lg:mb-4">
              {t('projectsPage.subtitle')}
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
            {t('projectsPage.filters')}
          </p>
          <div className={cn(
            'flex flex-wrap gap-2 mb-8 pb-6 border-b border-dark/10'
          )}>
            <button
              onClick={() => setSelectedTag(null)}
              className={cn(
                getChipClasses(),
                selectedTag === null 
                  ? 'bg-[#8f628f] text-[#1f1a1f] border-[#8f628f] hover:bg-[#c3dcc5] hover:border-[#7fab86] focus:bg-[#c3dcc5] focus:border-[#7fab86] active:bg-[#c3dcc5] active:border-[#7fab86]' 
                  : ''
              )}
            >
              {t('projectsPage.filterAll')}
            </button>
            {ALLOWED_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={cn(
                  getChipClasses(),
                  selectedTag === tag 
                    ? 'bg-[#8f628f] text-[#1f1a1f] border-[#8f628f] hover:bg-[#c3dcc5] hover:border-[#7fab86] focus:bg-[#c3dcc5] focus:border-[#7fab86] active:bg-[#c3dcc5] active:border-[#7fab86]' 
                    : ''
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

          {/* CTA Section */}
          <section className="py-12 lg:py-16 border-t border-dark/10">
            <div className="max-w-3xl">
              <h2 className="font-serif text-4xl md:text-5xl font-normal text-dark mb-4">
                {t('projectsPage.projectTitle')}
              </h2>
              <p className="text-lg text-dark/70 mb-6">
                {t('projectsPage.projectDescription')}
              </p>
              <Link
                to="/contacto-en"
                className={cn(getButtonClasses())}
              >
                Let&apos;s Connect
              </Link>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ProjectsPageEn;
