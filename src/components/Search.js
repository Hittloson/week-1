import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Search() {
  return (
    <div className="search bg-green my-5 ml-10 pl-10 sm:pl-5">
        
        <input
        type="text"
        placeholder="Search..."
        className="pl-10 pr-4 w-3/4 py-2  border  rounded-2xl focus:outline-none focus:border-blue-500 bg-backg"
        />
        <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-2/3 pt-3  text-red"
        />
      
    </div>
  )
}

export default Search