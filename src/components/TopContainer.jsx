import React from 'react'
import { Link } from 'react-router-dom'

export const TopContainer = () => {
  return (
    <div className='top-container'>
        <div className="top-flex">
            <div className="top-text">
                <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p>Browse through our diverse range of meticulously crafted garments, 
                    designed to bring out your individuality and cater to your sense of style.
                </p>
                <Link to="/shop">
                    <button>Shop Now</button>
                </Link>

                <div className="good-will-flex">
                    <div className="brand">
                        <h3>200+</h3>
                        <p>International Brands</p>
                    </div>
                    <div className="products">
                        <h3>2,000+</h3>
                        <p>High-Quality Product</p>
                    </div>
                    <div className="customers">
                        <h3>30,000+</h3>
                        <p>Happy Customers</p>
                    </div>
                </div>
            </div>


        </div>
    </div>
  )
}
