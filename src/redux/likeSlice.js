import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { likeService, fetchLikesService } from "../services/likeService";

export const like = createAsyncThunk(
  "likes/like",
  async (data, thunkAPI) => await likeService(data)
);

export const fetchLikes = createAsyncThunk(
  "likes/fetchLikes",
  async (data, thunkAPI) => await fetchLikesService(data)
);

export const likeSlice = createSlice({
  name: "likes",
  initialState: { content: {}, status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(like.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(like.fulfilled, (state, action) => {
      state.content = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(like.rejected, (state, action) => {
      state.likes = { content: {}, status: "rejected" };
    });
    builder.addCase(fetchLikes.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(fetchLikes.fulfilled, (state, action) => {
      state.content = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(fetchLikes.rejected, (state, action) => {
      state.likes = { content: {}, status: "rejected" };
    });
  },
});

export default likeSlice.reducer;
