import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import TerrariumAdopter from "@/components/ui/terrariumAdopter";
import React from "react";

export default function terrariumAdopter() {
  return (
    <div className="font-poppins bg-gradient-to-b from-[#fefaf6] via-[#ffe4ec] to-[#f7faff] text-gray-700 min-h-screen overflow-x-hidden">
      <Header />

      <section className="py-12 px-6 max-w-4xl mx-auto animate-slideUp bg-white/80 rounded-3xl shadow-lg border border-[#B5E8FF] mt-10">
        <h2 className="text-2xl text-[#FF6F91] text-center mb-6 relative after:block after:w-14 after:h-1 after:bg-[#B5E8FF] after:rounded after:mt-2 after:mx-auto">
          Voici les terrariums déjà adopter
        </h2>
      </section>

      <TerrariumAdopter
        title=""
        products={[
          {
            name: "Terrarium aquali",
            image: "/images/produits/terrarium/adopter/terrariumAdopter1.jpg",
          },
          {
            name: "Terrarium kéké",
            image: "/images/produits/terrarium/adopter/terrariumAdopter2.jpg",
          },
          {
            name: "Terrarium aquali",
            image: "/images/produits/terrarium/adopter/terrariumAdopter3.jpg",
          },
          {
            name: "Terrarium dracofeu",
            image: "/images/produits/terrarium/adopter/terrariumAdopter4.jpg",
          },
          {
            name: "Terrarium gobou",
            image: "/images/produits/terrarium/adopter/terrariumAdopter5.jpg",
          },
          {
            name: "Terrarium hipopotas",
            image: "/images/produits/terrarium/adopter/terrariumAdopter6.jpg",
          },
          {
            name: "Terrarium kirbi",
            image: "/images/produits/terrarium/adopter/terrariumAdopter7.jpg",
          },
          {
            name: "Terrarium noctali",
            image: "/images/produits/terrarium/adopter/terrariumAdopter8.jpg",
          },
          {
            name: "Terrarium nymphali",
            image: "/images/produits/terrarium/adopter/terrariumAdopter9.jpg",
          },
          {
            name: "Terrarium nymphali",
            image: "/images/produits/terrarium/adopter/terrariumAdopter10.jpg",
          },
          {
            name: "Terrarium stitch",
            image: "/images/produits/terrarium/adopter/terrariumAdopter11.jpg",
          },
          {
            name: "Terrarium link cartoon",
            image: "/images/produits/terrarium/adopter/terrariumAdopter12.jpg",
          },
          {
            name: "Terrarium loucario",
            image: "/images/produits/terrarium/adopter/terrariumAdopter13.jpg",
          },
        ]}
      />

      <Footer />
    </div>
  );
}
