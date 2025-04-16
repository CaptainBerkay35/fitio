import React, { useState } from "react";
import { FaMale, FaFemale } from "react-icons/fa"; // FontAwesome ikonları
import SliderInput from "./SliderInput.tsx"; // SliderInput Component'ini import ettik

export default function FatPercentageCalculator() {
  const [gender, setGender] = useState("male"); // Cinsiyet durumu
  const [height, setHeight] = useState(170); // Boy
  const [weight, setWeight] = useState(70); // Kilo
  const [neck, setNeck] = useState(40); // Boyun Çevresi
  const [waist, setWaist] = useState(80); // Bel Çevresi
  const [hip, setHip] = useState(90); // Kalça Çevresi
  const [shoulder, setShoulder] = useState(100); // Omuz Çevresi

  const calculateBodyFat = () => {
    let bodyFatPercentage = 0;

    if (gender === "male") {
      // Erkeklerde yağ oranı hesaplama formülü
      bodyFatPercentage =
        495 /
          (1.0324 -
            0.19077 * Math.log10(waist - neck) +
            0.15456 * Math.log10(height)) -
        450;
    } else if (gender === "female") {
      // Kadınlarda yağ oranı hesaplama formülü
      bodyFatPercentage =
        495 /
          (1.29579 -
            0.35004 * Math.log10(waist + hip - neck) +
            0.221 * Math.log10(height)) -
        450;
    }

    return bodyFatPercentage.toFixed(2);
  };

  const calculateLeanMass = (bodyFatPercentage) => {
    // Yağsız Kütle = Kilo - (Yağ Oranı * Kilo / 100)
    return (weight - (bodyFatPercentage * weight) / 100).toFixed(2);
  };

  // Bel ve Kalça Oranı hesaplama
  const belToHipRatio = (waist / hip).toFixed(2);

  // Omuz ve Bel Oranı hesaplama
  const shoulderToWaistRatio = (shoulder / waist).toFixed(2);

  const bodyFatPercentage = calculateBodyFat();
  const leanMass = calculateLeanMass(bodyFatPercentage);

  return (
    <div className="p-6 bg-white rounded-lg shadow-xl font-montserrat">
      <h3 className="text-xl font-bold mb-4">Yağ Oranı Hesaplama</h3>

      {/* Cinsiyet Seçimi */}
      <div className="mb-4 flex items-center ">
        <span className="font-semibold">Cinsiyet Seçin:</span>
        <button
          onClick={() => setGender("male")}
          className={`ml-2 px-4 py-2 rounded-md flex flex-col items-center justify-center border border-primary ${
            gender === "male"
              ? "bg-primary text-white"
              : "bg-white text-primary"
          }`}
        >
          <FaMale size={32} color={gender === "male" ? "white" : "#00d172"} />
          Erkek
        </button>
        <button
          onClick={() => setGender("female")}
          className={`ml-2 px-4 py-2 rounded-md flex flex-col items-center justify-center border border-primary ${
            gender === "female"
              ? "bg-primary text-white"
              : "bg-white text-primary"
          }`}
        >
          <FaFemale
            size={32}
            color={gender === "female" ? "white" : "#00d172"}
          />
          Kadın
        </button>
      </div>

      <div className="flex flex-col md:flex md:flex-row  gap-8 mb-4 md:mb-0">
        <div className="flex  flex-col flex-1 gap-4 h-full mb-4 md:mb-0">
          {/* SliderInput Component'lerini Burada Kullanıyoruz */}
          <SliderInput
            label="Boy"
            value={height}
            min={100}
            max={250}
            unit={"cm"}
            onChange={(e) => setHeight(Number(e.target.value))}
          />
          <SliderInput
            label="Kilo"
            value={weight}
            min={40}
            max={200}
            unit={"kg"}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
          <SliderInput
            label="Boyun Çevresi"
            value={neck}
            min={20}
            max={100}
            unit={"cm"}
            onChange={(e) => setNeck(Number(e.target.value))}
          />
          <SliderInput
            label="Bel Çevresi"
            value={waist}
            min={50}
            max={150}
            unit={"cm"}
            onChange={(e) => setWaist(Number(e.target.value))}
          />

          {/* Kadınlar için Kalça Çevresi */}
          {gender === "female" && (
            <SliderInput
              label="Kalça Çevresi"
              value={hip}
              min={50}
              max={150}
              unit={"cm"}
              onChange={(e) => setHip(Number(e.target.value))}
            />
          )}

          {/* Erkekler için Omuz Çevresi */}
          {gender === "male" && (
            <SliderInput
              label="Omuz Çevresi"
              value={shoulder}
              min={50}
              max={150}
              unit={"cm"}
              onChange={(e) => setShoulder(Number(e.target.value))}
            />
          )}
        </div>

        <div className="flex flex-col flex-1 h-full font-montserrat">
          {/* Sonuç */}
          <div className="px-4 py-2 md:px-8 md:py-4 bg-gray-100 rounded-lg flex-grow">
            <h1 className="mb-4 md:mb-8 font-bold text-2xl">Karne</h1>
            <div className="mb-4">
              <p className="font-semibold text-xl">Vücut Yağ Oranı</p>
              <p className="font-bold text-2xl">{bodyFatPercentage}%</p>
            </div>

            {/* Cinsiyete göre ideal yüzdeyi değiştirme */}
            <p className="text-gray-500 mb-4">
              {gender === "female"
                ? "%22 ve altı ideal kabul edilir"
                : "%15 ve altı ideal kabul edilir"}
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items center">
                <p className="text-lg font-medium">Yağsız Kütle </p>
                <span className="font-bold text-lg">{leanMass} kg</span>
              </div>

              <div className="flex flex-col ">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-medium">
                    {gender === "female"
                      ? "Bel ve Kalça Oranı"
                      : "Omuz ve Bel Oranı"}
                  </p>
                  <span className="font-bold text-lg">
                    {gender === "female" ? belToHipRatio : shoulderToWaistRatio}
                  </span>
                </div>
                <p className="text-gray-500 font-medium mb-4">
                  {gender === "female"
                    ? "İdeali 0.7'ye yakındır"
                    : "İdeali 1.6'ya yakındır"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
