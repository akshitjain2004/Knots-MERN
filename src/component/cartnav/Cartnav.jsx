import React from 'react'
import './Cratnav.css'
function Cartnav() {
  return (
    <nav>
    <a href="/">
      <h1>Knots</h1>
    </a>
    <div id="navbar">
      <ul>
        <li><a href="/">Home</a></li>
      </ul>
      <div class="navbardets">
        <ul>
          <li><i id="wishlist-icon" class="fas fa-heart"></i></li>
          <li><i id="cart-icon" class="fas fa-shopping-cart"></i></li>
        </ul>
      </div>
    </div>
    <div id="mobile">
      <i class="fas fa-bars"></i>
    </div>
  </nav>

  )
}

export default Cartnav