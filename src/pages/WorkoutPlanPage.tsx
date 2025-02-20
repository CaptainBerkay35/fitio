import React from "react";
import Layout from "../components/Layout.tsx";
import WorkoutTable from "../components/Table.tsx";

export default function WorkoutPlanPage() {
  const splitProgram = [
    { day: "Pazartesi", muscleGroup: "Göğüs & Triceps" },
    { day: "Salı", muscleGroup: "Sırt & Biceps" },
    { day: "Çarşamba", muscleGroup: "Bacak & Karın" },
    { day: "Perşembe", muscleGroup: "Omuz & Kardiyo" },
    { day: "Cuma", muscleGroup: "Göğüs & Triceps" },
    { day: "Cumartesi", muscleGroup: "Sırt & Biceps" },
    { day: "Pazar", muscleGroup: "Dinlenme / Hafif Kardiyo*" },
  ];

  const fullBodyProgram = [
    { day: "Pazartesi", muscleGroup: "Full Body" },
    { day: "Çarşamba", muscleGroup: "Full Body" },
    { day: "Cuma", muscleGroup: "Full Body" },
    { day: "Pazar", muscleGroup: "Hafif Kardiyo* / Aktif Dinlenme*" },
  ];

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
      {/* Hedefe Göre Antrenman Programı Seçmenin Önemi */}
      <section>
        <h2 className="text-3xl font-semibold text-primary">
          Hedefe Göre Antrenman Programı Seçmenin Önemi
        </h2>
        <p className="mt-4 text-gray-700">
          Fitness yolculuğunuzda en önemli noktalardan biri, hedefinize uygun
          bir antrenman programı belirlemektir. Kas kütlesi kazanmak, yağ yakmak
          veya genel dayanıklılığı artırmak gibi farklı hedefler için farklı
          antrenman yöntemleri uygulanmalıdır.
          <br />
          <br />
          Örneğin, kas kütlesini artırmak isteyenler için ağırlık
          antrenmanlarına öncelik vermek gerekirken, yağ yakmak isteyenler için
          kardiyo ile direnç antrenmanlarının kombinasyonu daha etkili olabilir.
          Programınızı hedefinize göre şekillendirmek, daha verimli ve hızlı
          sonuç almanıza yardımcı olacaktır. 🎯
        </p>
      </section>
      {/* Bulk ve Cutting Dönemlerinde Antrenman Programları */}
      <section>
        <h2 className="text-3xl font-semibold text-primary">
          Bulk ve Cutting Dönemlerinde Antrenman Programları
        </h2>
        <p className="mt-4 text-gray-700">
          <strong>Bulk dönemi</strong>, kas kütlesi kazanma sürecidir ve
          genellikle kalori fazlası ile desteklenir. Bu dönemde ağırlık
          antrenmanlarında daha yüksek yoğunluk, düşük tekrar ve daha ağır
          ağırlıklarla çalışmak kas gelişimini maksimize edebilir.
          <br />
          <br />
          <strong>Cutting dönemi</strong> ise vücut yağ oranını azaltarak daha
          belirgin kas hatları elde etmeyi hedefler. Bu dönemde daha fazla
          tekrar, kısa dinlenme süreleri ve kardiyo antrenmanları antrenman
          programına eklenmelidir.
          <br />
          <br />
          Her iki dönemde de programınıza sadık kalmak, maksimum verimi almanızı
          sağlar. 💪🔥
        </p>
      </section>
      <div>
        <WorkoutTable title="Haftalık Split Programı" schedule={splitProgram} />
        <div>
          <strong>Hafif kardiyo</strong> ise tempolu yürüyüş, hafif koşu veya
          düşük dirençli bisiklet sürme gibi düşük yoğunluklu ancak kalp atış
          hızını artıran egzersizlerdir. Bunlar, kasların iyileşmesine yardımcı
          olur ve eklemlere fazla yük bindirmeden kalp-damar sağlığını
          destekler. 🏃‍♂️🚴‍♀️
        </div>
      </div>

      <div>
        <WorkoutTable title="Full Body Programı" schedule={fullBodyProgram} />
        <div className="gap-2">
          <div>
            <strong>Aktif dinlenme</strong>, tamamen hareketsiz bir gün geçirmek
            yerine, vücudu düşük yoğunluklu hareketlerle aktif tutmayı içerir.
            Hafif yürüyüş, yoga veya esneme egzersizleri bu kategoriye girer.
          </div>
          <div>
            <strong>Hafif kardiyo</strong> ise tempolu yürüyüş, hafif koşu veya
            düşük dirençli bisiklet sürme gibi düşük yoğunluklu ancak kalp atış
            hızını artıran egzersizlerdir. Bunlar, kasların iyileşmesine
            yardımcı olur ve eklemlere fazla yük bindirmeden kalp-damar
            sağlığını destekler. 🏃‍♂️🚴‍♀️
          </div>
        </div>
      </div>

      {/* Antrenman Programına Uymanın ve Devamlılığın Önemi */}
      <section>
        <h2 className="text-3xl font-semibold text-primary">
          Antrenman Programına Uymanın ve Devamlılığın Önemi
        </h2>
        <p className="mt-4 text-gray-700">
          Spor salonunda başarıya ulaşmanın en büyük anahtarlarından biri{" "}
          <strong>devamlılıktır</strong>. Kas gelişimi ve performans artışı,
          sadece birkaç haftalık çabayla elde edilemez.
          <br />
          <br />
          Düzenli antrenman yapmak, kas hafızasını geliştirir ve ilerlemeyi
          sürdürülebilir kılar. Sadece motivasyona dayalı değil, alışkanlık
          haline getirilmiş bir spor rutini oluşturmak uzun vadede gerçek
          sonuçlar almanızı sağlar.
          <br />
          <br />
          Unutmayın, en iyi program mükemmel olan değil, uzun vadede
          sürdürebildiğiniz programdır! 💯🔥
        </p>
      </section>
      <section>
        <h2 className="text-3xl font-semibold text-primary">
          Kilo Vermek İstiyorum, Sadece Kardiyo mu Yapmalıyım?
        </h2>
        <p className="mt-4 text-gray-700">
          Kilo vermek isteyenlerin en sık yaptığı hatalardan biri sadece
          kardiyoya odaklanmaktır. Kardiyo egzersizleri kalori yakımını
          hızlandırarak kilo vermeye yardımcı olsa da, kas kaybını önlemek ve
          metabolizmayı hızlandırmak için{" "}
          <strong>direnç antrenmanlarını</strong> da programınıza eklemelisiniz.
          <br />
          <br />
          Ağırlık antrenmanları kas kütlenizi korumanıza ve hatta artırmanıza
          yardımcı olur. Daha fazla kas kütlesi, dinlenme halinde bile daha
          fazla kalori yakmanıza katkı sağlar. Bu yüzden en iyi yaklaşım,
          haftada birkaç gün kardiyoyu direnç antrenmanlarıyla birleştirmektir.
          <br />
          <br />
          Ayrıca, <strong>
            HIIT (Yüksek Yoğunluklu Aralıklı Antrenman)
          </strong>{" "}
          gibi yöntemler hem kardiyo hem de kas koruma açısından etkili
          olabilir. Özetle, sadece kardiyo yapmak yerine dengeli bir antrenman
          planı uygulamak uzun vadede daha sağlıklı ve sürdürülebilir sonuçlar
          almanızı sağlar. 💪🔥
        </p>
      </section>
      <div className="mt-12 text-center">
        <a href="#" className="text-primary underline">
          Başa Dön
        </a>
      </div>
    </Layout>
  );
}
