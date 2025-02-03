import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ContactSection from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContactSection />
  </StrictMode>
);
