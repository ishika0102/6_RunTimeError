import './App.css';
import React from 'react';
import  {Link }from 'react-router-dom';

function Nav() {
    const navStye={
        color:'white'
    }
  return (
    <nav>
        <h3>
            Logo
        </h3>
        <ul className="navlinks">
            <Link style={navStye} to='/about'><li>Shop page</li></Link>
            <Link style={navStye} to='/shop'><li>Aboout page</li></Link>
        </ul>
        </nav>
  );
}

export default Nav;