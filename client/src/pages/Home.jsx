import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";
import Hero from "../components/Hero";
import About from "../components/About";
import Destinations from "../components/Destinations";
import Services from "../components/Services";
import FeaturedCars from "../components/FeaturedCars";
import WhyChooseUs from "../components/WhyChooseUs";
import ServiceArea from "../components/ServiceArea";
import Team from "../components/Team";
import Gallery from "../components/Gallery";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Reviews />
      <About />
      <Destinations />
      <Services />
      <FeaturedCars />
      <WhyChooseUs />
      <ServiceArea />
      <Team />
      <Gallery />
      <ContactCTA />
      <Footer />
    </>
  );
}