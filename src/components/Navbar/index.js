import React, {useState, useEffect} from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
        <ul className={clicked ? "#navbar active" : "navbar"}>
          <li className="nav-item">
            <Link classname="active" to="/" style={{ textDecoration: "none", color: "black" }}>
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

      <div id="mobile">
          <i id="bar"
          onClick={click} 
          className={clicked ? "fas fa-times" : 
          "fas fa-bars"}
          ></i>
        </div>



    </nav>
  );
}

export default Navbar;
