import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  img: string;
  link: string;
}

export default function Card({ title, img, link }: CardProps) {
  return (
    <Link
      to={link}
      className="relative block w-full h-full aspect-auto md:aspect-[5/3] overflow-hidden group font-montserrat"
    >
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
      />
      <div className="absolute left-0 bottom-0 md:bottom-1 md:left-2 text-white px-4 py-2 rounded-md font-bold text-base md:text-xl flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
        <div className="bg-black bg-opacity-30 p-1 flex items-center rounded-md text-sm md:text-xl">
        {title}
           
        <span className="relative flex justify-center items-center w-5 h-5 group-hover:translate-x-1 transition-all duration-300">
          <span className="absolute w-3 h-3 border-t-2 border-r-2 border-white rotate-45 group-hover:rotate-90 transition-all duration-300"></span>
        </span>
        </div>
     
      </div>
    </Link>
  );
}
