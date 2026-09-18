import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

import ProductCard from "../components/home/ProductCard";
import { products } from "../data/products";
const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Classic",
    "Chocolate",
    "Fruit",
    "Special",
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Page Header */}
      <section className="bg-white px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-pink-600">
            Our menu
          </p>

          <h1 className="mt-2 text-4xl font-black text-gray-900 sm:text-5xl">
            Choose Your Happiness 🍦
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
            Explore our delicious collection of creamy ice creams,
            classic favourites and special flavours.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-5 py-8 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative w-full lg:max-w-md">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search ice creams..."
                className="w-full rounded-full border border-pink-100 bg-white py-3 pl-11 pr-5 text-sm text-gray-900 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <SlidersHorizontal
                size={18}
                className="mr-1 text-gray-500"
              />

              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    selectedCategory === category
                      ? "bg-pink-600 text-white"
                      : "bg-white text-gray-600 hover:bg-pink-100 hover:text-pink-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="px-5 pb-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-500">
              Showing{" "}
              <span className="font-bold text-gray-900">
                {filteredProducts.length}
              </span>{" "}
              products
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl bg-white px-6 py-16 text-center">
              <div className="text-5xl">🍦</div>

              <h2 className="mt-4 text-xl font-bold text-gray-900">
                No flavours found
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Try another search or choose a different category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Menu;