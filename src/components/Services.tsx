import React from "react";
import Card from "./Card.tsx";
import antreman from "../img/antremanProgramı.webp";
import beslenme from "../img/beslenmePlanı.webp";
import yol from "../img/yolHaritası.webp";

export default function Services() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div>
        <p className="text-black text-lg font-roboto text-center">
          <span className="text-primary font-bold">
            Hedeflerine en hızlı şekilde ulaşmak
          </span>{" "}
          için beslenme düzenini şimdi oluştur!
          <br />
          <span className="text-primary font-bold">
            Sağlıklı bir yaşam ve fit bir vücut
          </span>{" "}
          için doğru adımları atmaya başla.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-black text-4xl font-montserrat font-semibold">
          Ürün ve Hizmetler
        </h1>

        <div className="grid grid-cols-2  gap-2 md:gap-8">
          <div className="row-span-2 ">
            <Card title="Beslenme Planı" img={beslenme} link="/nutrition" />
          </div>

          <div className="h-full">
            <Card title="Antrenman Rehberi" img={antreman} link="/workout" />
          </div>

          <div className="h-full">
            <Card title="Spor Yol Haritası" img={yol} link="/roadmap" />
          </div>
        </div>
      </div>
    </div>
  );
}
