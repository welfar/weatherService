import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/Login/LoginPage";
import { ContactPage } from "../pages/Contact/ContactPage";
import "../App.scss";
import { NotFoundPage } from "../pages/NotFound/NotFoundPage";

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="contact-us" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};
