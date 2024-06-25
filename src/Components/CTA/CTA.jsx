import React from 'react'
import './CTA.css'
import { PiLineVerticalThin } from 'react-icons/pi'
import { IconContext } from "react-icons";

const CTA = () => {
  return (
    <div className="container">
      <div className="cta_container">
        <div className="cta_col">
          <img src="" alt="" />
          CTA
        </div>
        <svg width="2" height="150" viewBox="0 0 2 150" fill="black">
          <path
            className=""
            fill="var(--scheme_1--overline--default)"
            fillRule="nonzero"
            d="M 0 0 L 1 0 L 1 150 L 0 150 L 0 0 Z"
            strokeWidth="0px"
          ></path>
        </svg>
        <div className="cta_col cta_mid">
          <h1>CAM.ERA STUDIO</h1>
        </div>
        <svg width="2" height="150" viewBox="0 0 2 150" fill="black">
          <path
            className=""
            fill="var(--scheme_1--overline--default)"
            fillRule="nonzero"
            d="M 0 0 L 1 0 L 2 150 L 0 150 L 0 0 Z"
            strokeWidth="0px"
          ></path>
        </svg>
        <div className="cta_col">
          <button className="dark_btn">Book Us Now!</button>
        </div>
      </div>
      <div className="cta_row">
        <svg width="1100" height="1" viewBox="0 0 1100 1" fill="black">
          <path
            className=""
            fill="var(--scheme_1--overline--default)"
            fillRule="nonzero"
            d="M 0 0 L 1100 0 L 1100 1 L 0 1 L 0 0 Z"
            strokeWidth="0px"
          ></path>
        </svg>
      </div>
    </div>
  );
  }
  
  export default CTA