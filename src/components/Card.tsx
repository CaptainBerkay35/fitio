import React from "react";
import Button from "./Button.tsx";

interface CardProps {
  title: string;
  desc: string;
  img: string;
}

export default function Card({ title, desc, img }: CardProps) {
  return (
    <div className="flex flex-col min-w-full h-full ">
      {/* Görselin genişliğini eşitlemek için w-full kullanıyoruz */}
      <div className="relative h-80 ">
        <img
          src={img}
          alt={title}
          className="object-cover w-full h-full rounded-md rounded-b-none" // Yüksekliği ve genişliği eşitliyoruz
        />
      </div>
      <div className="flex flex-col font-montserrat gap-4 h-full px-4 py-4 border-2 border-primary border-t-0 rounded-md rounded-t-none">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-lg">{desc}</p>
        <Button text="Şimdi Başlayın"/>
      </div>
    </div>
  );
}
