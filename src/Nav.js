import './App.css';
import React from 'react';
import  {Link }from 'react-router-dom';

function Nav() {
    const navStye={
        color:'black'
    }
  return (
    <nav>
        <h3 style={navStye} >
            Stock Pantry
        </h3>
        <ul className="navlinks">
            <Link style={navStye} to='/login'><li>Login</li></Link>
            <Link style={navStye} to='/signup'><li>SignUp</li></Link>
        </ul>
        </nav>
  );
}

export default Nav;