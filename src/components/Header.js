import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';

const Header = () => (
  <header>
    <h1>Portfolio header</h1>
    <nav>
      <NavLink to="/" activeClassName="is-active" exact={true}>
        About
      </NavLink>

      <NavLink to="/portfolio" activeClassName="is-active">
        Portfolio
      </NavLink>
      
      <NavLink to="/blog" activeClassName="is-active">
        Blog
      </NavLink>
        
      <NavLink to="/contact" activeClassName="is-active">
        Contact
      </NavLink>
    </nav>
  </header>
);

export default Header;