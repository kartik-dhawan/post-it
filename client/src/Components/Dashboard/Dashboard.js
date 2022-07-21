import React, { useEffect } from "react";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import { useSelector, useDispatch } from "react-redux";
import { BsArrowRight } from "react-icons/bs";
import { getData } from "../../redux/reducers/postsSlice";
import SongPost from "../Form/SongPost";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const cardsData = useSelector((state) => state.posts.posts);
  const cardsLoading = useSelector((state) => state.posts.isLoading);
  console.log(cardsLoading);

  return (
    <div className="dashboardPage">
      <Header />
      <section className="dashboardBody">
        <div className="dashboardHeading">
          Your very own customizable dashboard
        </div>
        <div className="cardLayout">
          <div className="cardsContainer">
            {cardsData.map((card) => {
              return <SongPost key={card._id} post={card} />;
            })}
          </div>
        </div>
        <button
          className="dashBoardBtn"
          onClick={() => {
            console.log(cardsData);
          }}
        >
          <BsArrowRight />
          <p>Show</p>
        </button>
      </section>
      <Footer />
    </div>
  );
};

export default Dashboard;
