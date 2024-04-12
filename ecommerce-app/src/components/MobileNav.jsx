import React from 'react'
import { FaCross } from 'react-icons/fa6';
import {BiHome,BiStar,BiCart} from 'react-icons/bi'
import { Link } from 'react-router-dom';

const MobileNav = ({closeMenu}) => {
    return (
        <div className="navigation relative">
            <FaCross className="absolute top-2 right-4 my-3 " onClick={closeMenu} />

            <ul className="my-10">
                <li className="flex self-start my-2  hover:bg-cyan-300 hover:text-white duration-100 py-2 px-3 rounded-md"><Link to='/' className="inline-flex self-end items-center gap-2"> <BiHome /> Home</Link></li>
                <li className="my-3 flex self-start  hover:bg-cyan-300 hover:text-white duration-100 py-2 px-3 rounded-md"><Link to='/about' className="flex"> <BiStar />About</Link></li>
                <li className="my-3 flex self-start hover:bg-cyan-300 hover:text-white duration-100 py-2 px-3 rounded-md"><Link to='/cart' className="flex"> <BiCart /> Cart</Link></li>
            </ul>

        </div>
    )
}

export default MobileNav;
