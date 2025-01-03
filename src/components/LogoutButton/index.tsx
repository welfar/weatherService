import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import "./LogoutButton.scss";

export const LogoutButton: React.FC = () => {
  const { logout, language } = useAppContext();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <button
      className="main-layout__logout"
      onClick={handleLogout}
      title={language === "en" ? "Log out" : "Cerrar sesión"}
    >
      {language === "en" ? "Log out" : "Cerrar sesión"}
    </button>
  );
};
