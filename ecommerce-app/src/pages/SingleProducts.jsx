import React, { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa6';
import { useParams } from 'react-router-dom'
import Input from '../components/utils/Input';
import Button from '../components/button/Button';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { PagesTag } from '../components/naviagtion/PagesTag';
function SingleProducts() {
    const { id } = useParams();
    const [singleProduct, setSingleProduct] = useState([]);
    useEffect(() => {
        const fetchProducts = () => {
            fetch('../products.json')
                .then(res => res.json())
                .then(data => {
                    const product = data.filter(item => item.id == id)
                    setSingleProduct(product[0])
                })
        }
        fetchProducts();
    }, [])
    const { image, title, desc, price } = singleProduct
    return (
        <>
        <PagesTag desc='singleproduct'/>
            <div className='mt-12 max-w-screen-2xl container mx-auto xl:px-28 px-4'>
                <div className='p-3 max-w-7xl m-auto '>
                    <div className='mt-6 sm:mt-10 '>
                        <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max'>
                            <div>
                                {/*product image */}
                                <img src={image} alt={title} className='w-full rounded-sm shadow-sm' />
                            </div>
                            {/*product details */}
                            <div className=''>
                                <h1 className='text-3xl font-semibold title'> {title}</h1>
                                <p className='mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left sm:mt-4 '>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, aspernatur delectus laboriosam placeat corrupti aut inventore impedit vitae, nobis consectetur optio maiores velit hic eligendi repellat. Cum fuga quos ipsum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis itaque dolorum exercitationem adipisci illum laudantium et ratione inventore ullam voluptas. Corporis nostrum perspiciatis voluptate doloremque rem ut veniam excepturi aspernatur?
                                </p>
                                <span className='my-2 text-xl flex flex-row items-center gap-1 sm:my-4'>
                                    <FaStar className='text-cyan-600' />
                                    <FaStar className='text-cyan-400' />
                                    <FaStar className='text-cyan-400' />
                                    <FaStar className='text-cyan-400' />
                                    <FaStar className='text-cyan-400' />
                                </span>
                                <p className='text-red-500 text-xl sm:text-2xl font-bold sm:'>${price}</p>
                                {/*cartOrder */}
                                <div>
                                    <div className='text-left flex flex-col gap-2 w-full'>
                                    <input type='number'  onChange={(e)=> e.target.value} className='border-none py-2 text-black border-2 focus:border-red-500  px-4 mb-2 w-full outline-none'/>
                                        <label htmlFor='price' className="text-xl">Quantity</label>
                                        <button className='border-2 border-gray-300 outline-none text-sm  font-semibold py-2 px-3 rounded-md max-w-full w-full my-2 bg-cyan-500  inline-flex justify-center items-center text-white gap-2 focus:border-cyan-400'>
                                            <p className='text-2xl text-white'>Confrim Order</p>
                                            <FaArrowAltCircleRight  className='h-5 w-5 '/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProducts