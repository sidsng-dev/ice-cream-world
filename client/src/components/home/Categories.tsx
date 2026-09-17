import CategoryCard from "./CategoryCard";

const categories = [
  {
    name: "Scoops",
    icon: "🍨",
    description: "Classic favourites",
  },
  {
    name: "Sundaes",
    icon: "🍧",
    description: "Loaded with toppings",
  },
  {
    name: "Milkshakes",
    icon: "🥤",
    description: "Thick & creamy",
  },
  {
    name: "Ice Cream Cakes",
    icon: "🍰",
    description: "Made for celebrations",
  },
  {
    name: "Waffles",
    icon: "🧇",
    description: "Warm & delicious",
  },
  {
    name: "Cones",
    icon: "🍦",
    description: "Crispy & creamy",
  },
];

const Categories = () => {
  return (
    <section
      id="categories"
      className="bg-white px-5 py-14 sm:px-8 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-pink-600">
            Something for everyone
          </p>

          <h2 className="mt-2 text-3xl font-black text-gray-900 sm:text-4xl">
            Explore Our Treats
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
            From classic scoops to indulgent sundaes, discover
            something delicious for every mood.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              icon={category.icon}
              description={category.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;