import { About } from "./Pages/About"
import { Contact } from "./Pages/Contact"
import { Home } from "./Pages/Home"
import { ImportantDates } from "./Pages/ImportantDates"
import { Tracks } from "./Pages/Tracks"

export const Pages = () => {
  return (
    <div className="bg-amber-200 w-full h-[100vh] pt-[10vh] overflow-y-scroll">
      <Home />
      <About />
      <Tracks />
      <ImportantDates />
      <Contact />
    </div>
  )
}