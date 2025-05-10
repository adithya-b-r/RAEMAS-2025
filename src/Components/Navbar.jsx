export const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 9 * (window.innerHeight / 100); //90vh
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      window.scrollBy(0, -offset);
    }
  };

  return (
    <nav className="w-full md:h-[10vh] h-[9vh] bg-purple-700/95 backdrop-blur-lg shadow-lg flex justify-between items-center pl-5 pr-8 fixed top-0 left-0 z-12">
      <div className="text-white font-bold text-2xl tracking-wider">RAEMAS 2025</div>
      <div className="md:flex hidden text-white font-semibold gap-8">
        <a onClick={() => scrollToSection('home')} className="cursor-pointer hover:text-gray-300 transition-all">Home</a>
        <a onClick={() => scrollToSection('about')} className="cursor-pointer hover:text-gray-300 transition-all">About</a>
        <a onClick={() => scrollToSection('tracks')} className="cursor-pointer hover:text-gray-300 transition-all">Tracks</a>
        <a onClick={() => scrollToSection('important-dates')} className="cursor-pointer hover:text-gray-300 transition-all">Important Dates</a>
        <a onClick={() => scrollToSection('contact')} className="cursor-pointer hover:text-gray-300 transition-all">Contact</a>
      </div>
    </nav>
  );
};
