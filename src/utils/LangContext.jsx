// LangContext.js
import React, { createContext, useState, useContext } from 'react';

const LangContext = createContext();

export const useLangContext = () => useContext(LangContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(true); // 'en' for English, 'fr' for French, etc.

  return (
    <LangContext.Provider value={{ language, setLanguage }}>
      {children}
    </LangContext.Provider>
  );
};
