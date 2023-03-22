import Home from "./components/Pages/home";
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import SearchProperty from "./components/Pages/SearchProperty";
import NoPage from "./components/Pages/noPage.Jsx";
import Services from "./components/services/Services";

export default function App() {
  return (
    <div>
      {" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/searchproperty" element={<SearchProperty />} />
        <Route path="/404" element={<noPage />} />
        <Route path="*" element={<noPage />} />
      </Routes>
    </div>
  );
}
