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
          Les colliers
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
            name: "",
            image: "/images/produits/collier/collier1.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier2.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier3.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier4.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier5.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier6.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier7.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier8.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier9.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier10.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier11.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier12.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier13.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier14.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier15.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier16.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier17.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier18.jpg",
            description: "",
            price: 15,
          },
                    {
            name: "",
            image: "/images/produits/collier/collier19.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier20.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier21.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier22.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier23.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier24.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier25.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier26.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier27.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier28.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier29.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier30.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier31.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier32.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier33.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier34.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier35.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier36.jpg",
            description: "",
            price: 15,
          },
                    {
            name: "",
            image: "/images/produits/collier/collier37.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier38.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier39.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier40.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier41.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier42.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier43.jpg",
            description: "",
            price: 15,
          },
          {
            name: "",
            image: "/images/produits/collier/collier44.jpg",
            description: "",
            price: 15,
          },
        ]}
      />

      <Footer />
    </div>
  );
}
