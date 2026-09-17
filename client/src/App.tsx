import AnnouncementBar from "./components/layout/AnnouncementBar";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Categories from "./components/home/Categories";
import FeaturedProducts from "./components/home/FeaturedProducts";
import SpecialOffer from "./components/home/SpecialOffer";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Testimonials from "./components/home/Testimonials";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navbar />

      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <SpecialOffer />
        <WhyChooseUs />
        <Testimonials />
      </main>
    </div>
  );
}

export default App;