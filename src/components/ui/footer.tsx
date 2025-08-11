import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-20">
      {/* Forme décorative du haut */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-br from-[#FFD6A5]/90 via-[#FFB5E8]/80 to-[#B5E8FF]/90 transform -skew-y-3"></div>

      {/* Contenu principal */}
      <div className="relative pt-24 pb-12 px-6 bg-gradient-to-br from-[#FFD6A5]/90 via-[#FFB5E8]/80 to-[#B5E8FF]/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto grid gap-12 sm:grid-cols-3">
          {/* Colonne 1 */}
          <div className="glass-effect p-6 rounded-2xl">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Boutique - Expressolene
            </h3>
            <p className="text-[#6B7280]">
              Produits uniques et colorés pour un quotidien plein de douceur.
            </p>
          </div>

          {/* Colonne 2 */}
          <div className="glass-effect p-6 rounded-2xl">
            <h3 className="text-2xl font-bold text-gradient mb-4">Liens</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-[#6B7280] hover:text-[#FF6F91] font-medium text-lg transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/produits"
                  className="text-[#6B7280] hover:text-[#FF6F91] transition-colors duration-300"
                >
                  Produits
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#6B7280] hover:text-[#FF6F91] transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 */}
          <div className="glass-effect p-8 rounded-2xl w-full">
            <h3 className="text-2xl font-bold text-gradient mb-6">Contact</h3>
            <div className="space-y-8 text-[#6B7280]">
              {/* Contact direct */}
              <div className="space-y-4">
                <p className="flex items-center hover:text-[#FF6F91] transition-colors">
                  <span className="mr-3">✉️</span>
                  <a href="#">expressolene.crea@gmail.com</a>
                </p>
              </div>

              {/* Réseaux sociaux */}
              <div>
                <h4 className="font-semibold text-[#FF6F91] mb-4">Suivez-moi</h4>
                <div className="flex flex-row justify-between gap-2">
                  <a
                    href="https://www.instagram.com/expresso_crea"
                    className="flex-1 flex items-center justify-center bg-white/80 hover:bg-white transition-all duration-300 px-3 py-2 rounded-full group shadow-sm hover:shadow-md"
                  >
                    <Image
                      src="/images/logos/instagram.png"
                      alt="Instagram"
                      width={24}
                      height={24}
                      className="object-contain group-hover:scale-110 transition-transform"
                    />
                    <span className="ml-2 text-xs text-[#6B7280] group-hover:text-[#FF6F91]">
                      Instagram
                    </span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@expressolene"
                    className="flex-1 flex items-center justify-center bg-white/80 hover:bg-white transition-all duration-300 px-3 py-2 rounded-full group shadow-sm hover:shadow-md"
                  >
                    <Image
                      src="/images/logos/tiktok.png"
                      alt="TikTok"
                      width={24}
                      height={24}
                      className="object-contain group-hover:scale-110 transition-transform"
                    />
                    <span className="ml-2 text-xs text-[#6B7280] group-hover:text-[#FF6F91]">
                      TikTok
                    </span>
                  </a>
                  <a
                    href="https://linktr.ee/Expressolene?fbclid=PAZXh0bgNhZW0CMTEAAadjBOUBQR43fuu6f8Hm-SWr05xZAJjAwbqVQIA44qfwc8hQk5pyT88GuDE8TQ_aem_wpgLHBhIZ_LtZ2EKp5bkfw"
                    className="flex-1 flex items-center justify-center bg-white/80 hover:bg-white transition-all duration-300 px-3 py-2 rounded-full group shadow-sm hover:shadow-md"
                  >
                    <Image
                      src="/images/logos/linktree.png"
                      alt="Linktree"
                      width={24}
                      height={24}
                      className="object-contain group-hover:scale-110 transition-transform"
                    />
                    <span className="ml-2 text-xs text-[#6B7280] group-hover:text-[#FF6F91]">
                      Linktree
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-white/20 text-center text-[#6B7280]">
          <p>© 2025 Exprossolene - shop. Tous droits réservés Kazuma2503.</p>
        </div>
      </div>
    </footer>
  );
}
