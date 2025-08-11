import React from "react";
import imgLogo from "@/../public/images/logos/logoBackground.png";

export default function NavigationMenuDemo() {
  return (
    <div className="flex flex-row items-center justify-between w-full max-w-6xl mx-auto px-4">
      <div className="flex flex-row items-center space-x-4">
        <div className="glass-effect p-2 rounded-2xl shadow-lg">
          <img
            src={imgLogo.src}
            alt="Logo"
            className="h-16 w-16 rounded-xl transform hover:scale-105 transition-transform"
          />
        </div>
      </div>
      <div>
        <nav className="flex space-x-8">
          <a
            href="/"
            className="text-[#6B7280] hover:text-[#FF6F91] font-medium text-lg transition-colors"
          >
            Accueil
          </a>
          <a
            href="/produits"
            className="text-[#6B7280] hover:text-[#FF6F91] font-medium text-lg transition-colors"
          >
            Produits
          </a>
          <a
            href="/contact"
            className="text-[#6B7280] hover:text-[#FF6F91] font-medium text-lg transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}
