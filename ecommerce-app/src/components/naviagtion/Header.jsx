import React, { useState, } from "react";
import { useSelector,useDispatch } from "react-redux";
import Input from "../utils/Input";
import { BiSearch, BiCart, BiHeart, BiUser, BiLeftArrowCircle } from 'react-icons/bi'
import {  FaArrowRightFromBracket,FaAlignLeft, FaPersonRifle, FaRegCircleUser } from 'react-icons/fa6'
import { Link } from 'react-router-dom';
import MobileNav from "../utils/MobileNav";
import Profile from "../userProfile/Profile";
import { FaGlobe } from "react-icons/fa";


export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [headerInput, setInputHeader] = useState('')

    const checkMenu = () => {
        setIsOpen(!isOpen);
    }
   
    const CloseMenu = () => {
        setIsOpen(false)
    }

    const searchChange = e => {
        setInputHeader(e.target.value)

    }

    //shows the profile
    const setProfile = () => {
        setIsProfileOpen(!isProfileOpen);
    }

    const removeProfile = () => {
        setIsProfileOpen(isProfileOpen);
    }
    const cartItem = useSelector((state)=> state.cartItem.value);
    console.log(cartItem);
    return (
        <>
            <header className=" relative p-5 md:px-16 md:py-5  flex justify-between item-center">
            <div className=" bg-white inline-flex justify-center items-center gap-3 rounded-md px-4 py-3 md:px-2 md:py-3 ">
                    <Input placeHolder='search' inputType='text' value={headerInput} inputChange={searchChange} inputClass='outline-none w-[80%] hidden md:block' />
                    <BiSearch className="" />
                </div>
                
                    <h1 className="text-3xl font-bold text-center"><Link to='/'>Buyers</Link></h1>
                
                <div className="md:inline-flex justify-between gap-5 items-center hidden">
                    <Link to='cart' className="relative"> <BiCart className="h-5 w-5" /> <p className="absolute  h-5 w-5 bg-cyan-400 rounded-full p-2 text-center text-white">{cartItem}</p></Link>
                    <Link to='/signup'>
                        <BiLeftArrowCircle/>
                    </Link>
                    <div>
                    <FaRegCircleUser onClick={setProfile} onDoubleClick={removeProfile}  className="w-5 h-5 hover:text-cyan-400 hover:duration-150"/>
                    </div>
                    <div className="inline-flex gap-2 cursor-pointer hover:text-cyan-400">
                        <FaGlobe className="w-5 h-5 " />
                        <p>English US</p>
                    </div>
                    

                    
                    
                </div>

                <div className="sm:hidden md:hidden mt-2 cursor-pointer ">
                    <FaAlignLeft className="w-5 h-5 "  onClick={checkMenu} />
                </div>
            </header>

            {isOpen ? <MobileNav closeMenu={CloseMenu} /> : ''}
            {isProfileOpen ? <Profile /> :''}
        </>
    )
}