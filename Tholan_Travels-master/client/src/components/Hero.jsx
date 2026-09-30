import { SITE } from "../data/siteData";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <span className="pill">🚗 Trusted Travel Partner</span>
        <h1>Travel Easy with <span>{SITE.name}</span></h1>
        <p>{SITE.tagline}</p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">Book Now</a>
          <a href="#contact" className="btn btn-outline">Enquire Now</a>
        </div>
      </div>
    </section>
  );
}