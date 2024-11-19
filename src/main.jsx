import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import SuperBuyApp from "./SuperBuyApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SuperBuyApp />
  </StrictMode>
);
