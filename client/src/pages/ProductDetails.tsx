import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Star,
} from "lucide-react";

import { useCart } from "../context/CartContext";
import { products } from "../data/products";
import Toast from "../components/common/Toast";

const ProductDetails = () => {
  const { addToCart } = useCart();
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);

  // Automatically hide toast after 2.5 seconds
  useEffect(() => {
    if (!showToast) {
      return;
    }

    const timer = setTimeout(() => {
      setShowToast(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [showToast]);

  // Product doesn't exist
  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-pink-50 px-5">
        <div className="text-center">
          <div className="text-6xl">🍦</div>

          <h1 className="mt-5 text-2xl font-black text-gray-900">
            Product not found
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Sorry, we couldn't find that flavour.
          </p>

          <Link
            to="/menu"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-pink-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-pink-700"
          >
            <ArrowLeft size={17} />
            Back to Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50 px-5 py-10 sm:px-8 lg:py-14">

      {/* Toast */}
      {showToast && (
        <Toast
          message={`${product.name} added to cart!`}
          onClose={() => setShowToast(false)}
        />
      )}

      <div className="mx-auto max-w-6xl">

        {/* Back to Menu */}
        <Link
          to="/menu"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition hover:text-pink-600"
        >
          <ArrowLeft size={17} />
          Back to Menu
        </Link>

        {/* Product Container */}
        <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-sm lg:grid-cols-2">

          {/* Product Image */}
          <div className="relative flex min-h-[400px] items-center justify-center bg-pink-50 p-10">

            {product.isPopular && (
              <span className="absolute left-6 top-6 rounded-full bg-pink-600 px-4 py-2 text-xs font-bold text-white">
                Popular
              </span>
            )}

            <div className="text-[10rem] transition-transform duration-500 hover:scale-110">
              {product.emoji}
            </div>

          </div>

          {/* Product Information */}
          <div className="p-7 sm:p-10">

            {/* Category */}
            <p className="text-sm font-bold uppercase tracking-wider text-pink-600">
              {product.category}
            </p>

            {/* Name */}
            <h1 className="mt-2 text-3xl font-black text-gray-900 sm:text-4xl">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={18}
                  className={
                    index < Math.round(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-200"
                  }
                />
              ))}

              <span className="ml-2 text-sm font-semibold text-gray-600">
                {product.rating} / 5
              </span>
            </div>

            {/* Description */}
            <p className="mt-6 text-sm leading-7 text-gray-500 sm:text-base">
              {product.description}
            </p>

            {/* Price */}
            <div className="mt-7 border-t border-gray-100 pt-7">
              <p className="text-3xl font-black text-gray-900">
                ₹{product.price * quantity}
              </p>

              <p className="mt-1 text-xs text-gray-400">
                ₹{product.price} per scoop
              </p>
            </div>

            {/* Quantity */}
            <div className="mt-7">

              <p className="mb-3 text-sm font-bold text-gray-900">
                Quantity
              </p>

              <div className="flex w-fit items-center overflow-hidden rounded-full border border-gray-200">

                {/* Decrease */}
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) =>
                      Math.max(1, current - 1)
                    )
                  }
                  className="p-3 text-gray-600 transition hover:bg-pink-50 hover:text-pink-600"
                  aria-label="Decrease quantity"
                >
                  <Minus size={17} />
                </button>

                {/* Quantity */}
                <span className="min-w-12 text-center text-sm font-bold">
                  {quantity}
                </span>

                {/* Increase */}
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) => current + 1)
                  }
                  className="p-3 text-gray-600 transition hover:bg-pink-50 hover:text-pink-600"
                  aria-label="Increase quantity"
                >
                  <Plus size={17} />
                </button>

              </div>
            </div>

            {/* Actions */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

              {/* Add to Cart */}
              <button
                type="button"
                onClick={() => {
                  addToCart(product, quantity);
                  setShowToast(true);
                }}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-pink-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-pink-700"
              >
                <ShoppingCart size={18} />
                Add to Cart
              </button>

              {/* Wishlist */}
              <button
                type="button"
                aria-label="Add to wishlist"
                className="flex items-center justify-center rounded-full border border-pink-200 px-5 py-3.5 text-pink-600 transition hover:bg-pink-50"
              >
                <Heart size={19} />
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;