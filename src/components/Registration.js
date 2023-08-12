import React from 'react'
import FormStyle from './FormStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft,faAnglesRight } from '@fortawesome/free-solid-svg-icons';


function Registration() {
  return (
    <div className='form-container'>
        <div className='formInput'>
            <div className='register-form-header gap-2 '>
                <p className='sm:text-sm pt-1 md:text-lg '>Already have an account? <a href='#'>Login</a></p>
            </div>
            <div className='form-details flex flex-col'>
                <label>Username:</label>
                <input placeholder='Enter your username' className='inputs'/>
            </div>
            <div className='form-details flex flex-col'>
                <label>Email:</label>
                <input placeholder='Enter your email' className='inputs'/>
            </div>
            <div className='form-details flex flex-col'>
                <label>Phone number:</label>
                <input placeholder='Enter your phone number' className='inputs'/>
            </div>
            <div className='form-details flex flex-col'>
                <label>Password:</label>
                <input placeholder='Enter your password' className='inputs'/>
            </div>
            <div className='save-details'>
                <input type='checkbox' className='check-input'/>
                <label>Agree to Terms and  Condition</label>
                
            </div>
        </div>
        <div className='Submit-container '>
            <button className='submit-btn'>Sign up</button>
        </div>
    </div>
  )
}

export default Registration