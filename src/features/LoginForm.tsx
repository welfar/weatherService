import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";

export const LoginForm: React.FC = () => {
  const { language } = useAppContext();

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login data:", formData);
  };

  const labels = {
    en: { email: "Email", password: "Password", submit: "Login" },
    es: {
      email: "Correo Electrónico",
      password: "Contraseña",
      submit: "Iniciar Sesión",
    },
  };

  const text = labels[language as "en" | "es"];

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="login-form__field">
        <label htmlFor="email">{text.email}</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="login-form__field">
        <label htmlFor="password">{text.password}</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="login-form__submit">
        {text.submit}
      </button>
    </form>
  );
};
