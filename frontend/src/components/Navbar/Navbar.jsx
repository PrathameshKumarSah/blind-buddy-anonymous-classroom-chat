import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

function Navbar({ clicked, isClicked }) {
  const handleClicked = () => {
    isClicked(!clicked);
  };
  return (
    <div className="Nav">
      <ul className="NavbarWrapper">
        <li className="NavLogo">
          <Link className="Link" to="/">
            <img src={"./images/wets.png"}></img>
          </Link>
        </li>
        <li className="NavElements1">
          <NavLink className="Link" to="/">
            Home
          </NavLink>
        </li>
        <li className="NavElements4">
          <NavLink className="Link" to="/">
            Chat
          </NavLink>
        </li>
        <li className="NavElements2">
          <NavLink className="Link" to="/">
            About
          </NavLink>
        </li>
        <li className="NavElements3">
          <NavLink className="Link" to="/">
            Contact
          </NavLink>
        </li>
        <li className="NavButton">
          <NavLink className="Link" to="/login">
            Login/Signup
          </NavLink>
        </li>
      </ul>
      {!clicked ? (
        <FontAwesomeIcon
          icon={faBars}
          style={{ color: "#ffffff" }}
          onClick={handleClicked}
          className="Icon"
        />
      ) : (
        <FontAwesomeIcon
          icon={faXmark}
          style={{ color: "#ffffff" }}
          className="Icon"
          onClick={handleClicked}
        />
      )}
    </div>
  );
}

export default Navbar;
