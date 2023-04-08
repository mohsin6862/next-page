import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BeakerIcon, BoltIcon } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <nav className='flex items-center justify-between px-5 py-5 lg:px-12  bg-slate-300'>
           <Link to='/'>
            <div className='inline-flex items-center '>
           <BoltIcon className="h-10 w-10 text-blue-500" />
                <span className='tracking-wide ml-3 font-bold text-3xl text-gray-800'>NextPage</span>
            </div>
           </Link>

            <div className='space-x-8 font-bold text-xl'>
                <NavLink to='/' className={({isActive})=>(isActive? 'text-blue-600' : '')}>Home</NavLink>
                <NavLink to='/books' className={({isActive})=>(isActive? 'text-blue-600' : '')}>Book</NavLink>
                <NavLink to='/about' className={({isActive})=>(isActive? 'text-blue-600' : '')}>About</NavLink>
            </div>
        </nav>
    );
};

export default Header;