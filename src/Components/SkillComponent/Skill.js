import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Skill.css";

// import icons

import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { SiReact } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaUniversity } from "react-icons/fa";
import { RiPsychotherapyFill } from "react-icons/ri";

function Skill() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="skill-section" id="skills">
      <div className="container skill-container">
        <div className="skill-title-box">
          <h1 className="skill-title">My Skills</h1>
          <p className="skill-desc">My experience in development</p>
        </div>

        <div data-aos="fade-right" className="skill-btn-wrapper">
          <div className="skill-card">
            <div className="relative-box" id="relativeElement">
              <AiOutlineHtml5
                id="absoluteElement"
                className="position-icon"
                size={45}
              />
            </div>

            <div className="skill-card-title">
              <h3>HTML</h3>
              <p>
                Strong understanding of the language and its capabilities. I am
                comfortable creating and modifying web pages using HTML.
              </p>
            </div>
          </div>

          <div className="skill-card">
            <div className="relative-box" id="relativeElement">
              <TbBrandCss3
                id="absoluteElement"
                className="position-icon"
                size={45}
              />
            </div>

            <div className="skill-card-title">
              <h3>CSS</h3>
              <p>
                My skills and knowledge of CSS allow me to effectively style and
                layout web pages to create visually appealing and user-friendly
                interfaces.
              </p>
            </div>
          </div>

          <div className="skill-card">
            <div className="relative-box" id="relativeElement">
              <TbBrandJavascript
                id="absoluteElement"
                className="position-icon"
                size={45}
              />
            </div>

            <div className="skill-card-title">
              <h3>Javascript</h3>
              <p>
                I have a strong understanding about javascript. I am comfortable
                working with asynchronous code, handling events, and
                implementing complex logic in my projects.
              </p>
            </div>
          </div>

          <div className="skill-card">
            <div className="relative-box" id="relativeElement">
              <SiReact
                id="absoluteElement"
                className="position-icon"
                size={45}
              />
            </div>

            <div className="skill-card-title">
              <h3>React JS</h3>
              <p>
                I have a solid foundation in ReactJS and am comfortable using it
                to build web applications. I have a good understanding of the
                core principles of React, including the virtual DOM, JSX, and
                the React lifecycle.
              </p>
            </div>
          </div>

          <div className="skill-card">
            <div className="relative-box" id="relativeElement">
              <SiTypescript
                id="absoluteElement"
                className="position-icon"
                size={40}
              />
            </div>

            <div className="skill-card-title">
              <h3>TypeScript</h3>
              <p>
                I have a basic understanding of TypeScript and have used it to
                build a web application. I am familiar with the syntax and
                concepts of TypeScript, including types, interfaces, and
                classes.
              </p>
            </div>
          </div>

          <div className="skill-card">
            <div className="relative-box" id="relativeElement">
              <FaUniversity
                id="absoluteElement"
                className="position-icon"
                size={40}
              />
            </div>

            <div className="skill-card-title">
              <h3>University</h3>
              <p>
                I am currently a fourth-year student at Business and Technology
                University, studying Information Technologies. I have completed
                coursework in a variety of programming languages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
