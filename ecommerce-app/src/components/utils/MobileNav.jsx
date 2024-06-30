import React,{useState} from 'react'
import {FaTimes} from 'react-icons/fa'
import { FaCodeCompare,FaShop,FaFlickr,FaGg,FaHouse, } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import {BiHome,BiStar,BiCart,BiAccessibility} from 'react-icons/bi'
import { NavLink } from 'react-router-dom';

const MobileNav = ({closeMenu}) => {
    const [mobileLinks,setMobileLinks]= useState([
        {
            id:1,
            title:'Home',
            Path:'/',
            icon:<FaHouse />

        },
        {
            id:2,
            title:'About',
            Path:'/about',
            icon:<FaCodeCompare/>
        },
        {
            id: 3,
            title: 'Shop',
            Path: '/shop',
            icon:<FaShop/>
        },
        {
            id: 4,
            title: 'Catalogue',
            Path: '/catalogue',
            icon:<FaFlickr/>
        },
        {
            id: 5,
            title: 'New arrivals',
            Path: '/arrivals',
            icon:<FaGg/>
        },
        {
            id: 6,
            title: 'Contact',
            Path: '/contact',
            icon:<IoMdContact/>
        },
       
    ])

    const activeLink = ({isActive})=> isActive ? 'inline-flex items-center gap-3 w-full hover:bg-cyan-500 bg-cyan-400 hover:text-white text-white duration-300 py-2 px-3 rounded-md' :'inline-flex items-center gap-3 w-full hover:bg-cyan-500 hover:text-white duration-300 py-2 px-3 rounded-md'
        return (
        <div className=" fixed z-[9999] top-0 right-0 h-[100vh] w-[50vw] bg-white pr-5 py-2 block sm:hidden md:hidden">
            <FaTimes className=" ml-2 right-0 my-3 w-5 h-5 font-semibold cursor-pointer" onClick={closeMenu} />

            <ul className="my-10 p-0">
                {
                    mobileLinks.map(singleLink =>(
              
                <NavLink to={singleLink.Path} key={singleLink.id} className={activeLink}>  <li className='inline-flex items-center gap-3 hover:text-white '> {singleLink.icon} {singleLink.title}</li></NavLink>
                    ))
                }             
            </ul>


            <ul className='relative top-24 py-3 '>
                <li>login</li>
                <li className='my-3'>logout</li>
            </ul>

        </div>
    )
}

export default MobileNav;
