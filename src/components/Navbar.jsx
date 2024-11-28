import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <nav>
            <p>Z-Fashion</p>
            <div className="nav-items">
                <p>Shop <i class="fa-solid fa-angle-down"></i></p>
                <Link to="/new-arrival">New Arrival</Link>
                <Link to="brands">Brands</Link>
            </div>
            <input type="search" name="" id="" />
            <div className="cart-user">
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-regular fa-circle-user"></i>
            </div>
        </nav>
    </div>
  )
}
