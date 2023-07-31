import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { FilterProvider, ForexApiProvider, NewsApiProvider } from "contexts";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CurrencyConverterApiProvider } from "contexts/currencyConverterContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ForexApiProvider>
        <CurrencyConverterApiProvider>
          <FilterProvider>
            <NewsApiProvider>
              <App />
            </NewsApiProvider>
          </FilterProvider>
        </CurrencyConverterApiProvider>
      </ForexApiProvider>
    </Router>
  </React.StrictMode>
);
