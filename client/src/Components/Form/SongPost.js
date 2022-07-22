import React from "react";
import { MdLibraryMusic } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SongPost = ({ post, update, del }) => {
  const navigate = useNavigate();

  return (
    <div className="songPost">
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
              console.log(post);
              console.log("update a record");
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
