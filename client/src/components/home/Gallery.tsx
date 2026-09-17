import GalleryCard from "./GalleryCard";

const galleryItems = [
  {
    id: 1,
    title: "Strawberry Bliss",
    category: "Fresh Flavours",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80",
    size: "large" as const,
  },
  {
    id: 2,
    title: "Chocolate Heaven",
    category: "Chocolate",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Sweet Sundae",
    category: "Sundaes",
    image:
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Berry Delight",
    category: "Specials",
    image:
      "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "Creamy Happiness",
    category: "Our Favourites",
    image:
      "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=900&q=80",
  },
];

const Gallery = () => {
  return (
    <section className="bg-pink-50 px-5 py-16 sm:px-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-pink-600">
            Sweet moments
          </p>

          <h2 className="mt-2 text-3xl font-black text-gray-900 sm:text-4xl">
            A Little Taste of Happiness
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-500 sm:text-base">
            From creamy scoops to delicious sundaes, here's a glimpse of
            what's waiting for you.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-[220px] gap-5 md:grid-cols-3">
          {galleryItems.map((item) => (
            <GalleryCard
              key={item.id}
              image={item.image}
              title={item.title}
              category={item.category}
              size={item.size}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;