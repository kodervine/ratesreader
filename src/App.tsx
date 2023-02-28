import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import AppRoutes from "./routes/AppRoutes";
function App() {
  return (
    <div className="text-2xl bg-gray-100 font-bold">
      <AppRoutes />
    </div>
  );
}

export default App;
