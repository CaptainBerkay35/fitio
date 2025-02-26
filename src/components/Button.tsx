import React from "react";
import { Link } from "react-router-dom";

// ButtonProps'a 'to' prop'unu string veya undefined olarak tanımlıyoruz
interface ButtonProps {
  text: string;
  onClick?: () => void; 
  className?: string;   
  to?: string;   
  children?: React.ReactNode;        
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className, to,children }) => {
  const baseClass = "bg-white border-2 text-primary border-primary font-montserrat px-6 py-3 rounded-md text-lg hover:bg-primary hover:text-accentText";

  // className prop'u varsa, onu baseClass ile birleştiriyoruz
  const combinedClass = className ? `${className} ${baseClass}` : baseClass;

  return to ? (
    <Link
      to={to} // React Router Link ile yönlendirme
      className={combinedClass}
      onClick={onClick}
    >
      {text}
    </Link>
  ) : (
    <button
      className={combinedClass}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
