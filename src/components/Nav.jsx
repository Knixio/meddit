import React from 'react';

const Nav = () => {
  return (
    <nav>
      <ul className="nav-bar">
        <li className="element">HOME</li>
        <li className="element">NEWS</li>
        <li className="element">TRENDING</li>
        <li className="right-element">LOGIN/LOGOUT</li>
      </ul>
    </nav>
  );
};

export default Nav;

// router in here for each link to redirect user
