import { SITE } from "../data/siteData";

export default function GoogleReviews() {
  const hasReviewLink =
    SITE.googleReviewLink && !SITE.googleReviewLink.includes("YOUR_PLACE_ID");

  return (
    <section className="section google-reviews" id="google-reviews">
      <div className="container review-summary">
        <h2>Google Reviews</h2>
        {hasReviewLink ? (
          <>
            <p>Visit our Google listing to read or leave a review.</p>
            <a
              className="btn btn-outline-green"
              href={SITE.googleReviewLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Google Reviews
            </a>
          </>
        ) : (
          <p className="muted-note">
            Google reviews are not available yet because a business review link has not been configured.
          </p>
        )}
      </div>
    </section>
  );
}