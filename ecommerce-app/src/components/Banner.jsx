import React from 'react'
import  Button  from './Button'

const Banner = () => {
  return (
    <section className=" z-90 w-full my-2 flex items-center justify-center  h-[400px] px-auto py-10 bg-[url('./assets/man9.jpg');] bg-position  bg-cover object-cover bg-no-repeat md:bg-fit" style={{aspectRatio:1}} >
      <div className="">
        <p className="text-black text-1xl text-center font-semibold">10% ON YOUR FIRST ORDER</p>
        <h1 className="text-[2.8rem] text-center text-white">Reasonable Price</h1>
        <Button path="/shop" value="Shop Now" btnClass="border-2 border-cyan-400 text-white hover:text-white py-2 px-3 mt-5 z-10 w-full hover:bg-cyan-400 mx-auto duration-200" />
      </div>
    </section>

  )
}

export default Banner
