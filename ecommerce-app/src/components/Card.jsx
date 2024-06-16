import React from 'react'
import { Link } from 'react-router-dom'
import man4 from '../assets/man4.jpg'

const Card = ({ product }) => {
  return (
    <div>
      {

          <Link key={product.id} to={`/product/${product.id}`}>
            <div className="bg-cover h-[20rem] md:h-full w-[30rem] md:w-44 text-center">
              <img
                src={product.image}
                className="w-[100%] h-full object-cover mx-5 my-4"
                alt={product.title || "Product Image"} // Provide a default alt text
              />
            </div>
            <div className="inline-flex justify-between gap-24 ml-3 w-full">
              <span className="text-black font-bold">{product.title}</span>
              <span className="text-gray-600 justify-start">${product.price}</span>
            </div>
          </Link>
      }
        </div>
        
  )
}

export default Card
