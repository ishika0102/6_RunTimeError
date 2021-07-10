import './App.css';
import React from 'react';
import  {Link }from 'react-router-dom';

function Nav() {
    const navStye={
        color:'black'
    }
  return (
    <nav>
        <h3>
            Logo
        </h3>
        <button>
        <Link style={navStye} to='/'><div>Home page</div></Link></button>
        <ul className="navlinks">
            <button className="navbutton">
            <Link style={navStye} to='/sellerregister'><li>RegisterShopowner</li></Link>
            </button>
            <button className="navbutton">
            <Link style={navStye} to='/suplierregister'><li>RegistervSupplier</li></Link>
            </button> 
            <button className="navbutton">
            <Link style={navStye} to='/sellerlogin'><li>LoginsShopowner</li></Link>
            </button> 
            <button className="navbutton">
            <Link style={navStye} to='/suplierlogin'><li>LoginvSupplier</li></Link>
            </button>
        </ul>
        </nav>
  );
}

export default Nav;