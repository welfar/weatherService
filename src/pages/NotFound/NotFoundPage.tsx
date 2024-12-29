import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.scss";

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Página no encontrada.</p>
      <button onClick={handleGoHome}>Volver al Inicio</button>
    </div>
  );
};
