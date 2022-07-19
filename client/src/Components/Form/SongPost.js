import React from "react";
import { MdLibraryMusic } from "react-icons/md";

const SongPost = ({ post }) => {
  return post.title !== "" ? (
    <div className="songPost">
      <img src={`${post.file}`} className="postCover"></img>
      <div className="postTitle">{post.title}</div>
      <div className="postArtist">{post.artist}</div>
      <div className="postTags">{post.tags}</div>
      <div className="postCredits">
        <MdLibraryMusic className="postIcon" />
        <div className="postCreditText">Song-Post</div>
      </div>
    </div>
  ) : (
    <div className="songPost">
      <div className="postCover"></div>
      <div className="postTitle">Do I Wanna Know</div>
      <div className="postArtist">Arctic Monkeys</div>
      <div className="postTags">#pop #rocknroll</div>
      <div className="postCredits">
        <MdLibraryMusic className="postIcon" />
        <div className="postCreditText">Song-Post</div>
      </div>
    </div>
  );
};

export default SongPost;
