import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/Login/LoginPage";
import { SideBarPages } from "../pages/SideBar/SideBarPages";
import { NotFoundPage } from "../pages/NotFound/NotFoundPage";
import { ProtectedRoute } from "../features/ProtectedRoute";
import "../App.scss";

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <SideBarPages />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};
