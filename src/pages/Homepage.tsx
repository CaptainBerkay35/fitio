import React, { useRef,useEffect } from "react";
import Layout from "../components/Layout.tsx";
import Banner from "../components/Banner.tsx";
import Services from "../components/Services.tsx";
import Information from "../components/Information.tsx";
import Calculator from "../components/Calculator.tsx";
import WorkoutPlan from "../components/WorkoutPlan.tsx";
import { useLocation } from "react-router-dom";


export default function HomePage() {
  const calculatorRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#calculator" && calculatorRef.current) {
      calculatorRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <Layout>
      <Banner />
      <Information />
      <Services />
      <div ref={calculatorRef} id="calculator">
        <Calculator />
      </div>
      <WorkoutPlan />
    </Layout>
  );
}