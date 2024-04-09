import React, { useState } from 'react'
import { PagesTag } from '../components/PagesTag'
import { BiSelectMultiple } from 'react-icons/bi'
import Card from '../components/Card';



const Shop = () => {
  const [cardesc, setCardesc] = useState([
    {
      id: new Date().getTime(),
      cartegory1: 'Men',
      cartegory2: 'Women',
      cartegory3: 'Children',
      figure1: '(2,200)',
      figure2: '(2,550)',
      figure3: '(2,124)',
      title: 'Categories'
    }
  ])
  return (
    <div>
      <PagesTag desc='Shop' />
    </div>
  )
}

export default Shop
