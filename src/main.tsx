import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./scss/index.scss";
import "@fontsource/barlow/600.css";
import "@fontsource/fraunces/700.css";
import "@fontsource/fraunces/900.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
