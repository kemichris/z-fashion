import React from 'react'

export const Product = (props) => {
    const {productImg, productName} = props;

  return (
    <div>
        <div className="product-image">
            <img src={productImg} alt="" />
        </div>
        <h4>{ProductName}</h4>
        <div className="rating">
            <div className="star-rating">

            </div>
            <small className='rating-value'></small>
        </div>
        <div className="price">
            <p className='price-value'></p>
            <p className='price-discount'></p>
            <p className='discout-percentage'></p>
        </div>
    </div>
  )
}
