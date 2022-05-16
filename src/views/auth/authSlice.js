import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: null,
  reducers: {
    saveUser: (state, action) => {
      return { ...state, user: action.payload };
    },
    logout: (state, action) => {
      return state;
    },
  },
});

export const { saveUser, logout } = authSlice.actions;

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://social-srvr.herokuapp.com/auth"
    : "http://localhost:3003/auth";

export const signup = (credentials) => (dispatch) => {
  fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((res) => res.json())
    .then((data) => {
      const { accessToken, ...others } = data;
      localStorage.setItem("token", JSON.stringify(accessToken));
      dispatch(saveUser(others));
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const login = (credentials) => (dispatch) => {
  fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((res) => res.json())
    .then((data) => {
      const { accessToken, ...others } = data;
      localStorage.setItem("token", JSON.stringify(accessToken));
      dispatch(saveUser(others));
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export default authSlice.reducer;
