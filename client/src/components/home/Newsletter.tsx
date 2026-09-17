import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage("Thanks for subscribing! 🍦");
    setEmail("");
  };

  return (
    <section className="px-5 py-16 sm:px-8 lg:px-8">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-pink-600 px-6 py-12 text-center sm:px-10 lg:px-16">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-white">
          <Mail size={26} />
        </div>

        <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-pink-100">
          Stay in the loop
        </p>

        <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
          Get the Scoop! 🍦
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-pink-100 sm:text-base">
          Subscribe to receive new flavour launches, exclusive offers and
          delicious updates from Ice Cream World.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
        >
          <div className="flex flex-1 items-center rounded-full bg-white px-4">
            <Mail size={18} className="shrink-0 text-gray-400" />

            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email address"
              className="w-full bg-transparent px-3 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400"
              aria-label="Email address"
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-gray-800"
          >
            Subscribe
            <ArrowRight size={17} />
          </button>
        </form>

        {message && (
          <p className="mt-4 text-sm font-medium text-white">
            {message}
          </p>
        )}

        <p className="mt-5 text-xs text-pink-100">
          No spam. Just sweet updates. 💗
        </p>
      </div>
    </section>
  );
};

export default Newsletter;