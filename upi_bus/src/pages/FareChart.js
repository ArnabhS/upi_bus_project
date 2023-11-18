import data from "./mockdata.json"
import './FareChart.css'
import Navbar from "../Navbar";
import { useState } from "react"
export default function FareChart() {
  const [contacts, setContacts]=useState(data);

  return (
   

    <div >
     <Navbar/>
     <div className='app-container'>
      <table>
        <thead>
          <tr>
            <th> From</th>
            <th>To</th>
            <th>Distance(in Kms)</th>
            <th>Fare</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact)=>(
          <tr>
           <td>{contact.From}</td>
           <td>{contact.To}</td>
           <td>{contact.Distance}</td>
           <td>{contact.Fare}</td> 
          </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}