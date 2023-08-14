import React from 'react'
import FormStyle from './FormStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft,faAnglesRight } from '@fortawesome/free-solid-svg-icons';

function PaymentMethod() {
  return (
    <div>
    <div className='form-container'>
    <div className='formInput'>
        <div className='form-header  '>
            <h2 className='form-title '>Payment Method</h2>
            
        </div>
        <div className='form-details flex flex-col'>
            <label>Select Payment Method</label>
            <input placeholder='Enter your full name' className='inputs'/>
        </div>
        <div className='form-details flex flex-col'>
            <label>Card Name</label>
            <input placeholder='Master Hittloson' className='inputs'/>
        </div>
        <div className='form-details flex flex-col'>
            <label>Card Number</label>
            <input placeholder='## 2222 3333 4444' className='inputs'/>
        </div>
        <div className='form-details flex'>
            <div className='payment-details flex flex-col'>
                <label>CVV</label>
                <input placeholder='699' className='inputs'/>
            </div>
            <div className='payment-details flex flex-col'>
                <label>Expiry Date</label>
                <input placeholder='16/01/2001' className='inputs'/>
            </div>
        </div>
        
    </div>
    <div className='form-links '>
        <div className='return-to-cart '>
            <FontAwesomeIcon icon={faAngleLeft} className='return-angle'/>
            <h2>Return to information</h2>
        </div>
        <button className='next-btn'>Next Step <FontAwesomeIcon icon={faAnglesRight} /></button>
    </div>
</div>
    </div>
  )
}

export default PaymentMethod