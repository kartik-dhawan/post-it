import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../reducers/postsSlice";
import updateReducer from "../reducers/updatePostSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    update: updateReducer,
  },
});

export default store;
