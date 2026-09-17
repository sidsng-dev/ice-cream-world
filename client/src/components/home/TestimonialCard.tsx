import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  review: string;
  rating: number;
  avatar: string;
}

const TestimonialCard = ({
  name,
  location,
  review,
  rating,
  avatar,
}: TestimonialCardProps) => {
  return (
    <article className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      
      {/* Rating */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={16}
            className={
              index < rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-200"
            }
          />
        ))}
      </div>

      {/* Review */}
      <p className="mt-5 text-sm leading-7 text-gray-600">
        "{review}"
      </p>

      {/* Customer */}
      <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-100 text-xl">
          {avatar}
        </div>

        <div>
          <h3 className="text-sm font-bold text-gray-900">
            {name}
          </h3>

          <p className="text-xs text-gray-500">
            {location}
          </p>
        </div>
      </div>

    </article>
  );
};

export default TestimonialCard;