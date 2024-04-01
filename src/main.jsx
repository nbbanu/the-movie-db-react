import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./style/global.css";
import "./index.scss";
import "./style/detail.scss";
import "./style/header.css";
import "./style/dropdown.css";
import "./style/banner.css";
import "./style/footer.css";
import "./style/modal.css";
import "./style/shortcutBar.css";



import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
