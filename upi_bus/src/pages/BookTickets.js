import React from 'react';
import { useState } from 'react';
import './BookTickets.css';
import { useNavigate } from 'react-router-dom';
import Payment from './Payment';
import Navbar from '../Navbar';
import location from './location.json';
import Dropdown from './Dropdown';
const BookTickets = () => {
  
  const navigate= useNavigate();
  
  return (
    <div className='main' >
      <Navbar/>
      <div ><h2 >BOOK YOUR TICKETS </h2>
      </div>
      {/* <div className='input'>
        <div className='location'><span className='from'>From:</span>
        <input type="text" placeholder='Enter Your Current Location' className='box' value={location} onChange={(e) => setLocation(e.target.value)}/>
        </div>
        <div className='destination'><span className='to'> To:   </span>
        <input type="text" placeholder="Enter your destination"  className='box'value={destination} onChange={(e) => setDestination(e.target.value)}/>
        </div>
        
        </div> */}
      
      <div className='dropdown'><Dropdown/>
      </div>
      <div>
        <input type="submit" className='submit' value="Proceed For payment" onClick={()=>navigate("/Payment")}/>
        </div>

      
      
    </div>
  )
}

export default BookTickets