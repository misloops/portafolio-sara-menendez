import { useEffect } from 'react';
import AboutMe from '../components/AboutMe';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

function AboutPageEn() {
  const { t, setLanguage } = useLanguage();

  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  return (
    <>
      <Header />
      <main>
        <header className="pt-24 pb-8 px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-dark mb-2">{t('aboutMe.title')}</h1>
            <p className="text-dark/70 max-w-3xl">{t('aboutMe.description').split('\n\n')[0]}</p>
          </div>
        </header>

        <section className="px-4 lg:px-6">
          <AboutMe />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default AboutPageEn;
