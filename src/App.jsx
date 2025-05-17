import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from './Components/Navbar'
import { Pages } from './Pages'
import {PageNotFound} from './Pages/PageNotFound'
import { CallForPapers } from './Pages/CallForPapers';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Pages />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/committee" element={<PageNotFound title={"Under Construction"} status={204} />} />
          <Route path="/register" element={<PageNotFound title={"Under Construction"} status={204} />} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App