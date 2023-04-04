import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Cart from "../../ecommerce/cart/Cart";
import Logo from "../../../assets/logo-w.svg";
import "./styles/Navbar.css";
import "../styles/Portfolio.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="navbar-container">
        <a href="/">
          <img className="logo" src={Logo} alt="ruyluques menu logo" />
        </a>
        <div className={`navbar ${showMenu ? "show" : ""} hide-menu`}>
          <ul>
            <li>
              <Link className="navbar-link" to="/" onClick={() => handleScrollTo("home")}>
                Home
              </Link>
            </li>
            <li>
              <Link className="navbar-link" to="#projects" onClick={() => handleScrollTo("projects")}>
                Projects
              </Link>
            </li>
            <li>
              <Link className="navbar-link" to="#experience" onClick={() => handleScrollTo("experience")}>
                Experience
              </Link>
            </li>
            <li>
              <Link className="navbar-link" to="#services" onClick={() => handleScrollTo("services")}>
                Services
              </Link>
            </li>
            <li className="menu-bar">
              <Link className="navbar-link" to="/ecommerce">
                Ecommerce
              </Link>
            </li>
          </ul>
        </div>
        <div className={`icon ${showMenu ? "hide" : ""} show-menu`}>
          <span onClick={handleToggleMenu}>
            <FontAwesomeIcon className="icon-menu" icon={faBars} size="2x" />
          </span>
        </div>
        <Cart className="icon-cart" />
      </nav>
    </>
  );
};

export default Navbar;