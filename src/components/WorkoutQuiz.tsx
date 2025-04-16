import React, { useState } from "react";
import { Link} from "react-router-dom";


export default function WorkoutQuiz() {
  const [experience, setExperience] = useState("");
  const [days, setDays] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!experience || !days) return;

    const expLevel = experience === "newbie";
    const fewDays = days === "2-3";

    if (expLevel || fewDays) {
      setResult(" Full Body Antrenman 💪");
    } else {
      setResult(" Split Antrenman 🏋️‍♂️");
    }
  };

  return (
    <section className="p-6 border rounded-lg shadow-md w-full md:w-1/2">
      <h2 className="text-2xl font-semibold text-primary text-center">
        Sana En Uygun Programı Bul
      </h2>
      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        <div>
          <label className="block mb-2 font-medium">Spor geçmişin nedir?</label>
          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Seç...</option>
            <option value="newbie">0-6 ay (Yeni Başlayan)</option>
            <option value="intermediate">6 ay - 2 yıl</option>
            <option value="advanced">2 yıl ve üzeri</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Haftada kaç gün antrenman yapabilirsin?
          </label>
          <select
            value={days}
            onChange={(e) => setDays(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Seç...</option>
            <option value="2-3">2-3 Gün</option>
            <option value="4+">4 Gün ve Üzeri</option>
          </select>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90"
        >
          Uygun Programı Göster
        </button>
      </form>

      {result && (
        <div className="mt-6 p-2 md:p-4 flex items-center justify-center gap-1 md:gap-2 bg-gray-100 rounded text-center font-semibold text-gray-800">
            <p>Senin için en uygun program:</p>
            <Link
            to="/workout"
            className="text-primary">
                
            {result}
            </Link>
            
         
        </div>
      )}
    </section>
  );
}
