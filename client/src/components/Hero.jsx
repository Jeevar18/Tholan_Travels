import { SITE } from "../data/siteData";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <span className="pill">Explore your next trip</span>
        <h1>Plan your trip with <span>{SITE.name}</span></h1>
        <p>Browse vehicle options, destinations and tour packages, then contact us to discuss your journey.</p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">Book Now</a>
          <a href="#packages" className="btn btn-outline">Explore Packages</a>
        </div>
      </div>
    </section>
  );
}