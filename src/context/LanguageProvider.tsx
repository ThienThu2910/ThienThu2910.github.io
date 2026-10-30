import { useEffect, useState, type ReactNode, type FC } from 'react';
import type { Language, LocalizedString } from '../types';
import { LanguageContext } from './LanguageContext';

export const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('thien-thu-portfolio-lang') as Language | null;
    return saved === 'en' || saved === 'vi' ? saved : 'vi';
  });

  useEffect(() => {
    localStorage.setItem('thien-thu-portfolio-lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'vi' ? 'en' : 'vi'));
  };

  const t = (localized?: LocalizedString | null): string => {
    if (!localized) return '';
    return localized[language] || localized.vi || localized.en || '';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
