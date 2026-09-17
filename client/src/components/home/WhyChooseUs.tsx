import {
  Heart,
  Leaf,
  ShieldCheck,
  Truck,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: <Leaf size={28} />,
    title: "Fresh Ingredients",
    description:
      "We use carefully selected ingredients to create creamy, delicious flavours.",
  },
  {
    icon: <Heart size={28} />,
    title: "Made With Love",
    description:
      "Every scoop is crafted with attention to detail and a whole lot of passion.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Premium Quality",
    description:
      "From our kitchen to your cup, quality is something we never compromise on.",
  },
  {
    icon: <Truck size={28} />,
    title: "Quick Delivery",
    description:
      "Get your favourite treats delivered fresh and ready to enjoy.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="about"
      className="bg-pink-50 px-5 py-16 sm:px-8 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-pink-600">
            Made for happiness
          </p>

          <h2 className="mt-2 text-3xl font-black text-gray-900 sm:text-4xl">
            Why Choose Ice Cream World?
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-500 sm:text-base">
            We believe great ice cream is more than just a dessert.
            It's an experience worth sharing.
          </p>

        </div>

        {/* Feature Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;