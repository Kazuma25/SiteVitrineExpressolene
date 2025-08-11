import React from "react";
import imgLogo from "@/../public/images/logos/logoBackground.png";
import Link from "next/link";
import Image from "next/image";

export default function NavigationMenuDemo() {
  return (
    <div className="flex flex-row items-center justify-between w-full max-w-6xl mx-auto px-4">
      <div className="flex flex-row items-center space-x-4">
        <div className="glass-effect p-2 rounded-2xl shadow-lg">
          <Image
            src={imgLogo.src}
            alt="Logo"
            width={64}
            height={64}
            className="rounded-xl transform hover:scale-105 transition-transform"
          />
        </div>
      </div>
      <div>
        <nav className="flex space-x-8">
          <Link
            href="/"
            className="text-[#6B7280] hover:text-[#FF6F91] font-medium text-lg transition-colors"
          >
            Accueil
          </Link>
          <Link
            href="/produits"
            className="text-[#6B7280] hover:text-[#FF6F91] font-medium text-lg transition-colors"
          >
            Produits
          </Link>
          <Link
            href="/contact"
            className="text-[#6B7280] hover:text-[#FF6F91] font-medium text-lg transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
