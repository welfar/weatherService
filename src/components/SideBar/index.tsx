import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { SidebarProps } from "../../interfaces";
import "./SideBar.scss";

export const Sidebar: React.FC<SidebarProps> = ({ onSelectCity }) => {
  const { language, translations } = useAppContext();
  const navigate = useNavigate();

  const cities = translations[language].cities;

  const handleCityClick = (city: string) => {
    if (onSelectCity) {
      onSelectCity(city);
    }
    navigate(`/city/${city}`);
  };

  const handleContactClick = () => {
    navigate("/contact");
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
            <button className="sidebar-link" onClick={handleContactClick}>
              {language === "en" ? "Contact" : "Contacto"}
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
