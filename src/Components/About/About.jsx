import React from 'react'
import './About.css'
// import about_img from '../../assets/about.png'
// import play_icon from '../../assets/play-icon.png'

const About = ({data}) => {
    console.log("in about",data);
  return (
    <>
      {Array.isArray(data.about) && data.about.map((_about, index) => (
        <div className={_about.divClass!=undefined?_about.divClass: data.class} key={index} style={{background:_about.color}}>
            <div className={_about.image_Container_Class}>
              <img src={_about.img} alt="" className="about-img" />
            </div>
            <div className={_about.class}>
              <h2>{_about.title}</h2>
              <p>{_about.para1}</p>
              <p>{_about.para2}</p>
              <p>{_about.para3}</p>
            </div>
          </div>
      ))}
    </>
  );
}

export default About