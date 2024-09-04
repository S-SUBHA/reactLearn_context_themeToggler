import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1 className="text-4xl bg-amber-400">Welcome to the...</h1>
    <App />
  </StrictMode>
);
