import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router";
import { App } from "./App.tsx";
import { initI18n } from "./i18n.ts";
import "./index.css";

initI18n();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <MantineProvider>
        <App />
      </MantineProvider>
    </HashRouter>
  </StrictMode>,
);
