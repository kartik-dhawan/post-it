import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const updatePostSlice = createSlice({
  name: "updatePost",
  initialState: {
    postToUpdate: {
      title: "",
      artist: "",
      album: "",
      tags: "",
      file: "",
    },
    isUpdating: false,
  },
  reducers: {
    getUpdatePost: (state, action) => {
      state.postToUpdate = action.payload;
      state.isUpdating = true;
    },
  },
});

export const { getUpdatePost } = updatePostSlice.actions;
export default updatePostSlice.reducer;
