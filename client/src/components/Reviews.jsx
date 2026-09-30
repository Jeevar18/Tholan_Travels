import { REVIEWS, SITE } from "../data/siteData";

const Stars = ({ n }) => (
  <div className="stars">{"★".repeat(n)}{"☆".repeat(5 - n)}</div>
);

export default function Reviews() {
  const hasReviews = REVIEWS.length > 0;
  const avg = hasReviews
    ? REVIEWS.reduce((sum, r) => sum + r.stars, 0) / REVIEWS.length
    : 0;

  if (!hasReviews) {
    return (
      <section className="section reviews" id="customer-reviews">
        <div className="container">
          <div className="card review-summary review-empty">
            <h2>Customer Reviews</h2>
            <p>Customer reviews will appear here when they are available.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section reviews" id="customer-reviews">
      <div className="container">
        <div className="review-grid">
          <div className="review-summary card">
            <h2>{SITE.name}</h2>
            <div className="rating-big">
              {avg.toFixed(1)} <Stars n={Math.round(avg)} />
            </div>
            <p>Read our {REVIEWS.length} Reviews</p>
          </div>

          {REVIEWS.map((r) => (
            <div className="card review-card" key={r.id || r.name}>
              <div className="reviewer">
                <span className="avatar">{r.name[0]}</span>
                <div>
                  <strong>{r.name}</strong>
                  <small>{r.time}</small>
                </div>
              </div>
              <Stars n={r.stars} />
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}