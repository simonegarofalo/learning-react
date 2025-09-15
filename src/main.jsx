import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRoutes from "./routes/AppRoutes.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";


import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider>
      <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
