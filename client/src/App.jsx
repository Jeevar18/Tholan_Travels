import { useEffect } from "react";
import Home from "./pages/Home";
import "./styles/home.css";
import "./styles/polish.css";

function App() {
  // Scroll panna cards/titles smooth-ah fade-in aagum
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const els = document.querySelectorAll(
      ".card, .section-title, .section-sub, .stat, .chip, .gallery-item"
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
            setTimeout(() => e.target.classList.remove("reveal", "visible"), 800);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => {
      el.classList.add("reveal");
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return <Home />;
}

export default App;