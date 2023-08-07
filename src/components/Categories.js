import React from 'react'
import Sidebar from './Sidebar'
import Cards from './Cards'
import Navbar from './Navbar'
import Search from './Search'

function Categories() {
  return (
    <>
        <div>
            <Navbar />
            <Search/>
            <Sidebar />
            <Cards />
        </div>
    </>
  )
}

export default Categories