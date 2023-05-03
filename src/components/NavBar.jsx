import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/component1">Component 1</Link>
        </li>
        <li>
          <Link to="/component2">Component 2</Link>
        </li>
        <li>
          <Link to="/component3">Component 3</Link>
        </li>
        <li>
          <Link to="/component4">Component 4</Link>
        </li>
        <li>
          <Link to="/component5">Component 5</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
