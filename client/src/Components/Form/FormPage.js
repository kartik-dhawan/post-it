import React, { useState, useEffect } from "react";
import Header from "../Home/Header";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { BsArrowRight } from "react-icons/bs";
import Footer from "../Home/Footer";
import FileBase64 from "react-file-base64";
import { useSelector, useDispatch } from "react-redux";
import { postData, getData } from "../../redux/reducers/postsSlice";

const FormPage = () => {
  const dispatch = useDispatch();

  const [post, setPost] = useState({
    title: "",
    message: "",
    creator: "",
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
      <Header />
      <div className="formHead">Create your own post</div>
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
        <label htmlFor="message">
          Message
          <input
            type="text"
            id="message"
            required
            placeholder="Enter the message"
            value={post.message}
            onChange={(e) => {
              setPost({ ...post, message: e.target.value });
            }}
          />
        </label>
        <label htmlFor="creator">
          Creator
          <input
            type="text"
            id="creator"
            required
            placeholder="Enter the creator name"
            value={post.creator}
            onChange={(e) => {
              setPost({ ...post, creator: e.target.value });
            }}
          />
        </label>
        <label htmlFor="tags">
          Tags
          <input
            type="text"
            id="tagsSelect Image"
            required
            placeholder="Enter the tags separated by comma"
            value={post.tags}
            onChange={(e) => {
              setPost({ ...post, tags: e.target.value });
            }}
          />
        </label>
        <label htmlFor="image">
          Select Image
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
        <button
          type="submit"
          className="postButton"
          onClick={(e) => {
            e.preventDefault();
            console.log(post);
            dispatch(postData({ post }));
          }}
        >
          <BsArrowRight />
          <p>Create</p>
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default FormPage;
