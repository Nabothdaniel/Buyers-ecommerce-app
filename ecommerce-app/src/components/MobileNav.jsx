import React,{useState} from 'react'
import {FaTimes} from 'react-icons/fa'
import {BiHome,BiStar,BiCart,} from 'react-icons/bi'
import { Link } from 'react-router-dom';

const MobileNav = ({closeMenu}) => {
    const [mobileLinks,setMobileLinks]= useState([
        {
            id:1,
            title:'Home',
            Path:'/',
            icon:<BiHome />

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
       
    ])
        return (
        <div className=" fixed z-[9999] top-0 right-0 h-[100vh] w-[50vw] bg-white px-4 py-2">
            <FaTimes className=" relative right-0 my-3 w-5 h-5 font-semibold " onClick={closeMenu} />

            <ul className="my-10">
                {
                    mobileLinks.map(singleLink =>(
              
                <Link to={singleLink.Path} key={singleLink.id}>  <li className="inline-flex items-center w-full hover:bg-cyan-300 hover:text-white duration-100 py-2 px-3 rounded-md"> {singleLink.icon} {singleLink.title}</li></Link>
                    ))
                }             
            </ul>

        </div>
    )
}

export default MobileNav;
