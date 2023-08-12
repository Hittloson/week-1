import React from 'react'
import FormStyle from './FormStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft,faAnglesRight } from '@fortawesome/free-solid-svg-icons';


function Registration() {
  return (
    <div className='form-container'>
        <div className='formInput'>
            <div className='form-header gap-2 '>
                <h2 className='form-title '>Contact</h2>
                <p className='sm:text-sm pt-1 md:text-lg'>Already have an account? <a href='#'>Login</a></p>
            </div>
            <div className='form-details flex flex-col'>
                <label>Full name:</label>
                <input placeholder='Enter your full name' className='inputs'/>
            </div>
            <div className='form-details flex flex-col'>
                <label>Phone number:</label>
                <input placeholder='Enter your phone number' className='inputs'/>
            </div>
            <div className='form-details flex flex-col'>
                <label>Address:</label>
                <input placeholder='Enter your address' className='inputs'/>
            </div>
            <div className='form-details flex flex-col'>
                <label>Country:</label>
                <input placeholder='Enter your country' className='inputs'/>
            </div>
            <div className='save-details'>
                <input type='checkbox' className='check-input'/>
                <label>Save this information for next time</label>
                
            </div>
        </div>
        <div className='form-links '>
            <div className='return-to-cart '>
                <FontAwesomeIcon icon={faAngleLeft} className='return-angle'/>
                <h2>Return to cart</h2>
            </div>
            <button className='next-btn'>Next Step <FontAwesomeIcon icon={faAnglesRight} /></button>
        </div>
    </div>
  )
}

export default Registration