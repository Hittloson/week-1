import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import headerStyle from './headerStyle.css'


function Header() {
  return (
    <div className='header container mx-auto p-4 md:p-8'>
        <Navbar />
        <Hero />
    </div>
  )
}

export default Header;