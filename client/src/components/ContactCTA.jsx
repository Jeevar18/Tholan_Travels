import BookingForm from "./BookingForm";
import { SITE } from "../data/siteData";

export default function ContactCTA() {
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Hi Tholan Travels, I would like to enquire about a trip."
  )}`;

  return (
    <>
      <section className="cta" id="contact">
        <div className="container contact-grid">
          <div className="contact-info">
            <p className="contact-kicker">Contact us</p>
            <h2>{SITE.name}</h2>
            <p className="service-tag">{SITE.tagline}</p>
            <div className="contact-list">
              <a href={`tel:9976264007`} className="contact-link">📞 99762 64007</a>
              <a href={`tel:9486870757`} className="contact-link">📞 94868 70757</a>
              <p className="contact-hours">🕒 {SITE.availability}</p>
            </div>
            <div className="hero-actions contact-actions">
              <a href="tel:9976264007" className="btn btn-white">📞 Call Now</a>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">💬 WhatsApp</a>
            </div>
          </div>

          <BookingForm />
        </div>
      </section>
      <a href={wa} target="_blank" rel="noopener noreferrer" className="float-wa" aria-label="WhatsApp">💬</a>
    </>
  );
}