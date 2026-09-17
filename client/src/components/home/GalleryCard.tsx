interface GalleryCardProps {
  image: string;
  title: string;
  category: string;
  size?: "normal" | "large";
}

const GalleryCard = ({
  image,
  title,
  category,
  size = "normal",
}: GalleryCardProps) => {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl ${
        size === "large" ? "md:row-span-2" : ""
      }`}
    >
      <img
        src={image}
        alt={title}
        className="h-full min-h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/35" />

      <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="text-xs font-bold uppercase tracking-wider text-pink-200">
          {category}
        </p>

        <h3 className="mt-1 text-xl font-black text-white">
          {title}
        </h3>
      </div>
    </article>
  );
};

export default GalleryCard;