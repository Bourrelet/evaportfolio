// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">What have I done ?</Link>
        <Link to="/about">I am in phase with humanity</Link>
      </nav>
    </header>
  );
}

export default Header;
