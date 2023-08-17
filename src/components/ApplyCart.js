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
                    <h2 className='price'>390.00 EGP</h2>
                </div>
            </div>
            <div className='cart-buttons'>
                <FontAwesomeIcon icon={faXmark} className='close-icon'/>
                <div className='cart-btn'>
                    <button className='btn cart-sub'>-</button>
                    <h2 className='btn-header'>0</h2>
                    <button className='btn cart-add'>+</button>
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
                    <h2 className='price'>390.00 EGP</h2>
                </div>
            </div>
            <div className='cart-buttons'>
                <FontAwesomeIcon icon={faXmark} className='close-icon'/>
                <div className='cart-btn'>
                    <button className='btn cart-sub'>-</button>
                    <h2 className='btn-header'>0</h2>
                    <button className='btn cart-add'>+</button>
                </div>
            </div>
        </div>

        <div className='cart-container'>
            <div className='cart-content'>
                <div className='cart-img-container'>
                    <img src='./image/img-6.jpg' className='cart-img'/>
                </div>
                <div className='cart-description'>
                    <h2 className='cart-description-header'>Warm Perfume</h2>
                    <p>Mature</p>
                    <p>Warm</p>
                    <h2 className='price'>390.00 EGP</h2>
                </div>
            </div>
            <div className='cart-buttons'>
                <FontAwesomeIcon icon={faXmark} className='close-icon'/>
                <div className='cart-btn'>
                    <button className='btn cart-sub'>-</button>
                    <h2 className='btn-header'>0</h2>
                    <button className='btn cart-add'>+</button>
                </div>
            </div>
        </div>
        <div className='cart-apply'>
            <fieldset>
                <legend>Promo code</legend>
                <input type='text' placeholder='Enter Promo code' className='input-apply'/>
                <button className='apply-btn'>Apply</button>
            </fieldset>
        </div>
    </div>
  )
}

export default ApplyCart