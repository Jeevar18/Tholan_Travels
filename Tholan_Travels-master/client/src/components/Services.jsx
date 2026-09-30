import { SERVICES } from "../data/siteData";

export default function Services() {
  return (
    <section className="section alt" id="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-sub">Everything you need for a smooth journey</p>
        <div className="grid grid-3">
          {SERVICES.map((s) => (
            <div className="card service-card" key={s.title}>
              <div className="icon-circle">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}