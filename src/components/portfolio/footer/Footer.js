import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo-w.svg";
import "../styles/Portfolio.css";
import "./style/Footer.css";

const Footer = () => {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="container-footer">
        <footer className="content-footer">
          <div className="logo-footer">
            <a href="/">
              <img className="logo" src={Logo} alt="ruyluques footer logo" />
            </a>
          </div>
          <div className="links-footer">
            <h3>Personal</h3>
            <ul>
              <li>
                <Link
                  className="navbar-link"
                  to="#about"
                  onClick={() => handleScrollTo("about")}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="navbar-link"
                  to="#skills"
                  onClick={() => handleScrollTo("skills")}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  className="navbar-link"
                  to="#contact"
                  onClick={() => handleScrollTo("contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="links-footer">
            <h3>Professional</h3>
            <ul>
              <li>
                <Link
                  className="navbar-link"
                  to="#services"
                  onClick={() => handleScrollTo("services")}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="navbar-link"
                  to="#technology"
                  onClick={() => handleScrollTo("technology")}
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  className="navbar-link"
                  to="#projects"
                  onClick={() => handleScrollTo("projects")}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="navbar-link"
                  to="#education"
                  onClick={() => handleScrollTo("education")}
                >
                  Education
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
