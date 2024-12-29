import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useAppContext } from "../../context/AppContext";

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const { isAuthenticated } = useAppContext();

  useEffect(() => {
    const userSession = cookies.get("userSession");

    if (!userSession || !isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return <>{children}</>;
};
