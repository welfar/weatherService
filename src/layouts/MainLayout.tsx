import React from "react";
import { useAppContext } from "../context/AppContext";

export const MainLayout: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const { language, setLanguage, translations } = useAppContext();

  return (
    <div className="main-layout">
      <header className="main-layout__header">
        <h1 className="main-layout__title">Weather App</h1>
        <div className="main-layout__language-selector">
          <label htmlFor="language-select">
            {translations[language].languageLabel}
          </label>
          <select
            id="language-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
      </header>

      <main className="main-layout__login">{children}</main>
    </div>
  );
};
