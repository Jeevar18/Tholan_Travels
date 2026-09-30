import { useState } from "react";
import { SITE } from "../data/siteData";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Vehicles", href: "#vehicles" },
  { label: "Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#home" className="logo">
          <span className="logo-mark">T</span>
          <span>{SITE.name}</span>
        </a>
        <nav id="primary-navigation" className={`nav-links ${open ? "open" : ""}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn btn-primary nav-cta">Book Now</a>
        <button
          className="menu-btn"
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}