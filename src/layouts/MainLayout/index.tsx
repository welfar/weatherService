import React from "react";
import { useAppContext } from "../../context/AppContext";
import { LogoutButton } from "../../components/LogoutButton";
import { Sidebar } from "../../components/SideBar";
import "./MainLayout.scss";

export const MainLayout: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const { language, setLanguage, translations, isAuthenticated } =
    useAppContext();

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

          {isAuthenticated && <LogoutButton />}
        </div>
      </header>

      <div className="main-layout__content">
        {isAuthenticated && <Sidebar />}

        <main className="main-layout__login">{children}</main>
      </div>
    </div>
  );
};
