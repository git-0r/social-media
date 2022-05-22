import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  editProfileService,
  loginService,
  signupService,
} from "../services/authService";

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => await loginService(credentials, thunkAPI)
);

export const signup = createAsyncThunk(
  "auth/signup",
  async (credentials, thunkAPI) => await signupService(credentials, thunkAPI)
);

export const editProfile = createAsyncThunk(
  "auth/editProfile",
  async (data, thunkAPI) => await editProfileService(data, thunkAPI)
);

export const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, status: "idle" },
  reducers: {
    logout: (state, action) => {
      return state;
    },
    updateFollowing: (state, action) => {
      state.user.following = action.payload.following;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(login.rejected, (state, action) => {
      state.auth = { user: null, status: "rejected" };
    });
    builder.addCase(signup.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.auth = { user: null, status: "rejected" };
    });
    builder.addCase(editProfile.fulfilled, (state, action) => {
      state.user = { ...state.user, ...action.payload };
      state.status = "fulfilled";
    });
  },
});

export const { logout, updateFollowing, updateProfile } = authSlice.actions;
export default authSlice.reducer;
