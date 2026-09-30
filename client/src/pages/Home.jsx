import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";
import GoogleReviews from "../components/GoogleReviews";
import Hero from "../components/Hero";
import Destinations from "../components/Destinations";
import FeaturedCars from "../components/FeaturedCars";
import WhyChooseUs from "../components/WhyChooseUs";
import Gallery from "../components/Gallery";
import TourPackages from "../components/TourPackages";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <FeaturedCars />
      <Destinations />
      <TourPackages />
      <Reviews />
      <GoogleReviews />
      <Gallery />
      <ContactCTA />
      <Footer />
    </>
  );
}