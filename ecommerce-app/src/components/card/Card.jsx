import React from 'react'
import { Link } from 'react-router-dom'
import img4 from '../../assets/images/man9.jpg';

const Card = ({ product }) => {
  const { id, image, title, price, description } = product;
  return (
    <div className='flex flex-col  md:gap-5 md:flex-row flex-wrap justify-between items-center space-y-3 '>
      {

        <Link key={id} to={`/product/${id}`} className='m-2'>
          <div className=" bg-cover md:h-[20rem]  md:w-[30rem] xl:w-[20rem] ">
            <img
              src={image}
              className="brightness-[60%] hover:scale-95 hover:brightness-90 duration-200  h-full w-full object-cover "
              alt={title || "Product Image"}
            />

          </div>
          <div className='flex  mt-5 justify-between'>
            <span className="text-gray-500 flex flex-wrap max-w-48 ">{title}</span>
            <span className="text-gray-600 font-bold ">${price}</span>
          </div>
        
        </Link>
      }
    </div>

  )
}

export default Card
