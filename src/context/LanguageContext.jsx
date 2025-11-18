import React, { createContext, useContext, useState, useMemo } from "react";

// Create the Context object
const LanguageContext = createContext();

// Custom Hook to consume the context
export const useLanguage = () => useContext(LanguageContext);

// Provider Component
export const LanguageProvider = ({ children }) => {
  // Initialize state from localStorage or default to 'EN'
  const [language, setLanguage] = useState(
    localStorage.getItem("docca-language") || "EN"
  );

  // Function to toggle the language and update localStorage
  const toggleLanguage = () => {
    setLanguage((prevLang) => {
      const newLang = prevLang === "EN" ? "PID" : "EN";
      localStorage.setItem("docca-language", newLang);
      return newLang;
    });
  };

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      language,
      toggleLanguage,
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
