import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="border-t border-pink-100 bg-gray-950 text-gray-300"
    >
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="text-3xl">🍦</span>

              <div>
                <h2 className="text-xl font-extrabold text-white">
                  Ice Cream
                  <span className="text-pink-500"> World</span>
                </h2>

                <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-gray-500">
                  Happiness in every scoop
                </p>
              </div>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-6 text-gray-400">
              Making every day a little sweeter with delicious flavours,
              premium ingredients and plenty of happiness.
            </p>

            <div className="mt-6 flex gap-3">
             <div className="mt-6 flex gap-3">
            <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-sm font-bold transition hover:bg-pink-600 hover:text-white"
            >
                f
            </a>

            <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-sm font-bold transition hover:bg-pink-600 hover:text-white"
            >
                ig
            </a>

            <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-sm font-bold transition hover:bg-pink-600 hover:text-white"
            >
                𝕏
            </a>
            </div> 
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="#home"
                  className="transition hover:text-pink-500"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#menu"
                  className="transition hover:text-pink-500"
                >
                  Our Menu
                </a>
              </li>

              <li>
                <a
                  href="#categories"
                  className="transition hover:text-pink-500"
                >
                  Flavours
                </a>
              </li>

              <li>
                <a
                  href="#offers"
                  className="transition hover:text-pink-500"
                >
                  Offers
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="transition hover:text-pink-500"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Customer Care
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="#" className="transition hover:text-pink-500">
                  FAQs
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-pink-500">
                  Delivery Information
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-pink-500">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-pink-500">
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-pink-500">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact Us
            </h3>

            <div className="mt-5 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-pink-500"
                />

                <p>
                  Salt Lake, Kolkata
                  <br />
                  West Bengal, India
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-pink-500" />

                <a
                  href="tel:+919876543210"
                  className="transition hover:text-pink-500"
                >
                  +91 98765 43210
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-pink-500" />

                <a
                  href="mailto:hello@icecreamworld.com"
                  className="transition hover:text-pink-500"
                >
                  hello@icecreamworld.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-gray-800 pt-6 text-center text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © 2026 Ice Cream World. All rights reserved.
          </p>

          <p>
            Made with <span className="text-pink-500">♥</span> & lots of ice
            cream 🍦
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;