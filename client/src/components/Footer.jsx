import { SITE } from "../data/siteData";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>{SITE.name}</h3>
          <p>{SITE.tagline}</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#vehicles">Vehicles</a>
          <a href="#packages">Packages</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact Us</a>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="tel:9976264007">📞 {SITE.phone}</a>
          <a href="tel:9486870757">📞 {SITE.altPhone}</a>
          <p>✉️ {SITE.email}</p>
          <p>📍 {SITE.address}</p>
        </div>
      </div>
      <div className="copy">© {currentYear} {SITE.name}. All rights reserved.</div>
    </footer>
  );
}