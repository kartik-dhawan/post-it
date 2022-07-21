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
