import { useLanguage } from '../context/LanguageContext';
import { useNavigate, useLocation } from 'react-router-dom';

export function LanguageSwitcher() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const getLocalizedPath = (targetLang: 'es' | 'en'): string => {
    const currentPath = location.pathname;

    // Map of Spanish paths to English paths
    const pathMap: { [key: string]: { es: string; en: string } } = {
      '/': { es: '/', en: '/home-en' },
      '/wordpress': { es: '/wordpress', en: '/wordpress-en' },
      '/proyectos': { es: '/proyectos', en: '/proyectos-en' },
      '/contacto': { es: '/contacto', en: '/contacto-en' },
      '/sobre-mi': { es: '/sobre-mi', en: '/sobre-mi-en' },
      '/home-en': { es: '/', en: '/home-en' },
      '/wordpress-en': { es: '/wordpress', en: '/wordpress-en' },
      '/proyectos-en': { es: '/proyectos', en: '/proyectos-en' },
      '/contacto-en': { es: '/contacto', en: '/contacto-en' },
      '/sobre-mi-en': { es: '/sobre-mi', en: '/sobre-mi-en' },
    };

    // Check for case study routes (dynamic params)
    if (currentPath.startsWith('/proyectos/') || currentPath.startsWith('/proyectos-en/')) {
      const slug = currentPath.split('/').pop();
      return targetLang === 'es' ? `/proyectos/${slug}` : `/proyectos-en/${slug}`;
    }

    // Find the mapped path or return current path if not found
    return pathMap[currentPath]?.[targetLang] || currentPath;
  };

  const handleLanguageChange = (targetLang: 'es' | 'en') => {
    if (language === targetLang) return;
    const newPath = getLocalizedPath(targetLang);
    navigate(newPath);
  };

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => handleLanguageChange('es')}
        aria-label="Español"
        className={`nav-link ${language === 'es' ? 'active' : ''}`}
      >
        ES
      </button>
      <span aria-hidden="true">/</span>
      <button
        onClick={() => handleLanguageChange('en')}
        aria-label="English"
        className={`nav-link ${language === 'en' ? 'active' : ''}`}
      >
        EN
      </button>
    </div>
  );
}
