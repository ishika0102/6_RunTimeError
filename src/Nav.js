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
        <Link  to='/'><div>Home page</div></Link></button>
        <ul className="navlinks">
            <button>
            <Link style={navStye} to='/sellerregister'><li>Register Shopowner</li></Link>
            </button>
            <button>
            <Link style={navStye} to='/suplierregister'><li>Registerv Supplier</li></Link>
            </button> 
            <button>
            <Link style={navStye} to='/sellerlogin'><li>Logins Shopowner</li></Link>
            </button> 
            <button>
            <Link style={navStye} to='/suplierlogin'><li>Loginv Supplier</li></Link>
            </button>
        </ul>
        </nav>
  );
}

export default Nav;