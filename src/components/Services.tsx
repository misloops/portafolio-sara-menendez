import { ReactNode } from 'react';
import { services } from '../data/portfolio';
import { cn } from '../utils/classNames';
import { useLanguage } from '../context/LanguageContext';

const serviceIcons: Record<string, ReactNode> = {
  design: (
    <svg className="w-8 h-8 text-primary-400 stroke-current" fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.5a2 2 0 00-1 .267M7 21H5m12 0h2m0-12V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12" />
    </svg>
  ),
  development: (
    <svg className="w-8 h-8 text-primary-400 stroke-current" fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4m0 6l-4 4m-4-4l-4-4" />
    </svg>
  ),
  optimization: (
    <svg className="w-8 h-8 text-primary-400 stroke-current" fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  consulting: (
    <svg className="w-8 h-8 text-primary-400 stroke-current" fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4" />
    </svg>
  )
};

/**
 * Services Component
 * Display available services in a responsive grid
 * Uses design system colors and hover effects
 */
function Services() {
  const { t } = useLanguage();
  
  return (
    <section id="servicios" className="bg-gradient-services py-20 lg:py-28">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-dark">
            {t('services.title')}
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto leading-relaxed">
            {t('services.description')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={cn(
                'bg-neutral-0 rounded-lg',
                'p-8',
                'shadow-md hover:shadow-lg',
                'transition-all duration-300',
                'group'
              )}
            >
              {/* Icon Container */}
              <div className={cn(
                'mb-6 p-3 rounded-lg w-fit',
                'bg-primary-50',
                'group-hover:bg-primary-100',
                'transition-colors duration-300'
              )}>
                {serviceIcons[service.icon]}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-dark mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
