import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postService } from "../services/postService";

export const create = createAsyncThunk(
  "post/create",
  async (data, thunkAPI) => await postService(data, thunkAPI)
);

export const postSlice = createSlice({
  name: "post",
  initialState: { status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(create.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(create.fulfilled, (state, action) => {
      state.status = "fulfilled";
    });
    builder.addCase(create.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});

export default postSlice.reducer;
