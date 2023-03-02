import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NewsApiProvider } from "./contexts/NewsApiContext";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <NewsApiProvider>
        <App />
      </NewsApiProvider>
    </Router>
  </React.StrictMode>
);
