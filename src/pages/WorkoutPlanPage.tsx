import React from "react";
import Layout from "../components/Layout.tsx";
import WorkoutTable from "../components/Table.tsx";

export default function WorkoutPlanPage() {
  const splitProgram = [
    { day: "Pazartesi", exercises: ["Göğüs press", "Triceps pushdown", "Chest fly"] },
    { day: "Salı", exercises: ["Deadlift", "Barbell row", "Dumbbell curls"] },
    { day: "Çarşamba", exercises: ["Squat", "Leg press", "Plank"] },
    { day: "Perşembe", exercises: ["Shoulder press", "Lateral raises", "Treadmill"] },
    { day: "Cuma", exercises: ["Göğüs press", "Triceps pushdown", "Chest fly"] },
    { day: "Cumartesi", exercises: ["Deadlift", "Barbell row", "Dumbbell curls"] },
    { day: "Pazar", exercises: ["Dinlenme", "Hafif Kardiyo"] },
  ];

  const fullBodyProgram = [
    { day: "Pazartesi", exercises: ["Squat", "Deadlift", "Pull-up", "Push-up"] },
    { day: "Çarşamba", exercises: ["Squat", "Overhead press", "Lunges", "Plank"] },
    { day: "Cuma", exercises: ["Deadlift", "Pull-up", "Push-up", "Squat"] },
    { day: "Pazar", exercises: ["Hafif Kardiyo", "Yoga"] },
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
        <WorkoutTable title="Haftalık Split Programı" weeklyProgram={splitProgram} columns={3}/>
      </section>

      {/* Full Body Programı */}
      <section>
        <h2 className="text-3xl font-semibold text-primary">
          Full Body Programı
        </h2>
        <p className="mt-4 text-gray-700">
          Full body programı, tüm vücudu çalıştırmayı amaçlayan bir antrenman
          planıdır. Genellikle haftada 3 gün yapılır ve her gün tüm ana kas
          grupları çalıştırılır.
        </p>
        <WorkoutTable title="Full Body Programı" weeklyProgram={fullBodyProgram} columns={4}/>
      </section>

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
