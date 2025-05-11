import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 9 * (window.innerHeight / 100);
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        window.scrollBy(0, -offset);
      }
    }

    setActive(id);
    setIsOpen(false);
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Tracks", id: "tracks" },
    { label: "Important Dates", id: "important-dates" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-gradient-to-r from-purple-800 via-purple-700 to-purple-800 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-white text-3xl font-extrabold tracking-wider drop-shadow-sm cursor-pointer">
          RAEMAS <span className="text-amber-400">2025</span>
        </h1>

        <nav className="hidden md:flex gap-10 text-white text-lg font-medium tracking-wide">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`cursor-pointer relative group font-semibold transition-all duration-300 ${
                active === link.id ? "text-amber-400" : "hover:scale-110"
              }`}
            >
              <span>{link.label}</span>
            </button>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl"
          aria-label="Toggle navigation"
        >
          {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
      </div>

      <nav
        className={`md:hidden bg-purple-900 text-white transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 py-4 px-6" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 text-lg font-medium tracking-wide">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left transition-colors ${
                  active === link.id ? "text-amber-400" : "hover:text-amber-300"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};