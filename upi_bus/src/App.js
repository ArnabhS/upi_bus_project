


import Navbar from './Navbar';
// import HomePage from './pages/HomePage';
import FareChart from './pages/FareChart';
import Maps from './pages/Maps';
import BookTickets from './pages/BookTickets';
import { Route, Routes} from "react-router-dom"
import HomePage from './pages/HomePage';
function App() {
  
  return(
   <> 
   <div className="container"> 
   <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/FareChart" element={<FareChart/>} />
    <Route path="/Maps" element={<Maps/>} />
    <Route path="/BookTickets" element={<BookTickets/>} />
   </Routes>
   </div>
    </>
    )
}

export default App;
