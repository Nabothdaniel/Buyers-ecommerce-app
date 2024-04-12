import React, { useState } from "react";
import Input from "./Input";
import { BiSearch, BiCart, BiHeart, BiCrosshair, BiUser, BiHome, BiStar } from 'react-icons/bi'
import { FaPerson, FaBars, FaCross } from 'react-icons/fa6'
import { Link } from 'react-router-dom';
import MobileNav from "./MobileNav";


export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [headerInput, setInputHeader] = useState('')

    const checkMenu = () => {
        setIsOpen(!isOpen);
    }

    const CloseMenu = () => {
        setIsOpen(false)
    }

    const searchChange = e =>{
        setInputHeader(e.target.value)
        
    }
    return (
        <>
            <header className="header sticky top:0 left-0 right-0 ">
                <div className="header-left">
                    <Input placeholder='search' inputType='text' value={headerInput} inputChange={searchChange} inputClass='outline-none'/>
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
            {isOpen ? <MobileNav closeMenu={CloseMenu}/> : ''}
        </>
    )
}