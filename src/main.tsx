import "@radix-ui/themes/styles.css";
import "./globals.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { Theme } from "@radix-ui/themes";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>
);
