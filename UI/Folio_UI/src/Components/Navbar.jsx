import React from 'react';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token=sessionStorage.getItem("token")||""

  const handleLogout = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    navigate('/')
  }

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
      <a href="/practice" className="nav-link">Practice</a>
    </li>
    <li className="nav-item">
      <a href="/courses" className="nav-link">Courses</a>
    </li>
    <li className="nav-item">
      <a href="/about" className="nav-link">About Us</a>
    </li>
    <li className="nav-item">
      <a href="/contact" className="nav-link">Contact</a>
    </li>

    {token ? (
    <li className="nav-item">
      <a href="/logout" className="nav-link" onClick={handleLogout}>Logout</a>
    </li>
    ) : (
      <>
        <li className="nav-item">
          <a href="/login" className="nav-link">Login</a>
        </li>
        <li className="nav-item">
          <a href="/signup" className="nav-link">Sign Up</a>
        </li>
      </>
    )}
    
  </ul>
</nav>

  );
}

export default Navbar;
