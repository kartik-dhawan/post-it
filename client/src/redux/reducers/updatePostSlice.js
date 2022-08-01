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
    toggleIsUpdating: (state) => {
      state.isUpdating = false;
    },
  },
});

export const { getUpdatePost, toggleIsUpdating } = updatePostSlice.actions;
export default updatePostSlice.reducer;
