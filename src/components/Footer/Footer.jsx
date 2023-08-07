import React from "react";
import "./Footer.css";
import images from "../../constants/images";
import footerLinks from "../../constants/Footerlinks";
const Footer = () => {
  return (
    // Footer section container
    <div className="app__footer footer-padding">
      <div className="footerlinks-conatainer">
        {/* Loop through the footerLinks array */}
        {footerLinks.map((footerLink, index) => (
          <div key={index} className="footerlink-wrapper">
            {/* Display the title for each footer section */}
            <h2 className="footer__link-headtext">{footerLink.title}</h2>
            <ul className="footer-links">
              {/* Loop through the links array for each footer section links */}
              {footerLink.links.map((link, index) => (
                <li key={index}>
                  {/* Display each link in the footer section */}
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container">
        <div className="text-align">
          <h1 className="title">Title Here</h1>
          <p className="para">Lorem Ipsum available, but the majority</p>
        </div>
        {/* Input field in the footer */}
        <div className="footer__input-container">
          <input type="text" className="footer-input" />
          <div className="paper__plane-icon">
            <img src={images.plane} alt="paper-plane" />
          </div>
        </div>
        <div className="social">
          {/* Social media icons */}
          <img
            className="social-icon"
            src={images.instagram}
            alt="instagram-icon"
          />
          <img
            className="social-icon"
            src={images.facebook}
            alt="facebook-icon"
          />
          <img
            className="social-icon"
            src={images.twitter}
            alt="twitter-icon"
          />
          <img src={images.whatsapp} alt="whatsapp-icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
