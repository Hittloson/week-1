import React from 'react'
import Sidebar from './Sidebar'
import Cards from './Cards'
import Navbar from './Navbar'
import Search from './Search'
import CategoriesStyle from './CategoriesStyle.css'

function Categories() {
  return (
    <>
        <>
            <Navbar />
            <Search/>
            <div className='flex'>
              <Sidebar />
              <Cards 
                imgSrc={"#"} 
                imgAlt={"Card Image"}
                title={"Card Title"} 
                description={"This is the card description. You can add more to it joor"}
                buttonText={"Learn more"}
                link={"CardPage"}
              />
            </div>
        </>
    </>
  )
}

export default Categories