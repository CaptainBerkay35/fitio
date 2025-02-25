import React from "react";
import { Link } from "react-router-dom";

// ButtonProps'a 'to' prop'unu string veya undefined olarak tanımlıyoruz
interface ButtonProps {
  text: string;
  onClick?: () => void; // Opsiyonel bir onClick
  className?: string;   // Opsiyonel bir className
  to?: string;          // Opsiyonel bir to, eğer sağlanmışsa Link olacak
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className, to }) => {
  return to ? (
    <Link
      to={to} // React Router Link ile yönlendirme
      className={`bg-white border-2 text-primary border-primary font-montserrat px-6 py-3 rounded-md text-lg hover:bg-primary hover:text-accentText ${className}`}
      onClick={onClick}
    >
      {text}
    </Link>
  ) : (
    <button
      className={`bg-white border-2 text-primary border-primary font-montserrat px-6 py-3 rounded-md text-lg hover:bg-primary hover:text-accentText ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
