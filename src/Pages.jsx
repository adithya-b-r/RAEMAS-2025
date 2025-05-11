import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";
import { ImportantDates } from "./Pages/ImportantDates";
import { Tracks } from "./Pages/Tracks";

export const Pages = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const hasScrolled = useRef(false);

  useEffect(() => {
    if (navigationType !== "POP" && !hasScrolled.current) {
      const scrollTo = location.state?.scrollTo;
      if (scrollTo) {
        const element = document.getElementById(scrollTo);
        if (element) {
          setTimeout(() => {
            const offset = 9 * (window.innerHeight / 100);
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            window.scrollBy(0, -offset);
            hasScrolled.current = true;
          }, 150);
        }
      }
    }
  }, [location, navigationType]);

  return (
    <div className="bg-white w-full h-[100vh] overflow-y-scroll scroll-smooth">
      <Home />
      <About />
      <Tracks />
      <ImportantDates />
      <Contact />
    </div>
  );
};
