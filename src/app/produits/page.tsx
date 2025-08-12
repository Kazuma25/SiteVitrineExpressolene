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
          Pour toute commande personnalisée, veuillez me contacter via les
          réseaux sociaux ou par email. Je serai ravie de discuter de vos idées
          et de créer quelque chose d&apos;unique pour vous !
          <br />
          <br />
          De plus les commandes personnalisées sont ouvert du 20 au 1er du mois
          suivant, les produits concernés sont : les terrariums, les
          illustrations, les porte-clés et les colliers.
        </p>
      </section>

      <ProductCategory
        title="Les terrariums"
        chemins="terrarium"
        products={[
          {
            id: 1,
            name: "Terrarium Ectoplasma",
            image: "/images/produits/terrarium/terrarium4.jpg",
            price: 70,
          },
          {
            id: 2,
            name: "Terrarium Voltali",
            image: "/images/produits/terrarium/terrarium1.jpg",
            price: 70,
          },
          {
            id: 3,
            name: "Terrarium Nymphali",
            image: "/images/produits/terrarium/terrarium2.jpg",
            price: 70,
          },
          {
            id: 4,
            name: "Terrarium Evoli",
            image: "/images/produits/terrarium/terrarium3.jpg",
            price: 70,
          },
          {
            id: 5,
            name: "Terrarium Goupix d'Alola",
            image: "/images/produits/terrarium/terrarium5.jpg",
            price: 70,
          },
          {
            id: 6,
            name: "Terrarium animal crossing",
            image: "/images/produits/terrarium/terrarium6.jpg",
            price: 70,
          },
          {
            id: 7,
            name: "Terrarium animal crossing",
            image: "/images/produits/terrarium/terrarium7.jpg",
            price: 70,
          },
          {
            id: 8,
            name: "Terrarium Pikachu",
            image: "/images/produits/terrarium/terrarium8.jpg",
            price: 70,
          },
        ]}
      />

      <ProductCategory
        title="Les colliers"
        chemins="collier"
        products={[
          {
            id: 1,
            name: "",
            image: "/images/produits/collier/collier1.jpg",
            price: 10,
          },
          {
            id: 2,
            name: "",
            image: "/images/produits/collier/collier2.jpg",
            price: 10,
          },
          {
            id: 3,
            name: "",
            image: "/images/produits/collier/collier3.jpg",
            price: 10,
          },
          {
            id: 4,
            name: "",
            image: "/images/produits/collier/collier4.jpg",
            price: 10,
          },
          {
            id: 5,
            name: "",
            image: "/images/produits/collier/collier5.jpg",
            price: 10,
          },
          {
            id: 6,
            name: "",
            image: "/images/produits/collier/collier6.jpg",
            price: 10,
          },
          {
            id: 7,
            name: "",
            image: "/images/produits/collier/collier7.jpg",
            price: 10,
          },
          {
            id: 8,
            name: "",
            image: "/images/produits/collier/collier8.jpg",
            price: 10,
          },
        ]}
      />

      <ProductCategory
        title="Les porte-clés"
        chemins="porteClef"
        products={[
          {
            id: 1,
            name: "porte-clé OC",
            image: "/images/produits/porteClef/porteClef1.jpg",
            price: 5,
          },
          {
            id: 2,
            name: "porte-clé Tokyo Ghoul",
            image: "/images/produits/porteClef/porteClef2.jpg",
            price: 5,
          },
          {
            id: 3,
            name: "porte-clé chats (noir et blanc)",
            image: "/images/produits/porteClef/porteClef3.jpg",
            price: 5,
          },
          {
            id: 4,
            name: "porte-clé chats (roux et blanc)",
            image: "/images/produits/porteClef/porteClef4.jpg",
            price: 5,
          },
          {
            id: 5,
            name: "porte-clé Petshop",
            image: "/images/produits/porteClef/porteClef5.jpg",
            price: 5,
          },
          {
            id: 6,
            name: "porte-clé chats (roux et blanc)",
            image: "/images/produits/porteClef/porteClef6.jpg",
            price: 5,
          },
          {
            id: 7,
            name: "porte-clé chats (roux et blanc)",
            image: "/images/produits/porteClef/porteClef7.jpg",
            price: 5,
          },
          {
            id: 8,
            name: "porte-clé chats (roux et blanc)",
            image: "/images/produits/porteClef/porteClef8.jpg",
            price: 5,
          },
        ]}
      />

      <ProductCategory
        title="les boucles d'oreilles"
        chemins="boucleOreille"
        products={[
          {
            id: 1,
            name: "",
            image: "/images/produits/boucleOreille/boucleoreille1.jpg",
            price: 5,
          },
          {
            id: 2,
            name: "",
            image: "/images/produits/boucleOreille/boucleoreille2.jpg",
            price: 5,
          },
          {
            id: 3,
            name: "",
            image: "/images/produits/boucleOreille/boucleoreille3.jpg",
            price: 5,
          },
          {
            id: 4,
            name: "",
            image: "/images/produits/boucleOreille/boucleoreille4.jpg",
            price: 5,
          },
          {
            id: 5,
            name: "",
            image: "/images/produits/boucleOreille/boucleoreille5.jpg",
            price: 5,
          },
          {
            id: 6,
            name: "",
            image: "/images/produits/boucleOreille/boucleoreille6.jpg",
            price: 5,
          },
          {
            id: 7,
            name: "",
            image: "/images/produits/boucleOreille/boucleoreille7.jpg",
            price: 5,
          },
          {
            id: 8,
            name: "",
            image: "/images/produits/boucleOreille/boucleoreille8.jpg",
            price: 5,
          },
        ]}
      />

      <ProductCategory
        title="Charme de telephone"
        chemins="charmeTel"
        products={[
          {
            id: 1,
            name: "",
            image: "/images/produits/charmeTel/charmeTel1.jpg",
            price: 5,
          },
          {
            id: 2,
            name: "",
            image: "/images/produits/charmeTel/charmeTel2.jpg",
            price: 5,
          },
          {
            id: 3,
            name: "",
            image: "/images/produits/charmeTel/charmeTel.jpg",
            price: 5,
          },
          {
            id: 4,
            name: "",
            image: "/images/produits/charmeTel/charmeTel.jpg",
            price: 5,
          },
          {
            id: 5,
            name: "",
            image: "/images/produits/charmeTel/charmeTel.jpg",
            price: 5,
          },
          {
            id: 6,
            name: "",
            image: "/images/produits/charmeTel/charmeTel.jpg",
            price: 5,
          },
          {
            id: 7,
            name: "",
            image: "/images/produits/charmeTel/charmeTel.jpg",
            price: 5,
          },
          {
            id: 8,
            name: "",
            image: "/images/produits/charmeTel/charmeTel.jpg",
            price: 5,
          },
        ]}
      />

      <ProductCategory
        title="Marque page"
        chemins="marquePage"
        products={[
          {
            id: 1,
            name: "",
            image: "/images/produits/marquePage/marquePage1.jpg",
            price: 5,
          },
          {
            id: 2,
            name: "",
            image: "/images/produits/marquePage/marquePage2.jpg",
            price: 5,
          },
          {
            id: 3,
            name: "",
            image: "/images/produits/marquePage/marquePage3.jpg",
            price: 5,
          },
          {
            id: 4,
            name: "",
            image: "/images/produits/marquePage/marquePage4.jpg",
            price: 5,
          },
        ]}
      />

      <ProductCategory
        title="SunCatcher ( attrape soleil )"
        chemins="sunCatcher"
        products={[
          {
            id: 1,
            name: "",
            image: "/images/produits/sunCatcher/sunCatcher1.jpg",
            price: 5,
          },
          {
            id: 2,
            name: "",
            image: "/images/produits/sunCatcher/sunCatcher2.jpg",
            price: 5,
          },
          {
            id: 3,
            name: "",
            image: "/images/produits/sunCatcher/sunCatcher3.jpg",
            price: 5,
          },
          {
            id: 4,
            name: "",
            image: "/images/produits/sunCatcher/sunCatcher4.jpg",
            price: 5,
          },
          {
            id: 5,
            name: "",
            image: "/images/produits/sunCatcher/sunCatcher5.jpg",
            price: 5,
          },
          {
            id: 6,
            name: "",
            image: "/images/produits/sunCatcher/sunCatcher6.jpg",
            price: 5,
          },
          {
            id: 7,
            name: "",
            image: "/images/produits/sunCatcher/sunCatcher7.jpg",
            price: 5,
          },
          {
            id: 8,
            name: "",
            image: "/images/produits/sunCatcher/sunCatcher8.jpg",
            price: 5,
          },
        ]}
      />

      <ProductCategory
        title="Vide poche"
        chemins="videPoche"
        products={[
          {
            id: 1,
            name: "",
            image: "/images/produits/videPoche/videPoche1.jpg",
            price: 5,
          },
          {
            id: 2,
            name: "",
            image: "/images/produits/videPoche/videPoche2.jpg",
            price: 5,
          },
          {
            id: 3,
            name: "",
            image: "/images/produits/videPoche/videPoche3.jpg",
            price: 5,
          },
          {
            id: 4,
            name: "",
            image: "/images/produits/videPoche/videPoche4.jpg",
            price: 5,
          },
          {
            id: 5,
            name: "",
            image: "/images/produits/videPoche/videPoche5.jpg",
            price: 5,
          },
          {
            id: 6,
            name: "",
            image: "/images/produits/videPoche/videPoche6.jpg",
            price: 5,
          },
          {
            id: 7,
            name: "",
            image: "/images/produits/videPoche/videPoche7.jpg",
            price: 5,
          },
          {
            id: 8,
            name: "",
            image: "/images/produits/videPoche/videPoche8.jpg",
            price: 5,
          },
        ]}
      />

      <ProductCategory
        title="Barettes creamy"
        chemins="barettesCreamy"
        products={[
          {
            id: 1,
            name: "",
            image: "/images/produits/barettesCreamy/barettesCreamy1.jpg",
            price: 5,
          },
          {
            id: 2,
            name: "",
            image: "/images/produits/barettesCreamy/barettesCreamy2.jpg",
            price: 5,
          },
          {
            id: 3,
            name: "",
            image: "/images/produits/barettesCreamy/barettesCreamy3.jpg",
            price: 5,
          },
          {
            id: 4,
            name: "",
            image: "/images/produits/barettesCreamy/barettesCreamy4.jpg",
            price: 5,
          },
          {
            id: 5,
            name: "",
            image: "/images/produits/barettesCreamy/barettesCreamy5.jpg",
            price: 5,
          },
          {
            id: 6,
            name: "",
            image: "/images/produits/barettesCreamy/barettesCreamy6.jpg",
            price: 5,
          },
          {
            id: 7,
            name: "",
            image: "/images/produits/barettesCreamy/barettesCreamy7.jpg",
            price: 5,
          },
          {
            id: 8,
            name: "",
            image: "/images/produits/barettesCreamy/barettesCreamy8.jpg",
            price: 5,
          },
        ]}
      />

      <ProductCategory
        title="les bracelets "
        chemins="bracelets"
        products={[
          {
            id: 1,
            name: "",
            image: "/images/produits/bracelets/bracelets1.jpg",
            price: 10,
          },
          {
            id: 2,
            name: "",
            image: "/images/produits/bracelets/bracelets2.jpg",
            price: 10,
          },
          {
            id: 3,
            name: "",
            image: "/images/produits/bracelets/bracelets3.jpg",
            price: 10,
          },
          {
            id: 4,
            name: "",
            image: "/images/produits/bracelets/bracelets4.jpg",
            price: 10,
          },
          {
            id: 5,
            name: "",
            image: "/images/produits/bracelets/bracelets5.jpg",
            price: 10,
          },
          {
            id: 6,
            name: "",
            image: "/images/produits/bracelets/bracelets6.jpg",
            price: 10,
          },
          {
            id: 7,
            name: "",
            image: "/images/produits/bracelets/bracelets7.jpg",
            price: 10,
          },
          {
            id: 8,
            name: "",
            image: "/images/produits/bracelets/bracelets8.jpg",
            price: 10,
          },
        ]}
      />

      <Footer />
    </div>
  );
}
