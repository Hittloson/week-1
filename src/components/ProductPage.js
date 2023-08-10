import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


function ProductPage() {
  return (
    <div className='product-container mt-5'>
        <section className='product' >
            <img src='./image/img-1.jpg' alt='Product ' className='product-img'/>
            <div className='product-details'>
                <div className='product-details-header '>
                    <h2 className='product-header'>Warm perfume</h2>
                    <h2 className='product-EGP'>850 EGP</h2>
                </div>
                <div className='product-details-description'>
                    <h2 className='product-description-head'>Description</h2>
                    <p className='product-description'>
                        It often features notes that evoke feelings of warmth, such as vanilla.
                    </p>
                    <FontAwesomeIcon icon={faStar} className='faIcons'/>
                    <FontAwesomeIcon icon={faStar} className='faIcons'/>
                    <FontAwesomeIcon icon={faStar} className='faIcons'/>
                    <FontAwesomeIcon icon={faStar} className='faIcons'/>
                    <FontAwesomeIcon icon={faStar} className='faIcons'/>
                    <h3 className='product-size'>Size</h3>
                    <button className='product-size-btn btn-color'>50</button>
                    <button className='product-size-btn'>100</button>
                    <button className='product-size-btn'>150</button>
                </div>
                <button className='product-order btn-color'>Buy Now</button>
                <button className='product-order'>Add to cart</button>
            </div>
        </section>
    </div>
  )
}

export default ProductPage