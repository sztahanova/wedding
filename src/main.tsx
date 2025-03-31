import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router";
import { ParallaxProvider } from "react-scroll-parallax";
import { App } from "./App.tsx";
import { initI18n } from "./i18n.ts";
import "./index.css";

initI18n();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <MantineProvider>
        <ParallaxProvider>
          <App />
        </ParallaxProvider>
      </MantineProvider>
    </HashRouter>
  </StrictMode>,
);
