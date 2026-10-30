import { createContext } from 'react';
import type { Language, LocalizedString } from '../types';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (localized?: LocalizedString | null) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
