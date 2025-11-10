{/*import React, { createContext, useContext, useState } from "react";

// Create Context
const LanguageContext = createContext();

// Create Provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Default language is English

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom Hook to use language anywhere
export const useLanguage = () => useContext(LanguageContext);
