import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import img4 from '../../assets/images/img3.jpg'

export default function CategorySwipper() {
  return (
    <>
      <h1 className="text-3xl text-center text-black my-10 mb-10 font-semibold">Categories</h1>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className='flex flex-col  md:gap-5 md:flex-row flex-wrap justify-between items-center space-y-3 '></div>
        <SwiperSlide>
        <Link  to='/' className=' bg-white rounded-xl shadow-md'>
          <div className=" bg-cover md:h-[20rem]  md:w-[30rem] xl:w-[20rem] ">
            <img
              src={img4}
              className="rounded-t-xl bg-center brightness-[60%] hover:scale-95 hover:brightness-90 duration-200  h-full w-full object-cover "
              alt={ "Product Image"}
            />

          </div>
        <div className='p-4'>
        <div className='flex  mt-5 justify-between'>
            <span className="text-gray-500 flex flex-wrap max-w-48 ">Lorem ipsum dolor sit amet.</span>
            <span className="text-gray-600 font-bold ">Lorem, ipsum.</span>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis perspiciatis incidunt quidem doloribus quasi. A cupiditate repudiandae magnam nisi blanditiis!
          </div>
        </div>
        
        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link  to='/' className=' bg-white rounded-xl shadow-md'>
          <div className=" bg-cover md:h-[20rem]  md:w-[30rem] xl:w-[20rem] ">
            <img
              src={img4}
              className="rounded-t-xl bg-center brightness-[60%] hover:scale-95 hover:brightness-90 duration-200  h-full w-full object-cover "
              alt={"Product Image"}
            />

          </div>
        <div className='p-4'>
        <div className='flex  mt-5 justify-between'>
            <span className="text-gray-500 flex flex-wrap max-w-48 ">Lorem ipsum dolor sit amet.</span>
            <span className="text-gray-600 font-bold ">Lorem, ipsum.</span>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis perspiciatis incidunt quidem doloribus quasi. A cupiditate repudiandae magnam nisi blanditiis!
          </div>
        </div>
        
        </Link>

        </SwiperSlide>
        <SwiperSlide>
        <Link  to='/' className=' bg-white rounded-xl shadow-md'>
          <div className=" bg-cover md:h-[20rem]  md:w-[30rem] xl:w-[20rem] ">
            <img
              src={img4}
              className="rounded-t-xl bg-center brightness-[60%] hover:scale-95 hover:brightness-90 duration-200  h-full w-full object-cover "
              alt={ "Product Image"}
            />

          </div>
        <div className='p-4'>
        <div className='flex  mt-5 justify-between'>
            <span className="text-gray-500 flex flex-wrap max-w-48 ">Lorem ipsum dolor sit amet.</span>
            <span className="text-gray-600 font-bold ">Lorem, ipsum.</span>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis perspiciatis incidunt quidem doloribus quasi. A cupiditate repudiandae magnam nisi blanditiis!
          </div>
        </div>
        
        </Link>
        </SwiperSlide>
       
        <SwiperSlide>
        <Link  to='/' className=' bg-white rounded-xl shadow-md'>
          <div className=" bg-cover md:h-[20rem]  md:w-[30rem] xl:w-[20rem] ">
            <img
              src={img4}
              className="rounded-t-xl bg-center brightness-[60%] hover:scale-95 hover:brightness-90 duration-200  h-full w-full object-cover "
              alt={ "Product Image"}
            />

          </div>
        <div className='p-4'>
        <div className='flex  mt-5 justify-between'>
            <span className="text-gray-500 flex flex-wrap max-w-48 ">Lorem ipsum dolor sit amet.</span>
            <span className="text-gray-600 font-bold ">Lorem, ipsum.</span>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis perspiciatis incidunt quidem doloribus quasi. A cupiditate repudiandae magnam nisi blanditiis!
          </div>
        </div>
        
        </Link>
        </SwiperSlide>
       
        <SwiperSlide>
        <Link  to='/' className=' bg-white rounded-xl shadow-md'>

          <div className=" bg-cover md:h-[20rem]  md:w-[30rem] xl:w-[20rem] ">
            <img
              src={img4}
              className="rounded-t-xl bg-center brightness-[60%] hover:scale-95 hover:brightness-90 duration-200  h-full w-full object-cover "
              alt={ "Product Image"}
            />

          </div>
        <div className='p-4'>
        <div className='flex  mt-5 justify-between'>
            <span className="text-gray-500 flex flex-wrap max-w-48 ">Lorem ipsum dolor sit amet.</span>
            <span className="text-gray-600 font-bold ">Lorem, ipsum.</span>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis perspiciatis incidunt quidem doloribus quasi. A cupiditate repudiandae magnam nisi blanditiis!
          </div>
        </div>
        
        </Link>
        </SwiperSlide>
       
        <SwiperSlide>
        <Link  to='/' className=' bg-white rounded-xl shadow-md'>
          <div className=" bg-cover md:h-[20rem]  md:w-[30rem] xl:w-[20rem] ">
            <img
              src={img4}
              className="rounded-t-xl bg-center brightness-[60%] hover:scale-95 hover:brightness-90 duration-200  h-full w-full object-cover "
              alt={ "Product Image"}
            />

          </div>
        <div className='p-4'>
        <div className='flex  mt-5 justify-between'>
            <span className="text-gray-500 flex flex-wrap max-w-48 ">Lorem ipsum dolor sit amet.</span>
            <span className="text-gray-600 font-bold ">Lorem, ipsum.</span>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis perspiciatis incidunt quidem doloribus quasi. A cupiditate repudiandae magnam nisi blanditiis!
          </div>
        </div>
        
        </Link>
        </SwiperSlide>
       
        <SwiperSlide>
        <Link  to='/' className=' bg-white rounded-xl shadow-md'>
          <div className=" bg-cover md:h-[20rem]  md:w-[30rem] xl:w-[20rem] ">
            <img
              src={img4}
              className="rounded-t-xl bg-center brightness-[60%] hover:scale-95 hover:brightness-90 duration-200  h-full w-full object-cover "
              alt={ "Product Image"}
            />

          </div>
        <div className='p-4'>
        <div className='flex  mt-5 justify-between'>
            <span className="text-gray-500 flex flex-wrap max-w-48 ">Lorem ipsum dolor sit amet.</span>
            <span className="text-gray-600 font-bold ">Lorem, ipsum.</span>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis perspiciatis incidunt quidem doloribus quasi. A cupiditate repudiandae magnam nisi blanditiis!
          </div>
        </div>
        
        </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
