import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations } from '../constants/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = typeof window !== 'undefined' ? localStorage.getItem('language') : null;
      if (saved === 'es' || saved === 'en') return saved as Language;
      if (typeof window !== 'undefined' && window.location.pathname.includes('-en')) return 'en';
    } catch (e) {
      // ignore
    }
    return 'es';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
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
