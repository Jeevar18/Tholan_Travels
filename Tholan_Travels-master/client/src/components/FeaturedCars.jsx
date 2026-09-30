import { CARS, PACKAGES } from "../data/siteData";

export default function FeaturedCars() {
  return (
    <section className="section" id="cars">
      <div className="container">
        <h2 className="section-title">Featured Cars</h2>
        <p className="section-sub">Choose the vehicle that fits your trip</p>
        <div className="grid grid-4">
          {CARS.map((c) => (
            <div className="card car-card" key={c.name}>
              <div className="car-img">🚘<span className="tag">{c.tag}</span></div>
              <h3>{c.name}</h3>
              <p>{c.seats}</p>
              <div className="price">{c.price}</div>
              <a href="#contact" className="btn btn-primary btn-sm">Book Now</a>
            </div>
          ))}
        </div>

        <h2 className="section-title packages-title">Featured Packages</h2>
        <div className="grid grid-3">
          {PACKAGES.map((p) => (
            <div className="card package-card" key={p.name}>
              <h3>{p.name}</h3>
              <p className="days">{p.days}</p>
              <p>{p.note}</p>
              <div className="price">From {p.price}</div>
              <a href="#contact" className="btn btn-outline-green btn-sm">Enquire Now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}