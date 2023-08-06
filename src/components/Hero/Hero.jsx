import React from "react";
import images from "../../constants/images";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="app__hero hero__padding">
      <div className="hero__content">
        <h1 className="hero__headertext">
          First I wanted to be <br className="br"/> a veterinarian
        </h1>
        <p className="hero__description">
          Lorem Ipsum available but the majority  have <br className="br"/> suffered alteration in
          some form, by  injected <br className="br"/> humour randomised words.
        </p>
        <div className="button-container">
          <button className="custom__button-1">Contact Us</button>
          <button className="custom__button-2">Our Service</button>
        </div>
      </div>
      <div className="hero__img">
        <img src={images.dog1} alt="dog-image" />
      </div>
    </div>
  );
};

export default Hero;
