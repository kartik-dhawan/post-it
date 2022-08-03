import mongoose from "mongoose";
import SongPosts from "../Models/postNote.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await SongPosts.find();
    res.status(200).json(postMessages);
    console.log("got a get request");
    console.log(req.body);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const createPosts = async (req, res) => {
  const post = req.body;
  console.log("got a post request");
  console.log(req.body);
  const newPost = new SongPosts(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No posts with that id");
  try {
    const updatedPost = await SongPosts.findByIdAndUpdate(_id, post);
    res.json(updatedPost);
  } catch (error) {
    res.send(409).send(error.message, { new: true });
  }
};

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No posts with that id");

  try {
    await SongPosts.findByIdAndDelete(_id);
  } catch (error) {
    res.send(409).send(error.message);
  }
};
