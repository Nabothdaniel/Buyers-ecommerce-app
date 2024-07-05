import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div  className="z-[999] absolute top-20 duration-150 right-[15rem] hidden md:block bg-white divide-y-100 rounded-lg shadow w-44 dark:gray-700">
    <ul className="p-2 text-sm text-gray-700 dark:text-gray-200">
        <li>
            <Link to='/userprofile' className="block px-4 py-2 text-black hover:bg-cyan-400 rounded-md dark:hover:text-white">Profile</
            Link>
        </li>
        <li>
            <Link to='/signup' className="block px-4 py-2 text-black hover:bg-cyan-400 rounded-md dark:hover:text-white">Login</Link>
        </li>
        <li>
            <Link to='/shop' className="block px-4 py-2 text-black hover:bg-cyan-400 rounded-md dark:hover:text-white">Shop</Link>
        </li>
    </ul>
    </div>
  )
}

export default Profile