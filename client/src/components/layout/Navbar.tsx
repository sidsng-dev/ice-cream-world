import { useState } from "react";
import {
  Menu,
  X,
  Search,
  User,
  ShoppingCart,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { cartCount } = useCart();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Flavours", href: "/menu" },
    { label: "Offers", href: "/#offers" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-pink-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-3xl">🍦</span>

          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-gray-900">
              Ice Cream
              <span className="text-pink-600"> World</span>
            </h1>

            <p className="hidden text-[9px] font-medium uppercase tracking-[0.2em] text-gray-400 sm:block">
              Happiness in every scoop
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="relative text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-pink-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">

          {/* Search */}
          <button
            type="button"
            aria-label="Search"
            className="rounded-full p-2 text-gray-700 transition hover:bg-pink-50 hover:text-pink-600"
          >
            <Search size={20} />
          </button>

          {/* Account */}
          <Link
            to="/login"
            aria-label="Account"
            className="rounded-full p-2 text-gray-700 transition hover:bg-pink-50 hover:text-pink-600"
          >
            <User size={20} />
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            aria-label="Shopping cart"
            className="relative rounded-full p-2 text-gray-700 transition hover:bg-pink-50 hover:text-pink-600"
          >
            <ShoppingCart size={20} />

            {/* Dynamic Cart Count */}
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-pink-600 text-[10px] font-bold text-white">
              {cartCount}
            </span>
          </Link>

          {/* Order Now */}
          <Link
            to="/menu"
            className="ml-2 rounded-full bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700 hover:shadow-md"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-gray-700 transition hover:bg-pink-50 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-pink-100 bg-white px-5 py-5 shadow-lg md:hidden">

          {/* Mobile Navigation */}
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-4 py-3 font-medium text-gray-700 transition hover:bg-pink-50 hover:text-pink-600"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Cart */}
          <Link
            to="/cart"
            onClick={() => setIsMenuOpen(false)}
            className="mt-3 flex items-center justify-between rounded-lg px-4 py-3 font-medium text-gray-700 transition hover:bg-pink-50 hover:text-pink-600"
          >
            <span className="flex items-center gap-2">
              <ShoppingCart size={18} />
              Shopping Cart
            </span>

            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-pink-600 px-1.5 text-xs font-bold text-white">
              {cartCount}
            </span>
          </Link>

          {/* Mobile Order Now */}
          <Link
            to="/menu"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 block w-full rounded-full bg-pink-600 py-3 text-center font-semibold text-white transition hover:bg-pink-700"
          >
            Order Now 🍦
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;