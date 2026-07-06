import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CaseStudyTemplate from '../components/CaseStudyTemplate';
import { CaseStudyNotFound } from '../components/case-study/CaseStudyNotFound';
import { caseStudiesBySlug } from '../data/caseStudies';
import { useLanguage } from '../context/LanguageContext';
import {
  AlienCaseStudy,
  EAECaseStudy,
  OhmiosRecordsCaseStudy,
  PortfolioCaseStudy,
  TrickTalesCaseStudy
} from './case-studies';

function CaseStudyPageEn() {
  const { slug } = useParams();
  const { setLanguage } = useLanguage();

  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  // Cases específicos con componentes dedicados
  if (slug === 'eae-business-school') {
    return <EAECaseStudy />;
  }

  if (slug === 'alien-csi-bioblitz') {
    return <AlienCaseStudy />;
  }

  if (slug === 'mi-portafolio-2026') {
    return <PortfolioCaseStudy />;
  }

  if (slug === 'trick-tales-app') {
    return <TrickTalesCaseStudy />;
  }

  if (slug === 'ohmios-records') {
    return <OhmiosRecordsCaseStudy />;
  }

  const caseStudy = slug ? caseStudiesBySlug[slug as keyof typeof caseStudiesBySlug] : undefined;

  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(120deg, #f2e8f0 0%, #ede6eb 8%, #e8dce8 10%, #d4c4d4 24%, #b8d4c0 45%, #a8d8b0 70%, #b0deb8 85%, #f0e8f0 100%)',
        backgroundAttachment: 'fixed'
      }}
    >
      <Header />
      <div className="h-20" />
      {caseStudy ? <CaseStudyTemplate caseStudy={caseStudy} /> : <CaseStudyNotFound />}
      <Footer />
    </div>
  );
}

export default CaseStudyPageEn;
