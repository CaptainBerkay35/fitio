import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary py-8 text-white font-montserrat">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg font-semibold">Fitio - Sağlıklı Yaşam ve Fitness</p>
        <p className="text-sm mt-2">Tüm Hakları Saklıdır &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
