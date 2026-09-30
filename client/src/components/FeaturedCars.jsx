import { VEHICLES } from "../data/siteData";

export default function FeaturedCars() {
  return (
    <section className="section" id="vehicles">
      <div className="container">
        <h2 className="section-title">Our Vehicles</h2>
        <p className="section-sub">Ask us about vehicle availability and trip details.</p>
        <div className="grid grid-3">
          {VEHICLES.map((vehicle) => (
            <div className="card car-card" key={vehicle.id}>
              <div className="car-img">
                {vehicle.image ? (
                  <img src={vehicle.image} alt={vehicle.name} />
                ) : (
                  <span aria-hidden="true">🚐</span>
                )}
              </div>
              <h3>{vehicle.name}</h3>
              {vehicle.passengerCapacity && <p>{vehicle.passengerCapacity} passengers</p>}
              {vehicle.airConditioning && <p>{vehicle.airConditioning}</p>}
              {vehicle.description && <p>{vehicle.description}</p>}
              <a href="#contact" className="btn btn-primary btn-sm">Ask about this vehicle</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}