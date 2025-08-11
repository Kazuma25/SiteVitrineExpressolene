import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import SectionProduits from "@/components/ui/SectionProduits";
import React from "react";

export default function Home() {
  return (
    <div className="font-poppins bg-gradient-to-b from-[#fefaf6] via-[#ffe4ec] to-[#f7faff] text-gray-700 min-h-screen overflow-x-hidden">
      <Header />

      <section className="relative py-16 px-8 max-w-4xl mx-auto mt-10">
        {/* Fond avec effet de carte moderne */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fff5e4]/80 via-[#ffe4ec]/60 to-[#e0f7fa]/80 rounded-3xl transform rotate-1"></div>

        {/* Conteneur principal */}
        <div className="relative z-10 card-modern rounded-2xl p-8 shadow-lg border border-white/40">
          {/* Éléments décoratifs */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#B5E8FF]/20 rounded-full blur-xl animate-[float_6s_ease-in-out_infinite]"></div>
          <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#FFB5E8]/20 rounded-full blur-lg animate-[float_4s_ease-in-out_infinite]"></div>

          {/* Icône principale */}
          <div className="absolute top-6 left-6 w-16 h-16 glass-effect rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6">
            <span className="text-4xl">🌸</span>
          </div>

          {/* Contenu */}
          <div className="mt-16">
            <h2 className="text-4xl font-bold text-gradient text-center mb-8">
              À propos de ma boutique
            </h2>
            <p className="text-center max-w-2xl mx-auto text-[#6B7280] text-lg leading-relaxed glass-effect rounded-xl p-6 shadow-inner border border-white/60">
              Bienvenue dans mon univers coloré et chaleureux. Nous
              sélectionnons avec soin chaque produit afin de vous offrir le
              meilleur de la créativité et de l&apos;originalité, dans un style
              pastel qui apporte douceur et sérénité.
            </p>
          </div>
        </div>
      </section>

      <SectionProduits
        title="Présentation de nos produits"
        products={[
          {
            name: "Terrarium Ectoplasma",
            description: "Un térrarium unique avec un ectoplasma, parfait pour les fans de Pokémon !",
            price: 70,
            image: "/images/produits/terrarium4.jpeg",
          },
          {
            name: "Boucle d'oreilles papillon",
            description: "Une paire de boucles d'oreilles en forme de papillon, légères et élégantes.",
            price: 10,
            image: "/images/produits/boucleoreille7.jpeg",
          },
          {
            name: "Bracelet en perles assortis",
            description: "un bracelet coloré en perles assorties, parfait pour ajouter une touche de couleur à votre tenue.",
            price: 5,
            image: "/images/produits/braceller2.jpeg",
          },          {
            name: "une potion petite",
            description: "une petite potion colorée, parfaite pour les collectionneurs et les fans de magie.",
            price: 5,
            image: "/images/produits/potionPetite2_dos.jpeg",
          },          {
            name: "stickers personnalisés",
            description: "des stickers personnalisés avec des motifs uniques, parfaits pour décorer vos affaires.",
            price: 2,
            image: "/images/produits/stickers1.jpeg",
          },          {
            name: "Une potion grande",
            description: "une grande potion colorée, idéale pour les fans de magie et de potions.",
            price: 15,
            image: "/images/produits/potion2_face.jpeg",
          },{
            name: "Illustration personnalisée",
            description: "une illustration personnalisée réalisée à la main, parfaite pour décorer votre intérieur.",
            price: 2,
            image: "/images/produits/illustration1.jpeg",
          },{
            name: "Porte-clé personnalisé",
            description: "un porte-clé personnalisé avec un design unique, parfait pour ajouter une touche personnelle à vos clés.",
            price: 5,
            image: "/images/produits/porteClef4.jpeg",
          },
        ]}
      />

      <section className="py-12 px-6 max-w-4xl mx-auto animate-slideUp bg-white/80 rounded-3xl shadow-lg border border-[#B5E8FF]">
        <h2 className="text-2xl text-[#FF6F91] text-center mb-6 relative after:block after:w-14 after:h-1 after:bg-[#B5E8FF] after:rounded after:mt-2 after:mx-auto">
          Restons en contact
        </h2>
        <p className="text-center max-w-xl mx-auto text-[#a78bfa]">
          Pour toute question ou information, contactez-moi via les réseaux sociaux.
        </p>
      </section>

      <Footer />
    </div>
  );
}
