import React from "react";
import Layout from "../components/Layout.tsx";
import WorkoutTable from "../components/Table.tsx";

export default function WorkoutPlanPage() {
  return (
    <Layout>
      <div>
        <h1 className="text-4xl font-bold text-center text-primary">
          Antrenman Programları
        </h1>
        <p className="mt-4 text-gray-700">
          Düzenli antrenman yapmak, kas gelişimini desteklerken aynı zamanda
          vücudun dayanıklılığını artırır. Belirli bir plana sadık kalmak, hem
          fiziksel hem de zihinsel olarak daha güçlü olmanızı sağlar. En iyi
          sonuçları almak için istikrarlı ve programlı bir şekilde
          çalışmalısınız. 💪
        </p>
      </div>

      {/* Fullbody ve Split Farkları */}
      <section>
        <h2 className="text-3xl font-semibold text-primary ">
          Fullbody ve Split Antrenman Farkları
        </h2>
        <p className="mt-4 mb-4 text-gray-700">
          Fullbody ve split antrenman sistemleri, farklı antrenman hedefleri ve
          yaşam tarzlarına hitap eden iki yaygın yaklaşımdır. İşte bu iki sistem
          arasındaki temel farklar
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Split Card */}
          <div className="flex-1 bg-white rounded-lg shadow-lg p-4 md:p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Split</h2>
            <ul className="space-y-2 text-gray-600">
              <li>
                Her antrenmanda belirli kas gruplarına odaklanır, bu da daha
                fazla izolasyon ve detaylı çalışma sağlar.
              </li>
              <li>
                Genellikle haftada 4-6 gün uygulanır. Her kas grubuna daha fazla
                zaman ayrıldığı için seans süresi uzayabilir.
              </li>
              <li>
                Kas gruplarına daha fazla hacim yüklenerek kas hipertrofisi
                (büyümesi) daha fazla teşvik edilebilir.
              </li>
              <li>
                Genellikle yoğun kas yorgunluğu nedeniyle ekstra kardiyo eklemek
                zor olabilir, ancak belirli günlere ayrılabilir.
              </li>
              <li>
                Her kas grubuna belirli bir gün ayrıldığı için kasların tam
                olarak iyileşmesi ve büyümesi için daha fazla zaman olabilir.
              </li>
            </ul>
          </div>

          {/* Full Body Card */}
          <div className="flex-1 bg-white rounded-lg shadow-lg p-4 md:p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Full Body</h2>
            <ul className="space-y-2 text-gray-600">
              <li>
                Tüm kas gruplarını tek bir antrenmanda çalıştırır. Büyük kas
                grupları daha fazla uyarıldığı için güç ve dayanıklılık artışına
                odaklanır.
              </li>
              <li>
                Haftada 2-4 gün uygulanabilir. Daha kısa sürede tüm kasları
                çalıştırdığı için verimli bir yöntemdir.
              </li>
              <li>
                Daha fazla bileşik (compound) hareket içerdiği için güç artışı
                ve merkezi sinir sistemi adaptasyonu daha hızlı olabilir.
              </li>
              <li>
                Daha fazla kas grubunu çalıştırdığı için antrenman başına daha
                fazla kalori yakar. Kilo vermek isteyenler için avantajlı
                olabilir.
              </li>
              <li>
                Aynı kas gruplarını sık sık çalıştırdığı için yeterli dinlenme
                süresi önemlidir. Yüksek yoğunlukta yapılırsa aşırı antrenmana
                yol açabilir.
              </li>
            </ul>
          </div>
        </div>

        <ul className="mt-4 list-disc list-inside text-gray-700">
          <strong>Hedef Kitle</strong>
          <p>
            <strong>Fullbody:</strong>
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>
              Yeni başlayanlar için uygundur, çünkü hareketlerin öğrenilmesini
              kolaylaştırır.
            </li>
            <li>
              Zamanı kısıtlı olanlar ve haftada 2-3 gün antrenman yapabilenler
              için idealdir.
            </li>
            <li>
              Kardiyo ve dayanıklılığı bir arada geliştirmek isteyenler için
              faydalıdır.
            </li>
          </ul>
          <p>
            <strong>Split:</strong>
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>
              Orta ve ileri seviye sporcular için uygundur, çünkü belirli kas
              gruplarını daha detaylı çalıştırmaya izin verir.
            </li>
            <li>
              Estetik görünüm ve kas hacmi odaklı olanlar için daha uygundur.
            </li>
            <li>
              Günlük spor rutinini daha uzun sürelere yayabilenler için ideal
              olabilir.
            </li>
          </ul>
        </ul>
      </section>
      {/* Haftalık Split Programı */}
      <section>
        <h2 className="text-3xl font-semibold text-primary">
          Haftalık Split Programı
        </h2>
        <p className="mt-4 text-gray-700">
          Haftalık split programı, kas gruplarına odaklanarak her günün farklı
          bir bölgesine yönelik egzersizler yapmayı içerir. Haftada 6 gün
          çalışarak her kas grubunu hedefleyebiliriz.
        </p>
        <ul className="mt-4 list-disc list-inside text-gray-700">
          <li>
            Pazartesi: Göğüs & Triceps (Bench Press, Dips, Triceps Pushdown)
          </li>
          <li>Salı: Sırt & Biceps (Pull-up, Barbell Row, Biceps Curl)</li>
          <li>Çarşamba: Bacak & Karın (Squat, Deadlift, Plank)</li>
          <li>
            Perşembe: Omuz & Trapez (Overhead Press, Lateral Raises, Shrugs)
          </li>
          <li>Cuma: Full Vücut (Combination Workouts: Burpees, Deadlifts)</li>
          <li>Cumartesi: Kardiyo & Esneklik (Koşu, Yoga, Mobility Drills)</li>
          <li>Pazar: Dinlenme (Aktif Dinlenme, Yüzme, Hafif Yürüyüş)</li>
        </ul>
      </section>

      {/* Full Body Programı */}
      <section>
        <h2 className="text-3xl font-semibold text-primary">
          Full Body Programı
        </h2>
        <p className="mt-4 text-gray-700">
          Full body programı, tüm vücudu çalıştırmayı amaçlayan bir antrenman
          planıdır. Genellikle haftada 3 gün yapılır ve her gün tüm ana kas
          grupları çalıştırılır. Bu program yeni başlayanlar için uygundur ve
          kas gruplarını dengeli bir şekilde geliştirerek sakatlanma riskini
          azaltır.
        </p>
        <p className="mt-4 text-gray-700">Örnek full body antrenmanı:</p>
        <ul className="mt-4 list-disc list-inside text-gray-700">
          <li>Squat - 3 set 10 tekrar</li>
          <li>Deadlift - 3 set 8 tekrar</li>
          <li>Bench Press - 3 set 10 tekrar</li>
          <li>Pull-up - 3 set 8 tekrar</li>
          <li>Plank - 3 set 30 saniye</li>
        </ul>
      </section>

      {/* Beslenme ve Dinlenme */}
      <section>
        <h2 className="text-3xl font-semibold text-primary">
          Beslenme ve Dinlenmenin Önemi
        </h2>
        <p className="mt-4 text-gray-700">
          Antrenman sonrası kasların onarımı ve gelişimi için yeterli beslenme
          ve dinlenme gereklidir. Proteinden zengin besinler tüketmek ve düzenli
          uyku almak, kas gelişimini destekler.
        </p>
        <p className="mt-4 text-gray-700">Örnek beslenme planı:</p>
        <ul className="mt-4 list-disc list-inside text-gray-700">
          <li>Kahvaltı: Yulaf ezmesi, yumurta, badem</li>
          <li>Öğle: Izgara tavuk, kahverengi pirinç, brokoli</li>
          <li>Ara Öğün: Yoğurt, fındık</li>
          <li>Akşam: Somon, tatlı patates, ıspanak</li>
        </ul>
      </section>

      {/* Antrenman Programına Uymanın Önemi */}
      <section>
        <h2 className="text-3xl font-semibold text-primary">
          Antrenman Programına Uymanın ve Devamlılığın Önemi
        </h2>
        <p className="mt-4 text-gray-700">
          Spor salonunda başarıya ulaşmanın en büyük anahtarlarından biri 
          <strong> devamlılıktır</strong>. Kas gelişimi ve performans artışı,
          sadece birkaç haftalık çabayla elde edilemez.
        </p>
        <p className="mt-4 text-gray-700">
          Düzenli antrenman yapmak, kas hafızasını geliştirir ve ilerlemeyi
          sürdürülebilir kılar. Sadece motivasyona dayalı değil, alışkanlık
          haline getirilmiş bir spor rutini oluşturmak uzun vadede gerçek
          sonuçlar almanızı sağlar.
        </p>
        <p className="mt-4 text-gray-700">
          Antrenman yaparken motivasyonunuzu artırmak için şu yöntemleri
          deneyebilirsiniz:
        </p>
        <ul className="mt-4 list-disc list-inside text-gray-700">
          <li>Küçük hedefler koyun ve ilerlemenizi takip edin.</li>
          <li>Bir antrenman partneriyle çalışın.</li>
          <li>Favori müzik listenizi hazırlayın.</li>
          <li>Gelişiminizi fotoğraflarla kayıt altına alın.</li>
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
