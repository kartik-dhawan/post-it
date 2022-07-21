import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Section = () => {
  return (
    <div className="homeSection">
      <div className="sectionTitle">Posts</div>
      <div className="sectionBody">
        Airbnb Hosting, 2021 / Smart Workspace, 2020 / Dropbox eSignature, 2020
        / One Day's Wages, 2020 / The New Facebook, 2019 / Story Highlights,
        2019 / Marketplace Internationalization, 2018 / Archive
      </div>
      <div className="sectionLink">
        <div className="sectionArrow">
          <BsArrowRight />
        </div>
        <a href="/form" className="sectionButton">
          CREATE POST
        </a>
      </div>
      <div className="sectionLink">
        <div className="sectionArrow">
          <BsArrowRight />
        </div>
        <a href="/dashboard" className="sectionButton">
          VIEW GLOBAL GALLERY
        </a>
      </div>
    </div>
  );
};

export default Section;
