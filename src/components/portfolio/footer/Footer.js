import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo-w.svg";
import "../styles/Portfolio.css";
import "./style/Footer.css";

const Footer = () => {

  return (
    <>
      <div id="footer">
        <div className="container-footer">
          <footer className="content-footer">
            <div className="logo-footer">
              <img src={Logo} alt="" />
            </div>
            <div className="links-footer">
              <h3>Personal</h3>
              <ul>
                <li>
                  <Link className="navbar-link" to="#about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="navbar-link" to="#skills">
                    Skills
                  </Link>
                </li>
              </ul>
            </div>
            <div className="links-footer">
              <h3>Professional</h3>
              <ul>
                <li>
                  <Link className="navbar-link" to="#services">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="navbar-link" to="#technology">
                    Technology
                  </Link>
                </li>
                <li>
                  <Link className="navbar-link" to="#projects">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link className="navbar-link" to="#education">
                    Education
                  </Link>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
