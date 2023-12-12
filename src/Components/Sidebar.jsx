import React from "react";
import "./Sidebar.css";
import { links } from "./data";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="div-sidebar">
      <nav className="nav">
        <div className="logo">M A N I X</div>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <Link className="links" to={link.enlace}>
                {link.text}
              </Link>
            </li>
          ))}
          <li>
            <Link className="links" to="/biographies">
              Go to Biographies
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
