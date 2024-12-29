import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useAppContext } from "../../context/AppContext";

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const { isAuthenticated, authChecked } = useAppContext();

  useEffect(() => {
    const userSession = cookies.get("userSession");

    if (!userSession || (authChecked && !isAuthenticated)) {
      navigate("/");
    }
  }, [authChecked, isAuthenticated, navigate]);

  return <>{children}</>;
};
