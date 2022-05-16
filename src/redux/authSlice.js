import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );
    const { accessToken, ...others } = await response.json();
    localStorage.setItem("token", JSON.stringify(accessToken));
    return others;
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async (credentials, thunkAPI) => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/auth/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );
    const { accessToken, ...others } = await response.json();
    localStorage.setItem("token", JSON.stringify(accessToken));
    return others;
  }
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
      state.user = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = "rejected";
    });
    builder.addCase(signup.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
