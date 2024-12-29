import React, { useState } from "react";
import "./ContactForm.scss";
import { useAppContext } from "../../context/AppContext";

export const ContactForm: React.FC = () => {
  const { language } = useAppContext();
  const [formData, setFormData] = useState({
    name: "",
    birthDate: "",
    city: "",
    email: "",
    phone: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    birthDate: "",
    city: "",
    email: "",
    phone: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name: string, value: string) => {
    let error = "";

    if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      error = "El correo electrónico no es válido.";
    } else if (name === "phone" && !/^\d+$/.test(value)) {
      error = "El teléfono solo debe contener números.";
    } else if (!value) {
      error = "Este campo es obligatorio.";
    }

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const labels = {
    en: {
      titleContactForm: "Contact Form",
      successMessage: "Submitted form",
      name: "Name",
      birthdate: "Birthdate",
      city: "City",
      email: "Email",
      phone: "Phone",
      submit: "Send",
    },
    es: {
      titleContactForm: "Formulario de Contacto",
      successMessage: "Formulario enviado",
      name: "Nombre",
      birthdate: "Fecha de nacimiento",
      city: "Ciudad",
      email: "Correo Electrónico",
      phone: "Teléfono",
      submit: "Enviar",
    },
  };

  const text = labels[language as "en" | "es"];

  const isFormValid =
    Object.values(formData).every((value) => value) &&
    Object.values(formErrors).every((error) => !error);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      setIsSubmitted(true);

      setTimeout(() => {
        setFormData({
          name: "",
          birthDate: "",
          city: "",
          email: "",
          phone: "",
        });
        setFormErrors({
          name: "",
          birthDate: "",
          city: "",
          email: "",
          phone: "",
        });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>{text.titleContactForm}</h2>
      {isSubmitted && (
        <p className="success-message">¡{text.successMessage}!</p>
      )}

      <label>
        {text.name}:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {formErrors.name && <span className="error">{formErrors.name}</span>}
      </label>

      <div className="contact-form__sub-container">
        <label>
          {text.birthdate}:
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            max={today}
            onChange={handleChange}
          />
          {formErrors.birthDate && (
            <span className="error">{formErrors.birthDate}</span>
          )}
        </label>

        <label>
          {text.city}:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          {formErrors.city && <span className="error">{formErrors.city}</span>}
        </label>
      </div>

      <label>
        {text.email}:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {formErrors.email && <span className="error">{formErrors.email}</span>}
      </label>

      <label>
        {text.phone}:
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {formErrors.phone && <span className="error">{formErrors.phone}</span>}
      </label>

      <button type="submit" disabled={!isFormValid}>
        {text.submit}
      </button>
    </form>
  );
};
