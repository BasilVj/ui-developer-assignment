import React from "react";
import { useState } from "react";
import images from "../../constants/images";

import "./Navbar.css";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar navbar__padding">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Service</a>
        </li>
        <li>
          <a href="#awards">Contact</a>
        </li>
      </ul>
      <div className="flex">
        <input type="text" className="search" placeholder="Search..." />
        <div className="search-icon">
          <img src={images.searchIcon} alt="search-icon" />
        </div>
      </div>
      <div className="app__navbar-smallscreen">
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#awards">Awards</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
