import { SITE, ABOUT } from "../data/siteData";
import "../styles/about.css";

export default function About() {
  return (
    <>
      {/* About Tholan Travels + Company introduction */}
      <section className="section" id="about">
        <div className="container intro-grid">
          <div>
            <span className="eyebrow">About {SITE.name}</span>
            <h2 className="intro-title">Company Introduction</h2>
            {ABOUT.intro.map((t, i) => (
              <p className="intro-text" key={i}>{t}</p>
            ))}
            <a href="#contact" className="btn btn-primary">Enquire Now</a>
          </div>
          <div className="intro-visual">🚐</div>
        </div>
      </section>

      {/* Experience */}
      <section className="stats-band">
        <div className="container">
          <h2 className="stats-title">Our Experience</h2>
          <div className="stats-grid">
            {ABOUT.stats.map((s) => (
              <div className="stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}