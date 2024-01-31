// Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="navbar">
        <Link to="/LoginAdmin" className="nav-button">
          Admin Login
          {/* Admin login form components go here */}
        </Link>

        <Link to="/Login" className="nav-button">
          User Login
          {/* User login form components go here */}
        </Link>
      </div>
    </div>
  );
};

export default Home;
