import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  postService,
  postDeleteService,
  postEditService,
} from "../services/postService";

export const create = createAsyncThunk(
  "post/create",
  async (data, thunkAPI) => await postService(data, thunkAPI)
);

export const remove = createAsyncThunk(
  "post/remove",
  async (data, thunkAPI) => await postDeleteService(data, thunkAPI)
);

export const edit = createAsyncThunk(
  "post/edit",
  async (data, thunkAPI) => await postEditService(data, thunkAPI)
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
