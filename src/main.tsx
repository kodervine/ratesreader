import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  FilterProvider,
  ForexApiProvider,
  NewsApiProvider,
  CurrencyConverterApiProvider,
  SelectedCurrencyProvider,
} from "contexts";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ForexApiProvider>
        <SelectedCurrencyProvider>
          <CurrencyConverterApiProvider>
            <FilterProvider>
              <NewsApiProvider>
                <App />
              </NewsApiProvider>
            </FilterProvider>
          </CurrencyConverterApiProvider>{" "}
        </SelectedCurrencyProvider>
      </ForexApiProvider>
    </Router>
  </React.StrictMode>
);
