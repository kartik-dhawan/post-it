import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Footer = () => {
  const email = "dhawankartik7@gmail.com";

  return (
    <div className="footer">
      <div className="footerLinkedin">
        <BsArrowRight />
        <a href="/" className="linkedinLink">
          LinkedIn
        </a>
      </div>
      <div className="footerEmail">
        <BsArrowRight />
        <a href="/" className="email">
          Email
        </a>
      </div>
    </div>
  );
};

export default Footer;
