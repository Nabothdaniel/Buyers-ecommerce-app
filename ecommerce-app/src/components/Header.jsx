import React, { useState } from "react";
import Input from "./Input";
import { BiSearch, BiCart, BiHeart, BiCrosshair, BiUser, BiHome, BiStar } from 'react-icons/bi'
import { FaPerson, FaBars, FaCross } from 'react-icons/fa6'
import { Link } from 'react-router-dom';
import MobileNav from "./MobileNav";
import { Button } from "./Button";


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
    return (
        <>
            <header className=" flex justify-between  flex-row relative md:text-center py-4 m-0 px-10  top:0 left-0 right-0 ">
                <div className=" bg-white flex justify-center items-center gap-3 rounded-md px-4 py-3 md:px-2 md:py-3 ">
                    <Input placeHolder='search' inputType='text' value={headerInput} inputChange={searchChange} inputClass='outline-none w-[80%] hidden md:block' />
                    <BiSearch className="" />
                </div>
                <div className=" text-center">
                    <h1 className="text-3xl font-bold text-center"><Link to='/'>Buyers</Link></h1>
                </div>
                <div className="md:flex justify-between gap-20 items-center hidden">
                    <div className="flex justify-between gap-10">
                    <BiUser />
                    <BiHeart />
                    <Link to='cart'> <BiCart /></Link>
                    </div>
                    {/* call to action buttons */}
                    
                    <div className="hidden  md:flex justify-between   md:gap-5">
                        <Button path='/signup' value='Signup' btnClass='px-3 py-2 bg-cyan-400 text-white rounded-md font-bold' />
                        <Button path='/login' value='Login' btnClass='px-3 py-2 bg-cyan-400 text-white rounded-md font-bold' />
                    </div>
                </div>
                

                <div className="bar">
                    <FaBars className="w-5 h-5 md:hidden" onClick={checkMenu} />
                </div>
            </header>
            {isOpen ? <MobileNav closeMenu={CloseMenu} /> : ''}
        </>
    )
}