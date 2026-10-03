import { ABOUT } from "../data/siteData";
import "../styles/about.css";

export default function ServiceArea() {
  return (
    <section className="section" id="service-area">
      <div className="container">
        <h2 className="section-title">Our Service Area</h2>
        <p className="section-sub">We pick up and drop across these places and more</p>
        <div className="area-chips">
          {ABOUT.areas.map((a) => (
            <span className="chip" key={a}>📍 {a}</span>
          ))}
        </div>
      </div>
    </section>
  );
}