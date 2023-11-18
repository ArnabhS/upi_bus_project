import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import DateTime from './DateTime';
import Navbar from '../Navbar';
// import Navbar from '../Navbar';
export default function Home() {
  const navigate= useNavigate();
  return (
    <div className='container maint-cnt'>

      <div className="header-nav">
                <span className="mytext1"> <Navbar /> </span>
            </div>
            
            <div className="">
            </div>

            {/* <Navbar /> */}

            <div className="container">
                <div className="slogan">
                    <h1>
                        <span >always Travel</span>
                        <div className="message">
                            <div className="word1">Uniquely</div>
                            <div className="word2">Safely</div>
                            <div className="word3">with a smile</div>
                        </div>
                    </h1>
                </div>
      </div>
      {/* <div >
      <img className='img' src="https://assets.telegraphindia.com/telegraph/2022/Feb/1644781493_bus.jpg" alt="" />
      </div> */}
    {/* <button onClick={()=>navigate("/BookTickets")} className="mainBtn">
    <svg width="277" height="62">
                        <defs>
                            <linearGradient id="grad1">
                                <stop offset="0%" stopColor="#FF8282" />
                                <stop offset="100%" stopColor="#E178ED" />
                            </linearGradient>
                        </defs>
                        <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                    </svg>

                    <span>BOOK YOUR TICKETS HERE</span>
    </button> */}

    
    <div class="buttonList">
          <button className='PS'>Previous Stop</button>
          <button className='CS'>Current Stop</button>
          <button className='NS'>Next Stop</button>
          </div>

          
        <footer>

        <div className='DateTime'>
            <DateTime/>
          </div>
          

        <p className='footer'>&copy; 2023 Book Your Tickets. All rights reserved.</p>
      </footer>

          
  </div>
  )
}