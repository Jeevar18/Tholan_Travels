import { DESTINATIONS } from "../data/siteData";

export default function Destinations() {
  return (
    <section className="section" id="destinations">
      <div className="container">
        <h2 className="section-title">Popular Destinations</h2>
        <p className="section-sub">Most loved places our customers travel to</p>
        <div className="grid grid-3">
          {DESTINATIONS.map((destination) => (
            <div className="card dest-card" key={destination.id}>
              <div className="dest-img">
                {destination.image ? (
                  <img src={destination.image} alt={destination.name} />
                ) : (
                  <span aria-hidden="true">{destination.icon}</span>
                )}
              </div>
              <div className="dest-body">
                <h3>{destination.name}</h3>
                {destination.description && <p>{destination.description}</p>}
                <a href="#contact">Enquire about {destination.name}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}