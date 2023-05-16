import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import "./index.scss";
import image from "../../assests/about.JPG";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const url = "https://github.com/salmy101/Resume";

  const projects = [
    {
      description:
        "Lorem ipsum dolor sit amet. Ut quam amet id eveniet tempora qu",
      image: image,
      link: url,
    },
    { description: "Lorem ipsum dolor sit amet. Ut quam amet id eveniet tempora qu", image: image, link: url },
    // { description: "Lorem ipsum dolor sit amet. Ut quam amet id eveniet tempora qu", image: image, link: url },
    // { description: "Lorem ipsum dolor sit amet. Ut quam amet id eveniet tempora qu", image: image, link: url }
  ];

  return (
    <>
      <div className="carousel">
        <div
          className="inner"
          style={{ transform: `translate:(-${activeIndex * 100})` }}
        >
          {projects.map((project) => {
            return (
              <div className="carousel-item">
                <p className="carousel-description">{project.description}</p>
                <img className="carousel-image" src={project.image}></img>
              </div>
            );
          })}
        </div>
      </div>

        <div className="carousel-buttons">
          <button className="button-arrow">
            <span class="material-symbols-outlined">arrow_back_ios</span>
          </button>
            {projects.map((project) => {
              return(
                <button className="indicator-buttons">
                <span class="material-symbols-outlined">radio_button_checked</span>
                </button>
      

              )
            })}
          <button className="button-arrow">
            <span class="material-symbols-outlined">arrow_forward_ios</span>
          </button>
        </div>
      ;
    </>
  );
}

export default Carousel;
