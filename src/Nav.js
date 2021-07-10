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
            <button>
            <Link style={navStye} to='/loginshopowner'><li>LoginS</li></Link>
            </button>
            <button>
            <Link style={navStye} to='/loginsupplier'><li>LoginV</li></Link>
            </button>
            <button>
            <Link style={navStye} to='/registershopowner'><li>RegisterS</li></Link>
            </button>
            <button>
            <Link style={navStye} to='/registersupplier'><li>RegisterV</li></Link>
            </button>
        </ul>
        </nav>
  );
}

export default Nav;