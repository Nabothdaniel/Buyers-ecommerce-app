import React, { useState } from 'react'
import { PagesTag } from '../components/PagesTag'
import { BiSelectMultiple } from 'react-icons/bi'
import { FaFilter } from 'react-icons/fa6';
import Card from '../components/Card';
import { Button } from '../components/Button';
import Collections from '../components/Collections';



const Shop = () => {
  const [selectOption, setSelectOption] = useState('Default')

  const handleOption = (e)=>{
    setSelectOption(e.target.value)
  }
  return (
    <div>
      <PagesTag desc='Shop' />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 h-auto w-[100%]my-5 md:px-28 px-6 ">
        <div className='w-1/3'>
          <Collections/>
        </div>
        <div className="w-full gap-24 flex justify-between ">
          <div>
            <Button  value='All Products'/>
            <Button  value='Clothings'/>
            <Button  value='Shoes'/>
            <Button  value='Bags'/>
          </div>
          <div className='flex justify-end mb-4 rounded-sm'>
            <div className='bg-black'>
              <FaFilter className='text-white h-4 w-4'/>
            </div>
            <select value={selectOption} onChange={handleOption} className='bg-black text-white '>
              <option value="Default" className='duration-90 hover:bg-red-700'>Default</option>
              <option value="A_Z">A_Z</option>
              <option value="Z_A">Z_A</option>
              <option value="low-high">Low-High</option>
              <option value="high-low">High-Low</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
