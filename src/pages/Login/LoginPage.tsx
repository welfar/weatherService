import React from "react";
import { MainLayout } from "../../layouts/MainLayout";
import { LoginForm } from "../../features/auth/LoginForm";

export const LoginPage: React.FC = () => {
  return (
    <MainLayout>
      <LoginForm />
    </MainLayout>
  );
};
