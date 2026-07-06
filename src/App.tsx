import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider } from './context/LanguageContext';
import HomePage from './pages/HomePage';
import HomePageEn from './pages/HomePageEn';
import ProjectsPage from './pages/ProjectsPage';
import ProjectsPageEn from './pages/ProjectsPageEn';
import CaseStudyPage from './pages/CaseStudyPage';
import CaseStudyPageEn from './pages/CaseStudyPageEn';
import ContactPage from './pages/ContactPage';
import ContactPageEn from './pages/ContactPageEn';
import AboutPage from './pages/AboutPage';
import AboutPageEn from './pages/AboutPageEn';
import WordPressPage from './pages/WordPressPage';
import WordPressPageEn from './pages/WordPressPageEn';
import InfoNote from './components/InfoNote';
import InfoTab from './components/InfoTab';

function App() {
  // Inject JSON-LD Schema Markup
  useEffect(() => {
    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Sara Menéndez',
      url: 'https://portafolio-sara-menendez.vercel.app/',
      image: 'https://portafolio-sara-menendez.vercel.app/assets/projects/portafolio-2026/MIPORTAFOLIO_cover.jpg',
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

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(personSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <LanguageProvider>
      <Routes>
        {/* Spanish Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/wordpress" element={<WordPressPage />} />
        <Route path="/proyectos" element={<ProjectsPage />} />
        <Route path="/proyectos/:slug" element={<CaseStudyPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/sobre-mi" element={<AboutPage />} />
        
        {/* English Routes */}
        <Route path="/home-en" element={<HomePageEn />} />
        <Route path="/wordpress-en" element={<WordPressPageEn />} />
        <Route path="/proyectos-en" element={<ProjectsPageEn />} />
        <Route path="/proyectos-en/:slug" element={<CaseStudyPageEn />} />
        <Route path="/contacto-en" element={<ContactPageEn />} />
        <Route path="/sobre-mi-en" element={<AboutPageEn />} />
      </Routes>
      <InfoNote />
      <Analytics />
    </LanguageProvider>
  );
}

export default App;
