import React from 'react';
import { useState } from 'react';
import './BookTickets.css';
import { useNavigate } from 'react-router-dom';
import Payment from './Payment';
const BookTickets = () => {
  const [location , setLocation]= useState("");
  const [destination , setDestination]= useState("");
  const handleSubmit=(event)=>{
    event.preventDefault();
    alert(location);
  }
  const navigate= useNavigate();
  return (
    <div className='main' >
      <h2 className='title2'>BOOK YOUR TICKETS </h2>
      <div className='input'>
        <div className='location'><span className='from'>From:</span>
        <input type="text" placeholder='Enter Your Current Location' className='box' value={location} onChange={(e) => setLocation(e.target.value)}/>
        </div>
        <div className='destination'><span className='to'> To:   </span>
        <input type="text" placeholder="Enter your destination"  className='box'value={destination} onChange={(e) => setDestination(e.target.value)}/>
        </div>
        <div>
        <input type="submit" className='submit' value="Proceed For payment" onClick={()=>navigate("/Payment")}/>
        </div>
        </div>
        
      
      
      
    </div>
  )
}

export default BookTickets