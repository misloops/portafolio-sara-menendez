import { ReactNode } from 'react';
import { cn } from '../utils/classNames';
import { useLanguage } from '../context/LanguageContext';

type ServiceCard = {
  icon: ReactNode;
  title: string;
  description: string;
};

const serviceIcons = {
  design: (
    <svg className="h-8 w-8 text-dark stroke-current" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="13" rx="2" strokeWidth="1.8" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 21h8m-4-4v4m-3-8 2 2 4-4" />
    </svg>
  ),
  maintenance: (
    <svg className="h-8 w-8 text-dark stroke-current" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="m14.7 6.3 3-3a4.2 4.2 0 0 0-5.4 5.4L4.2 16.8a2.1 2.1 0 1 0 3 3l8.5-8.1a4.2 4.2 0 0 0 5.4-5.4l-3 3-3.4-3.4Z" />
    </svg>
  ),
  management: (
    <svg className="h-8 w-8 text-dark stroke-current" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 4v16m0-16L5 7m3-3 3 3M16 20V4m0 16-3-3m3 3 3-3" />
    </svg>
  ),
};

const serviceCards: Record<'es' | 'en', ServiceCard[]> = {
  es: [
    {
      icon: serviceIcons.design,
      title: 'Diseño y desarrollo web',
      description: 'WordPress, WooCommerce y proyectos web a medida para clientes autónomos, pequeñas empresas y agencias digitales.',
    },
    {
      icon: serviceIcons.maintenance,
      title: 'Mantenimiento web',
      description: 'Una web necesita cuidados constantes para seguir funcionando correctamente. Actualizaciones, seguridad, copias de respaldo y revisiones técnicas forman parte de un mantenimiento preventivo que evita problemas futuros. Un sitio web bien mantenido es más seguro, más rápido y mucho menos propenso a sufrir caídas o errores inesperados.',
    },
    {
      icon: serviceIcons.management,
      title: 'Gestión web',
      description: 'Si tu página se ha quedado anticuada, no refleja la calidad de tu empresa o simplemente no está generando resultados, puedo ayudarte a renovarla por completo. Trabajo la estructura, la experiencia de usuario, el diseño visual y el rendimiento para crear webs atractivas, intuitivas y preparadas para convertir visitas en oportunidades.',
    },
  ],
  en: [
    {
      icon: serviceIcons.design,
      title: 'Web design and development',
      description: 'WordPress, WooCommerce and bespoke web projects for freelancers, small businesses and digital agencies.',
    },
    {
      icon: serviceIcons.maintenance,
      title: 'Website maintenance',
      description: 'A website needs constant care to keep working properly. Updates, security, backups and technical reviews are part of preventive maintenance that avoids future problems. A well-maintained site is safer, faster and far less prone to unexpected errors.',
    },
    {
      icon: serviceIcons.management,
      title: 'Website management',
      description: 'If your website looks outdated, does not reflect your company’s quality or simply is not generating results, I can help you renew it completely. I work on structure, user experience, visual design and performance to create attractive, intuitive websites ready to convert visits into opportunities.',
    },
  ],
};

/**
 * Services Component
 * Display available services in a responsive grid
 * Uses design system colors and hover effects
 */
function Services() {
  const { language } = useLanguage();
  const cards = serviceCards[language];
  
  return (
    <section id="servicios" className="bg-transparent px-4 py-16 lg:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 font-serif text-5xl font-bold text-dark md:text-6xl">
          {language === 'es' ? '¿Qué hago?' : 'What I do'}
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {cards.map((service) => (
            <div
              key={service.title}
              className={cn(
                'group flex h-full flex-col rounded-xl border border-[#c3c7c3] bg-white/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#e3e6e3] hover:bg-white/60 lg:p-8'
              )}
            >
              <div className="mb-6 w-fit rounded-lg bg-[#f3f5f3] p-4 transition-colors duration-300 group-hover:bg-[#eaecea]">
                {service.icon}
              </div>

              <h3 className="mb-3 font-serif text-2xl font-bold leading-tight text-dark">
                {service.title}
              </h3>

              <p className="leading-relaxed text-dark/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-4xl rounded-xl border border-[#c3c7c3]/80 bg-white/30 px-6 py-6 text-center font-serif text-xl italic leading-relaxed text-dark shadow-sm backdrop-blur-sm md:px-10 md:py-8 md:text-2xl">
          {language === 'es' ? (
            <>
              ¿No encuentras lo que buscas o necesitas más información? Cualquier duda que tengas te la resolveré escribiéndome a mi{' '}
              <a className="font-semibold underline decoration-[#b57261] underline-offset-4 transition-colors hover:text-[#b57261]" href="mailto:sara.m.pumariega@gmail.com">
                email
              </a>{' '}
              o por{' '}
              <a className="font-semibold underline decoration-[#b57261] underline-offset-4 transition-colors hover:text-[#b57261]" href="https://wa.me/34625977711" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>.
            </>
          ) : (
            <>
              Can&apos;t find what you&apos;re looking for or need more information? I&apos;ll be happy to answer any questions by{' '}
              <a className="font-semibold underline decoration-[#b57261] underline-offset-4 transition-colors hover:text-[#b57261]" href="mailto:sara.m.pumariega@gmail.com">
                email
              </a>{' '}
              or{' '}
              <a className="font-semibold underline decoration-[#b57261] underline-offset-4 transition-colors hover:text-[#b57261]" href="https://wa.me/34625977711" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>.
            </>
          )}
        </p>
      </div>
    </section>
  );
}

export default Services;
