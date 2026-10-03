import { REVIEWS, SITE } from "../data/siteData";
const MAX_REVIEWS = 15;

const Stars = ({ n }) => (
  <div className="stars">{"★".repeat(n)}{"☆".repeat(5 - n)}</div>
);

const WriteReviewBtn = () => (
  <a
    className="btn btn-dark btn-block"
    href={SITE.googleReviewLink}
    target="_blank"
    rel="noopener noreferrer"
  >
    Write a review
  </a>
);

const ShareIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
    <line x1="8.6" y1="13.5" x2="15.4" y2="17.5" /><line x1="15.4" y1="6.5" x2="8.6" y2="10.5" />
  </svg>
);

const share = async (url) => {
  try {
    if (navigator.share) await navigator.share({ title: SITE.name, url });
    else {
      await navigator.clipboard.writeText(url);
      alert("Link copied!");
    }
  } catch {
    /* cancelled */
  }
};

export default function Reviews() {
  const n = REVIEWS.length;

  if (n === 0) {
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

  const avg = REVIEWS.reduce((sum, r) => sum + r.stars, 0) / n;
  const shown = REVIEWS.slice(0, 4);
  const extra = n - shown.length;

  return (
    <section className="section reviews" id="reviews">
      <div className="container">
        <div className="review-grid">
          <div className="review-summary card">
            <h2>{SITE.name}</h2>
            <div className="rating-big">
              {avg.toFixed(1)} <Stars n={Math.round(avg)} />
            </div>
            <div className="avatar-stack">
              {shown.map((r, i) => (
                <span className="avatar" key={i}>{r.name[0]}</span>
              ))}
              {extra > 0 && <span className="avatar more">+{extra}</span>}
            </div>
            <WriteReviewBtn />
          </div>
          {REVIEWS.slice(0, MAX_REVIEWS).map((r, i) => {
            const link = r.link || SITE.googleReviewLink;
            return (
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
                {r.reply && (
                  <div className="owner-reply">
                    <strong>Response from the owner</strong>
                    <p>{r.reply}</p>
                  </div>
                )}
                <div className="review-foot">
                  <a className="view-google" href={link} target="_blank" rel="noopener noreferrer">
                    <b>G</b> View on Google
                  </a>
                  <button className="share-btn" onClick={() => share(link)} aria-label="Share">
                    <ShareIcon />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}