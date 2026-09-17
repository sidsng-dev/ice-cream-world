import type { ReactNode } from "react";

interface CategoryCardProps {
  name: string;
  icon: ReactNode;
  description: string;
}

const CategoryCard = ({
  name,
  icon,
  description,
}: CategoryCardProps) => {
  return (
    <button className="group flex min-w-0 flex-col items-center rounded-2xl border border-pink-100 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-lg sm:p-5">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-50 text-3xl transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20 sm:text-4xl">
        {icon}
      </div>

      <h3 className="mt-4 text-sm font-bold text-gray-900 sm:text-base">
        {name}
      </h3>

      <p className="mt-1 text-xs text-gray-500">
        {description}
      </p>
    </button>
  );
};

export default CategoryCard;