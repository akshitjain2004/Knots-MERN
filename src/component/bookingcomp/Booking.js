import React from 'react'
import "./Booking.css"
import { Link } from 'react-router-dom'
function Booked() {
  return (
<div class="confirmation-container">
        <i class="uil uil-check-circle confirmation-icon"></i>
        <h1>Hey provide us your contact info</h1>
        <h2>So we can contact you!</h2>
        <form>
        <label>Name</label>
        <input type='text'/>
        <label>Mobile Number</label>
        <input type='text'/></form>
    <Link to="/booked"> <button className='btn' type='submit'>Confirm</button></Link>   
    </div>  
  )
}

export default Booked