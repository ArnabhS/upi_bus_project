import './Home.css';
import { useNavigate } from 'react-router-dom';
import DateTime from './DateTime';
export default function Home() {
  const navigate= useNavigate();
  return (
    <div className='main'>
      <div >
      <img className='img' src="https://assets.telegraphindia.com/telegraph/2022/Feb/1644781493_bus.jpg" alt="" />
      </div>
    <button onClick={()=>navigate("/BookTickets")} className="btn">
      BOOK YOUR TICKETS HERE
    </button>

    
    <div class="buttonList">
          <button className='PS'>Previous Stop</button>
          <button className='CS'>Current Stop</button>
          <button className='NS'>Next Stop</button>
          </div>

          <div className='DateTime'>
            <DateTime/>
          </div>
          
        <footer>
        <p className='footer'>&copy; 2023 Book Your Tickets. All rights reserved.</p>
      </footer>

          
  </div>
  )
}