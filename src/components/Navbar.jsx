import React from 'react';
import logo from '../img/CC LOGO.png';
import  './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
        <img src={logo} alt="logo" />
        <ul className="nav-menu">
            
            <li><Link to="/SignIn">Signin</Link></li>
            <li><Link to="/SignUp">Signup</Link></li>
            <li><Link to="/Profile">Profile</Link></li>
            </ul>

        </div>
    





  )
}
