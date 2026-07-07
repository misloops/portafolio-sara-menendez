import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Language, translations } from '../constants/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  const getLangFromPath = (pathname: string): Language =>
    pathname.includes('-en') ? 'en' : 'es';

  const [language, setLanguageState] = useState<Language>(() =>
    getLangFromPath(typeof window !== 'undefined' ? window.location.pathname : '')
  );

  // Sync language whenever the route changes
  useEffect(() => {
    setLanguageState(getLangFromPath(location.pathname));
  }, [location.pathname]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (path: string, fallback = ''): string => {
    const keys = path.split('.');
    let current: any = translations[language];

    for (const key of keys) {
      current = current?.[key];
      if (current === undefined) return fallback;
    }

    return current || fallback;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
