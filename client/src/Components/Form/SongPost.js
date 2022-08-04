import React from "react";
import { MdLibraryMusic } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUpdatePost } from "../../redux/reducers/updatePostSlice";
import { deleteData } from "../../redux/reducers/postsSlice";

const SongPost = ({ post, update, del, viewPost }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const refresh = () => {
    window.location.reload(false);
  };

  return (
    <div className={viewPost ? "createdPostResponsiveSizes" : "songPost"}>
      <img
        alt="no file available"
        src={`${post.file}`}
        width="100%"
        height="100%"
        className="postCover"
      ></img>
      <div className="postTitle">{post.title}</div>
      <div className="postArtist">{post.artist}</div>
      <div className="postTags">{post.tags}</div>
      <div className="postCredits">
        <MdLibraryMusic className="postIcon" />
        <div className="postCreditText">Song-Post</div>
      </div>
      <div className="updateDeleteOptions">
        {update ? (
          <button
            className="updatePost"
            onClick={() => {
              navigate("/form");
              dispatch(getUpdatePost(post));
            }}
          >
            <AiTwotoneEdit />
          </button>
        ) : (
          ""
        )}
        {del ? (
          <button
            className="deletePost"
            onClick={() => {
              console.log("deleted a post");
              dispatch(deleteData({ id: post._id }));
              setTimeout(() => {
                refresh();
              }, 1000);
            }}
          >
            <MdDelete />
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SongPost;
