import React, { useState } from 'react'
import { PagesTag } from '../components/naviagtion/PagesTag';
import Collections from '../components/utils/Collections';
import Products from '../components/utils/Products';



const Shop = () => {
  const [selectOption, setSelectOption] = useState('Default')

  const handleOption = (e)=>{
    setSelectOption(e.target.value)
  }
  return (
    <div>
      <PagesTag desc='Shop' />
      <div className='inline-flex gap-5 md:gap-10 md:flex-row flex-col px-6 py-4 md:px-26 md:py-10'>
        <div className=" w-contain md:w-[30%]">
        <Collections/>
        </div>
        <div className="flex-1 md:w-[70%]">
         <Products/>
        </div>
      </div>
    </div>
  )
}

export default Shop
