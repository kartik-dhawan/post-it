import React from "react";
import Header from "../Home/Header";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <div className="aboutPage">
      <Header />
      <div className="aboutSection">
        <div className="aboutImage" />
        <div className="aboutBody">
          <div className="aboutName">Hi, I'm Kartik</div>
          <div className="aboutDetails">
            <p className="detailsPara">
              I work at 3Pillar Global Soft. Pvt. Ltd., India
            </p>
            <p className="detailsPara">
              I am a product designer that has previously worked on design
              systems, identity products, commerce tools, and API integrations.
              In my professional career, I have always gravitated towards the
              technology industry because of its ability to have a positive
              impact at scale. Through my experience, Ive discovered that I am
              most fulfilled collaborating with partners to develop elegant
              solutions to complex problems.
            </p>
            <p className="detailsPara" id="connect">
              Connect with me:
            </p>
            <div className="connectContainer">
              <div className="footerLinkedin">
                <BsArrowRight />
                <a
                  href="https://www.linkedin.com/in/kartik-dhawan-13585b211/"
                  target="_blank"
                  rel="noreferrer"
                  className="linkedinLink"
                >
                  LINKEDIN
                </a>
              </div>
              <div className="email">
                <BsArrowRight />
                <p>EMAIL: dhawankartik7@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
