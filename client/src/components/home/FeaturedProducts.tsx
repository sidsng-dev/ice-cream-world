import { Link } from "react-router-dom";

import { products } from "../../data/products";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <section
      id="menu"
      className="bg-pink-50 px-5 py-16 sm:px-8 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-pink-600">
              Our favourites
            </p>

            <h2 className="mt-2 text-3xl font-black text-gray-900 sm:text-4xl">
              Scoops of Happiness
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
              Handpicked flavours that keep our customers coming back
              for just one more scoop.
            </p>
          </div>

          {/* View All */}
          <Link
            to="/menu"
            className="w-fit rounded-full border-2 border-pink-200 bg-white px-5 py-2.5 text-sm font-bold text-pink-600 transition hover:bg-pink-600 hover:text-white"
          >
            View All Flavours →
          </Link>

        </div>

        {/* Products */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;