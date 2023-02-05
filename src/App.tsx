import { useState } from "react";
import "./App.css";
import "@tremor/react/dist/esm/tremor.css";
import Home from "./pages/Home";
function App() {
  return (
    <div className="text-2xl bg-gray-100 font-bold">
      <Home />
    </div>
  );
}

export default App;
