import { ArrowRight, Heart, Leaf, Truck } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-pink-100"
    >
      {/* Decorative circles */}
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-pink-200/40 blur-3xl" />

      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-yellow-200/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">

          {/* Eyebrow */}
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-pink-600">
            Life is better with
          </p>

          {/* Heading */}
          <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Ice Cream{" "}
            <span className="text-pink-600">
              World!
            </span>{" "}
            <span className="inline-block text-pink-500">
              ♡
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg lg:mx-0">
            Creamy. Dreamy. Absolutely irresistible.
            Discover delicious handcrafted ice creams made
            with fresh ingredients and lots of love.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">

            <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-pink-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-pink-200 transition duration-300 hover:-translate-y-1 hover:bg-pink-700 hover:shadow-xl">
              Order Now

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <button className="inline-flex items-center justify-center rounded-full border-2 border-gray-200 bg-white px-7 py-3.5 text-sm font-bold text-gray-800 transition duration-300 hover:border-pink-300 hover:bg-pink-50 hover:text-pink-600">
              Explore Flavours
            </button>

          </div>

          {/* Features */}
          <div className="mt-10 grid grid-cols-3 gap-3 border-t border-pink-100 pt-7">

            <div className="flex flex-col items-center gap-2 lg:items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                <Leaf size={19} className="text-pink-600" />
              </div>

              <p className="text-xs font-semibold text-gray-600 sm:text-sm">
                Fresh Ingredients
              </p>
            </div>

            <div className="flex flex-col items-center gap-2 lg:items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                <Heart size={19} className="text-pink-600" />
              </div>

              <p className="text-xs font-semibold text-gray-600 sm:text-sm">
                Made With Love
              </p>
            </div>

            <div className="flex flex-col items-center gap-2 lg:items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                <Truck size={19} className="text-pink-600" />
              </div>

              <p className="text-xs font-semibold text-gray-600 sm:text-sm">
                Quick Delivery
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex min-h-[360px] items-center justify-center sm:min-h-[450px]">

          {/* Background blob */}
          <div className="absolute h-72 w-72 rounded-full bg-pink-200 sm:h-96 sm:w-96" />

          {/* Decorative strawberries */}
          <span className="absolute left-5 top-10 rotate-12 text-4xl sm:left-10 sm:text-5xl">
            🍓
          </span>

          <span className="absolute right-5 top-20 -rotate-12 text-3xl sm:right-10 sm:text-4xl">
            🍫
          </span>

          <span className="absolute bottom-8 left-10 rotate-12 text-3xl">
            🍓
          </span>

          {/* Main ice cream */}
          <div className="relative z-10 flex flex-col items-center">

            <div className="relative">
              <div className="text-[150px] leading-none drop-shadow-2xl sm:text-[200px]">
                🍨
              </div>

              <div className="absolute -right-2 top-8 rounded-full bg-white px-4 py-2 text-xs font-bold text-pink-600 shadow-lg sm:right-0">
                Happiness!
              </div>
            </div>

            {/* Cone */}
            <div className="-mt-8 text-7xl sm:-mt-12 sm:text-8xl">
              🍦
            </div>

          </div>

          {/* Floating card */}
          <div className="absolute bottom-5 right-0 z-20 rounded-2xl bg-white px-4 py-3 shadow-xl sm:bottom-10 sm:right-5">
            <p className="text-xs text-gray-500">
              Today's favourite
            </p>

            <p className="mt-1 text-sm font-bold text-gray-900">
              Strawberry Bliss 🍓
            </p>

            <p className="mt-1 text-sm font-bold text-pink-600">
              ₹110
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;