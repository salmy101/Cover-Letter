import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          SALMA
        </Link>
      </div>

      <div className="nav-links">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              ABOUT
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              PROJECTS
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              WHY YOU
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              WHY ME
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
