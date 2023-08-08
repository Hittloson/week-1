import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';


function Sidebar() {
  return (
    <>
      <div className='sidebar-container ml-8 mr-5 pl-5 pr-5 pb-5 mb-5'>
        <h1 >Filters</h1>
        <div className='flex flex-col'>
          <div className='siderbar-headers flex gap-20 pl-0'>
            <h2 className='pl-0'>BRAND</h2>
            <FontAwesomeIcon icon={faAngleUp} className='p-5 '/>
          </div>
          
          <section className='flex flex-col relative '>
            <div className='flex gap-1 '>
            <label >
              <input type='checkbox' className='mr-1'></input>
              METHON</label>
            </div>
            <div className='flex gap-1'>
            <label className=''>
              <input type='checkbox' className='mr-1'></input>
              WOMEN</label>
            </div>
            <div className='flex gap-1'>
            <label >
              <input type='checkbox' className='mr-1'></input>
              UNISEX
              </label>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Sidebar