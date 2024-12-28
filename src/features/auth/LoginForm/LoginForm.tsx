import React, { useEffect, useState } from "react";
import { useAppContext } from "../../../context/AppContext";
import "./LoginForm.scss";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

export const LoginForm: React.FC = () => {
  const { language } = useAppContext();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isValidationActive, setIsValidationActive] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (isValidationActive) {
      validateField(name, value);
    }
  };

  const validateField = (name: string, value: string) => {
    let error = "";

    if (name === "email") {
      if (!value) {
        error = text.emailRequired;
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = text.emailInvalid;
      }
    } else if (name === "password") {
      if (!value) {
        error = text.passwordRequired;
      }
    }

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login data:", formData);
  };

  const labels = {
    en: {
      email: "Email",
      password: "Password",
      submit: "Login",
      emailRequired: "Email is required",
      emailInvalid: "Email is invalid",
      passwordRequired: "Password is required",
    },
    es: {
      email: "Correo Electrónico",
      password: "Contraseña",
      submit: "Iniciar Sesión",
      emailRequired: "El correo electrónico es obligatorio",
      emailInvalid: "El correo electrónico no es válido",
      passwordRequired: "La contraseña es obligatoria",
    },
  };

  const text = labels[language as "en" | "es"];

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const isFormValid =
    formData.email &&
    formData.password &&
    !formErrors.email &&
    !formErrors.password;

  useEffect(() => {
    setIsValidationActive(true);

    if (isValidationActive) {
      validateField("email", formData.email);
      validateField("password", formData.password);
    }
  }, [language]);

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
        {formErrors.email && <span className="error">{formErrors.email}</span>}
      </div>
      <div className="login-form__field">
        <label htmlFor="password">{text.password}</label>
        <div className="login-form__password-container">
          <input
            id="password"
            name="password"
            type={passwordVisible ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="login-form__toggle-password"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </div>
        {formErrors.password && (
          <span className="error">{formErrors.password}</span>
        )}
      </div>
      <button
        type="submit"
        className="login-form__submit"
        disabled={!isFormValid}
      >
        {text.submit}
      </button>
    </form>
  );
};
