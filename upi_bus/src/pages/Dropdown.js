import React from 'react'
import location from './location.json'
import destination from './destination.json'
import './Dropdown.css'
const Dropdown = () => {

    // const [location, setLocation]=useState(data);
    // const [destination, setDestination]=useState(data2);
  return (
    <div>
       <div className='location' >
        <span className='from'> From</span> : <select className='Lbox'>
        <option   >-- Select Current Location -- </option>
        {
          location.map((getlocation,index)=>(
            <option value={getlocation.id} key={index} >{getlocation.Lname}</option>
          ))
        }
       
      </select>
      </div> 
       <div  className='destination'>

        <span className='to'>To:</span> <select className='Dbox'>
       <option >-- Select Your Destination -- </option>
       {
          destination.map((getdestination,index)=>(
            <option value={getdestination.id} key={index} >{getdestination.Dname}</option>
          ))
        }
       
      </select>
      </div> 
      <div></div> 
    </div>
  )
}

export default Dropdown