import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  artist: String,
  album: String,
  tags: String,
  file: [String],
  likes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const SongPosts = mongoose.model("SongPosts", postSchema);
export default SongPosts;
