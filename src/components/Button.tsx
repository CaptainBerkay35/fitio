import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void; // Opsiyonel bir onClick
  className?: string;   // Opsiyonel bir className
  to?: string;          // Opsiyonel bir to
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className, to }) => {
  return to ? (
    <a
      href={to}
      className={`bg-white border-2 text-primary border-primary font-montserrat  px-6 py-3 rounded-md text-lg hover:bg-primary hover:text-accentText ${className}`}
      onClick={onClick}
    >
      {text}
    </a>
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
