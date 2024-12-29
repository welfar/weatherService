import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";

interface Translation {
  languageLabel: string;
  cities: string[];
  contact: string;
  errorContext: string;
  loginRequired: string;
}

interface AppContextProps {
  language: string;
  setLanguage: (language: string) => void;
  translations: Record<string, Translation>;
  isAuthenticated: boolean;
  authChecked: boolean;
  login: (email: string) => void;
  logout: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>("en");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authChecked, setAuthChecked] = useState<boolean>(false);

  const cookies = new Cookies();

  const translations: Record<string, Translation> = {
    en: {
      languageLabel: "Language:",
      errorContext: "useAppContext must be used within an AppProvider.",
      loginRequired: "Login is required.",
      cities: ["London", "Toronto", "Singapore"],
      contact: "Contact",
    },
    es: {
      languageLabel: "Idioma:",
      errorContext: "useAppContext debe usarse dentro de un AppProvider.",
      loginRequired: "Es necesario iniciar sesión.",
      cities: ["Londres", "Toronto", "Singapur"],
      contact: "Contacto",
    },
  };

  const login = (email: string) => {
    cookies.set("userSession", email, { path: "/" });
    setIsAuthenticated(true);
  };

  const logout = () => {
    cookies.remove("userSession", { path: "/" });
    setIsAuthenticated(false);
    setAuthChecked(false);
  };

  useEffect(() => {
    const userSession = cookies.get("userSession");
    setIsAuthenticated(!!userSession);
    setAuthChecked(true);
  }, []);

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        translations,
        isAuthenticated,
        authChecked,
        login,
        logout,
      }}
    >
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
