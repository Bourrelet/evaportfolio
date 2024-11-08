// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Présentation</Link>
        <Link to="/realisations">Réalisations</Link>
      </nav>
    </header>
  );
}

export default Header;
