import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./authSlice";
import feedReducer from "./feedSlice";
import postReducer from "./postSlice";
import bookmarksReducer from "./bookmarkSlice";
import likesReducer from "./likeSlice";
import exploreFeedReducer from "./exploreFeedSlice";

const localState = JSON.parse(localStorage.getItem("state"));
const preloadedState = {
  ...localState,
  feed: { content: [], status: "idle", skip: 0, hasMore: -1 },
  bookmarks: { content: {}, status: "idle" },
  likes: { content: {}, status: "idle" },
  post: { status: "idle" },
  exploreFeed: { content: [], status: "idle", skip: 0, hasMore: -1 },
};

const combinedReducer = combineReducers({
  auth: userReducer,
  feed: feedReducer,
  post: postReducer,
  bookmarks: bookmarksReducer,
  likes: likesReducer,
  exploreFeed: exploreFeedReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "auth/logout") {
    state = undefined;
  }
  return combinedReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("state", JSON.stringify(state));
});

export default store;
