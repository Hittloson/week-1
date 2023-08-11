import React from 'react'
import FormStyle from './FormStyle.css'

function Registration() {
  return (
    <div className='form-container'>
        <div className='formInput'>
            <div>
                <label>Full name</label>
                <input placeholder='Enter your full name'/>
            </div>
            <div>
                <label>Phone number</label>
                <input placeholder='Enter your phone number'/>
            </div>
            <div>
                <label>Address</label>
                <input placeholder='Enter your address'/>
            </div>
            <div>
                <label>Coutry</label>
                <input placeholder='Enter your country'/>
            </div>
            <div>
                <input type='checkbox'/>
                <label>Save this information for next time</label>
                
            </div>
        </div>
    </div>
  )
}

export default Registration