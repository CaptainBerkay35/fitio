import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage.tsx";
import BodyTypePage from "./pages/BodyTypePage.tsx";
import NutritionPage from "./pages/NutritionPage.tsx";
import RoadmapPage from "./pages/RoadmapPage.tsx";
import WorkoutPlanPage from "./pages/WorkoutPlanPage.tsx";
import ScrollToTop from "../src/components/ScrollToTop.tsx";
import WorkoutPage from "./pages/WorkoutPage.tsx";
import WorkoutDetailPage from "./pages/workoutPages/WorkoutDetailPage.tsx";
import FoodListPage from "./pages/FoodListPage.tsx";





export default function App() {
  return (
    <Router>
       <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/body-type" element={<BodyTypePage />} />
        <Route path="/nutrition" element={<NutritionPage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/workoutPlan" element={<WorkoutPlanPage />} />
        <Route path="/workout" element={<WorkoutPage />} />
        <Route path="/workout/:program" element={<WorkoutDetailPage />} />
        <Route path="/foodList" element={<FoodListPage />} />



      </Routes>
    </Router>
  );
}
