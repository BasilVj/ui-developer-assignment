import React from "react";
import "./Services.css";
import images from "../../constants/images";
const Services = () => {
  return (
    // Services section container
    <div className="app__services services__padding">
      <div>
        {/* Main heading */}
        <h1 className="services-headtext">Title Here</h1>
        {/* Description */}
        <p className="services-p">
          Lorem Ipsum available, <br className="br-tag" /> but the majority have
          <br id="hide-br" />
          suffered alteration in <br className="br-tag" /> some form.
        </p>
      </div>
      {/* Services container*/}
      <div className="services">
        {/* Service item - Veterinarian */}
        <div className="service">
          <div className="service-img">
            <img src={images.nurse1} alt="nurse1" />
          </div>
          <h1 className="service-name">Veterinarian</h1>
          <p className="service-decription">
            Lorem Ipsum available, but the <br className="br-tag" /> majority
            have suffered alteration <br className="br-tag" /> in some.
          </p>
        </div>
        {/* Service item - Vaccination Care */}
        <div className="service">
          <div className="service-img">
            <img src={images.nurse2} alt="nurse2" />
          </div>
          <h1 className="service-name">Vaccination Care</h1>
          <p className="service-decription">
            Lorem Ipsum available, but the <br className="br-tag" /> majority
            have suffered alteration <br className="br-tag" /> in some.
          </p>
        </div>
        {/* Service item - Dental Care */}
        <div className="service">
          <div className="service-img">
            <img src={images.nurse3} alt="nurse3" />
          </div>
          <h1 className="service-name">Dental Care</h1>
          <p className="service-decription">
            Lorem Ipsum available, but the <br className="br-tag" /> majority
            have suffered alteration <br className="br-tag" /> in some.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
