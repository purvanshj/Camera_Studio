import React from "react";
import { PiLineVerticalThin } from "react-icons/pi";
import { IconContext } from "react-icons";
import "./Services.css";
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'

const Services = () => {
  return (
    <div>
      <div className="services_title">
        <h2>Services</h2>
      </div>
      <div className="services">
        <div className="service">
          <img src={program_1} alt="" />
          <div className="caption">
            <p>FASHION | PORTRAIT</p>
          </div>
        </div>
        <IconContext.Provider
          value={{
            className: "icon",
            style: { color: "white", width: "76px", height: "8em" },
          }}
        >
          <PiLineVerticalThin />
        </IconContext.Provider>
        <div className="service">
          <img src={program_2} alt="" />
          <div className="caption">
            <p>COMMERCIAL | PRODUCT</p>
          </div>
        </div>
        <IconContext.Provider
          value={{
            className: "icon",
            style: { color: "white", width: "76px", height: "8em" },
          }}
        >
          <PiLineVerticalThin />
        </IconContext.Provider>
        <div className="service">
          <img src={program_3} alt="" />
          <div className="caption">
            <p>WEDDING | EVENTS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
