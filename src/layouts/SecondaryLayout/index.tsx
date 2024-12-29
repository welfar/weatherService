import React from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/SideBar";
import { ContactForm } from "../../features/ContactForm";
import "./SecondaryLayout.scss";

export const SecondaryLayout: React.FC<React.PropsWithChildren<{}>> = () => {
  const navigate = useNavigate();

  const handleCitySelect = (city: string) => {
    console.log(`Selected city: ${city}`);
  };

  const handleContactClick = () => {
    console.log(`Navegando`);
    navigate("/contact");
  };

  return (
    <div className="secondary-layout">
      <Sidebar
        onSelectCity={handleCitySelect}
        onContactClick={handleContactClick}
      />
      <main className="secondary-layout__content">
        <ContactForm />
      </main>
    </div>
  );
};
