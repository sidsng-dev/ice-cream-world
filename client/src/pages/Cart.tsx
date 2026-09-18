import {
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    cartTotal,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  // Empty Cart
  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] bg-pink-50 px-5 py-16 sm:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center text-center">

          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-sm">
            <ShoppingBag
              size={42}
              className="text-pink-600"
            />
          </div>

          <h1 className="mt-6 text-3xl font-black text-gray-900">
            Your Cart is Empty
          </h1>

          <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
            Looks like you haven't added any delicious
            ice cream yet. Let's fix that! 🍦
          </p>

          <Link
            to="/menu"
            className="mt-7 rounded-full bg-pink-600 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-pink-700"
          >
            Explore Flavours
          </Link>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50 px-5 py-10 sm:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-pink-600">
            Your order
          </p>

          <h1 className="mt-2 text-3xl font-black text-gray-900 sm:text-4xl">
            Shopping Cart 🛒
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Review your delicious selections before checkout.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* Cart Items */}
          <div className="space-y-4">

            {cartItems.map((item) => (
              <div
                key={item.product.id}
                className="flex flex-col gap-5 rounded-3xl bg-white p-5 shadow-sm sm:flex-row sm:items-center"
              >

                {/* Product Visual */}
                <Link
                  to={`/product/${item.product.id}`}
                  className="flex h-28 w-full shrink-0 items-center justify-center rounded-2xl bg-pink-50 sm:w-28"
                >
                  <span className="text-6xl">
                    {item.product.emoji}
                  </span>
                </Link>

                {/* Product Info */}
                <div className="min-w-0 flex-1">

                  <p className="text-xs font-bold uppercase tracking-wider text-pink-600">
                    {item.product.category}
                  </p>

                  <Link
                    to={`/product/${item.product.id}`}
                    className="mt-1 block text-lg font-bold text-gray-900 hover:text-pink-600"
                  >
                    {item.product.name}
                  </Link>

                  <p className="mt-1 text-sm text-gray-500">
                    ₹{item.product.price} per scoop
                  </p>

                </div>

                {/* Quantity */}
                <div>
                  <p className="mb-2 text-xs font-semibold text-gray-400">
                    Quantity
                  </p>

                  <div className="flex w-fit items-center overflow-hidden rounded-full border border-gray-200">

                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          item.quantity - 1
                        )
                      }
                      className="p-2.5 text-gray-600 transition hover:bg-pink-50 hover:text-pink-600"
                      aria-label={`Decrease ${item.product.name} quantity`}
                    >
                      <Minus size={16} />
                    </button>

                    <span className="min-w-10 text-center text-sm font-bold text-gray-900">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          item.quantity + 1
                        )
                      }
                      className="p-2.5 text-gray-600 transition hover:bg-pink-50 hover:text-pink-600"
                      aria-label={`Increase ${item.product.name} quantity`}
                    >
                      <Plus size={16} />
                    </button>

                  </div>
                </div>

                {/* Item Total */}
                <div className="flex items-center justify-between gap-5 sm:block sm:text-right">

                  <div>
                    <p className="text-xs font-semibold text-gray-400">
                      Item Total
                    </p>

                    <p className="mt-1 text-lg font-black text-gray-900">
                      ₹{item.product.price * item.quantity}
                    </p>
                  </div>

                  {/* Remove */}
                  <button
                    type="button"
                    onClick={() =>
                      removeFromCart(item.product.id)
                    }
                    className="rounded-full p-2.5 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                    aria-label={`Remove ${item.product.name} from cart`}
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

              </div>
            ))}

            {/* Clear Cart */}
            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={clearCart}
                className="text-sm font-semibold text-gray-500 transition hover:text-red-500"
              >
                Clear Cart
              </button>
            </div>

          </div>

          {/* Order Summary */}
          <aside className="h-fit rounded-3xl bg-white p-6 shadow-sm lg:sticky lg:top-28">

            <h2 className="text-xl font-black text-gray-900">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4">

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  Subtotal
                </span>

                <span className="font-semibold text-gray-900">
                  ₹{cartTotal}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  Delivery
                </span>

                <span className="font-semibold text-green-600">
                  FREE
                </span>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <div className="flex justify-between">
                  <span className="font-bold text-gray-900">
                    Total
                  </span>

                  <span className="text-2xl font-black text-pink-600">
                    ₹{cartTotal}
                  </span>
                </div>
              </div>

            </div>

            {/* Checkout */}
            <button
              type="button"
              className="mt-7 w-full rounded-full bg-pink-600 py-3.5 text-sm font-bold text-white transition hover:bg-pink-700"
            >
              Proceed to Checkout
            </button>

            <Link
              to="/menu"
              className="mt-3 block text-center text-sm font-semibold text-gray-500 transition hover:text-pink-600"
            >
              ← Continue Shopping
            </Link>

          </aside>

        </div>
      </div>
    </div>
  );
};

export default Cart;