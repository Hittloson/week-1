import React from 'react'
import FormStyle from './FormStyle.css'

function Login() {
  return (
    <div className='form-container'>
        <div className='formInput'>
            <div className='register-form-header gap-2 '>
                <p className='sm:text-sm pt-1 md:text-lg '>Dont have an account? <a href='#'>Sign up</a></p>
            </div>
            <div className='form-details flex flex-col'>
                <label>Username:</label>
                <input placeholder='Enter your username' className='inputs'/>
            </div>
            
            
            <div className='form-details flex flex-col mb-4'>
                <label>Password:</label>
                <input type='password' name='password' placeholder='Enter your password' className='inputs'/>
            </div>
        </div>
        <div className='Submit-container '>
            <button className='submit-btn '>Login</button>
        </div>
    </div>
  )
}

export default Login