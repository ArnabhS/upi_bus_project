


import Navbar from './Navbar';
import Home from './pages/Home';
import FareChart from './pages/FareChart';
import Maps from './pages/Maps';
import BookTickets from './pages/BookTickets';
import { Route, Routes} from "react-router-dom"
function App() {
  
  return(
   <> <Navbar/>
   <div className="container"> 
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/FareChart" element={<FareChart/>} />
    <Route path="/Maps" element={<Maps/>} />
    <Route path="/BookTickets" element={<BookTickets/>} />
   </Routes>
   </div>
    </>
    )
}

export default App;
