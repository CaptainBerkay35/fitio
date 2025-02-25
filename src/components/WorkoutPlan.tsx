import React, { useEffect, useState } from "react";
import Button from "./Button.tsx";

export default function WorkoutPlan() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("workout-plan");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div>
      <div
        id="workout-plan"
        className={`flex flex-col items-center text-center font-montserrat transition-opacity duration-1000 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-xl mb-4">
          <span className="text-primary font-bold">
            Antrenman Programını Oluştur
          </span>{" "}
          <br />
          <span>Hemen spor yapmaya başla.</span>
        </div>
        <Button text="Spor yapmaya başla"  to="/workout"/>
      </div>
    </div>
  );
}
