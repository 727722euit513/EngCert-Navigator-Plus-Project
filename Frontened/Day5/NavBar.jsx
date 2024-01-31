// Navbar.jsx

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';


// Assume Brand and Hamburger are components you've defined
const Brand = () => <span></span>;
const Hamburger = () => <span>Hamburger</span>;

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Brand />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        {showNavbar && <Sidebar />}

        <div className={`nav-elements ${showNavbar ? 'active' : ''}`}>
          <ul>
            <li>
              <NavLink to="/about">AboutUs</NavLink>
            </li>
            <li>
              <NavLink to="/contact">ContactUs</NavLink>
            </li>
           
           <li>
            <NavLink to="/CourseCard">Course</NavLink>
           </li>
           <li>
            <NavLink to="/Enquiry">Enquiry</NavLink>
           </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
