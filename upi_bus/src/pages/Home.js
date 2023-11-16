import './Home.css'
export default function Home() {
  return (
    <div className='main'>
      <div >
      <img className='img' src="https://assets.telegraphindia.com/telegraph/2022/Feb/1644781493_bus.jpg" alt="" />
      </div>
    <button className="btn">
      BOOK YOUR TICKETS HERE
    </button>

    
    <div class="buttonList">
          <button className='PS'>Previous Stop</button>
          <button className='CS'>Current Stop</button>
          <button className='NS'>Next Stop</button>
          </div>
          
        <footer>
        <p className='footer'>&copy; 2022 Book Your Game. All rights reserved.</p>
      </footer>

          
  </div>
  )
}