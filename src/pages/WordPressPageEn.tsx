import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { cn } from '../utils/classNames';
import { projects } from '../data/portfolio';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

const serviceIcons: Record<string, ReactNode> = {
  development: (
    <svg className="w-10 h-10 text-primary-400 stroke-current" fill="none" viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 21h8M12 17v4" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 9l3 3 3-3" />
    </svg>
  ),
  maintenance: (
    <svg className="w-10 h-10 text-primary-400 stroke-current" fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4v.01" />
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6c-.5.5-1 1.5-1 3 0 3 1 5 3 5s3-2 3-5c0-1.5-.5-2.5-1-3" />
    </svg>
  ),
  redesign: (
    <svg className="w-10 h-10 text-primary-400 stroke-current" fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8v12m0 0l4-4m-4 4l-4-4" />
    </svg>
  )
};

export function WordPressPageEn() {
  const { setLanguage } = useLanguage();

  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  // Filter WordPress projects - 4 case studies with confirmed service descriptions
  const demoProjects = [
    {
      ...projects.find(p => p.slug === 'ohmios-records'),
      service: 'Web design and development · Online store · Maintenance'
    },
    {
      ...projects.find(p => p.translationKey === 'menloArtist'),
      service: 'Web design and development'
    },
    {
      ...projects.find(p => p.translationKey === 'arbola'),
      service: 'Web design and development'
    },
    {
      ...projects.find(p => p.slug === 'mise-en-scene'),
      service: 'Web redesign · Online store · Maintenance'
    }
  ].filter(Boolean);

  return (
    <div 
      className="min-h-screen" 
      style={{ 
        background: 'linear-gradient(120deg, #f2e8f0 0%, #ede6eb 8%, #e8dce8 10%, #d4c4d4 24%, #b8d4c0 45%, #a8d8b0 70%, #b0deb8 85%, #f0e8f0 100%)',
        backgroundAttachment: 'fixed'
      }}
    >
      <Helmet>
        <title>WordPress Design & Development | Sara Menéndez</title>
        <meta
          name="description"
          content="WordPress specialist for corporate sites, online stores and redesigns. Fast, secure and SEO-friendly websites built for growth."
        />
        <link rel="canonical" href="https://portafolio-sara-menendez.vercel.app/wordpress-en" />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className={cn(
        'relative',
        'pt-32 pb-16 lg:pt-40 lg:pb-24',
        'px-4 lg:px-6',
        'bg-transparent',
        'overflow-hidden'
      )}>
        <div className={cn(
          'relative z-10',
          'max-w-7xl mx-auto',
          'px-4 lg:px-6'
        )}>
          <div className={cn(
            'flex flex-col gap-4 lg:gap-8',
            'text-left',
            'max-w-4xl'
          )}>
            {/* Main Title */}
            <h1 className={cn(
              'font-serif',
              'text-4xl md:text-5xl lg:text-6xl',
              'font-normal leading-[1.02]',
              'text-dark'
            )}>
              WordPress Design & Development
            </h1>

            <div className={cn(
              'text-lg md:text-xl',
              'leading-[1.6]',
              'text-dark/75',
              'max-w-3xl flex flex-col gap-4'
            )}>
              <p>
                WordPress is the most widely used content management system in the world, and it's not by chance. Its flexibility, scalability and ease of management make it a top choice for companies, brands and professionals who need a solid website that is easy to maintain.
              </p>
              <p>
                As a freelance web designer specializing in WordPress, I have more than six years of experience creating, redesigning and optimizing websites tailored to each client's needs. From corporate sites to online stores, my goal is to build a website that not only looks good, but works efficiently and helps you achieve your business objectives.
              </p>
              <div>
                <strong>Why work with a WordPress specialist?</strong><br />
                WordPress is an accessible tool, but a professional website requires much more than installing a theme and adding a few plugins. Optimization, security, performance, compatibility and search engine positioning demand technical knowledge that makes the difference between a website that merely exists and one that adds value to your business.
                Working with a specialist helps avoid common issues such as:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Security vulnerabilities and weak configurations.</li>
                  <li>Loss of search engine visibility.</li>
                  <li>Slow loading times.</li>
                  <li>Errors after updates.</li>
                  <li>Data loss due to missing backups.</li>
                  <li>High costs from poorly executed development.</li>
                </ul>
              </div>
              <p>
                In most cases, preventing problems is more cost-effective than repairing them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Cards */}
      <section className="py-10 lg:py-20 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className={cn(
            'font-serif',
            'text-3xl md:text-4xl',
            'font-bold text-dark mb-12'
          )}>
            Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Design and development */}
            <div className={cn(
              'bg-white/40 backdrop-blur-sm rounded-xl',
              'p-6 lg:p-8',
              'border border-[#d8ded8]',
              'hover:border-[#c3dcc5] hover:bg-white/60',
              'transition-all duration-300',
              'group'
            )}>
              <div className={cn(
                'mb-6 p-4 rounded-lg w-fit',
                'bg-[#f0f5f0]',
                'group-hover:bg-[#e8f0e8]',
                'transition-colors duration-300'
              )}>
                {serviceIcons.development}
              </div>
              <h3 className="text-xl font-serif font-bold text-dark mb-3">
                Web design and development from scratch
              </h3>
              <p className="text-dark/70 leading-relaxed">
                We create your digital presence from the ground up. Responsive design, clean development and optimization so your website not only looks great, but works and converts.
              </p>
            </div>

            {/* Card 2: Maintenance */}
            <div className={cn(
              'bg-white/40 backdrop-blur-sm rounded-xl',
              'p-6 lg:p-8',
              'border border-[#d8ded8]',
              'hover:border-[#c3dcc5] hover:bg-white/60',
              'transition-all duration-300',
              'group'
            )}>
              <div className={cn(
                'mb-6 p-4 rounded-lg w-fit',
                'bg-[#f0f5f0]',
                'group-hover:bg-[#e8f0e8]',
                'transition-colors duration-300'
              )}>
                {serviceIcons.maintenance}
              </div>
              <h3 className="text-xl font-serif font-bold text-dark mb-3">
                Maintenance
              </h3>
              <p className="text-dark/70 leading-relaxed">
                Your website needs care. Updates, backups, technical support and constant optimization so it works smoothly while you focus on your business.
              </p>
            </div>

            {/* Card 3: Web redesign */}
            <div className={cn(
              'bg-white/40 backdrop-blur-sm rounded-xl',
              'p-6 lg:p-8',
              'border border-[#d8ded8]',
              'hover:border-[#c3dcc5] hover:bg-white/60',
              'transition-all duration-300',
              'group'
            )}>
              <div className={cn(
                'mb-6 p-4 rounded-lg w-fit',
                'bg-[#f0f5f0]',
                'group-hover:bg-[#e8f0e8]',
                'transition-colors duration-300'
              )}>
                {serviceIcons.redesign}
              </div>
              <h3 className="text-xl font-serif font-bold text-dark mb-3">
                Web redesign
              </h3>
              <p className="text-dark/70 leading-relaxed">
                Your current website is holding you back. We analyze, rethink the structure and renovate it. We keep what works, improve what doesn't, and give it new life without starting from scratch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies - Alternating Layout */}
      <section className="py-10 lg:py-20 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className={cn(
            'font-serif',
            'text-3xl md:text-4xl',
            'font-bold text-dark mb-16'
          )}>
            Case studies
          </h2>

          <div className="space-y-16 lg:space-y-24">
            {demoProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={project.slug || project.title}
                  className={cn(
                    'grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 items-center'
                  )}
                >
                  {/* Image Container */}
                  <div className={cn(
                    'flex items-center justify-center',
                    !isEven && 'lg:order-2'
                  )}>
                    <div className="w-full p-4 lg:p-6">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-contain rounded-lg shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Text Container */}
                  <div className={cn(
                    'flex flex-col gap-2 lg:gap-3 p-4 lg:p-6',
                    !isEven && 'lg:order-1',
                    'text-left'
                  )}>
                    <h3 className={cn(
                      'font-serif',
                      'text-3xl md:text-4xl',
                      'font-bold text-dark leading-tight'
                    )}>
                      {project.title_en ?? project.title}
                    </h3>

                    <p className={cn(
                      'font-serif text-base font-bold',
                      'text-dark/70'
                    )}>
                      {project.service}
                    </p>

                    <p className={cn(
                      'font-serif text-sm italic',
                      'text-dark/60'
                    )}>
                      {project.meta}
                    </p>

                    <p className={cn(
                      'text-lg text-dark/75 leading-relaxed pt-2'
                    )}>
                      {project.description_en ?? project.description}
                    </p>

                    {project.externalUrl && (
                      <div className="pt-3">
                        <a
                          href={project.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            'inline-flex items-center justify-center rounded-xl border',
                            'px-4 py-2 lg:px-6 lg:py-3 min-h-10',
                            'text-base font-semibold',
                            'bg-[#c3dcc5] text-[#302e2e] border-[#c3dcc5]',
                            'hover:bg-[#a8d0ab] hover:text-[#302e2e]',
                            'transition-all duration-200 ease-out'
                          )}
                        >
                          View project
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 lg:py-20 px-4 lg:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className={cn(
              'font-serif',
              'text-3xl md:text-4xl',
              'font-bold text-dark mb-4'
            )}>
              Does your website need a hand?
            </h2>
            <p className={cn(
              'text-lg text-dark/75 mb-8',
              'leading-relaxed'
            )}>
              Tell me what's happening.
            </p>
            <Link
              to="/contacto-en"
              className={cn(
                'inline-flex items-center justify-center rounded-xl border',
                'px-6 py-3 lg:px-8 lg:py-4 min-h-12',
                'text-base lg:text-lg font-semibold',
                'bg-[#c3dcc5] text-[#302e2e] border-[#c3dcc5]',
                'hover:bg-[#a8d0ab] hover:text-[#302e2e]',
                'transition-all duration-200 ease-out'
              )}
            >
              Let's talk →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default WordPressPageEn;
