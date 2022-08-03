import axios from "axios";

const URL = "http://localhost:5001/posts";

export const fetchPosts = async () => {
  return axios.get(URL).then((res) => res.data);
};

export const createPosts = async ({ post }) => {
  return axios.post(URL, post).then((res) => res.data);
};

export const updatePost = async ({ id, post }) => {
  return axios.patch(`${URL}/${id}`, post).then((res) => res.data);
};

export const deletePost = async ({ id }) => {
  return axios.delete(`${URL}/${id}`).then((res) => res.data);
};
