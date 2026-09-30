import { REVIEWS, SITE } from "../data/siteData";

const Stars = ({ n }) => (
  <div className="stars">{"★".repeat(n)}{"☆".repeat(5 - n)}</div>
);

const WriteReviewBtn = () => (
  <a
    className="btn btn-dark"
    href={SITE.googleReviewLink}
    target="_blank"
    rel="noopener noreferrer"
  >
    Write a review
  </a>
);

export default function Reviews() {
  const hasReviews = REVIEWS.length > 0;
  const avg = hasReviews
    ? REVIEWS.reduce((sum, r) => sum + r.stars, 0) / REVIEWS.length
    : 0;

  if (!hasReviews) {
    return (
      <section className="section reviews" id="reviews">
        <div className="container">
          <div className="card review-summary review-empty">
            <h2>{SITE.name}</h2>
            <p>Travelled with us? Share your experience on Google.</p>
            <WriteReviewBtn />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section reviews" id="reviews">
      <div className="container">
        <div className="review-grid">
          <div className="review-summary card">
            <h2>{SITE.name}</h2>
            <div className="rating-big">
              {avg.toFixed(1)} <Stars n={Math.round(avg)} />
            </div>
            <p>Read our {REVIEWS.length} Reviews</p>
            <WriteReviewBtn />
          </div>

          {REVIEWS.map((r, i) => (
            <div className="card review-card" key={i}>
              <div className="reviewer">
                <span className="avatar">{r.name[0]}</span>
                <div>
                  <strong>{r.name}</strong>
                  <small>{r.time}</small>
                </div>
              </div>
              <Stars n={r.stars} />
              <p>{r.text}</p>
              <a
                className="view-google"
                href={r.link || SITE.googleReviewLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>G</b> View on Google
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}