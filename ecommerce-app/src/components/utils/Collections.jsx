import React from 'react'

const Collections = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold text-black'>Collections</h1>

      <ul className='cursor-pointer'>
        <li className=" border-b p-2">Men</li>
        <li className=" border-b p-2">Women</li>
        <li className="p-2 border-b">Children</li>
        <li className="p-2 border-b">Shoes</li>
        <li className="p-2">Hoodies</li>

      </ul>
    </div>
  )
}

export default Collections
