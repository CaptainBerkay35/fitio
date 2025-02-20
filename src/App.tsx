import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage.tsx";
import BodyTypePage from "./pages/BodyTypePage.tsx";
import NutritionPage from "./pages/NutritionPage.tsx";
import RoadmapPage from "./pages/RoadmapPage.tsx";
import WorkoutPlanPage from "./pages/WorkoutPlanPage.tsx";
import ScrollToTop from "../src/components/ScrollToTop.tsx";



export default function App() {
  return (
    <Router>
       <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/body-type" element={<BodyTypePage />} />
        <Route path="/nutrition" element={<NutritionPage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/workout" element={<WorkoutPlanPage />} />



      </Routes>
    </Router>
  );
}
