import React from 'react'
import Button from '../button/Button'

function OrderSummary() {
  return (
    <section className='bg-gray-100 rounded-xl px-7 py-4 shadow-sm'>
        <h1 className='text-2xl text-black'>Order Summary</h1>
        <div className='mt-5'>
            <div className='flex items-center justify-between '>
                <span>Subtotal</span>
                <span>$0.0</span>
            </div>
            <div className='flex items-center justify-between '>
                <span>Total Items</span>
                <span>0</span>
            </div>
            <Button value='Proceed to Checkout' btnClass='w-full bg-cyan-400 py-2 px-3 hover:bg-cyan-500 text-white duration-200 rounded-md' path='/'/>
        </div>
    </section>
  )
}

export default OrderSummary