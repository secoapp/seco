// src/components/Header.js
import React from 'react';
import './Header.css'; // Add your CSS for the header here

const Header = () => {
  return (
    <header className="header">
      <img src={require('../assets/seco.png')} alt="Logo" className="logo" />
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">Features</li>
          <li className="nav-item">Discover</li>
          <li className="nav-item">FAQ</li>
          <li className="nav-item">About</li>
        </ul>
      </nav>
      <button className="waitlist-button">Join Waitlist</button>
    </header>
  );
};

export default Header;
