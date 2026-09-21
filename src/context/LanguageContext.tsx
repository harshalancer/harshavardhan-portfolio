'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Translations, SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, getTranslations } from '../translations';

interface LanguageContextType {
  language: Language;
  translations: Translations;
  setLanguage: (lang: Language) => void;
  availableLanguages: typeof SUPPORTED_LANGUAGES;
}

const STORAGE_KEY = 'hv_portfolio_language';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (savedLang && ['en', 'ta', 'ml', 'hi'].includes(savedLang)) {
        setLanguageState(savedLang);
        document.documentElement.lang = savedLang;
      } else {
        document.documentElement.lang = DEFAULT_LANGUAGE;
      }
    } catch {
      // LocalStorage unavailable (e.g. private mode or disabled)
      document.documentElement.lang = DEFAULT_LANGUAGE;
    }
    setMounted(true);
  }, []);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // LocalStorage unavailable
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLang;
    }
  };

  const currentTranslations = getTranslations(language);

  return (
    <LanguageContext.Provider
      value={{
        language,
        translations: currentTranslations,
        setLanguage,
        availableLanguages: SUPPORTED_LANGUAGES,
      }}
    >
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
