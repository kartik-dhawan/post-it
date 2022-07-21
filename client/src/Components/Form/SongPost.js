import React from "react";
import { MdLibraryMusic } from "react-icons/md";

const SongPost = ({ post }) => {
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
    </div>
  );
};

export default SongPost;
