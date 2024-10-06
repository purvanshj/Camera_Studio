import React from "react";
import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import "./Footer.css";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    // <div className="footer container">
    //   <p>© 2024 Cam.era Studio. All rights reserved</p>
    //   <ul className="footer_bar__icons">
    //     <li className="footer_bar_icon">
    //       <FaFacebook />
    //     </li>
    //     <li className="footer_bar_icon">
    //       <FaInstagramSquare />
    //     </li>
    //     <li className="footer_bar_icon">
    //       <FaYoutube />
    //     </li>
    //   </ul>
    // </div>
    <div className="main-headr-copy-right-text">
      <div className="copy-right-wrapper">
        <div className="main-headar-right-button">
          <a
            href="https://www.facebook.com/theweddingfilmer/"
            target="_blank"
            className="main-headar-icons w-inline-block"
          ></a>
          <a
            href="https://www.instagram.com/theweddingfilmer/"
            target="_blank"
            className="main-headar-icons _2 w-inline-block"
          ></a>
          <a
            href="https://twitter.com/i/flow/login?redirect_after_login=%2FTWeddingFilmer"
            target="_blank"
            className="main-headar-icons _3 w-inline-block"
          ></a>
        </div>
        <div className="copy-right">
          <h4 className="copy-text-right">
            © 2024 — CAM.ERA.STUDIOS &nbsp;
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
