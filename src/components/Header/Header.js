import React from 'react';
import './Header.css'; 
import day from '../../day.svg'
const Header = () => {
  return (
    <header className="top-nav">
      <div className="logo">
        <img src={day} alt="Logo" />
        <span>Weather App</span>
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
