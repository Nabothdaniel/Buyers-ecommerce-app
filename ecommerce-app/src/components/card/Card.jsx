import React from 'react'
import { Link } from 'react-router-dom'
import img4 from '../../assets/images/man9.jpg';

const Card = ({ product }) => {
  const { id, image, title, price, desc } = product;
  return (
    <div className='flex flex-col   md:gap-5 md:flex-row flex-wrap justify-between items-center space-y-3 '>
      {

        <Link key={id} to={`/shop/${id}`} className=' bg-white rounded-xl shadow-md'>
          <div className=" bg-cover md:h-[20rem]  md:w-[30rem] xl:w-[20rem] ">
            <img
              src={image}
              className="rounded-t-xl bg-center brightness-[60%] hover:scale-95 hover:brightness-90 duration-200 h-full w-full object-cover "
              alt={title || "Product Image"}
            />

          </div>
        <div className='p-4'>
        <div className='  mt-5 justify-between'>
            <span className="text-black font-semibold text-[1.2rem] pb-2">{title}</span>
          </div>
          <div  className=' overflow-auto md:max-w-64 text-black/40'>
            {desc}
          </div>
          <div className="py-3 gap-2 flex items-center max-w-48">
          <span className='text-black text-2xl font-bold'>${price}</span>
          <Link to='/cart' className='bg-cyan-400   w-full hover:bg-cyan-500 px-3 py-2 text-center rounded-xl shadow-sm font-semibold text-white'>Add to cart</Link>
          </div>
        </div>
        
        </Link>
      }
    </div>

  )
}

export default Card
