import React from "react";
import Button from "./Button.tsx";

export default function Banner() {

  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      {/* Sol Taraf: Metin Alanı */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Fitness ile Sağlıklı Bir Hayat!
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Spor yapmak sağlığınızı geliştirir ve size daha enerjik bir hayat
          sunar.
        </p>
        <Button
          text="Şimdi Başlayın"
          className="shadow-lg shadow-primary hover:shadow-none"
        />
      </div>

      {/* Sağ Taraf: Resim Alanı */}
      <div className="flex-1 relative">
        <img
          src="bannerImg.png"
          alt="Fitness Banner"
          className="w-full max-w-md mx-auto md:mx-0 rounded-lg"
        />

      </div>
    </div>
  );
}
