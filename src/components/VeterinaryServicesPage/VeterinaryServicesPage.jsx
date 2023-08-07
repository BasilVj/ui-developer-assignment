import React from "react";
import images from "../../constants/images";
import "./VeterinaryServicesPage.css";
const VeterinaryServicesPage = () => {
  return (
    // Veterinary Services section container
    <div className="app__veterinary veterinary__padding">
      <div className="wrapper">
        <div className="app__wrapper_info">
          {/* Main heading */}
          <h1 className="Veterinary__headertext">
            As a veterinarian and lover of animals.
          </h1>
          {/* Description */}
          <p className="veterinary__description">
            Lorem Ipsum available but the majority some  suffered alteration in some form, by humour randomised words.
          </p>
          <div className="button-container">
            <button className="custom__button">Our Service</button>
          </div>
        </div>
        <div className="app__wrapper_img">
          <img src={images.Veterinary} alt="dog treatment" style={{ zIndex: "3" }}/>
          {/* square box shape */}
          <div className="box"></div>
        </div>
      </div>
    </div>
  );
};

export default VeterinaryServicesPage;
