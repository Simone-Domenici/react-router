import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/posts">All Posts</NavLink>
      </nav>
    </>
  );
};

export default Navbar;
