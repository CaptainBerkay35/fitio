import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Menü ikonları için
import Button from "./Button.tsx";

export default function Header({ scrollToCalculator }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleCalculatorClick = () => {
    navigate("/#calculator");
    setMenuOpen(false); // Mobil menü kapanması için (isteğe bağlı)
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true); // Eğer sayfa kaydırılmışsa sticky olacak
      } else {
        setIsSticky(false); // Sayfa üstte ise sticky olmasın
      }
    };

    // Scroll olayını dinlemek
    window.addEventListener("scroll", handleScroll);

    // Temizlik için eventListener'ı kaldır
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-background shadow-md transition-all duration-300 ease-in-out ${
        isSticky ? "bg-opacity-90 shadow-lg" : "bg-opacity-100 shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-primary text-4xl font-bold font-montserrat"
        >
          Fit<span className="text-secondary">io</span>
        </Link>

        {/* Masaüstü Menü */}
        <nav className="hidden md:flex space-x-6 font-montserrat text-text text-lg font-medium">
          <Link to="/" className="hover:text-primary">
            Anasayfa
          </Link>
          <div className="bg-gray-500 w-0.5 min-h-full "></div>
          <button
            onClick={handleCalculatorClick}
            className="hover:text-primary transition"
          >
            Hesaplayıcılar
          </button>
          <div className="bg-gray-500 w-0.5 min-h-full "></div>
          <Link to="/foodList" className="hover:text-primary transition">
            Tarif Kitabı
          </Link>
        </nav>

        {/* Buton */}
        <div className="hidden md:block">
          <Button
            text="Spora Başla"
            to="/workout"
            className="bg-primary text-primary font-montserrat"
          />
        </div>

        {/* Hamburger Menü Butonu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-primary text-3xl">
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Mobil Menü (Animasyonlu) */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-background z-40 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* Sağ Üstteki Kapatma Butonu */}
        {menuOpen && (
          <div className="absolute top-4 right-4">
            <button onClick={toggleMenu} className="text-3xl text-white">
              <FiX />
            </button>
          </div>
        )}

        <nav className="flex flex-col items-center justify-center h-full space-y-2 bg-primary font-montserrat p-8">
          <Link
            to="/"
            className="text-xl font-semibold text-white  border-white border-2 rounded w-full text-center p-4 hover:bg-white hover:text-primary transition"
            onClick={toggleMenu}
          >
            Anasayfa
          </Link>
          <button
            onClick={handleCalculatorClick}
            className="text-xl font-semibold text-white  border-white border-2 rounded w-full text-center p-4 hover:bg-white hover:text-primary transition"
          >
            Hesaplayıcılar
          </button>
          <Link
            to="/foodList"
            className="text-xl font-semibold text-white  border-white border-2 rounded w-full text-center p-4 hover:bg-white hover:text-primary transition"
          >
            Tarif Kitabı
          </Link>
          <Link
            to="/workout"
            className="text-xl font-semibold text-white  border-white border-2 rounded w-full text-center p-4 hover:bg-white hover:text-primary transition"
            onClick={toggleMenu}
          >
            Spora Başla
          </Link>
        </nav>
      </div>
    </header>
  );
}
