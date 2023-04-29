import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            SALMA
          </Link>
        </li>
      </ul>

      <div className="nav-links">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              ABOUT
            </Link>
          </li>

          <li>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              PROJECTS
            </Link>
          </li>

          <li>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              WHY YOU
            </Link>
          </li>

          <li>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              WHY ME
            </Link>
          </li>

          <li>
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
