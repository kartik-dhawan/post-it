/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useCallback, useRef } from "react";
import Header from "../Home/Header";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { BsArrowRight } from "react-icons/bs";
import Footer from "../Home/Footer";
import SongPost from "./SongPost";
import FileBase64 from "react-file-base64";
import { useSelector, useDispatch } from "react-redux";
import { postData, getData } from "../../redux/reducers/postsSlice";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import { HiDownload } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const FormPage = () => {
  const dispatch = useDispatch();

  const [viewPost, setViewPost] = useState(false);

  const [post, setPost] = useState({
    title: "",
    artist: "",
    album: "",
    tags: "",
    file: "",
  });

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const data = useSelector((state) => state.posts.posts);
  console.log(data);

  return (
    <div className="formPage">
      <Header viewPost={viewPost} />
      {viewPost ? (
        <div className="createdPostPage">
          <div className="songPostContainer">
            <SongPost post={post} />
          </div>
          <div className="cardActionBtns">
            <a
              className="downloadCardBtn"
              onClick={() => {
                htmlToImage
                  .toPng(document.querySelector(".songPostContainer"))
                  .then((dataUrl) => {
                    const link = document.createElement("a");
                    link.download = "songcard.png";
                    link.href = dataUrl;
                    link.click();
                  });
              }}
            >
              <HiDownload />
            </a>
            <a
              className="closeCardBtn"
              onClick={() => {
                setViewPost(!viewPost);
              }}
            >
              <IoClose />
            </a>
          </div>
        </div>
      ) : (
        <>
          <div className="formHead">Create your own song-post</div>
          <form className="postForm" noValidate>
            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                required
                placeholder="Enter title of your post"
                value={post.title}
                onChange={(e) => {
                  setPost({ ...post, title: e.target.value });
                }}
              />
            </label>
            <label htmlFor="artist">
              Artist
              <input
                type="text"
                id="artist"
                required
                placeholder="Enter the artist's name"
                value={post.artist}
                onChange={(e) => {
                  setPost({ ...post, artist: e.target.value });
                }}
              />
            </label>
            <label htmlFor="album">
              Album
              <input
                type="text"
                id="album"
                placeholder="Enter the album name"
                value={post.album}
                onChange={(e) => {
                  setPost({ ...post, album: e.target.value });
                }}
              />
            </label>
            <label htmlFor="tags">
              Tags
              <input
                type="text"
                id="tags"
                placeholder="Enter the tags separated by comma"
                value={post.tags}
                onChange={(e) => {
                  setPost({ ...post, tags: e.target.value });
                }}
              />
            </label>
            <label htmlFor="image">
              Select Cover
              <FileUploadIcon
                onClick={() => {
                  document.getElementById("image").click();
                }}
              />
              <FileBase64
                multiple={false}
                onDone={({ base64 }) => {
                  setPost({ ...post, file: base64 });
                }}
                accept="image/png, image/jpeg"
              >
                <input></input>
              </FileBase64>
            </label>
            {post.title == "" || post.artist == "" || post.file == "" ? (
              <button
                type="submit"
                className="postButton"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(post);
                  dispatch(postData({ post }));
                  setViewPost(!viewPost);
                }}
                disabled
              >
                <BsArrowRight />
                <p>Create</p>
              </button>
            ) : (
              <button
                type="submit"
                className="postButton"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(post);
                  dispatch(postData({ post }));
                  setViewPost(!viewPost);
                }}
              >
                <BsArrowRight />
                <p>Create</p>
              </button>
            )}

            <button
              className="postButton"
              onClick={(e) => {
                console.log(post);
                e.preventDefault();
                setViewPost(!viewPost);
              }}
            >
              <BsArrowRight />
              <p>Open</p>
            </button>
          </form>
        </>
      )}
      <Footer viewPost={viewPost} />
    </div>
  );
};

export default FormPage;
