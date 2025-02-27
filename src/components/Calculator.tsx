import { useState } from "react";
import React from "react";
import { FaFire, FaDumbbell, FaPercentage } from "react-icons/fa"; // İkonlar
import FatPercentage from "./calculatorElements/FatPercentageCalculator.tsx";
import BodyType from "./calculatorElements/BodyType.tsx";
import CalorieCalculator from "./calculatorElements/CalorieCalculator.tsx";

export default function Calculator() {
  const [activeCalculator, setActiveCalculator] = useState("kalori");

  return (
    <div className="container mx-auto ">
      <h2 className="font-montserrat text-4xl font-semibold text-center text-primary mb-8">
        Hesaplayıcılar
      </h2>

      {/* Menü Container */}
      <div className="flex  sm:flex-row justify-center items-center gap-2 sm:gap-6 mb-2 sm:mb-6">
        {/* Vücut Tipi Hesaplama */}
        <div
          onClick={() => setActiveCalculator("vucut")}
          className={`flex flex-col items-center justify-center w-full gap-2  h-28 sm:w-40  rounded-lg cursor-pointer transition-all ${
            activeCalculator === "vucut"
              ? "bg-primary text-white shadow-lg"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
        >
          <FaDumbbell
            size={32}
            color={activeCalculator === "vucut" ? "white" : "black"}
          />
          <span className="text-lg font-semibold text-center">Vücut Tipi</span>
        </div>

        {/* Kalori Hesaplama */}
        <div
          onClick={() => setActiveCalculator("kalori")}
          className={`flex flex-col items-center justify-center w-full gap-2 h-28 sm:w-40 rounded-lg cursor-pointer transition-all ${
            activeCalculator === "kalori"
              ? "bg-primary text-white shadow-lg"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
        >
          <FaFire
            size={32}
            color={activeCalculator === "kalori" ? "white" : "black"}
          />
          <span className="text-lg font-semibold text-center">
            Kalori İhtiyacı
          </span>
        </div>

        {/* Yağ Oranı Hesaplama */}
        <div
          onClick={() => setActiveCalculator("yag")}
          className={`flex flex-col items-center justify-center w-full gap-2  h-28 sm:w-40   rounded-lg cursor-pointer transition-all ${
            activeCalculator === "yag"
              ? "bg-primary text-white shadow-lg"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
        >
          <FaPercentage
            size={32}
            color={activeCalculator === "yag" ? "white" : "black"}
          />
          <span className="text-lg font-semibold text-center">Yağ Oranı</span>
        </div>
      </div>

      {/* İçerik Alanı */}
      <div className="bg-white shadow-lg rounded-lg ">
        {activeCalculator === "kalori" && <CalorieCalculator />}
        {activeCalculator === "vucut" && <BodyType />}
        {activeCalculator === "yag" && <FatPercentage />}
      </div>
    </div>
  );
}
