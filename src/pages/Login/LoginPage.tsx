import React from "react";
import { MainLayout } from "../../layouts/MainLayout/MainLayout";
import { LoginForm } from "../../features/auth/LoginForm/LoginForm";

export const LoginPage: React.FC = () => {
  return (
    <MainLayout>
      <LoginForm />
    </MainLayout>
  );
};
