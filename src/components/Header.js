import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="sidebar">
      <nav>
        <NavLink to="/" activeClassName="is-active" exact={true}>
          About
        </NavLink>
        &nbsp;
        <NavLink to="/portfolio" activeClassName="is-active">
          Portfolio
        </NavLink>
        &nbsp;
        <NavLink to="/blog" activeClassName="is-active">
          Blog
        </NavLink>
        &nbsp;
        <NavLink to="/contact" activeClassName="is-active">
          Contact
        </NavLink>
      </nav>
    </div>
  </header>
);

export default Header;
