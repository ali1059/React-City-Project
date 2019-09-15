import React from 'react';
import './navbar.scss';
import logo from '../../logo.svg'
export default function Navbar(){
  return <nav className="navbar">
            <img src={logo} alt='City Tours' />
            <ul className="nav-links">
              <li> <a href="/" className="nav-link"> Home </a> </li>
              <li><a href="/" className="nav-link"> About </a></li>
              <li><a href="/" className="nav-link active1"> Tours </a></li>
            </ul>
         </nav>;
}
