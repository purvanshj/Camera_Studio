import React from "react";
import { FaFacebook,FaInstagramSquare,FaYoutube } from "react-icons/fa";
import "./Footer.css";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <div className="footer container">
      <p>© 2024 Cam.era Studio. All rights reserved</p>
      <ul className="footer_bar__icons">
        <li className="footer_bar_icon">
          <FaFacebook />
        </li>
        <li className="footer_bar_icon">
          <FaInstagramSquare />
        </li>
        <li className="footer_bar_icon">
          <FaYoutube />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
