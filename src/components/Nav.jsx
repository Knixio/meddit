import React from 'react';
import { Link } from '@reach/router';

const Nav = () => {
  return (
    <nav>
      <ul className="nav-bar">
        <li>
          <Link className="nav-element" to="/articles">
            HOME
          </Link>
        </li>
        <li>
          <Link className="nav-element" to="/topics">
            TOPICS
          </Link>
        </li>
        <li className="right-element">LOGIN/LOGOUT</li>
      </ul>
    </nav>
  );
};

export default Nav;

// router in here for each link to redirect user
