import React from 'react'

const Card = ({cardesc}) => {
  return (
    <div className='px-3 py-2 rounded-none shadow-sm'>
      <h1 className='font-semibold text-center mb-2'>{cardesc.title}</h1>
     <div className="flex justify-between">
        <p className='text-cyan'>{cardesc.cartegory1}</p>
        <p>{cardesc.figure1}</p>
     </div>

     <div className="flex justify-between">
        <p className='text-cyan'>{cardesc.cartegory2}</p>
        <p>{cardesc.figure2}</p>
     </div>
     <div className="flex justify-between">
        <p className='text-cyan'>{cardesc.cartegory3}</p>
        <p>{cardesc.figure3}</p>
     </div>
    </div>
  )
}

export default Card
