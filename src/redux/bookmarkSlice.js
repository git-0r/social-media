import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bookmarkService } from "../services/bookmarkService";

export const bookmark = createAsyncThunk(
  "bookmarks/bookmark",
  async (data, thunkAPI) => await bookmarkService(data)
);

export const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState: { content: {}, status: "idle" },
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
      state.bookmarks = { content: {}, status: "rejected" };
    });
  },
});

export default bookmarkSlice.reducer;
