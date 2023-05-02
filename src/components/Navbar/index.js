import React, {useState, useEffect} from "react";
import "./index.scss";
import { HashLink as Link } from "react-router-hash-link";
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';


function Navbar() {

  const [clicked, setClicked] = useState(false)

  const click = () => {
    setClicked(current => !current) //changes to whatever it isnt at the time
  }

  useEffect( () => {
    console.log(clicked);
}, [clicked]);


  return (
    <nav className="nav">
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          SALMA
        </Link>
      </div>

      <div className="nav-links">
      <ul className={clicked ? "navbar active" : "navbar"}>
          <li className="nav-item">
            <Link classname="active" to="#about" smooth style={{ textDecoration: "none", color: "black" }}>
              ABOUT
            </Link>
          </li>

          <li className="nav-item">
            <Link to="#projects" smooth style={{ textDecoration: "none", color: "black" }}>
              PROJECTS
            </Link>
          </li>

          <li className="nav-item">
            <Link to="#company" smooth style={{ textDecoration: "none", color: "black" }}>
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

      {/* <div id="mobile">
          <i id="bar"
          onClick={click} 
          className={clicked ? faTimes : faBars}
          ></i>
        </div> */}



    </nav>
  );
}

export default Navbar;
