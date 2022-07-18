import React from "react";

const Header = () => {
  return (
    <div className="header">
      <a href="/" className="homeTitle">
        Post It
      </a>
      <a
        href="https://github.com/kartikd07"
        target="_blank"
        className="homeGithub"
        rel="noreferrer"
      >
        Github
      </a>
      <a href="/" className="homeAbout">
        About
      </a>
    </div>
  );
};

export default Header;
