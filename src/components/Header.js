// Header.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [navbarBg, setNavbarBg] = useState('transparent');

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const changeColorPosition = 100; // Change color after scrolling down 100 pixels

    if (scrollPosition > changeColorPosition) {
      setNavbarBg('bg-theme-blue');
    } else {
      setNavbarBg('transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
      // Scroll to the top of the page when the component mounts
      window.scrollTo(0, 0);
  }, []);
  return (
    <header>
      <div className="container-fluid">
        {/* Navbar */}
        <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${navbarBg} px-3`}>
          <Link className="navbar-brand" to="/">
            <img src={require("../assets/images/logo.png")} className="img-fluid" alt="Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto px-5">
              <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/services' ? 'active' : ''}`}>
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/career' ? 'active' : ''}`}>
                <Link className="nav-link" to="/career">Career</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
