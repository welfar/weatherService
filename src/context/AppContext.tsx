import React, { createContext, useContext, useState } from "react";

interface AppContextProps {
  language: string;
  setLanguage: (language: string) => void;
  translations: Record<string, Record<string, string>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>("en");

  const translations = {
    en: {
      languageLabel: "Language:",
      errorContext: "useAppContext must be used within an AppProvider.",
    },
    es: {
      languageLabel: "Idioma:",
      errorContext: "useAppContext debe usarse dentro de un AppProvider.",
    },
  };

  return (
    <AppContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);

  if (!context) {
    const fallbackLanguage = "en";

    const errorTranslations = {
      en: "useAppContext must be used within an AppProvider.",
      es: "useAppContext debe usarse dentro de un AppProvider.",
    };
    throw new Error(errorTranslations[fallbackLanguage]);
  }

  return context;
};
