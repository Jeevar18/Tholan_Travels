import { GALLERY } from "../data/siteData";

export default function Gallery() {
  return (
    <section className="section" id="gallery">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <p className="section-sub">Travel and destination photos will be added here.</p>
        <div className="gallery-grid">
          {GALLERY.map((item) => (
            <div className="gallery-item" key={item.id}>
              {item.image ? (
                <img src={item.image} alt={item.title} />
              ) : (
                <>
                  <span aria-hidden="true">{item.icon}</span>
                  <span>{item.title}</span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}