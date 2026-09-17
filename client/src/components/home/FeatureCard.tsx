import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
}: FeatureCardProps) => {
  return (
    <div className="group rounded-3xl border border-pink-100 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8">

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-50 text-pink-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-bold text-gray-900">
        {title}
      </h3>

      <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-gray-500">
        {description}
      </p>

    </div>
  );
};

export default FeatureCard;