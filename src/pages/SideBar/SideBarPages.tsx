import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../../layouts/MainLayout";
import { SecondaryLayout } from "../../layouts/SecondaryLayout";
import { ContactForm } from "../../features/ContactForm";
import { CityWeather } from "../../features/CityWeather";
import { NotFoundPage } from "../NotFound/NotFoundPage";

export const SideBarPages: React.FC = () => {
  return (
    <MainLayout>
      <SecondaryLayout>
        <Routes>
          <Route path="contact" element={<ContactForm />} />
          <Route path="city/:cityName" element={<CityWeather />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </SecondaryLayout>
    </MainLayout>
  );
};
