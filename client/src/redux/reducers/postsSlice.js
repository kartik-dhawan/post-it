import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPosts, createPosts } from "../../api/api";

export const getData = createAsyncThunk("data/getData", fetchPosts);

export const postData = createAsyncThunk("data/postData", createPosts);

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

    // DELETE
  },
});

export default postsSlice.reducer;
