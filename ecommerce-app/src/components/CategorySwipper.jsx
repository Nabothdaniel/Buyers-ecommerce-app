import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Button from './Button';

const CategorySwiper = ({ title, body, img,id }) => (
  <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
    <SwiperSlide>
      <div key={id} className='flex items-end w-80 h-[28rem] rounded-md overflow-hidden group relative'>
        <img src={img} alt="" className=' overflow-contain  -z-10 brightness-[60%] group-hover:scale-125 group-hover:brightness-90 duration-200 ' />
        <div className=' text-white p-5 flex flex-col z-[9999] absolute'>
          <h1 className='font-bold text-2xl'>{title}</h1>
          <p>{body}</p>
          <Button path="/shop" value="Shop Now" btnClass="border-2 border-cyan-400 text-white hover:text-white py-2 px-3 mt-5 z-10 w-full hover:bg-cyan-400 mx-auto duration-200" />
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
);

export default CategorySwiper;
