import Image from 'next/image';

type Product = {
  name: string;
  description: string;
  price: number;
  image: string;
};

type SectionProduitsProps = {
  title: string;
  products: Product[];
};

export default function SectionProduits({ title, products }: SectionProduitsProps) {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto animate-slideUp">
      <div className={`card-modern p-8 rounded-2xl shadow-lg border border-white/40`}>
        <h3 className="text-3xl font-bold text-gradient mb-6">{title}</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-4 text-center transform transition hover:-translate-y-2 hover:shadow-2xl">
              <Image
                src={product.image || ``}
                alt={product.name}
                width={500}
                height={500}
                className="rounded-xl mb-4 transition-transform hover:scale-105 w-full h-40 object-cover"
              />
              <h3 className="text-lg text-[#FF6F91] font-semibold mb-2 truncate">{product.name}</h3>
              <p className="text-gray-600 mb-4 text-sm line-clamp-2">{product.description}</p>
              <p className="text-lg font-bold text-gradient">
                {product.price.toLocaleString('fr-FR', {
                  style: 'currency',
                  currency: 'EUR'
                })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}