import React from 'react'
import PaymentMethod from './PaymentMethod'
import ApplyCart from './ApplyCart'


function Payment() {
  return (
    <div className='payment'>
      <PaymentMethod/>
      <ApplyCart/>
    </div>
  )
}

export default Payment