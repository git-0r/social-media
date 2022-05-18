import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchFeed } from "./feedSlice";

export const post = createAsyncThunk(
  "createPost/post",
  async ({ formData, userId }, thunkAPI) => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/post/` + userId,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      }
    );
    if (response.ok) {
      thunkAPI.dispatch(fetchFeed({ userId, type: "refresh" }));
    }
    return;
  }
);

export const createPostSlice = createSlice({
  name: "createPost",
  initialState: { status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(post.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(post.fulfilled, (state, action) => {
      state.status = "fulfilled";
    });
    builder.addCase(post.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});

export default createPostSlice.reducer;
