import React, { useState, useEffect, useRef } from "react";
import "./index.scss";
import { HashLink as Link } from "react-router-hash-link";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav"); //when function is called we will add or remove this from the className
  };

  return (
    <header>
      <h3>
      <Link to="/#" style={{ textDecoration: "none", color: "black" }}>
        SALMA
       </Link>
      </h3>

      <nav ref={navRef}>
        <Link classname="active" to="#about" smooth style={{ textDecoration: "none", color: "black" }}>
          ABOUT
        </Link>
        <Link to="/#projects" smooth style={{ textDecoration: "none", color: "black" }}>
          PROJECTS
        </Link>
        <Link to="/#company" smooth style={{ textDecoration: "none", color: "black" }}> 
        WHY YOU
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          WHY ME
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          CONTACT
        </Link>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
