import React from "react";

const SliderInput = ({ label, value, min, max, onChange, unit }) => {
  return (
    <div className="font-montserrat">
      <div className="flex justify-between items-center font-sansserif">
        <label>{label}</label>
        <span className="bg-gray-100 w-24 px-4 py-2 rounded-md text-black font-bold text-center">
          {value} {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className="w-full appearance-none rounded-lg h-2 "
        style={{
          background: `linear-gradient(to right, #00d172 ${
            ((value - min) / (max - min)) * 100
          }%, #e5e7eb ${((value - min) / (max - min)) * 100}%)`,
        }}
      />
      <div className="flex justify-between text-gray-400 text-sm font-montserrat">
        <span>
          {min} {unit}
        </span>
        <span>
          {max} {unit}
        </span>
      </div>
      {/* Stil uygulaması */}
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: white;
          border: 1px solid #00d172;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        input[type="range"]:active::-webkit-slider-thumb {
          background-color: #00d172; /* Yeşil renk aktif olduğunda */
        }
      `}</style>
    </div>
  );
};

export default SliderInput;
