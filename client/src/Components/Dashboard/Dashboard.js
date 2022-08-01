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
  const isLoading = useSelector((state) => state.posts.isLoading);

  const updateDeleteBool = true;

  return (
    <div className="dashboardPage">
      <Header />
      <section className="dashboardBody">
        <div className="dashboardHeading">
          <p>Your very own customizable dashboard</p>
          <a href="/form" className="postButton">
            <BsArrowRight />
            <p>Create</p>
          </a>
        </div>
        <div className="cardLayout">
          {isLoading ? (
            <div className="loaderDashboard">
              <div className="ballLoader" />
              <div className="ballLoader" />
              <div className="ballLoader" />
            </div>
          ) : (
            <div className="cardsContainer">
              {cardsData.map((card) => {
                return (
                  <SongPost
                    key={card._id}
                    post={card}
                    update={updateDeleteBool}
                    del={updateDeleteBool}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Dashboard;
