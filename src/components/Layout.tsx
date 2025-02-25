import React from "react";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";


export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 md:px-0 py-8 flex flex-col items-center gap-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}
