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
            <Link style={navStye} to='/login'><li>Login page</li></Link>
            <Link style={navStye} to='/signup'><li>Signup page</li></Link>
        </ul>
        </nav>
  );
}

export default Nav;