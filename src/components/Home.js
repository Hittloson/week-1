import React, {useState} from 'react'
import homeStyle from './homeStyle.css'
import Navbar from './Navbar'
import ProgressBar from './ProgressBar'

function Home() {
  
  return (
    <div>
      <Navbar />
      <ProgressBar/>
    </div>
  )
}

export default Home