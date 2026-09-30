import { SITE } from "../data/siteData";

export default function ContactCTA() {
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Hi Tholan Travels, I would like to enquire about a trip."
  )}`;
  return (
    <>
      <section className="cta" id="contact">
        <div className="container cta-inner">
          <h2>Ready to plan your trip?</h2>
          <p>Call or WhatsApp us now and get a quick quote.</p>
          <div className="hero-actions">
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="btn btn-white">📞 Call {SITE.phone}</a>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">💬 WhatsApp Us</a>
          </div>
        </div>
      </section>
      <a href={wa} target="_blank" rel="noopener noreferrer" className="float-wa" aria-label="WhatsApp">💬</a>
    </>
  );
}