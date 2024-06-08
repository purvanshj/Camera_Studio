import React from 'react'
import './CTA.css'
import { PiLineVerticalThin } from 'react-icons/pi'
import { IconContext } from "react-icons";

const CTA = () => {
  return (
    <div className='cta_container'>
        <div className="cta_col">
            <img src="" alt="" />
            CTA
        </div>
        <IconContext.Provider
          value={{
            className: "icon",
            style: { width: "76px", height: "8em" },
          }}
        >
          <PiLineVerticalThin />
        </IconContext.Provider>
        <div className="cta_col">CTA</div>
        <IconContext.Provider
          value={{
            className: "icon",
            style: { width: "76px", height: "8em" },
          }}
        >
          <PiLineVerticalThin />
        </IconContext.Provider>
        <div className="cta_col"> 
        <button className="dark_btn">
            Book Us Now!
          </button></div>
    </div>
  )
}

export default CTA