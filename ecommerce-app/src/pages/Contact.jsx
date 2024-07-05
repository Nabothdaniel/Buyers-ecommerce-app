import React, { useState } from 'react'

import { PagesTag } from '../components/naviagtion/PagesTag';
import Input from '../components/utils/Input';
import Button from '../components/button/Button';

const Contact = () => {
  const [contactCard, setContactCard] = useState([
    {
      city: 'Lagos',
      address: '203 Obafemi street shop 12'
    },

    {
      city: 'Abuja',
      address: 'Wuse zone 5 opposite City estate sho 13'
    },

    {
      city: 'Kaduna',
      address: 'Narayi Kabala konstien shop 18'
    },
  ])

  const [nameInput, setNameInput] = useState('');

  const setName = (value)=>{
      value.preventDefault();
      setNameInput(value.target.value);
  }
  return (
    <div className=''>
      <PagesTag desc='Contact' />
      <h1 className=' text-black text-2xl font-semibold ml-10 md:ml-20 mt-5'>Get in Touch</h1>
      <div className='my-10 container md:px-24 px-3 grid grid-cols-1 md:grid-cols-2 gap-12'>
        <div>
          <div className="flex flex-col gap-8 md:gap-12">
            {
              contactCard.map(card => (
                <div className="border border-gray-200 py-3 px-4 w-full " key={card.city}>
                  <h1 className="text-[1.2rem] font-semibold text-cyan-400">{card.city}</h1>
                  <p className='text-gray-500'>{card.address}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className='md:w-auto'>
          <form className='flex flex-col  rounded-xl border-2 border-gray-500 md:border-none md:bg-white md:shadow-sm py-5 px-5 '>
          <h1 className='py-3 text-center text-2xl font-semibold text-black'>Contact Us</h1>

           <div>
            <label htmlFor="firstname"></label>
           <Input placeHolder='First Name' Inputname='firstname' inputType='text' value={nameInput} inputChange={(e) => setName(e)} inputClass='outline-none md:w-full  my-2 md:w-auto md:mx-18  block px-5 py-3 rounded-sm border-2 border-gray-700 ' />
           </div>
           <div>
            <label htmlFor="firstname"></label>
           <Input placeHolder='Last Name' inputType='text' value={nameInput} inputChange={(e) => setName(e)} inputClass='outline-none md:w-full  my-2 md:w-auto md:mx-18  block px-5 py-3 rounded-sm border-2 border-gray-700 ' />
           </div>
           
            <Button value='Sign Up' btnClass='w-full text-[1.2rem]   mt-2 rounded-md bg-cyan-600 py-2 px-3 hover:bg-cyan-400 text-white duration-200' />
          </form>
        </div>
      </div>
    </div>

  )
}

export default Contact
