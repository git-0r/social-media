import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { likeService } from "../services/likeService";

export const like = createAsyncThunk(
  "likes/like",
  async (data, thunkAPI) => await likeService(data)
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
  },
});

export default likeSlice.reducer;
