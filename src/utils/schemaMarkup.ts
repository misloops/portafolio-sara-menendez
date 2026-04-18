/**
 * SEO Schema Markup Component
 * Injects structured data (JSON-LD) into the document head
 * Helps search engines understand page content better
 */

export function useSchemaMarkup() {
  React.useEffect(() => {
    // Person/Portfolio Schema
    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Sara Menéndez',
      url: 'https://saram.me',
      image: 'https://saram.me/assets/projects/portafolio-2026/MIPORTAFOLIO_cover.jpg',
      description: 'Diseñadora y Desarrolladora Web especializada en React, WordPress y estrategia digital',
      sameAs: [
        'https://github.com/misloops',
        'https://www.linkedin.com/in/sara-menéndez-pumariega/',
      ],
      jobTitle: 'Diseñadora Web & Desarrolladora Frontend',
      worksFor: {
        '@type': 'Organization',
        name: 'Freelance'
      },
      contact: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        telephone: '+34-625-97-77-11',
        email: 'sara.m.pumariega@gmail.com'
      }
    };

    // Add schema to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(personSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
}
