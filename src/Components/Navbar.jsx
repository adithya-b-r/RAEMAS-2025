import { useState, useRef, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const [isRegistered, setIsRegistered] = useState(false);

  // Close More DropDown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
    setIsMoreOpen(false);
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Tracks", id: "tracks" },
    { label: "Important Dates", id: "important-dates" },
    { label: "Call For Papers", id: "call-for-papers" },
    { label: "Conference Chairs", id: "conference-chairs" }, 
    { label: "Contact", id: "contact" },
  ];

  // More Section
  const mainNavLinks = navLinks.slice(0, 3);
  const moreNavLinks = navLinks.slice(3);

  const buttonClasses = "bg-indigo-600 mt-0 py-2 px-4 text-base text-lg border-2 font-semibold text-white rounded-lg cursor-pointer hover:scale-105 hover:bg-indigo-600/99 hover:text-white duration-300";

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-gradient-to-r from-purple-800 via-purple-700 to-purple-800 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1
          className="text-white text-3xl font-extrabold tracking-wider drop-shadow-sm cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          RAEMAS <span className="text-amber-400">2025</span>
        </h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-white text-lg font-medium tracking-wide">
          {/* Main nav items */}
          {mainNavLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                if (link.id.includes("call-for-papers")) {
                  navigate("/call-for-papers");
                } else {
                  scrollToSection(link.id);
                }
              }}
              className={`cursor-pointer relative group font-semibold transition-all duration-300 ${active === link.id ? "text-amber-400" : "hover:scale-110"
                }`}
            >
              {link.label}
            </button>
          ))}

          {/* "More" dropdown */}
          <div className="relative" ref={moreRef}>
            <button
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className="cursor-pointer font-semibold text-white hover:text-amber-400 transition flex items-center gap-1"
              aria-haspopup="true"
              aria-expanded={isMoreOpen}
              type="button"
            >
              More <span className="select-none">▾</span>
            </button>

            {isMoreOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-purple-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                <div className="py-1">
                  {moreNavLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => {
                        setIsMoreOpen(false);
                        if (link.id.includes("call-for-papers")) {
                          navigate("/call-for-papers");
                        } else {
                          scrollToSection(link.id);
                        }
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-purple-700"
                      type="button"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Register / Dashboard button */}
          {isRegistered ? (
            <button
              onClick={() => navigate("/dashboard")}
              className={buttonClasses}
              type="button"
            >
              Dashboard
            </button>
          ) : (
            <button
              onClick={() => navigate("/register")}
              className={buttonClasses}
              type="button"
            >
              Register Now
            </button>
          )}
        </nav>

        {/* Hamburger menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl"
          aria-label="Toggle navigation"
          type="button"
        >
          {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
      </div>

      {/* Mobile menu */}
      <nav
        className={`md:hidden bg-purple-900 text-white transition-all duration-300 ease-in-out ${isOpen ? "max-h-fit py-4 px-6" : "max-h-0 overflow-hidden"
          }`}
      >
        <ul className="flex flex-col gap-4 text-lg font-medium tracking-wide">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => {
                  if (link.id.includes("call-for-papers")) {
                    navigate("/call-for-papers");
                    setIsOpen(false);
                  } else {
                    scrollToSection(link.id);
                  }
                }}
                className={`block w-full text-left transition-colors ${active === link.id ? "text-amber-400" : "hover:text-amber-300"
                  }`}
                type="button"
              >
                {link.label}
              </button>
            </li>
          ))}

          {/* Register / Dashboard button mobile */}
          <li>
            {isRegistered ? (
              <button
                onClick={() => {
                  navigate("/dashboard");
                  setIsOpen(false);
                }}
                className={`${buttonClasses} w-full mt-4`}
                type="button"
              >
                Dashboard
              </button>
            ) : (
              <button
                onClick={() => {
                  navigate("/register");
                  setIsOpen(false);
                }}
                className={`${buttonClasses} w-full mt-4`}
                type="button"
              >
                Register Now
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};
