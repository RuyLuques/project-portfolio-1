import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Cart from "../../ecommerce/cart/Cart";
import Logo from "../../../assets/logo-w.svg"
import "./styles/Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [item, setItem] = useState(null);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
        <>
        <nav className="navbar-container">
          <a href="/">
          <img className="logo" src={Logo} alt="" />
        </a>
        <div className={`navbar ${showMenu ? "show" : ""} hide-menu`}>
          <ul>
            <li>
              <Link className="navbar-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="navbar-link" to="#projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="navbar-link" to="#experience">
                Experience
              </Link>
            </li>
            <li>
              <Link className="navbar-link" to="/services">
                Services
              </Link>
            </li>
          </ul>
        </div>
        <div className={`icon ${showMenu ? "hide" : ""} show-menu`}>
          <span onClick={handleToggleMenu}>
            <FontAwesomeIcon className="icon-menu" icon={faBars} size="2x" />
          </span>
        </div>
        <Cart className="icon-cart"/>
        </nav>
        </>
  );
};

export default Navbar;
