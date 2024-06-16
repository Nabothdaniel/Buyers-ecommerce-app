import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/man1.jpg'
import img2 from '../assets/man2.jpg'
import img3 from '../assets/man6.jpg'
import img4 from '../assets/man4.jpg'

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
            img: img3
        },
        {
            id: 3,
            title: 'Others',
            body: 'Lorem ipsum dolor sit.',
            img: img4
        },
    ]);



    return (
        <div className='w-auto min-h-screen grid place-content-center px-10'>
            <h1 className="text-3xl text-center text-black my-10 mb-10 font-semibold">Categories</h1>
            <div className='flex flex-col items-center justify-center space-y-10'>
                <div className='flex space-x-12'>
                    {
                        category.map(item => (
                            <Link to={`/singlecat/${item.id}`}>
                                <div key={item.id} className='flex items-end w-80 h-[28rem] rounded-md 2xl:relative overflow-hidden group'>
                                    {<img src={item.img} alt="" className='z-10' />}
                                    <div className='z-[5555]'>
                                        <p className='text-indigo-800'>{item.body}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Categories;