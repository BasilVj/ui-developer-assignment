import React from "react";
import { useState } from "react";
import images from "../../constants/images";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import "./Navbar.css";
const Navbar = () => {
  // State to toggle the small screen menu
  const [toggleMenu, setToggleMenu] = useState(false);

  // Function to handle the menu toggle
  const handleMenuToggle = () => {
    setToggleMenu((prev) => !prev);

    // Toggle body scrolling
    if (!toggleMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  // Function to handle link clicks
  const handleLinkClick = () => {
    setToggleMenu(false);
    document.body.style.overflow = "auto";
  };

  return (
    <nav className="app__navbar navbar__padding">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li>
          <a href="#home" onClick={handleLinkClick}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={handleLinkClick}>
            About
          </a>
        </li>
        <li>
          <a href="#menu" onClick={handleLinkClick}>
            Service
          </a>
        </li>
        <li>
          <a href="#awards" onClick={handleLinkClick}>
            Contact
          </a>
        </li>
      </ul>
      <div className="search-bar">
        <input type="text" className="search" placeholder="Search..." />
        <div className="search-icon">
          <img src={images.searchIcon} alt="search-icon" />
        </div>
      </div>
      <div className="app__navbar-smallscreen">
        {toggleMenu ? (
          // Close menu icon when the menu is toggled
          <MdClose color="white" fontSize={34} onClick={handleMenuToggle} />
        ) : (
          // Hamburger menu icon when the menu is not toggled
          <GiHamburgerMenu
            color="white"
            fontSize={30}
            onClick={handleMenuToggle}
          />
        )}
        {toggleMenu && (
          // Small screen menu when the toggleMenu state is true
          <div className="navbar__links-container__smallscreen app__navbar-smallscreen_overlay">
            <ul className="navbar__links-smallscreen" onClick={handleLinkClick}>
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
