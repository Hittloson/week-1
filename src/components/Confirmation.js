import React from 'react'
import OrderInfo from './OrderInfo'
import OrderDetails from './OrderDetails'

function Confirmation() {
  return (
    <div className='confirmation'>
      <OrderInfo/>
      <OrderDetails/>
    </div>
  )
}

export default Confirmation