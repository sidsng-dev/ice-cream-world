import { Heart, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import type { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <article className="group overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Product Image */}
      <Link
        to={`/product/${product.id}`}
        className="relative flex h-56 items-center justify-center overflow-hidden bg-pink-50"
        aria-label={`View ${product.name}`}
      >
        {/* Popular Badge */}
        {product.isPopular && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-pink-600 px-3 py-1 text-xs font-bold text-white">
            Popular
          </span>
        )}

        {/* Wishlist */}
        <button
          type="button"
          onClick={(event) => event.preventDefault()}
          aria-label={`Add ${product.name} to wishlist`}
          className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 text-gray-500 shadow-sm transition hover:text-pink-600"
        >
          <Heart size={18} />
        </button>

        {/* Product Emoji */}
        <div className="text-8xl transition-transform duration-500 group-hover:scale-110">
          {product.emoji}
        </div>
      </Link>

      {/* Product Information */}
      <div className="p-5">

        {/* Category */}
        <p className="text-xs font-semibold uppercase tracking-wider text-pink-600">
          {product.category}
        </p>

        {/* Product Name */}
        <Link
          to={`/product/${product.id}`}
          className="mt-1 block text-lg font-bold text-gray-900 transition hover:text-pink-600"
        >
          {product.name}
        </Link>

        {/* Description */}
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

          <p className="text-xl font-black text-gray-900">
            ₹{product.price}
          </p>

          {/* Add to Cart */}
          <button
            type="button"
            onClick={() => addToCart(product)}
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