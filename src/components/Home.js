import React, {useState} from 'react'
import homeStyle from './homeStyle.css'
import Navbar from './Navbar'
import ProgressBar from './ProgressBar'
import Information from './Information'
import Payment from './Payment'
import Confirmation from './Confirmation'


function Home() {
  
  return (
    <div className='pb-6'>
      <Navbar />
      <ProgressBar/>
      <Confirmation/>
      
      
    </div>
  )
}

export default Home