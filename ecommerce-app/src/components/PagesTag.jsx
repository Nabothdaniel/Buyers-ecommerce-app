import React from 'react'

export const PagesTag = ({desc}) => {
  return (
      <div className="py-5 mt-2 md:px-10 px-24 bg-gray-300">
        <p className='text-[22px]  font-semibold'><span className='text-cyan-500'>Home/</span>{desc}</p>
    </div>
  )
}

