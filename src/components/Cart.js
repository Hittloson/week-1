import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';



function Cart() {
  return (
    <div className='cart-wrapper'>
        <h2>Cart</h2>
        <div className='cart-container'>
            <div className='cart-content'>
                <div className='cart-img'>
                    <img src='./image/img-3.jpg'/>
                </div>
                <div className='cart-description'>
                    <h2>Warm Perfume</h2>
                    <p>Mature</p>
                    <p>Warm</p>
                    <h2>390.00 EGP</h2>
                </div>
            </div>
            <div className='cart-buttons'>
                <FontAwesomeIcon icon={faXmark} />
                <button>-</button>
                <h2>0</h2>
                <button>+</button>
            </div>
        </div>
    </div>
  )
}

export default Cart