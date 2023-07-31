import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  FilterNewsTabProvider,
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
            <FilterNewsTabProvider>
              <NewsApiProvider>
                <App />
              </NewsApiProvider>
            </FilterNewsTabProvider>
          </CurrencyConverterApiProvider>{" "}
        </SelectedCurrencyProvider>
      </ForexApiProvider>
    </Router>
  </React.StrictMode>
);
