import React, { useState } from "react";
import { FaMale, FaFemale } from "react-icons/fa";
import SliderInput from "./SliderInput.tsx";

export default function CalorieCalculator() {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState(25);
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [activityLevel, setActivityLevel] = useState(1.2);
  const [goal, setGoal] = useState("maintain");

  const calculateCalories = () => {
    let bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    return { bmr, dailyCalories: bmr * activityLevel };
  };

  const calculateMacros = (calories) => {
    let proteinRatio, fatRatio, carbRatio;

    switch (goal) {
      case "lose":
        proteinRatio = 0.4;
        fatRatio = 0.3;
        carbRatio = 0.3;
        break;
      case "gain":
        proteinRatio = 0.3;
        fatRatio = 0.2;
        carbRatio = 0.5;
        break;
      case "bulk":
        proteinRatio = 0.25;
        fatRatio = 0.25;
        carbRatio = 0.5;
        break;
      default:
        proteinRatio = 0.3;
        fatRatio = 0.25;
        carbRatio = 0.45;
    }

    return {
      protein: ((calories * proteinRatio) / 4).toFixed(1),
      fat: ((calories * fatRatio) / 9).toFixed(1),
      carbs: ((calories * carbRatio) / 4).toFixed(1),
    };
  };

  const { bmr, dailyCalories } = calculateCalories();
  const macros = calculateMacros(dailyCalories);

  return (
    <div className="p-6 bg-white rounded-lg shadow-xl font-montserrat">
      <h3 className="text-xl font-bold mb-4">Kalori İhtiyacı Hesaplama</h3>

      {/* Cinsiyet Seçimi */}
      <div className="mb-4 flex items-center">
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

      <div className="flex flex-col md:flex md:flex-row gap-8 mb-4 md:mb-0">
        <div className="flex flex-col flex-1 gap-4 h-full mb-4 md:mb-0">
          
          <SliderInput
            label="Boy"
            value={height}
            min={100}
            max={250}
            unit="cm"
            onChange={(e) => setHeight(Number(e.target.value))}
          />
          <SliderInput
            label="Kilo"
            value={weight}
            min={40}
            max={200}
            unit="kg"
            onChange={(e) => setWeight(Number(e.target.value))}
          />

          {/* Yaş Girişi */}
          <div>
            <label className="block mb-2 font-sansserif">Yaş</label>
            <input
              type="number"
              value={age}
              min={10}
              max={100}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Aktivite Seviyesi */}
          <div>
            <label className="block font-semibold mb-2">
              Günlük Hareketlilik Seviyesi:
            </label>
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(Number(e.target.value))}
              className="w-full p-2 border rounded-md"
            >
              <option value={1.2}>Sedanter (Hareketsiz)</option>
              <option value={1.375}>
                Az hareketli (Haftada 1-3 gün egzersiz)
              </option>
              <option value={1.55}>
                Orta derece hareketli (Haftada 3-5 gün egzersiz)
              </option>
              <option value={1.725}>
                Çok hareketli (Haftada 6-7 gün egzersiz)
              </option>
              <option value={1.9}>Aşırı hareketli (Profesyonel sporcu)</option>
            </select>
          </div>

          {/* Hedef */}
          <div>
            <label className="block font-semibold mb-2">Hedefiniz Nedir?</label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="lose">Zayıflamak, yağ yakmak</option>
              <option value="gain">
                Kilo almak (Kas kütlesi artırma, clean bulking)
              </option>
              <option value="fastGain">Hızlı kilo almak (Dirty bulking)</option>
              <option value="maintain">Kilomu korumak</option>
            </select>
          </div>
        </div>

        {/* Sonuçlar */}
        <div className="flex flex-col flex-1 h-full font-montserrat">
          <div className="px-4 py-2 md:px-8 md:py-4 bg-gray-100 rounded-lg flex-grow">
            <h1 className="mb-4 md:mb-8 font-bold text-2xl">Karne</h1>

            <div className="mb-4">
              <p className="font-semibold text-lg">
                Bazal Metabolizma Hızınız (BMR)
              </p>
              <p className="font-semibold text-xl mb-2">
                {bmr.toFixed(0)} kcal
              </p>
              <p className="text-gray-500">
                %100 dinlenme halinde gereken günlük kalori miktarı. Bu miktarın
                altında beslenmek ciddi sağlık sorunlarına yol açar.
              </p>
            </div>

            <div className="mb-2">
              <p className="font-semibold text-xl">Günlük Kalori İhtiyacınız</p>
              <p className="font-bold text-2xl">
                {dailyCalories.toFixed(0)} kcal
              </p>
            </div>

            <div className="gap-4 font-montserrat text-lg">
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium">Protein </p>
                <span className="font-bold text-lg">{macros.protein}g</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium">Yağ</p>
                <span className="font-bold text-lg">{macros.fat} g</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium">Karbonhidrat</p>
                <span className="font-bold text-lg">{macros.carbs} g</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
