import React from 'react';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
  <a href="/" className="navbar-brand">
    <img src="/path/to/logo.png" alt="Logo" /> BrandName
  </a>
  <button className="navbar-toggler" onClick={() => document.querySelector('.navbar-nav').classList.toggle('show')}>
    ☰
  </button>
  <ul className="navbar-nav">
    <li className="nav-item">
      <a href="/" className="nav-link">Home</a>
    </li>
    <li className="nav-item">
      <a href="/resume-templates" className="nav-link">Resume</a>
    </li>
    <li className="nav-item">
      <a href="/portfolio-templates" className="nav-link">Portfolio</a>
    </li>
    <li className="nav-item">
      <a href="/about" className="nav-link">About Us</a>
    </li>
    <li className="nav-item">
      <a href="/contact" className="nav-link">Contact</a>
    </li>
    <li className="nav-item">
      <a href="/login" className="nav-link">Login</a>
    </li>
    <li className="nav-item">
      <a href="/signup" className="nav-link">Sign Up</a>
    </li>
  </ul>
</nav>

  );
}

export default Navbar;
