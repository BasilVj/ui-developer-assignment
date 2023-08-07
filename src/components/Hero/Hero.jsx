import React from "react";
import images from "../../constants/images";
import "./Hero.css";
const Hero = () => {
  return (
    // Hero section container
    <div className="app__hero hero__padding">
      <div className="hero__content">
        {/* Main heading */}
        <h1 className="hero__headertext">
          First I wanted to be <br className="br" /> a veterinarian
        </h1>
        {/* Main heading */}
        <p className="hero__description">
          Lorem Ipsum available but the majority have
          suffered alteration in some form, by injected
          humour randomised words.
        </p>
        {/* Buttons container */}
        <div className="button-container">
          <button className="custom__button-1">Contact Us</button>

          <button className="custom__button-2">Our Service</button>
        </div>
      </div>
      {/* Image wrapper */}
      <div className="hero__img">
        <img src={images.dog1} alt="dog-image" />
      </div>
    </div>
  );
};

export default Hero;
