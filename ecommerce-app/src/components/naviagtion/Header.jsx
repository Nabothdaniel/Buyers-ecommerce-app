import React, { useState, } from "react";
import { useSelector,useDispatch } from "react-redux";
import Input from "../utils/Input";
import { BiSearch, BiCart, BiHeart, BiUser, BiLeftArrowCircle } from 'react-icons/bi'
import {  FaArrowRightFromBracket,FaAlignLeft } from 'react-icons/fa6'
import { Link } from 'react-router-dom';
import MobileNav from "../utils/MobileNav";
import  Button  from "../utils/Button";


export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
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
    const cartItem = useSelector((state)=> state.cartItem.value);
    console.log(cartItem);
    return (
        <>
            <header className="p-5 md:px-16 md:py-5  flex justify-between item-center">
            <div className=" bg-white inline-flex justify-center items-center gap-3 rounded-md px-4 py-3 md:px-2 md:py-3 ">
                    <Input placeHolder='search' inputType='text' value={headerInput} inputChange={searchChange} inputClass='outline-none w-[80%] hidden md:block' />
                    <BiSearch className="" />
                </div>
                
                    <h1 className="text-3xl font-bold text-center"><Link to='/'>Buyers</Link></h1>
                
                <div className="md:inline-flex justify-between gap-5 items-center hidden">
                    <Link to='cart' className="inline-flex items-center gap-1 relative"> <BiCart /> <p className="absolute top-3">{cartItem}</p></Link>
                    <Link to='/signup'>
                        <BiLeftArrowCircle/>
                    </Link>
                    <Link to='/login'>
                    <FaArrowRightFromBracket/>
                    </Link>
                    
                </div>
                

                <div className="sm:hidden md:hidden mt-2 cursor-pointer ">
                    <FaAlignLeft className="w-6 h-6 " onClick={checkMenu} />
                </div>
            </header>
            {isOpen ? <MobileNav closeMenu={CloseMenu} /> : ''}
        </>
    )
}