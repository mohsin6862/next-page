import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex'>
            <div>
                <span>NEXT Page</span>
            </div>
            <div>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/books'>Book</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
        </nav>
    );
};

export default Header;