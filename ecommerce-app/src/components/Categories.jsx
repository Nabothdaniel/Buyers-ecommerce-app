import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from './Button';
import img1 from '../assets/man1.jpg'
import cat1 from '../assets/child2.jpg'
import cat2 from '../assets/cat2.jpg'
import cat3 from '../assets/category.jpg'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination } from 'swiper/modules';
import { BiLeftArrow } from 'react-icons/bi';
function Categories() {

    const [category, setCategory] = useState([
        {
            id: 1,
            title: 'Men',
            body: 'Lorem ipsum dolor sit.',
            img: img1,
        },
        {
            id: 2,
            title: 'Children',
            body: 'Lorem ipsum dolor sit.',
            img: cat1
        },
        {
            id: 3,
            title: 'Women',
            body: 'Lorem ipsum dolor sit.',
            img: cat2
        },
        {
            id: 4,
            title: 'Others',
            body: 'Lorem ipsum dolor sit.',
            img: cat3
        }
    ]);



    return (
        <div className='w-auto min-h-screen grid place-content-center p-10'>
            <h1 className="text-3xl text-center text-black my-10 mb-10 font-semibold">Categories</h1>
            <div className='flex flex-col items-center justify-center space-y-10'>
                
                    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                        <SwiperSlide>
                        <div className='flex space-x-12 overflow-scroll'>
                        {
                            category.map(item => (
                                <Link to={`/shop/${item.id}`} key={item.id} >
                                    <div key={item.id} className='flex items-end w-80 h-aut
                                 rounded-md overflow-hidden group relative'>
                                        <img src={item.img} alt="" className=' overflow-contain  -z-10 brightness-[60%] group-hover:scale-125 group-hover:brightness-90 duration-200 ' />
                                        <div className=' text-white p-5 flex flex-col z-[9999] absolute'>
                                            <h1 className='font-bold text-2xl'>{item.title}</h1>
                                            <p>{item.body}</p>
                                            <Button path="/shop" value="Shop Now" btnClass="border-2  border-cyan-400 text-white hover:text-white py-2 px-3 mt-5 z-10 w-full hover:bg-cyan-400 mx-auto duration-200" />
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                        </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
    )
}

export default Categories;