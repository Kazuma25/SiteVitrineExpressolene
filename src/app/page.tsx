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
              Bonjour et bienvenue a tous sur ma boutique, ici vous retrouverez mes creations faites main proposés à la vente. pour me passez commande, veuillez me contacter via les réseaux sociaux ou mail. 
            </p>
          </div>
        </div>
      </section>

      <SectionProduits
        title="Présentation de nos produits"
        products={[
          {
            name: "Terrarium",
            description: "Un terrarium personnalisable ou non selon vos envies.",
            price: 70,
            image: "/images/produits/terrarium/terrarium4.jpg",
          },
          {
            name: "Boucle d'oreilles",
            description: "Une paire de boucles d'oreilles, légères et élégantes.",
            price: 10,
            image: "/images/produits/boucleoreille/boucleOreille7.jpg",
          },
          {
            name: "bracelets en perles",
            description: "un bracelet coloré en perles assorties personnalisable.",
            price: 5,
            image: "/images/produits/bracelets/bracelets2.jpg",
          },          {
            name: "Collier",
            description: "Collier en perle fait main personnalisable selon vos envies.",
            price: 5,
            image: "/images/produits/collier/collier5.jpg",
          },          {
            name: "stickers personnalisés",
            description: "des stickers personnalisés avec des motifs uniques.",
            price: 2,
            image: "/images/produits/stickers/stickers1.jpg",
          },          {
            name: "Potion décorative",
            description: "Des potions colorée, idéale pour les fans de magie et de potions.",
            price: 8,
            image: "/images/produits/potion/grande/potion2.jpg",
          },{
            name: "Illustration personnalisée",
            description: "illustrations personnalisées réalisées à la main.",
            price: 3,
            image: "/images/produits/illustration/illustration1.jpg",
          },{
            name: "Porte-clé personnalisé",
            description: "un porte-clé personnalisé avec un design unique.",
            price: 6,
            image: "/images/produits/porteClef/porteClef4.jpg",
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
