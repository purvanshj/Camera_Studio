import React, { useRef } from "react";
import Slider from "react-slick";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconContext } from "react-icons";
import { PiArrowLeftThin, PiArrowRightThin } from "react-icons/pi";


export default function Carousel({images}) {
    let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
    var settings = {
      className: "slider variable-width",
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      waitForAnimate: false,
      autoplay: true,
      autoplaySpeed: 10000,
      cssEase: "linear",
      variableWidth: true,
      centerMode: true,
      adaptiveHeight: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  return (
    <div className="slider_container">
      <Slider ref={slider => {
          sliderRef = slider;
        }} {...settings}>
        {images.map((image, index) => (
            <div className="slider_item" key={index}>
            <img key={index} src={image} alt={`Slide ${index}`} />
            </div>
        ))}
      </Slider>
      <div className="slide-button">
        <button className="icon" onClick={previous}>
        <IconContext.Provider
          value={{
            className: "icon",
            style: { color: "white", width: "76px", height: "2em" },
          }}
        >
          <PiArrowLeftThin />
        </IconContext.Provider>
        </button>
        <button className="icon" onClick={next}>
        <IconContext.Provider
          value={{
            className: "icon",
            style: { color: "white", width: "76px", height: "2em" },
          }}
        >
          <PiArrowRightThin />
        </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}