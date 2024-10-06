import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/Camera_Studio_logo.svg";
import { IconContext } from "react-icons";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  
  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
    console.log(window.innerWidth);
    if (window.innerWidth <= 840) {
      setShowLogo(true);
    } else {
      setShowLogo(false);
    }
  }, []);
  return (
    <nav className={`navbar`}>
      <div className="navbar_container">
        <div
          // className={`${showLogo ? " navbar_items navbar__logo show_logo" : "hide_logo"}`}
          className=" navbar__logo"
          onClick={toggleMenu}
        >
          <a href="/" className="">
            <img src={logo} alt="mySvgImage" />
          </a>
        </div>
        <ul className={`navbar__list ${mobileMenu ? "" : "hide-mobile-menu"}`}>
          <li
            className="navbar_items "
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Services
            {isDropdownVisible && (
              <ul
                className="about_dropdown"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <li>
                  <Link to="/services/1">Fashion | Portrait</Link>
                </li>
                <li>
                  <Link to="/services/2">Commercial | Product </Link>
                </li>
                <li>
                  <Link to="/services/3">Wedding | Event</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="navbar_items">
            <a href="/gallery">Gallery</a>
          </li>
          {/* <li className={`navbar_items navbar__logo  ${
          showLogo ? "hide_logo" : "show_logo"
        }`}>
          <a href="/" className="">
            <img src={logo} alt="mySvgImage" />
          </a>
        </li> */}
          <li className="navbar_items">
            <a href="/crew">Our Crew</a>
          </li>
          <li className="navbar_items">
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
        {/* <div className="menu-icon hide_logo" onClick={toggleMenu}>
        <IconContext.Provider
          value={{
            style: { width: "2em", height: "2em" },
          }}
        >
          <CiMenuBurger />
        </IconContext.Provider>
      </div> */}
        {/* <img src={menu_icon} className="menu-icon" alt="" onClick={toggleMenu} /> */}
      </div>
    </nav>
  );
};

export default Navbar;
