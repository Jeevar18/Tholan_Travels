import { ABOUT } from "../data/siteData";
import "../styles/about.css";

export default function Team() {
  return (
    <section className="section alt" id="team">
      <div className="container">
        <h2 className="section-title">Meet Our Team</h2>
        <p className="section-sub">The people behind your safe journey</p>

        <div className="card owner-card">
          <div className="owner-avatar">{ABOUT.owner.name[0]}</div>
          <div>
            <h3>{ABOUT.owner.name}</h3>
            <span className="owner-role">{ABOUT.owner.role}</span>
            <p>“{ABOUT.owner.message}”</p>
          </div>
        </div>

        <div className="grid grid-3 team-grid">
          {ABOUT.team.map((m, i) => (
            <div className="card team-card" key={i}>
              <div className="team-avatar">{m.name[0]}</div>
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}