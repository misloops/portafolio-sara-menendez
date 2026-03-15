import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import AboutMe from '../components/AboutMe';
import Footer from '../components/Footer';

function HomePage() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>('inicio');

  const handleNavigation = (section: string) => {
    setActiveSection(section);

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroAction = (action: string) => {
    handleNavigation(action);
  };

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const sectionId = location.hash.replace('#', '');
    const element = document.getElementById(sectionId);

    if (element) {
      requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, [location.hash]);

  useEffect(() => {
    const sectionIds = ['inicio', 'proyectos'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        root: null,
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.2, 0.4, 0.6]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen text-dark">
      <Header onNavigate={handleNavigation} activeSection={activeSection} />

      <main id="inicio" className="w-full">
        <Hero onActionClick={handleHeroAction} />
        <Projects />
        <AboutMe />
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
