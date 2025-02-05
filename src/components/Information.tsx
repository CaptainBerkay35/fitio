import React from "react";

export default function Information() {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="font-montserrat text-4xl font-semibold">
        <span className="text-primary">Sporun</span> Faydaları
      </h1>
      <div className="bg-gradient-to-r from-green-600 to-primary rounded-lg font-roboto flex flex-col md:flex-row items-center justify-center px-8 py-12 gap-4">
        <div className="flex flex-1 items-center justify-center gap-4">
          <div className="bg-white px-2 py-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
            >
              <path
                fill="#05c668"
                d="M20.57 14.86L22 13.43L20.57 12L17 15.57L8.43 7L12 3.43L10.57 2L9.14 3.43L7.71 2L5.57 4.14L4.14 2.71L2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57L3.43 12L7 8.43L15.57 17L12 20.57L13.43 22l1.43-1.43L16.29 22l2.14-2.14l1.43 1.43l1.43-1.43l-1.43-1.43L22 16.29z"
              />
            </svg>
          </div>
          <div className="flex flex-col font-roboto text-white gap-2">
            <h2 className="text-2xl">Sağlıklı Yaşam</h2>
            <p className="text-lg">
              Düzenli spor yapmak genel sağlığı artırır.
            </p>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center gap-4">
          <div className="bg-white px-2 py-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
            >
              <path
                fill="#05c668"
                d="m7.45 12.6l3.575-2.6L7.45 7.4l-.9 1.2L8.475 10L6.55 11.4zm9.1 0l.9-1.2l-1.925-1.4l1.925-1.4l-.9-1.2l-3.575 2.6zm-6.05 4.45l1.5-1.5l1.5 1.5l1.5-1.5l.975.975l1.05-1.05L15 13.45l-1.5 1.5l-1.5-1.5l-1.5 1.5l-1.5-1.5l-2.025 2.025l1.05 1.05L9 15.55zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20"
              />
            </svg>
          </div>
          <div className="flex flex-col font-roboto text-white gap-2">
            <h2 className="text-2xl">Stresten Kurtulma</h2>
            <p className="text-lg">
              Spor, endorfin salgılayarak stres seviyelerini düşürür ve ruh
              halini iyileştirir.
            </p>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center gap-4">
          <div className="bg-white px-2 py-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
            >
              <path fill="#05c668" d="M3 22V8h4v14zm7 0V2h4v20zm7 0v-8h4v8z" />
            </svg>{" "}
          </div>
          <div className="flex flex-col font-roboto text-white gap-2">
            <h2 className="text-2xl">Fiziksel Performans</h2>
            <p className="text-lg">
              Düzenli egzersiz yapmak, kas gücünü artırır ve fiziksel
              performansı yükseltir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}