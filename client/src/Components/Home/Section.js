import React, { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../redux/reducers/postsSlice";

const Section = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  let cardsData = useSelector((state) => state.posts.posts);

  const homeSectionData = cardsData.slice(0, 8).map((card) => {
    return [card.title, card.createdAt.slice(0, 10)].join(", ");
  });

  return (
    <div className="homeSection">
      <div className="sectionTitle">Posts</div>
      <div className="sectionBody">{homeSectionData.join(" / ")}</div>
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
