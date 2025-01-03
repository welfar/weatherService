import React from "react";
import { ValidationMessageProps } from "../../interfaces";
import "./ValidationMessage.scss";

export const ValidationMessage: React.FC<ValidationMessageProps> = ({
  message,
  type,
}) => {
  return (
    <div
      className={`validation-message ${type === "error" ? "error" : "success"}`}
    >
      <p>{message}</p>
    </div>
  );
};
