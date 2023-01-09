import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";

// import icons

import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { AiTwotonePhone } from "react-icons/ai";

function Contact({ setSuccessMSG, setLoading }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // send email

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_gn51e0r",
        "template_ba0kp9e",
        form.current,
        "hCJ6MU5aBFbb94kCD"
      )
      .then(
        (result) => {
          setLoading(false);
          setSuccessMSG(true);
          console.log(result);
        },
        (error) => {
          setLoading(false);
          alert("წარუმატებელი მცდელობა, სცადეთ ხელახლა" + error);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="container contact-container"
      >
        <div className="contact-title">
          <h1>Contact</h1>
          <p>I want to Hear from You</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-left">
            <div className="contact-icon-wrap">
              <div className="icon">
                <MdLocationOn size={30} />
              </div>
              <div className="icon-info">
                <h3>Address</h3>
                <p>20, Somewhere world</p>
              </div>
            </div>

            <div className="contact-icon-wrap">
              <div className="icon">
                <MdEmail size={30} />
              </div>
              <div className="icon-info">
                <h3>Email</h3>
                <p>20, Somewhere world</p>
              </div>
            </div>

            <div className="contact-icon-wrap">
              <div className="icon">
                <AiTwotonePhone size={30} />
              </div>
              <div className="icon-info">
                <h3>Phone</h3>
                <p>20, Somewhere world</p>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <div className="form-container">
              <form ref={form} onSubmit={sendEmail}>
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                  ></input>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  ></input>
                </div>

                <div className="input-wrapper">
                  <input
                    type="tel"
                    name="telephone"
                    placeholder="Your Phone"
                    required
                  ></input>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  ></input>
                </div>

                <textarea placeholder="Write your message here" name="msg" />

                <div className="submit-container">
                  <button className="submit-btn" type="submit">
                    Submit Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
