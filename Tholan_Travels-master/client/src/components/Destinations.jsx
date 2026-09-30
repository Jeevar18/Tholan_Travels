import { DESTINATIONS } from "../data/siteData";

export default function Destinations() {
  return (
    <section className="section" id="destinations">
      <div className="container">
        <h2 className="section-title">Popular Destinations</h2>
        <p className="section-sub">Most loved places our customers travel to</p>
        <div className="grid grid-3">
          {DESTINATIONS.map((d) => (
            <div className="card dest-card" key={d.name}>
              <div className="dest-img">{d.emoji}</div>
              <div className="dest-body">
                <h3>{d.name}</h3>
                <p>{d.info}</p>
                <a href="#contact">Enquire →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}