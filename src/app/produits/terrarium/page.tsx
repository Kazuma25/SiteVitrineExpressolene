'use client'

import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import SectionProduits from "@/components/ui/SectionProduits";
import React from "react";

const redirectToPage = () => {
  window.location.href = `/produits`;
};

export default function terrarium() {
  return (
    <div className="font-poppins bg-gradient-to-b from-[#fefaf6] via-[#ffe4ec] to-[#f7faff] text-gray-700 min-h-screen overflow-x-hidden">
      <Header />

      <section className="py-12 px-6 max-w-4xl mx-auto animate-slideUp bg-white/80 rounded-3xl shadow-lg border border-[#B5E8FF] mt-10">
        <h2 className="text-2xl text-[#FF6F91] text-center mb-6 relative after:block after:w-14 after:h-1 after:bg-[#B5E8FF] after:rounded after:mt-2 after:mx-auto">
          Terrarium a adopter
        </h2>
        <div className="text-center">
            <button
          onClick={redirectToPage}
          className="px-6 py-2 bg-gradient-to-r from-[#FFB5E8] to-[#B5E8FF] text-white rounded-full hover:shadow-lg transition-shadow"
        >
          Revenir à la page des produits
        </button>
        </div>
      </section>

      <SectionProduits
        title=""
        products={[
          {
            name: "Terrarium voltali",
            image: "/images/produits/terrarium/terrarium1.jpg",
            description: "",
            price: 70,
          },
          {
            name: "Terrarium nymphali",
            image: "/images/produits/terrarium/terrarium2.jpg",
            description: "",
            price: 70,
          },
          {
            name: "Terrarium evoli",
            image: "/images/produits/terrarium/terrarium3.jpg",
            description: "",
            price: 70,
          },
          {
            name: "Terrarium ectoplasma",
            image: "/images/produits/terrarium/terrarium4.jpg",
            description: "",
            price: 70,
          },
          {
            name: "Terrarium goupix d'alola",
            image: "/images/produits/terrarium/terrarium5.jpg",
            description: "",
            price: 70,
          },
          {
            name: "Terrarium animal crossing",
            image: "/images/produits/terrarium/terrarium6.jpg",
            description: "",
            price: 70,
          },
          {
            name: "Terrarium animal crossing",
            image: "/images/produits/terrarium/terrarium7.jpg",
            description: "",
            price: 70,
          },
          {
            name: "Terrarium pickachu",
            image: "/images/produits/terrarium/terrarium8.jpg",
            description: "",
            price: 70,
          },
          {
            name: "Terrarium animal crossing",
            image: "/images/produits/terrarium/terrarium9.jpg",
            description: "",
            price: 70,
          },
          {
            name: "Terrarium link cartoon",
            image: "/images/produits/terrarium/terrarium10.jpg",
            description: "",
            price: 70,
          },
          {
            name: "Terrarium pyroli",
            image: "/images/produits/terrarium/terrarium11.jpg",
            description: "",
            price: 70,
          },
          {
            name: "Terrarium chat noir",
            image: "/images/produits/terrarium/terrarium12.jpg",
            description: "",
            price: 70,
          },
          {
            name: "Terrarium lyxi",
            image: "/images/produits/terrarium/terrarium13.jpg",
            description: "",
            price: 70,
          },
          {
            name: "Terrarium héricendre",
            image: "/images/produits/terrarium/terrarium14.jpg",
            description: "",
            price: 70,
          },
          {
            name: "Terrarium starter",
            image: "/images/produits/terrarium/terrarium15.jpg",
            description: "",
            price: 70,
          },
          {
            name: "Terrarium animal crossing",
            image: "/images/produits/terrarium/terrarium16.jpg",
            description: "",
            price: 70,
          },
          {
            name: "Terrarium pyroli",
            image: "/images/produits/terrarium/terrarium17.jpg",
            description: "",
            price: 70,
          },
          {
            name: "Terrarium ossatueur",
            image: "/images/produits/terrarium/terrarium18.jpg",
            description: "",
            price: 70,
          },
        ]}
      />

      <Footer />
    </div>
  );
}
