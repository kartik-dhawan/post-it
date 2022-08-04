import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Footer = ({ viewPost }) => {
  const email = "dhawankartik7@gmail.com";
  const navigate = useNavigate();

  return (
    <div className={`footer ${viewPost ? "darkFooter" : ""}`}>
      <div className="footerLinkedin">
        <BsArrowRight />
        <a
          href="https://www.linkedin.com/in/kartik-dhawan-13585b211/"
          target="_blank"
          rel="noreferrer"
          className="linkedinLink"
        >
          LinkedIn
        </a>
      </div>
      <div className="footerEmail">
        <BsArrowRight />
        <div
          className="email"
          style={{
            textDecoration: "underline",
          }}
          onClick={() => {
            navigate("/about");
            window.scrollBy(0, 500);
          }}
        >
          Email
        </div>
      </div>
    </div>
  );
};

export default Footer;
