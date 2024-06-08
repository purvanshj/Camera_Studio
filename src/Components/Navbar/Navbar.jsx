import React, { useEffect, useState } from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu-icon.png";
import logo from '../../assets/Camera_Studio_logo.svg';
import { IconContext } from "react-icons";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sticky,setSticky]=useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      window.scrollY>50 ?  setSticky(true) : setSticky(false)
    })
  },[])
  return (
    <nav className={`navbar  ${sticky ? 'dark-nav':''}`}>
      <ul className={`navbar__list ${mobileMenu ? "" : "hide-mobile-menu"}`}>
        <li className="navbar_items ">
          Services
          <ul className="about_dropdown">
            <li>
            <Link to="/services/1">Fashion | Portrait</Link></li>
            <li><Link to="/services/2">Commercial | Product </Link></li>
            <li><Link to="/services/3">Wedding | Event</Link></li>
          </ul>
        </li>
        <li className="navbar_items">
          <a href="/gallery">Gallery</a>
        </li>
        <li className="navbar_items navbar__logo">
        <a href="/" className="">
        <img src={logo} alt="mySvgImage" />
      </a>
        </li>
        <li className="navbar_items">
          <a href="/about">Info</a>
        </li>
        <li className="navbar_items">
          <a href="/contact">CONTACT</a>
        </li>
      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        <CiMenuBurger/>
      </div>
      {/* <img src={menu_icon} className="menu-icon" alt="" onClick={toggleMenu} /> */}
    </nav>
  );
};

export default Navbar;
