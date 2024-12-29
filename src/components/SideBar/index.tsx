import React from "react";
import { useAppContext } from "../../context/AppContext";
import "./SideBar.scss";

interface SidebarProps {
  onSelectCity?: (city: string) => void;
  onContactClick?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  onSelectCity,
  onContactClick,
}) => {
  const { language, translations } = useAppContext();

  const cities = translations[language].cities;

  const handleCityClick = (city: string) => {
    if (onSelectCity) {
      onSelectCity(city);
    }
  };

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          {cities.map((city, index) => (
            <li key={index}>
              <button
                className="sidebar-link"
                onClick={() => handleCityClick(city)}
              >
                {city}
              </button>
            </li>
          ))}

          <li>
            <button className="sidebar-link" onClick={onContactClick}>
              {language === "en" ? "Contact" : "Contacto"}
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
