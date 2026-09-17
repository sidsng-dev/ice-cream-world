import { ArrowRight, Sparkles } from "lucide-react";

const SpecialOffer = () => {
  return (
    <section
      id="offers"
      className="overflow-hidden bg-white px-5 py-16 sm:px-8 lg:px-8"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-pink-600 px-6 py-12 sm:px-10 lg:px-16 lg:py-14">

        {/* Decorative circles */}
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10" />

        <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-white/10" />

        <div className="relative grid items-center gap-10 lg:grid-cols-2">

          {/* Content */}
          <div className="text-center lg:text-left">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
              <Sparkles size={15} />
              Weekend Special
            </div>

            <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl">
              Scoop More,
              <br />
              Save More!
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-pink-100 sm:text-base lg:mx-0">
              Treat yourself and your loved ones. Get 20% off
              when you order ₹499 or more this weekend.
            </p>

            <button className="group mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-pink-600 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              Grab The Offer

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

          </div>

          {/* Visual */}
          <div className="relative flex min-h-[230px] items-center justify-center">

            <div className="absolute h-52 w-52 rounded-full bg-white/15 sm:h-64 sm:w-64" />

            <div className="relative z-10 text-center">
              <div className="text-8xl sm:text-9xl">
                🍓
              </div>

              <div className="mt-[-15px] rounded-full bg-white px-6 py-3 shadow-xl">
                <span className="text-3xl font-black text-pink-600">
                  20%
                </span>

                <span className="ml-2 text-sm font-bold text-gray-700">
                  OFF
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;