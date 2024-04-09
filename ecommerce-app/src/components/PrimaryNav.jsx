import React from 'react';
import { Link } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa6';

export const PrimaryNav = ()=>{
    const links = [
        {
            id:1,
            title:'Shop',
            Path:'/shop'
        },
        {
            id:2,
            title:'Catalogue',
            Path:'/catalogue'
        },
        {
            id:3,
            title:'New arrivals',
            Path:'/arrivals'
        },
        {
            id:4,
            title:'Contact',
            Path:'/contact'
        }
    ]
    return(
        <div className='primary-nav flex justify-center'>
            <ul className='flex primary-left'>
            <li>
                  <Link to="/" className='flex hover:text-cyan-200 duration-100'> 
                     Home 
                    <span><FaCaretDown/></span></Link>
                </li>
                <li>
                  <Link to='/about' className='flex hover:text-cyan-200 duration-100'> 
                     About 
                    <span><FaCaretDown/></span></Link>
                </li>
            </ul>
            
            <ul className='flex'>
              {
                links.map((link)=>(
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