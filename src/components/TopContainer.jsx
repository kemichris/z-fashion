import React from 'react'

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
            </div>
        </div>
    </div>
  )
}
