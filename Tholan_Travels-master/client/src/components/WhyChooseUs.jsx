import { WHY } from "../data/siteData";

export default function WhyChooseUs() {
  return (
    <section className="section alt" id="why">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-sub">Reasons customers keep travelling with us</p>
        <div className="grid grid-4">
          {WHY.map((w) => (
            <div className="card service-card" key={w.title}>
              <div className="icon-circle">{w.icon}</div>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}