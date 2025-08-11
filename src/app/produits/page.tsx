import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import ProductCategory from "@/components/ui/produitCategorie";
import React from "react";

export default function Home() {
  return (
    <div className="font-poppins bg-gradient-to-b from-[#fefaf6] via-[#ffe4ec] to-[#f7faff] text-gray-700 min-h-screen overflow-x-hidden">
      <Header />

      <section className="py-12 px-6 max-w-4xl mx-auto animate-slideUp bg-white/80 rounded-3xl shadow-lg border border-[#B5E8FF] mt-10">
        <h2 className="text-2xl text-[#FF6F91] text-center mb-6 relative after:block after:w-14 after:h-1 after:bg-[#B5E8FF] after:rounded after:mt-2 after:mx-auto">
          Information commande personnalisée
        </h2>
        <p className="text-center max-w-xl mx-auto text-[#a78bfa]">
          Pour toute commande personnalisée, veuillez me contacter via les réseaux sociaux ou par email. Je serai ravie de discuter de vos idées et de créer quelque chose d'unique pour vous !
          <br/><br/>
          De plus les commandes personnalisées sont ouvert du 20 au 1er du mois suivant, les produits consernés sont : les terrariums, les illustrations, les porte-clés et les colliers.
        </p>
      </section>

      <ProductCategory
        title="Les terrariums"
        products={[
          {
            id: 1,
            name: "Terrarium Ectoplasma",
            image: "/images/produits/terrarium4.jpeg",
            price: 70,
          },
          {
            id: 2,
            name: "Terrarium Voltali",
            image: "/images/produits/terrarium1.jpeg",
            price: 70,
          },
          {
            id: 2,
            name: "Terrarium Nymphali",
            image: "/images/produits/terrarium2.jpeg",
            price: 70,
          },
          {
            id: 2,
            name: "Terrarium Evoli",
            image: "/images/produits/terrarium3.jpeg",
            price: 70,
          },
          {
            id: 2,
            name: "Terrarium Goupix d'Alola",
            image: "/images/produits/terrarium5.jpeg",
            price: 70,
          },
        ]}
      />

      <ProductCategory
        title="Les colliers"
        products={[
          {
            id: 1,
            name: "collier",
            image: "/images/produits/collier1.jpeg",
            price: 10,
          },
          {
            id: 2,
            name: "collier",
            image: "/images/produits/collier2.jpeg",
            price: 10,
          },
          {
            id: 2,
            name: "collier",
            image: "/images/produits/collier3.jpeg",
            price: 10,
          },
          {
            id: 2,
            name: "collier",
            image: "/images/produits/collier4.jpeg",
            price: 10,
          },
          {
            id: 2,
            name: "collier",
            image: "/images/produits/collier5.jpeg",
            price: 10,
          },
          {
            id: 2,
            name: "collier",
            image: "/images/produits/collier6.jpeg",
            price: 10,
          },
          {
            id: 2,
            name: "collier",
            image: "/images/produits/collier7.jpeg",
            price: 10,
          },
        ]}
      />

      <ProductCategory
        title="Les porte-clés"
        products={[
          {
            id: 1,
            name: "porte-clé OC",
            image: "/images/produits/porteClef1.jpeg",
            price: 5,
          },
          {
            id: 2,
            name: "porte-clé Tokyo Ghoul",
            image: "/images/produits/porteClef2.jpeg",
            price: 5,
          },
          {
            id: 2,
            name: "porte-clé chats (noir et blanc)",
            image: "/images/produits/porteClef3.jpeg",
            price: 5,
          },
          {
            id: 2,
            name: "porte-clé chats (roux et blanc)",
            image: "/images/produits/porteClef4.jpeg",
            price: 5,
          },
        ]}
      />

      <ProductCategory
        title="les boucles d'oreilles"
        products={[
          {
            id: 1,
            name: "boucles d'oreilles",
            image: "/images/produits/boucleoreille1.jpeg",
            price: 5,
          },
          {
            id: 2,
            name: "boucles d'oreilles",
            image: "/images/produits/boucleoreille2.jpeg",
            price: 5,
          },
          {
            id: 2,
            name: "boucles d'oreilles",
            image: "/images/produits/boucleoreille3.jpeg",
            price: 5,
          },
          {
            id: 2,
            name: "boucles d'oreilles",
            image: "/images/produits/boucleoreille4.jpeg",
            price: 5,
          },
          {
            id: 2,
            name: "boucles d'oreilles",
            image: "/images/produits/boucleoreille5.jpeg",
            price: 5,
          },
          {
            id: 2,
            name: "boucles d'oreilles",
            image: "/images/produits/boucleoreille6.jpeg",
            price: 5,
          },
          {
            id: 2,
            name: "boucles d'oreilles",
            image: "/images/produits/boucleoreille7.jpeg",
            price: 5,
          },
        ]}
      />
      <Footer />
    </div>
  );
}
