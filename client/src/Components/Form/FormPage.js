import React from "react";
import Header from "../Home/Header";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { BsArrowRight } from "react-icons/bs";
import Footer from "../Home/Footer";

const FormPage = () => {
  return (
    <div className="formPage">
      <Header />
      <div className="formHead">Create your own post</div>
      <form className="postForm">
        <label for="title">
          Title
          <input
            type="text"
            id="title"
            required
            placeholder="Enter title of your post"
          />
        </label>
        <label for="message">
          Message
          <input
            type="text"
            id="message"
            required
            placeholder="Enter the message"
          />
        </label>
        <label for="creator">
          Creator
          <input
            type="text"
            id="creator"
            required
            placeholder="Enter the creator name"
          />
        </label>
        <label for="tags">
          Tags
          <input
            type="text"
            id="tagsSelect Image"
            required
            placeholder="Enter the tags separated by comma"
          />
        </label>
        <label for="image">
          Select Image
          <FileUploadIcon
            containerElement="label" // <-- Just add me!
            label="My Label"
          >
            <input type="file" />
          </FileUploadIcon>
        </label>
        <button type="submit" className="postButton">
          <BsArrowRight />
          <p>Create</p>
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default FormPage;
