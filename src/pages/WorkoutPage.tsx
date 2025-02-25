import React from "react";
import Layout from "../components/Layout.tsx";
import Card from "../components/Card.tsx";
import { programs } from "../data/programs.ts";

export default function WorkoutPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center text-center font-montserrat">
        <h1 className="text-4xl font-bold text-primary text-center">
          Antrenman Programını Seç
        </h1>
        <p className="mb-4 text-gray-700">Hemen spor yapmaya başla.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {programs.map((program, index) => (
            <Card
              key={index}
              title={program.title}
              img={program.img}
              link={`/workout/${program.title.toLowerCase().replace(/ /g, "-")}`} // Her programın detay sayfasına yönlendirme
            />
          ))}
        </div>
        <div>
          Sana uygun antreman programını seç ve hemen şimdi antreman yapmaya başla.
        </div>
      </div>
    </Layout>
  );
}
