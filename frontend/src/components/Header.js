import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../assets/Home.png'
 // Ensure the CSS file is linked properly

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="landing-content">
        <Link to="/" className="left-align-link">
        <img src={Home} alt="Home" style={{ width: '20px', height: '20px' }} />
      </Link>
            <Link to="/search">Search Grounds </Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/predict-weather">Weather Predict</Link>
            <Link to="/book">Book a Ground</Link>
            </div>
        </nav>
    </header>
  );
};

export default Header;