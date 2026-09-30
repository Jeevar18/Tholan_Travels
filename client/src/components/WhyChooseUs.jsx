import { FEATURES } from "../data/siteData";

export default function WhyChooseUs() {
  return (
    <section className="section alt" id="about">
      <div className="container">
        <h2 className="section-title">About Tholan Travels</h2>
        <p className="section-sub">Explore vehicle, destination and package options for your trip.</p>
        <div className="grid grid-4">
          {FEATURES.map((feature) => (
            <div className="card service-card" key={feature.title}>
              <div className="icon-circle">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}