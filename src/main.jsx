import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ApiProvider } from "./context/ApiContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <ApiProvider>
        <App />
      </ApiProvider>
    </ThemeProvider>
  </StrictMode>,
);
