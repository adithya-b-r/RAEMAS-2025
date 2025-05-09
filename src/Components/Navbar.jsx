export const Navbar = () => {
  return(
    <nav className="w-full md:h-[10vh] h-[8.5vh] bg-blue-500 flex justify-between items-center pl-5 pr-8 fixed top-0 left-0 z-12">
      <div className="text-white font-bold text-2xl tracking-wider">RAEMAS 2025</div>
      
      <div className="flex text-white font-semibold gap-5">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Tracks</a>
        <a href="">Important Dates</a>
        <a href="">Contact</a>
      </div>
    </nav>
  )
}