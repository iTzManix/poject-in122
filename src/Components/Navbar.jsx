import React from "react";
import { Link } from "react-router-dom";
import ManixL from "./images/manix-logo.jpg";
import GitL from "./images/git-logo.png";
import GitH from "./images/github-logo.jpg";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="nav-to-any">
        <nav className="nav-top">
          <ul>
            <li className="element-li">
              <Link className="links-nav-top" to="/">
                <img src={ManixL} alt="My Logo" />
              </Link>
            </li>
            <li className="element-li">
              <Link className="links-nav-top" to="/">
                Home
              </Link>
            </li>
            <li className="element-li">
              <Link className="links-nav-top" to="/biographies">
                Biographies
              </Link>
            </li>
            <li className="element-li links-nav-top">
              <a href="https://github.com/iTzManix">
                <img src={GitH} alt="" />
              </a>
            </li>
            <li className="element-li links-nav-top">
              <a href="https://github.com/iTzManix">
                <img src={GitL} alt="Repo" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
