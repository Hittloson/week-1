import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className='flex flex-wrap items-center justify-between gap-4 md:flex-no-wrap md:justify-between md:items-center md:gap-10 p-4 md:p-6 bg-gray-800 text-white '>
      <h2 className='text-2xl pt-0 md:text-4xl font-bold'>PerFume</h2>
      <div className='hidden md:block '>
        <ul className='flex gap-6 '>
          <li className='md:text-xl'><Link to="/">Home</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
      <div className='flex items-center gap-4 text-[#f1f1f1] pr-8'>
        <FontAwesomeIcon icon={faSearch} className='text-gray-400 text-lg md:text-xl' />
        <FontAwesomeIcon icon={faCartShopping} className='pr-4 text-lg md:text-xl' />
        <button className='login bg-transparent border border-white rounded-md py-1 px-2 md:py-2 md:px-4 text-sm md:text-base'>
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
