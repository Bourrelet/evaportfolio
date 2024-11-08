// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      Eva Boulanger
      <nav>
        <Link to="/">Home</Link>
        <Link to="/work">My Work</Link>
        <Link to="/about">Eva</Link>
      </nav>
    </header>
  );
}

export default Header;
