import React, { useEffect, useState } from "react";
import "./Contact.css";
import { BsArrowRight } from "react-icons/bs";
import { IconContext } from "react-icons";
import Carousel from "../Carousel/Carousel";
import { AiTwotoneMail } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { CgLayoutGrid } from "react-icons/cg";
import img1 from "../../assets/Commercial/_KVB8886.jpg";
import img2 from "../../assets/Commercial/_KVB8889.jpg";
import img3 from "../../assets/Commercial/_KVB8891.jpg";
import img4 from "../../assets/Commercial/_KVB8911.jpg";

const Contact = (props) => {
  const [result, setResult] = useState("");
  const [isCarousel, setIsCarousel] = useState(false);
  const images = [img1, img2, img3, img4, img1, img2, img3, img4];

  
  
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    
    formData.append("access_key", "7a796851-c919-4141-ba3c-27c55ebe553a");
    
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    
    const data = await response.json();
    
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  useEffect(()=>{
    const url = window.location.href;
    if(url.includes("contact")){
      setIsCarousel(true);
    }
  },[isCarousel]);

  return (
    <>
      <div className="contact">
        {isCarousel ?(
          <div className="contact-col">
            <Carousel images={images} scale={[0.85,0.85]} />
          </div>
        ): (
          <div className="contact-col">
            <h3>
              Send us a message <AiTwotoneMail />
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
              iusto dolores odio, laudantium quidem distinctio, aperiam
              obcaecati suscipit ab impedit hic, temporibus numquam ducimus
              incidunt amet delectus sit praesentium ex!
            </p>
            <ul className="contact_info">
              <li className="contact_info_item">
                <HiOutlineMail />
                <p>Contact@</p>
              </li>
              <li className="contact_info_item">
                <FaPhone />
                <p>+91xxxxxxxxxx</p>
              </li>
              <li className="contact_info_item">
                <FaLocationPin />
                <p>123 ABC road, XYZ, USA</p>
              </li>
            </ul>
          </div>
        )}

        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <div className="col_left">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your mobile number"
                required
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                required
              />
            </div>
            <div className="col_right">
              <label htmlFor="type">Type of Shoot:</label>
              <select name="type">
                <option value="wedding">Wedding</option>
                <option value="commercial">Commercial</option>
                <option value="fashion">Fashion</option>
              </select>
              <label htmlFor="location">Location</label>
              <input
                type="text"
                name="location"
                placeholder="Enter Location"
                required
              />
              <label htmlFor="date">Date</label>
              <input type="date" name="date" placeholder="" required />
            </div>
            <label>Requirements</label>
            <textarea
              name="message"
              rows={6}
              placeholder="Please let us know specific type of shoot e.g. number of products, photographers, cinematographers, any references etc."
            />
            <button type="submit" className="btn">
              Let's Chat
              <IconContext.Provider
                value={{
                  style: { color: "black", width: "76px", height: "2em" },
                }}
              >
                <BsArrowRight />
              </IconContext.Provider>
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
      <div className="addres-email">
        <div className="a-e-wrapper">
          <div className="phone">
            <h1 className="phone">Phone</h1>
            <a href="tel:+919819863229" className="call w-inline-block">
              <h1 className="phone _1">+91 98198 63229</h1>
            </a>
          </div>
          <div className="addresss">
            <h1 className="phone">The Studio</h1>
            <h1 className="phone _1">
              Astha Bunglow no.30, JP Rd, Aram Nagar Part 2, Versova, Andheri
              West, Mumbai, Maharashtra 400061
              <a
                href="https://maps.app.goo.gl/iEKaW236u4F5zr1m6"
                target="_blank"
                className="home-link-in-logo"
              >
                (Get directions)
              </a>
            </h1>
          </div>
          <div className="email-id">
            <h1 className="phone">Email</h1>
            <a
              href="mailto:info@theweddingfilmer.co.in?subject=Thankyou%20For%20Emailing"
              className="email w-inline-block"
            >
              <h1 className="phone _1">info@theweddingfilmer.co.in</h1>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
