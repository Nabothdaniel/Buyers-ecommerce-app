import React, { useState } from 'react'
import { PagesTag } from '../components/PagesTag'
import { BiSelectMultiple } from 'react-icons/bi'
import { FaFilter } from 'react-icons/fa6';
import { Button } from '../components/Button';
import Collections from '../components/Collections';
import Products from '../components/Products';



const Shop = () => {
  const [selectOption, setSelectOption] = useState('Default')

  const handleOption = (e)=>{
    setSelectOption(e.target.value)
  }
  return (
    <div>
      <PagesTag desc='Shop' />
      <div className='inline-flex gap-5 md:gap-10 md:flex-row flex-col px-6 py-4 md:px-26 md:py-10'>
        <div className=" w-full md:w-[30%]">
        <Collections/>
        </div>
        <div className="flex-1">
         <Products/>
        </div>
      </div>
    </div>
  )
}

export default Shop
