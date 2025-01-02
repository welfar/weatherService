import React, { useEffect, useState } from "react";
import "./ContactForm.scss";
import { useAppContext } from "../../context/AppContext";
import { ValidationMessage } from "../../components/ValidationMessage";

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
  const [isValidationActive, setIsValidationActive] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);

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
    } else if (name === "phone") {
      if (!value) {
        error = text.fieldRequired;
      } else if (!/^\d+$/.test(value)) {
        error = text.invalidNumber;
      }
    } else if (name === "city") {
      if (!value) {
        error = text.fieldRequired;
      }
    } else if (!value) {
      error = text.fieldRequired;
    }

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
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
      emailRequired: "Email is required",
      emailInvalid: "Email is invalid",
      invalidNumber: "The phone should only contain numbers.",
      fieldRequired: "This field is required.",
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
      emailRequired: "El correo electrónico es obligatorio",
      emailInvalid: "El correo electrónico no es válido",
      invalidNumber: "El teléfono solo debe contener números.",
      fieldRequired: "Este campo es obligatorio.",
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

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    setIsValidationActive(true);

    if (isValidationActive) {
      validateField("name", formData.name);
      validateField("email", formData.email);
      validateField("phone", formData.phone);
      validateField("city", formData.city);
    }
  }, [language]);

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>{text.titleContactForm}</h2>
      {isSubmitted && (
        <ValidationMessage message={text.successMessage} type="success" />
      )}

      <label>
        {text.name}:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {formErrors.name && (
          <ValidationMessage message={formErrors.name} type="error" />
        )}
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
            <ValidationMessage message={formErrors.birthDate} type="error" />
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
          {formErrors.city && (
            <ValidationMessage message={formErrors.city} type="error" />
          )}
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
        {formErrors.email && (
          <ValidationMessage message={formErrors.email} type="error" />
        )}
      </label>

      <label>
        {text.phone}:
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {formErrors.phone && (
          <ValidationMessage message={formErrors.phone} type="error" />
        )}
      </label>

      <button type="submit" disabled={!isFormValid}>
        {text.submit}
      </button>
    </form>
  );
};
