import React from "react";
import Layout from "../components/Layout.tsx";
import WorkoutQuiz from "../components/WorkoutQuiz.tsx";
import fullbodyVsSplit from "../img/fullBodyvsSplit.jpg"; // Kilo alma görseli

export default function RoadmapPage() {
  return (
    <Layout>
      <div>
        <h1 className="text-4xl font-bold text-primary text-center">
          Fitness Yol Haritası
        </h1>
        <p className="mt-4 text-gray-700">
          Hedefine ulaşmak için doğru antrenman ve beslenme planını seçmek
          önemlidir. İşte kilo almak, yağ yakmak ve antrenman türleri hakkında
          bilmen gerekenler.
        </p>
      </div>

      {/* Kilo Alma (Bulk Dönemi) */}
      <section>
        <h2 className="text-3xl font-semibold text-primary">
          Kilo Alma (Bulk Dönemi)
        </h2>
        <p className="mt-4 text-gray-700">
          Kilo almak isteyen bireylerin temel hedefi, kas kütlesini artırırken
          yağ kazanımını minimumda tutmaktır. Bunun için yüksek kalorili ve
          dengeli bir beslenme programı uygulanmalıdır.
        </p>
        <h3 className="mt-4 font-semibold">Beslenme:</h3>
        <ul className="mt-2 text-gray-700 list-disc list-inside">
          <li>
            Günlük kalori alımını artır, ancak sağlıklı karbonhidrat ve
            proteinlere odaklan.
          </li>
          <li>
            Öğünlerinde protein ağırlıklı besinler (tavuk, balık, yumurta,
            kırmızı et) tüket.
          </li>
          <li>
            Kompleks karbonhidratlar (yulaf, tam tahıllı ekmek, pirinç)
            tüketerek enerji seviyeni yüksek tut.
          </li>
          <li>
            Yağ tüketimini sağlıklı yağlardan (zeytinyağı, avokado, ceviz)
            sağlamalısın.
          </li>
        </ul>
        <h3 className="mt-4 font-semibold">Antrenman:</h3>
        <ul className="mt-2 text-gray-700 list-disc list-inside">
          <li>
            Güç antrenmanlarına odaklan. Ağırlıkları artırarak kas gelişimini
            hızlandır.
          </li>
          <li>Set başına 6-12 tekrar yaparak hipertrofi odaklı çalış.</li>
          <li>Haftada en az 4-5 gün antrenman yapmaya çalış.</li>
          <li>Kardiyo minimal düzeyde tutulmalıdır.</li>
        </ul>
      </section>

      {/* Yağ Yakımı (Cut Dönemi) */}
      <section>
        <h2 className="text-3xl font-semibold text-primary">
          Yağ Yakımı (Cut Dönemi)
        </h2>
        <p className="mt-4 text-gray-700">
          Yağ yakımı sürecinde temel amaç, kas kütlesini koruyarak vücut yağ
          oranını düşürmektir. Bunun için kalori açığı yaratmak ve doğru
          antrenman programını uygulamak gerekir.
        </p>
        <h3 className="mt-4 font-semibold">Beslenme:</h3>
        <ul className="mt-2 text-gray-700 list-disc list-inside">
          <li>Günlük kalori alımını azalt ve protein alımını yüksek tut.</li>
          <li>Şeker ve işlenmiş gıdalardan kaçın.</li>
          <li>Bol sebze ve lifli gıda tüketerek tokluk süreni uzat.</li>
          <li>Yağ tüketimini kontrollü şekilde yap.</li>
        </ul>
        <h3 className="mt-4 font-semibold">Antrenman:</h3>
        <ul className="mt-2 text-gray-700 list-disc list-inside">
          <li>
            Ağırlık antrenmanlarına devam et, ancak dinlenme süresini azalt.
          </li>
          <li>
            Yüksek yoğunluklu interval antrenman (HIIT) ekleyerek yağ yakımını
            hızlandır.
          </li>
          <li>Haftada en az 3-4 gün kardiyo ekle.</li>
        </ul>
      </section>

      {/* Full Body vs Split Antrenman */}
      <section>
        <div className="flex flex-col gap-4 mb-8">
          <h2 className="text-3xl font-semibold text-primary">
            Full Body vs Split Antrenman
          </h2>
          <img
            src={fullbodyVsSplit}
            alt="Full Body"
            className="w-full max-w-md mx-auto rounded-lg shadow-md"
          />
        </div>

        <div className="flex gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-primary">
              Tüm Vücut Egzersizleri
            </h3>
            <ul className="mt-2 text-gray-700 list-disc list-inside">
              <li>
                Mümkün olduğu kadar çok kas grubunu eğitin tek bir antrenman
                içinde mümkün.
              </li>
              <li>
                Hedefiniz, tüm vücut kaslarını çalıştırmak olduğunda bu
                antrenman türü idealdir.
              </li>
              <li>Daha düşük antreman sıklığı.</li>
              <li>
                Kasların önemli ölçüde örtüşmesi her seansta eğitilmiş olur.
              </li>
              <li>Yorgun kaslarınıza izin vererek iyileşmelerini bekleyin.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-primary">
              Bölünmüş Egzersizler
            </h3>
            <ul className="mt-2 text-gray-700 list-disc list-inside">
              <li>
                Belirli bir kas üzerine odaklanın veya her gün bir kas grubu
                çalıştırın.
              </li>
              <li>Daha yüksek eğitim sıklığı.</li>
              <li>
                Kaldırıcının odaklanmasına izin verir; kas veya kas grubunu
                seçebilirsiniz.
              </li>
              <li>Daha uzun iyileşme süreleri.</li>
              <li>Kayda değer ölçüde daha az kas grubu eğitilir.</li>
              <li>
                Oturumlar arasında örtüşme kayda değer şekilde daha azdır.
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Hangi Program Sana Uygun? */}
      <section>
        <h2 className="text-3xl font-semibold text-primary text-center">
          Hangi Program Sana Uygun?
        </h2>
        <p className="mt-4 text-gray-700">
          Hedefin, antrenman geçmişin ve haftalık ayırabileceğin zamana göre
          uygulaman gereken program farklılık gösterir. İşte bilimsel verilere
          dayanarak hangi programın senin için daha uygun olabileceğini
          belirleyen bazı kriterler:
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Body Uygunluğu */}
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-primary">
              Full Body Antrenman Kimler İçin Uygun?
            </h3>
            <ul className="mt-2 text-gray-700 list-disc list-inside">
              <li>Yeni başlayan bireyler (0-6 ay spor geçmişi).</li>
              <li>Haftada 2-3 gün antrenman yapabilenler.</li>
              <li>
                Temel hareketleri öğrenmek isteyenler (squat, deadlift, bench
                press).
              </li>
              <li>
                American College of Sports Medicine'a (ACSM) göre, yeni
                başlayanlar için haftada 3 tam vücut antrenmanı, optimal kas
                gelişimini destekler.
              </li>
            </ul>
          </div>

          {/* Split Uygunluğu */}
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-primary">
              Split Antrenman Kimler İçin Uygun?
            </h3>
            <ul className="mt-2 text-gray-700 list-disc list-inside">
              <li>Orta ve ileri düzey sporcular (6+ ay spor geçmişi).</li>
              <li>Haftada 4 veya daha fazla gün spor yapabilenler.</li>
              <li>
                Her bir kas grubuna daha fazla odaklanmak ve hacim artırmak
                isteyenler.
              </li>
              <li>
                2016'da Schoenfeld ve arkadaşlarının yaptığı araştırmaya göre,
                yüksek hacimli (volume) split programları ileri düzey bireylerde
                daha fazla kas hipertrofisi sağlar.
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-gray-700">
          Hemen aşağıda bulunan basit test ile sana uygun antreman program
          tarzını bulabilirsin.
        </p>
      </section>

      <WorkoutQuiz />

      <div className="mt-12 text-center">
        <a href="#" className="text-primary underline">
          Başa Dön
        </a>
      </div>
    </Layout>
  );
}
