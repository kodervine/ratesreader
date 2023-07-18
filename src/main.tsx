import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { FilterProvider, ForexApiProvider, NewsApiProvider } from "contexts";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ForexApiProvider>
        <FilterProvider>
          <NewsApiProvider>
            <App />
          </NewsApiProvider>
        </FilterProvider>
      </ForexApiProvider>
    </Router>
  </React.StrictMode>
);
