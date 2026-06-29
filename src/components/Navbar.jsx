import { useState, useEffect } from "react";
import { info } from "../data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-dark/90 backdrop-blur border-b border-primary/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-mono text-accent text-sm font-medium">
          &lt;migue.dev /&gt;
        </span>
        <div className="flex gap-6 font-mono text-sm">
          {["about", "skills", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-gray-400 hover:text-accent transition-colors duration-200"
            >
              {section}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}