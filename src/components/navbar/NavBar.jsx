import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css'

const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <NavLink to='/'>
        <span className="nav-repos">Home Page</span>
      </NavLink>
      <NavLink to='notfound'><span className="nav-repos">Page not found</span></NavLink>
    </nav>
  );
};

export default NavBar;
