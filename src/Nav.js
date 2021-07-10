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
            <Link style={navStye} to='/sellerregister'><li>Registers page</li></Link>
            <Link style={navStye} to='/suplierregister'><li>Registerv page</li></Link>
            <Link style={navStye} to='/sellerlogin'><li>Logins page</li></Link>
            <Link style={navStye} to='/suplierlogin'><li>Loginv page</li></Link>
        </ul>
        </nav>
  );
}

export default Nav;