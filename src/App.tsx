import { Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import CaseStudyPage from './pages/CaseStudyPage';
import ContactPage from './pages/ContactPage';
import InfoNote from './components/InfoNote';
import InfoTab from './components/InfoTab';

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proyectos" element={<ProjectsPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/proyectos/:slug" element={<CaseStudyPage />} />
      </Routes>
      <InfoNote />
    </LanguageProvider>
  );
}

export default App;
