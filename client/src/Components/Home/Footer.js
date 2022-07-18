import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Footer = () => {
  const email = "dhawankartik7@gmail.com";

  return (
    <div className="homeFooter">
      <div className="footerLinkedin">
        <BsArrowRight />
        <a href="/" className="linkedinLink">
          LinkedIn
        </a>
      </div>
      <div className="footerEmail">
        <BsArrowRight />
        <p className="email">Email: {email}</p>
      </div>
    </div>
  );
};

export default Footer;
