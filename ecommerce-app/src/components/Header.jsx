import React, { useState } from "react";
import { BiSearch, BiCart, BiHeart, BiCrosshair, BiUser, BiHome, BiStar } from 'react-icons/bi'
import { FaPerson, FaBars, FaCross } from 'react-icons/fa6'
import { Link } from 'react-router-dom';


export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const checkMenu = () => {
        setIsOpen(!isOpen);
    }

    const CloseMenu = () => {
        setIsOpen(false)
    }
    return (
        <>
            <header className="header sticky top:0 left-0 right-0 ">
                <div className="header-left">
                    <input type="text" placeholder="search" className="outline-none" />
                    <BiSearch />
                </div>
                <div className="header-center">
                    <h1 className="text-3xl font-bold"><Link to='/'>Buyers</Link></h1>
                </div>
                <div className="header-right">
                    <BiUser />
                    <BiHeart />
                    <Link to='cart'> <BiCart /></Link>
                </div>
                <div className="bar">
                    <FaBars onClick={checkMenu} />
                </div>
            </header>
            {isOpen ? <div className="navigation relative">
                <FaCross className="absolute top-2 right-4 my-3 " onClick={CloseMenu} />

                <ul className="my-10">
                    <li className="flex self-start my-2  hover:bg-cyan-300 hover:text-white duration-100 py-2 px-3 rounded-md"><Link to='/' className="inline-flex self-end items-center gap-2"> <BiHome /> Home</Link></li>
                    <li className="my-3 flex self-start  hover:bg-cyan-300 hover:text-white duration-100 py-2 px-3 rounded-md"><Link to='/about' className="flex"> <BiStar />About</Link></li>
                    <li className="my-3 flex self-start hover:bg-cyan-300 hover:text-white duration-100 py-2 px-3 rounded-md"><Link to='/cart' className="flex"> <BiCart /> Cart</Link></li>
                </ul>

            </div> : ''}
        </>
    )
}