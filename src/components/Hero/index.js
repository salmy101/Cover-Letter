import React from "react";
import Turkey from "../../assests/about.JPG"
import './index.scss'
import { HashLink as Link } from "react-router-hash-link";


function Hero() {
  return (
    <>
      <div className="container hero-page" id="hero">

        <div className="text-zone">
          <h1>Hello!</h1>
          <br></br>
          <p>Welcome to my cover letter for COMPANY. IN this cover letter I hope that you can get an
            understanding of who i am, my experiences, and why id love to work with you. If ive peaked your interetd plz continue
          </p>
          <button>
          <Link to="/#about" smooth style={{ textDecoration: "none", color: "black" }}>
            Get to Know Me
          </Link>
          </button>
        </div>
        
            <div className="image-zone">
              <img src={Turkey} alt="Turkey" />
            </div>

      </div>
    </>
  );
}

export default Hero;




