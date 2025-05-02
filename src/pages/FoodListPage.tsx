import React from "react";
import Layout from "../components/Layout.tsx";
import bowlOfOats from "../img/bowlOfOats.jpg";
import Button from "../components/Button.tsx";

export default function FoodListPage() {
  return (
    <Layout>
      <div>
        <h1 className="text-4xl font-bold text-primary text-center">
          Fit Tarifler
        </h1>
        <p className="mt-4 text-gray-700">
          Hedefine ulaşmak için doğru ve planlı beslenmek önemlidir altta
          bulunan indirme butonu ile nasıl beslenmeliyim sorusuna cevap bul.
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src={bowlOfOats}
          alt="Yulaf Kasesi"
          className="w-full max-w-2xl rounded-lg shadow-md"
        />
      </div>
      <section>
        <h2 className="text-3xl font-semibold text-primary">
          Sporcu Beslenmesinin Önemi
        </h2>
        <p className="mt-4 text-gray-700">
          Düzenli spor yapmak kadar, bu süreci doğru bir beslenme ile
          desteklemek de oldukça önemlidir. Vücudun antrenman sırasında
          harcadığı enerjiyi geri kazanması, kas gelişiminin desteklenmesi ve
          genel sağlık için dengeli bir beslenme şarttır.
        </p>

        <h3 className="mt-4 font-semibold">🔹 Antrenman Öncesi Beslenme</h3>
        <ul className="mt-2 text-gray-700 list-disc list-inside">
          <li>
            <strong>Karbonhidrat:</strong> Egzersiz öncesi alınan karbonhidrat,
            vücuda enerji sağlar (Yulaf, muz, tam tahıllı ekmek).
          </li>
          <li>
            <strong>Protein:</strong> Kas yıkımını önlemek ve antrenmana güçlü
            başlamak için faydalıdır (Yoğurt, yumurta).
          </li>
        </ul>

        <h3 className="mt-4 font-semibold">🔹 Antrenman Sonrası Beslenme</h3>
        <ul className="mt-2 text-gray-700 list-disc list-inside">
          <li>
            <strong>Protein:</strong> Antrenman sonrası kas onarımı ve gelişimi
            için kritiktir (Tavuk, protein shake, mercimek).
          </li>
          <li>
            <strong>Karbonhidrat:</strong> Glikojen depolarını doldurur ve
            toparlanmayı hızlandırır (Patates, pirinç, meyve).
          </li>
          <li>
            <strong>Su ve Elektrolitler:</strong> Terle kaybedilen sıvı ve
            minerallerin geri alınması gerekir (Su, maden suyu, hindistan cevizi
            suyu).
          </li>
        </ul>
      </section>

      <div className="flex items-center justify-end">
        <Button
          text="Fit Tarifler Kitabı"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/Fitio-Yemek tarifleri.pdf"; // PDF dosyasının yolu
            link.download = "Fitio-Yemek tarifleri.pdf"; // İndirme adı
            link.click();
          }}
          className="px-6 py-3 flex items-center gap-2 bg-primary text-primary font-semibold rounded-lg shadow transition group"
        >
          {/* SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current text-green-500 group-hover:text-white"
          >
            <path d="M7 17h10v-2H7zm5-3l4-4l-1.4-1.4l-1.6 1.55V6h-2v4.15L9.4 8.6L8 10zm0 8q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8" />
          </svg>
        </Button>
      </div>
    </Layout>
  );
}
