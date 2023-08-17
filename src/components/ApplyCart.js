import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
function ApplyCart() {
  return (
    <div className='cart-wrapper'>
        <h2 className='cart-header'>Cart</h2>

        <div className='cart-container'>
            <div className='cart-content'>
                <div className='cart-img-container'>
                    <img src='./image/img-3.jpg' className='cart-img'/>
                </div>
                <div className='cart-description'>
                    <h2 className='cart-description-header'>Warm Perfume</h2>
                    <p>Mature</p>
                    <p>Warm</p>
                    
                </div>
            </div>
            <div className='cart-buttons'>
                <h2 className='price'>2x</h2>
                <div className='cart-btn'>
                <h2 className='price'>390.00 EGP</h2>
                </div>
            </div>
        </div>

        <div className='cart-container'>
            <div className='cart-content'>
                <div className='cart-img-container'>
                    <img src='./image/img-4.jpg' className='cart-img'/>
                </div>
                <div className='cart-description'>
                    <h2 className='cart-description-header'>Warm Perfume</h2>
                    <p>Mature</p>
                    <p>Warm</p>
                    
                </div>
            </div>
            <div className='cart-buttons'>
                <h2 className='price'>2x</h2>
                <div className='cart-btn'>
                <h2 className='price'>390.00 EGP</h2>
                </div>
            </div>
        </div>

        <div className='cost-summary'>
            <div className='summary-description'>
                <h2 className='summary-title'>Subtotal</h2>
                <p className='summary-price'>1060.00 EGP</p>
            </div>
            <div className='summary-description'>
                <h2 className='summary-title'>Shipping</h2>
                <p className='summary-price'>40.99 EGP</p>
            </div>
            <div className='summary-description discount'>
                <h2 className='summary-title'>Discount</h2>
                <p className='summary-price'>0 EGP</p>
            </div>
            <div className='line'></div>
            <div className='summary-description'>
                <h2 className='summary-title'>Total Cost</h2>
                <p className='summary-price'>1090.99 EGP</p>
            </div>
        </div>
    </div>
  )
}

export default ApplyCart