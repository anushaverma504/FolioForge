// src/components/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NotFoundPage.css'; // Optional: for custom styling

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default NotFoundPage;
