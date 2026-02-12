import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, supportedLanguages } from './index';

// Create Language Context
const LanguageContext = createContext();

// Language Provider Component
export const LanguageProvider = ({ children, defaultLanguage = 'en' }) => {
  const [language, setLanguage] = useState(defaultLanguage);

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('app-language');
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Change language and save to localStorage
  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
      localStorage.setItem('app-language', lang);
    }
  };

  // Get translation function
  const t = (key) => {
    const lang = translations[language] || translations.en;
    return key.split('.').reduce((obj, k) => obj?.[k] || key, lang);
  };

  const value = {
    language,
    setLanguage: changeLanguage,
    t,
    supportedLanguages,
    translations: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom Hook to use Language Context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

// HOC for connecting language to components
export const withLanguage = (Component) => {
  return (props) => {
    const language = useLanguage();
    return <Component {...props} {...language} />;
  };
};

export default LanguageContext;
