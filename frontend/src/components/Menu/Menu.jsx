import React from 'react';
import "./Menu.css";
import { Link, NavLink } from "react-router-dom";

function Menu () {
  return (
    <div className='Navbars'>
        <ul className='NavbarWrappers'>
        <li className="NavbarElement">
            <NavLink className="Links" to="/home">
              Home
            </NavLink>
        </li>
        <li className="NavbarElement">
            <NavLink className="Links" to="/home">
              About
            </NavLink>
          </li>
          <li className="NavbarElement">
            <NavLink className="Links" to="/">
              Chat
            </NavLink>
          </li>
          <li className="NavbarElement">
            <NavLink className="Links" to="/home">
              Contact
            </NavLink>
          </li>
          <li className="NavbarElement">
            <NavLink className="Linkbtn" to="/login">
              Login/Sign-Up
            </NavLink>
          </li>
        </ul>
    </div>
  )
}

export default Menu;