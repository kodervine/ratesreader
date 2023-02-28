import { Routes, Route } from "react-router-dom";
import CurrencyConverter from "../pages/CurrencyConverterPage";
import Home from "../pages/Home";
import News from "../pages/News";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/dashboard" element={} */}
      <Route path="/news" element={<News />} />
      <Route path="/converter" element={<CurrencyConverter />} />{" "}
    </Routes>
  );
}
