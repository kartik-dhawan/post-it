import axios from "axios";

const URL = "http://localhost:5001/posts";

export const fetchPosts = async () => {
  return axios.get(URL).then((res) => res.data);
};

export const createPosts = async ({ post }) => {
  return axios.post(URL, post).then((res) => res.data);
};
