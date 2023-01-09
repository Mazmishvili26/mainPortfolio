import React, { useEffect, useState } from "react";
import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";

// import assets

import workIMG from "../../assets/work.jpg";
import resume from "../../assets/Resume.pdf";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [showMore, setShowMore] = useState(false);

  const aboutMe =
    "I am a front-end developer with experience building web applications using HTML, CSS, and JavaScript. I have a strong foundation in these core technologies, and have used them to create responsive, user-friendly interfaces. I have also gained expertise in ReactJS, a popular JavaScript library for building web applications, and have used it to build scalable, maintainable projects. In addition to my technical skills, I am constantly seeking to improve myself and acquire new skills. I am currently working on learning TypeScript, and am eager to put my skills to use in a professional setting. I am hardworking and dedicated, and am always striving to improve my craft.";

  return (
    <section id="about" className="about-section">
      <div className="about-container container">
        <div className="about-title">
          <h3>About Me</h3>
          <p>
            Front-end Developer <br></br> React JS
          </p>
        </div>

        {/*  */}

        <div data-aos="zoom-in-up" className="about-wrapper">
          <div className="about-left-side">
            <img src={workIMG} className="coding-img"></img>
          </div>

          <div className="about-right-side">
            <div className="about-me-desc">
              <h1>About Me</h1>
              <p>
                {showMore ? aboutMe : aboutMe.substring(0, 230) + "..."}{" "}
                {showMore ? (
                  <button
                    className="show-btn"
                    onClick={() => setShowMore(false)}
                  >
                    Show Less
                  </button>
                ) : (
                  <button
                    className="show-btn"
                    onClick={() => setShowMore(true)}
                  >
                    Show more
                  </button>
                )}
              </p>
            </div>

            {/*  */}

            <div className="about-list-wrapper">
              <div className="left-list">
                <ul className="list-ul">
                  <li>
                    <h5>Name</h5>
                    <p>Nikoloz Mazmishvili</p>
                  </li>

                  <li>
                    <h5>Email</h5>
                    <p>nick.mazmishvili@gmail.com</p>
                  </li>

                  <li>
                    <h5>Phone</h5>
                    <p>+995 593-20-99-77</p>
                  </li>
                </ul>
              </div>

              <div className="right-list">
                <ul className="list-ul">
                  <li>
                    <h5>Email</h5>
                    <p>nikoloz.mazmishvili.1@btu.edu.ge</p>
                  </li>

                  <li>
                    <h5>Languages</h5>
                    <p>HTML,CSS,Javascript,React JS</p>
                  </li>

                  <li>
                    <h5>Education</h5>
                    <p>Business & Technology University</p>
                  </li>
                </ul>
              </div>
            </div>

            {/*  */}

            <div className="download-cv-block">
              <a href={resume} download>
                <button className="download-btn">Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
