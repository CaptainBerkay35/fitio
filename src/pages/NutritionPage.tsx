import React from "react";
import Layout from "../components/Layout.tsx";
import sportPyramid from "../img/sportPyramid.png"; // Beslenme piramidi görseli

export default function NutritionPage() {
  return (
    <Layout>
      <div>
        <h1 className="text-4xl font-bold text-primary text-center">
          Beslenme ve Fitness
        </h1>
        <p className="mt-4 text-gray-700">
          Sağlıklı bir yaşam ve etkili antrenman performansı için doğru beslenme
          büyük önem taşır. Spor yaparken vücudun ihtiyaç duyduğu makro ve mikro
          besinleri almak, performansını artırır, toparlanma sürecini
          hızlandırır ve kas gelişimini destekler.
        </p>
      </div>

      {/* Beslenme Piramidi Görseli */}
      <div className="flex justify-center ">
        <img
          src={sportPyramid}
          alt="Beslenme Piramidi"
          className="w-full max-w-2xl rounded-lg shadow-md"
        />
      </div>

      {/* Kalori, Makro ve Mikro Besinler */}
      <section>
        <h2 className="text-3xl font-semibold text-primary">
          Kalori, Makro ve Mikro Besinler
        </h2>
        <p className="mt-4 text-gray-700">
          Besinler genel olarak üç ana makro besin grubuna ayrılır:
          Karbonhidrat, protein ve yağ. Bunun yanı sıra vücudun ihtiyacı olan
          vitamin ve mineralleri mikro besinler oluşturur.
        </p>

        <h3 className="mt-4 font-semibold">🔹 Makro Besinler</h3>
        <ul className="mt-2 text-gray-700 list-disc list-inside">
          <li>
            <strong>Protein:</strong> Kas onarımı ve gelişimi için gereklidir
            (Tavuk, yumurta, balık, yoğurt).
          </li>
          <li>
            <strong>Karbonhidrat:</strong> Ana enerji kaynağıdır (Tam tahıllar,
            meyveler, sebzeler).
          </li>
          <li>
            <strong>Yağ:</strong> Hormon dengesi ve hücre sağlığı için
            gereklidir (Avokado, zeytinyağı, kuruyemişler).
          </li>
        </ul>

        <h3 className="mt-4 font-semibold">🔹 Mikro Besinler</h3>
        <ul className="mt-2 text-gray-700 list-disc list-inside">
          <li>
            <strong>Vitaminler:</strong> Bağışıklık sistemi, enerji üretimi ve
            genel sağlık için önemlidir (Meyve, sebze).
          </li>
          <li>
            <strong>Mineraller:</strong> Kas fonksiyonları, kemik sağlığı için
            gereklidir (Demir, magnezyum, çinko, kalsiyum).
          </li>
        </ul>
      </section>

      {/* Spor ve Beslenme Önemi */}
      <section>
        <h2 className="text-3xl font-semibold text-primary">
          Spor Yaparken Beslenme Neden Önemlidir?
        </h2>
        <p className="mt-4 text-gray-700">
          Egzersiz sırasında vücudun enerji harcar ve kas lifleri zarar görür.
          Doğru beslenme ile bu kayıplar telafi edilir ve kas gelişimi
          desteklenir. Ayrıca, yetersiz beslenme performans düşüklüğüne,
          halsizliğe ve kas kaybına neden olabilir.
        </p>
        <ul className="mt-4 text-gray-700 list-disc list-inside">
          <li>Kas kazanımı için yeterli protein tüketmek gerekir.</li>
          <li>
            Enerji seviyesini korumak için karbonhidrat ve sağlıklı yağlar
            dengeli tüketilmelidir.
          </li>
          <li>Yetersiz beslenme sakatlanma riskini artırabilir.</li>
        </ul>
      </section>

      {/* Günlük Beslenme Düzeni */}
      <section>
        <h2 className="text-3xl font-semibold text-primary">
          Günde Kaç Öğün Beslenmeliyim?
        </h2>
        <p className="mt-4 text-gray-700">
          Beslenme düzeni kişiden kişiye değişebilir. Ancak genel olarak günde{" "}
          <strong>3 ana öğün</strong> ve
          <strong>2 ara öğün</strong> tüketmek önerilir. Önemli olan toplam
          alınan kalorinin ve besin değerlerinin doğru olmasıdır.
        </p>
        <h3 className="mt-4 font-semibold">Örnek Günlük Beslenme Planı:</h3>
        <ul className="mt-2 text-gray-700 list-disc list-inside">
          <li>
            <strong>Kahvaltı:</strong> Yumurta, tam buğday ekmeği, peynir,
            sebze.
          </li>
          <li>
            <strong>Ara Öğün:</strong> Badem, ceviz, yoğurt.
          </li>
          <li>
            <strong>Öğle Yemeği:</strong> Tavuk, esmer pirinç, salata.
          </li>
          <li>
            <strong>Ara Öğün:</strong> Muz, süt.
          </li>
          <li>
            <strong>Akşam Yemeği:</strong> Balık, sebze, tam tahıllı ekmek.
          </li>
        </ul>
      </section>
      {/* Spor Yaparken Neler Tüketmeliyim? */}
      <section>
        <h2 className="text-3xl font-semibold text-primary">
          Spor Yaparken Neler Tüketmeliyim?
        </h2>
        <p className="mt-4 text-gray-700">
          Antrenman esnasında vücudun kaybettiği suyu ve enerji dengesini
          korumak, performansın sürekliliği açısından önemlidir. Bu nedenle spor
          yaparken bazı besin ve içeceklerin tüketilmesi önerilir.
        </p>

        <h3 className="mt-4 font-semibold">💧 Su ve Elektrolit Desteği</h3>
        <ul className="mt-2 text-gray-700 list-disc list-inside">
          <li>
            <strong>Su:</strong> Egzersiz sırasında terleme ile kaybedilen
            sıvıyı yerine koymak için mutlaka su tüketilmelidir.
          </li>
          <li>
            <strong>Elektrolit içecekleri:</strong> Uzun süreli veya yoğun
            antrenmanlarda sodyum, potasyum ve magnezyum gibi elektrolitler
            takviye edilmelidir.
          </li>
        </ul>

        <h3 className="mt-4 font-semibold">🍌 Hızlı Enerji Sağlayan Gıdalar</h3>
        <ul className="mt-2 text-gray-700 list-disc list-inside">
          <li>
            <strong>Muz:</strong> Hızlı enerji sağlar ve potasyum açısından
            zengindir.
          </li>
          <li>
            <strong>Enerji barları:</strong> Karbonhidrat ve protein içeriği ile
            egzersiz süresince enerji desteği sunar.
          </li>
          <li>
            <strong>Kuru meyveler:</strong> Doğal şeker içeriği ile kan şekerini
            dengede tutar.
          </li>
        </ul>

        <h3 className="mt-4 font-semibold">⚠️ Kaçınılması Gerekenler</h3>
        <ul className="mt-2 text-gray-700 list-disc list-inside">
          <li>Gazlı içeceklerden uzak durulmalıdır.</li>
          <li>
            Ağır ve yağlı yiyecekler antrenman sırasında mide problemlerine
            neden olabilir.
          </li>
          <li>
            Şekerli atıştırmalıklar kısa süreli enerji verse de sonrasında
            yorgunluk hissi yaratabilir.
          </li>
        </ul>
      </section>

      {/* Spordan Önce ve Sonra Beslenme */}
      <section>
        <h2 className="text-3xl font-semibold text-primary">
          Spordan Önce ve Sonra Beslenme
        </h2>

        <h3 className="mt-4 font-semibold">✅ Spordan Önce Ne Yemeliyim?</h3>
        <p className="mt-2 text-gray-700">
          Spordan önce alınan besinler enerji seviyesini korumaya ve performansı
          artırmaya yardımcı olur. Antrenmandan <strong>1-2 saat önce</strong>{" "}
          hafif bir öğün tüketmek idealdir.
        </p>
        <ul className="mt-2 text-gray-700 list-disc list-inside">
          <li>
            <strong>Önerilen Besinler:</strong> Yulaf, muz, tam tahıllı ekmek,
            yoğurt.
          </li>
          <li>Ağır yağlı ve işlenmiş gıdalardan kaçınılmalıdır.</li>
        </ul>

        <h3 className="mt-4 font-semibold">✅ Spordan Sonra Ne Yemeliyim?</h3>
        <p className="mt-2 text-gray-700">
          Egzersiz sonrası kasların toparlanması için protein ve karbonhidrat
          alımı önemlidir. Antrenmandan <strong>30-60 dakika sonra</strong>{" "}
          sağlıklı bir öğün tüketilmelidir.
        </p>
        <ul className="mt-2 text-gray-700 list-disc list-inside">
          <li>
            <strong>Önerilen Besinler:</strong> Tavuk, somon, pirinç, patates,
            protein shake.
          </li>
          <li>Şekerli ve işlenmiş gıdalardan kaçınılmalıdır.</li>
        </ul>
      </section>

      <div className="mt-12 text-center">
        <a href="#" className="text-primary underline">
          Başa Dön
        </a>
      </div>
    </Layout>
  );
}
