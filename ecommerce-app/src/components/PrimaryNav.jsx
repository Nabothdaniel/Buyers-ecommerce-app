import React from 'react';
import { Link } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa6';

export const PrimaryNav = () => {
    const links = [
        {
            id:1,
            title:'Home',
            Path:'/'
        },
        {
            id:2,
            title:'About',
            Path:'/about'
        },
        {
            id: 3,
            title: 'Shop',
            Path: '/shop'
        },
        {
            id: 4,
            title: 'Catalogue',
            Path: '/catalogue'
        },
        {
            id: 5,
            title: 'New arrivals',
            Path: '/arrivals'
        },
        {
            id: 6,
            title: 'Contact',
            Path: '/contact'
        },
       
    ]
    return (
        <div className=' hidden md:flex justify-center'>
           

            <ul className='flex justify-between items-center gap-10 text-gray-700 '>
                {
                    links.map((link) => (
                        <li key={link.id}>
                            <Link to={link.Path} className='hover:text-cyan-200 duration-100'>
                                {link.title}
                            </Link>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}