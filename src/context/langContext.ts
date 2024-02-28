import { createContext } from 'react';
import { Language } from '../types/types';

type LangContextType = {
  lang: Language;
  setLang: React.Dispatch<React.SetStateAction<Language>> | null;
};

export const LangContext = createContext<LangContextType>({
  lang: 'en',
  setLang: null,
});
