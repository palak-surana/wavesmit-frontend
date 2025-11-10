import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext"; // ✅ only here
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LanguageProvider>   {/* ✅ wraps your whole app */}
      <App />
    </LanguageProvider>
  </BrowserRouter>
);
