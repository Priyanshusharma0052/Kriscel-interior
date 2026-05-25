import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1100,
  offset: 40,
  once: false,
  mirror: true,
  easing: "ease-out-cubic",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
