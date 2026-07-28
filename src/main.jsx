import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";

// to not showup specific  warning
const originalWarn = console.warn;
console.warn = (...args) => {
  const msg = String(args[0]);

  if (
    msg.includes("PCFSoftShadowMap has been deprecated") ||
    msg.includes("THREE.Clock: This module has been deprecated")
  ) {
    return;
  }

  originalWarn(...args);
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
