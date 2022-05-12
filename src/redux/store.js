import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../views/auth/authSlice";

const preloadedState = JSON.parse(localStorage.getItem("state")) || {};
const combinedReducer = combineReducers({
  auth: userReducer,
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
