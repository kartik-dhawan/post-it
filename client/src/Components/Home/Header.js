import React from "react";

const Header = ({ viewPost }) => {
  return (
    <div className={`header ${viewPost ? "darkHeader" : ""}`}>
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
