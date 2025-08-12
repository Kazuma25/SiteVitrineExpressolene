"use client";

import { useState } from "react";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
};

type ProductCategoryProps = {
  title: string;
  chemins: string;
  products: Product[];
};

export default function ProductCategory({
  title,
  products,
  chemins,
}: ProductCategoryProps) {
  const [displayCount, setDisplayCount] = useState(4);

  const showMore = () => {
    setDisplayCount((prev) => prev + 4);
  };

  const showLess = () => {
    setDisplayCount(4);
  };

  const redirectToPage = () => {
    window.location.href = `/produits/${chemins.toLowerCase()}`;}

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="card-modern p-8 rounded-2xl shadow-lg border border-white/40">
        <h2 className="text-3xl font-bold text-gradient mb-8 text-center">
          {title}
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, displayCount).map((product) => (
            <div
              key={product.id}
              className="bg-white/80 rounded-2xl shadow-lg p-4 text-center transform transition hover:-translate-y-1 hover:shadow-xl"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-48 object-cover rounded-xl mb-4 hover:scale-105 transition-transform"
              />
              <h3 className="text-lg text-[#FF6F91] font-semibold mb-2 truncate">
                {product.name}
              </h3>
              <p className="text-lg font-bold text-gradient">
                {product.price.toLocaleString("fr-FR", {
                  style: "currency",
                  currency: "EUR",
                })}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 space-x-4">
          {displayCount && (
            <button
              onClick={redirectToPage}
              className="px-6 py-2 bg-gradient-to-r from-[#FFB5E8] to-[#B5E8FF] text-white rounded-full hover:shadow-lg transition-shadow"
            >
              Voir la page {title}
            </button>
          )}
          {displayCount < products.length && (
            <button
              onClick={showMore}
              className="px-6 py-2 bg-gradient-to-r from-[#FFB5E8] to-[#B5E8FF] text-white rounded-full hover:shadow-lg transition-shadow"
            >
              Voir plus
            </button>
          )}
          {displayCount > 4 && (
            <button
              onClick={showLess}
              className="px-6 py-2 bg-white text-[#FF6F91] border border-[#FFB5E8] rounded-full hover:shadow-lg transition-shadow"
            >
              Voir moins
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
