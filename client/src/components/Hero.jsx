import { useState } from "react";
import { SITE } from "../data/siteData";

export default function Hero() {
  const [videoOk, setVideoOk] = useState(true);

  return (
    <section className="hero" id="home">
      {/* Background video (client/public/hero.mp4) - illana image (hero.jpg) show aagum */}
      {videoOk && (
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/hero.mp4" type="video/mp4" onError={() => setVideoOk(false)} />
        </video>
      )}
      <div className="hero-overlay" />

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