import React from "react";
import Card from "./Card.tsx";

export default function Services() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div>
        <p className="text-black text-lg font-roboto">
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
        <h1 className="text-black text-4xl font-montserrat">
          Ürün ve Hizmetler
        </h1>
        <div className="flex justify-between gap-12">
          <div className="flex flex-1">
            <Card
              title="Beslenme Planı"
              desc="Kişiye özel beslenme planı ile hedeflerine daha hızlı ulaş."
              img="/food.jpg" // Burada gerçek resim URL'sini kullanın
            />
          </div>
          <div className="flex flex-1">
            <Card
              title="Antrenman Rehberi"
              desc="Hedefe yönelik kişisel antrenman programı ile hızlıca gelişimi hisset."
              img="workoutPlan.jpg" // Burada gerçek resim URL'sini kullanın
            />
          </div>
        </div>
      </div>
    </div>
  );
}
