import React from "react";
import Header from "./Header.tsx";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col ">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 md:px-16 py-8 flex flex-col items-center gap-12">
        {children}
      </main>
    </div>
  );
}