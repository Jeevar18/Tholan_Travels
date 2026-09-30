import { SITE } from "../data/siteData";

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
          <a href="#destinations">Destinations</a>
          <a href="#services">Services</a>
          <a href="#cars">Cars</a>
        </div>
        <div>
          <h4>Contact</h4>
          <p>📞 {SITE.phone}</p>
          <p>✉️ {SITE.email}</p>
          <p>📍 {SITE.address}</p>
        </div>
      </div>
      <div className="copy">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
    </footer>
  );
}