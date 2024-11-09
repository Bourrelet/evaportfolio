// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '..styles/Header.scss';

function Header() {
  return (
    <header className='header'>
      <div className='header__frame'>
        <p className='header__frame__txt'>Eva Boulanger</p>
        <nav className='header__frame__nav'>
          <Link to="/">Home</Link>
          <Link to="/work">My Work</Link>
          <Link to="/about">Eva</Link>
        </nav>
      </div>          
    </header>
  );
}

export default Header;
