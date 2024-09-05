import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>Want To Stay Informed About New Courses & Study?</h3>
        <input type="text" placeholder="Enter Mobile" />
        <button>Login Now</button>
      </div>
      <div className="footer-links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Career</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-address">
        <p>Our Address:</p>
        <p>Humara Ghar ka address, Delhi, India</p>
      </div>
    </footer>
  );
}

export default Footer;
