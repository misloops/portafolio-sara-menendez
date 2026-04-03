import { useLanguage } from '../context/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => setLanguage('es')}
        aria-label="Español"
        className={`nav-link ${language === 'es' ? 'active' : ''}`}
      >
        ES
      </button>
      <span aria-hidden="true">/</span>
      <button
        onClick={() => setLanguage('en')}
        aria-label="English"
        className={`nav-link ${language === 'en' ? 'active' : ''}`}
      >
        EN
      </button>
    </div>
  );
}
