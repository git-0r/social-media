import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginService, signupService } from "../services/authService";

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => await loginService(credentials, thunkAPI)
);

export const signup = createAsyncThunk(
  "auth/signup",
  async (credentials, thunkAPI) => await signupService(credentials, thunkAPI)
);

export const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, status: "idle" },
  reducers: {
    logout: (state, action) => {
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      const { bookmarks, ...others } = action.payload;
      state.user = others;
      state.bookmarks = bookmarks;
      state.status = "fulfilled";
    });
    builder.addCase(login.rejected, (state, action) => {
      state.auth = { user: null, status: "rejected" };
    });
    builder.addCase(signup.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      const { bookmarks, ...others } = action.payload;
      state.user = others;
      state.bookmarks = bookmarks;
      state.status = "fulfilled";
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.auth = { user: null, status: "rejected" };
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
