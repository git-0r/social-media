import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  bookmarkService,
  fetchBookmarksService,
  fetchBookmarkedPostsService,
} from "../services/bookmarkService";

export const bookmark = createAsyncThunk(
  "bookmarks/bookmark",
  async (data, thunkAPI) => await bookmarkService(data, thunkAPI)
);

export const fetchBookmarks = createAsyncThunk(
  "bookmarks/fetchBookmarks",
  async (data, thunkAPI) => await fetchBookmarksService(data)
);

export const fetchBookmarkedPosts = createAsyncThunk(
  "bookmarks/fetchBookmarkedPosts",
  async (data, thunkAPI) => await fetchBookmarkedPostsService(data)
);

export const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState: { content: {}, posts: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(bookmark.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(bookmark.fulfilled, (state, action) => {
      state.content = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(bookmark.rejected, (state, action) => {
      state.status = "rejected";
    });
    builder.addCase(fetchBookmarks.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(fetchBookmarks.fulfilled, (state, action) => {
      state.content = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(fetchBookmarks.rejected, (state, action) => {
      state.status = "rejected";
    });
    builder.addCase(fetchBookmarkedPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export default bookmarkSlice.reducer;
