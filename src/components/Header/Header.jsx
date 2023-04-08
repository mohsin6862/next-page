import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {  Bars3BottomRightIcon, BoltIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <nav className='flex items-center justify-between px-5 py-5 lg:px-12  bg-slate-300 sm-max-w-xl l=md-max-w-full lg:max-w-screen-2xl mx-auto'>
           <Link to='/'>
            <div className='inline-flex items-center '>
           <BoltIcon className="h-10 w-10 text-blue-500" />
                <span className='tracking-wide ml-3 font-bold text-3xl text-gray-800'>nextPage</span>
            </div>
           </Link>

            <div className=' '>
               <ul className='space-x-8 font-bold text-xl hidden lg:flex'>
               <NavLink to='/' className={({isActive})=>(isActive? 'text-blue-600' : '')}>Home</NavLink>
                <NavLink to='/books' className={({isActive})=>(isActive? 'text-blue-600' : '')}>Book</NavLink>
                <NavLink to='/about' className={({isActive})=>(isActive? 'text-blue-600' : '')}>About</NavLink>
               </ul>
            </div>


            {/* Mobile Navbar Section */}
        <div className='lg:hidden'>
          {/* Dropdown Open Button */}
          <button
            aria-label='Open Menu'
            title='Open Menu'
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className='w-5 text-gray-600' />
          </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Logo & Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                      <BoltIcon className='h-6 w-6 text-blue-500' />
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        nextPage
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/' className='default'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/books'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Books
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/about'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      
        </nav>
    );
};

export default Header;