import React from 'react'
import emptyCart from '../assets/svg/empty-cart.svg'
import Button from '../components/button/Button'
import { PagesTag } from '../components/naviagtion/PagesTag'
import OrderSummary from '../components/utils/OrderSummary'

const Cart = () => {
  return (
    <>
      <PagesTag desc='cart' />
      <div className='flex justify-center items-center flex-col'>
        <img src={emptyCart} className='h-[20rem] w-[20rem]' alt="this is an image of a cart that is empty" />
        <div className="py-5">
          <p className='text-2xl text-cyan-400 font-semibold mb-3 '>Your shopping cart is empty</p>
          <Button path="/shop" value="Shop Now" btnClass=" rounded-full text-cyan-400 font-bold border-2 border-cyan-400 hover:text-white py-2 px-3 mt-5 z-10 w-full hover:bg-cyan-400 mx-auto duration-200" />
        </div>

      </div>
      <div className='md:px-28 px-4'>
        <OrderSummary />
      </div>
    </>
  )
}

export default Cart
