import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage.tsx";
import BodyTypePage from "./pages/BodyTypePage.tsx";
import ScrollToTop from "../src/components/ScrollToTop.tsx";



export default function App() {
  return (
    <Router>
       <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/body-type" element={<BodyTypePage />} />

      </Routes>
    </Router>
  );
}
