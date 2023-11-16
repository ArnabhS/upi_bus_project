import React from 'react'
import QRCode from 'react-qr-code'
import './Payment.css';
const Payment = () => {
   
  return (
    <div className='body'>
        <h1>Pay Here</h1>
        <QRCode value='10Rs'/>
        <div className="input-here">
            <p>Scan the image and pay</p>
        </div>
    </div>
  )
}

export default Payment;