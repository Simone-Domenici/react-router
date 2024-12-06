import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';

function Navbar() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
      </nav>
    </>
  );
};

export default Navbar;
