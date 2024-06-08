import React from 'react'
import './Contact.css'
import { AiTwotoneMail } from 'react-icons/ai';
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';
import { BsArrowRight } from 'react-icons/bs';
import { IconContext } from 'react-icons';

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7a796851-c919-4141-ba3c-27c55ebe553a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
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

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message  <AiTwotoneMail />
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos iusto
          dolores odio, laudantium quidem distinctio, aperiam obcaecati suscipit
          ab impedit hic, temporibus numquam ducimus incidunt amet delectus sit
          praesentium ex!
        </p>
        <ul className='contact_info'>
          <li className='contact_info_item'>
            <HiOutlineMail />
            <p>
            Contact@
              </p>
          </li>
          <li className='contact_info_item'>
            <FaPhone /> 
            <p>
            +91xxxxxxxxxx
              </p>
          </li>
          <li className='contact_info_item'>
            <FaLocationPin /> 
            <p>
            123 ABC road, XYZ, USA
            </p>
          </li>
        </ul>
      </div>
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
  );
}

export default Contact