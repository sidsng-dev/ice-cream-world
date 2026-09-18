import { Heart, ShoppingCart, Star } from "lucide-react";
import type { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className="group overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Product Image */}
      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-pink-50">

        {product.isPopular && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-pink-600 px-3 py-1 text-xs font-bold text-white">
            Popular
          </span>
        )}

        <button
          aria-label={`Add ${product.name} to wishlist`}
          className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 text-gray-500 shadow-sm transition hover:text-pink-600"
        >
          <Heart size={18} />
        </button>

        <div className="text-8xl transition-transform duration-500 group-hover:scale-110">
          {product.emoji}
        </div>
      </div>

      {/* Product Details */}
      <div className="p-5">

        <p className="text-xs font-semibold uppercase tracking-wider text-pink-600">
          {product.category}
        </p>

        <h3 className="mt-1 text-lg font-bold text-gray-900">
          {product.name}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-1">
          <Star
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="text-sm font-semibold text-gray-700">
            {product.rating}
          </span>

          <span className="text-xs text-gray-400">
            / 5
          </span>
        </div>

        {/* Price + Cart */}
        <div className="mt-5 flex items-center justify-between">

          <div>
            <p className="text-xl font-black text-gray-900">
              ₹{product.price}
            </p>
          </div>

          <button
            aria-label={`Add ${product.name} to cart`}
            className="flex items-center gap-2 rounded-full bg-pink-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-pink-700"
          >
            <ShoppingCart size={17} />
            Add
          </button>

        </div>
      </div>
    </article>
  );
};

export default ProductCard;