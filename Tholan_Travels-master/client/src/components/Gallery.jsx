import { GALLERY } from "../data/siteData";

export default function Gallery() {
  return (
    <section className="section" id="gallery">
      <div className="container">
        <h2 className="section-title">Gallery Preview</h2>
        <p className="section-sub">Moments from our happy journeys</p>
        <div className="gallery-grid">
          {GALLERY.map((g, i) => (
            <div className="gallery-item" key={i}>{g}</div>
          ))}
        </div>
      </div>
    </section>
  );
}