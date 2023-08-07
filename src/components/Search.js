import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Search() {
  return (
    <div className="flex items-center space-x-4">
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        
      >
      <FontAwesomeIcon icon={faSearch } />
      </button>
    </div>
  )
}

export default Search