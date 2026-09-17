import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Kolkata",
    review:
      "The strawberry ice cream was absolutely delicious. It tasted fresh and creamy, and the packaging was beautiful too!",
    rating: 5,
    avatar: "👩🏻",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    location: "New Town",
    review:
      "I ordered chocolate and cookies & cream. Both were amazing. Definitely ordering again this weekend.",
    rating: 5,
    avatar: "👨🏻",
  },
  {
    id: 3,
    name: "Ananya Das",
    location: "Salt Lake",
    review:
      "Loved the flavours and the quick delivery. Ice Cream World has become our family's favourite dessert spot.",
    rating: 4,
    avatar: "👩🏻",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-pink-600">
            Sweet words
          </p>

          <h2 className="mt-2 text-3xl font-black text-gray-900 sm:text-4xl">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-500 sm:text-base">
            Nothing makes us happier than seeing our customers
            enjoy every delicious scoop.
          </p>

        </div>

        {/* Testimonials */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              location={testimonial.location}
              review={testimonial.review}
              rating={testimonial.rating}
              avatar={testimonial.avatar}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;