import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
    <h1 className='text-left ml-12 text-2xl font-semibold my-3'>Navigations</h1>
    <div className='h-400px grid md:grid-cols-3 md:items-center  md:px-28 px-5 ngrid-cols-2 gap-5  md:gap-12'>
        
      <ul className=''>
        <li className='text-left'><a href="#">List Item</a></li>
        <li><Link to="/">Home</Link></li>
        <li><a href="#">List Item</a></li>
        <li><a href="#">List Item</a></li>
        <li><a href="#">List Item</a></li>
        <li><a href="#">List Item</a></li>
        <li><a href="#">List Item</a></li>
      </ul>

      <ul>
        <li><a href="#">List Item2</a></li>
        <li><a href="#">List Item2</a></li>
        <li><a href="#">List Item2</a></li>
        <li><a href="#">List Item2</a></li>
        <li><a href="#">List Item2</a></li>
        <li><a href="#">List Item2</a></li>
      </ul>

      <ul>
        <li><a href="#">List Item3</a></li>
        <li><a href="#">List Item3</a></li>
        <li><a href="#">List Item3</a></li>
        <li><a href="#">List Item3</a></li>
        <li><a href="#">List Item3</a></li>
        <li><a href="#">List Item3</a></li>
      </ul>
    </div>
    <div className="my-5 text-center">
              <p>Buyers | CopyRight &copy; {new Date().getFullYear()} </p>
            </div>
    </>

  )
}

