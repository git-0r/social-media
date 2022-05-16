import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./authSlice";
import feedReducer from "./feedSlice";
import postReducer from "./createPostSlice";

const localState = JSON.parse(localStorage.getItem("state"));
const preloadedState = {
  ...localState,
  feed: { content: [], status: "idle", skip: 0, hasMore: -1 },
};

const combinedReducer = combineReducers({
  auth: userReducer,
  feed: feedReducer,
  createPost: postReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "auth/logout") {
    state = undefined;
    localStorage.clear();
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
