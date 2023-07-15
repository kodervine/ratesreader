import { CurrencyConverterPage, DashboardPage, NewsPage } from "pages";
import { Routes, Route } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/converter" element={<CurrencyConverterPage />} />{" "}
    </Routes>
  );
}
