import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPosts, createPosts, updatePost, deletePost } from "../../api/api";

export const getData = createAsyncThunk("data/getData", fetchPosts);

export const postData = createAsyncThunk("data/postData", createPosts);

export const updateData = createAsyncThunk("data/updateData", updatePost);

export const deleteData = createAsyncThunk("data/deleteData", deletePost);

const postsSlice = createSlice({
  name: "fetch-posts",
  initialState: {
    posts: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    // GET
    [getData.pending]: (state) => {
      state.isLoading = true;
    },
    [getData.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    },
    [getData.rejected]: (state) => {
      state.isLoading = false;
    },

    // POST
    [postData.pending]: (state) => {
      state.isLoading = true;
    },
    [postData.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    },
    [postData.rejected]: (state) => {
      state.isLoading = false;
    },

    // UPDATE
    [updateData.pending]: (state) => {
      state.isLoading = true;
    },
    [updateData.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    },
    [updateData.rejected]: (state) => {
      state.isLoading = false;
    },
  },

  // DELETE
  [deleteData.pending]: (state) => {
    state.isLoading = true;
  },
  [deleteData.fulfilled]: (state, action) => {
    state.posts = action.payload;
    state.isLoading = false;
  },
  [deleteData.rejected]: (state) => {
    state.isLoading = false;
  },
});

export default postsSlice.reducer;
