/* eslint-disable react/jsx-no-constructed-context-values */ // todo get rid of this line
import { useState } from 'react';
import { Router } from './router/router';
import { LangContext } from './context/langContext';
import { Language } from './types/types';

export function App() {
  const [lang, setLang] = useState<Language>('ru');

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Router />
    </LangContext.Provider>
  );
}
