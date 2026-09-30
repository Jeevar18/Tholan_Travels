import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";
import Hero from "../components/Hero";
import Destinations from "../components/Destinations";
import Services from "../components/Services";
import FeaturedCars from "../components/FeaturedCars";
import WhyChooseUs from "../components/WhyChooseUs";
import Gallery from "../components/Gallery";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Reviews />
      <Hero />
      <Destinations />
      <Services />
      <FeaturedCars />
      <WhyChooseUs />
      <Gallery />
      <ContactCTA />
      <Footer />
    </>
  );
}