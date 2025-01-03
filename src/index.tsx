import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./Routes/App";
import { AppProvider } from "./context/AppContext";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);

reportWebVitals();
