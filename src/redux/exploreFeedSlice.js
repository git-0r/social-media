import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { exploreFeedService } from "../services/feedService";

export const fetchExploreFeed = createAsyncThunk(
  "exploreFeed/fetchExploreFeed",
  async (data, thunkAPI) => await exploreFeedService(data, thunkAPI),
  {
    condition: (data, { getState, extra }) => {
      const hasMore = getState()?.exploreFeed?.hasMore;
      const status = getState()?.exploreFeed?.status;

      if (Number(hasMore) === 0 && data.type === "nextpage") {
        console.log("This is last page!");
        return false;
      }
      if (status === "pending") {
        return false;
      }
    },
  }
);

export const exploreFeedSlice = createSlice({
  name: "exploreFeed",
  initialState: { content: [], status: "idle", skip: 0, hasMore: -1 },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchExploreFeed.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(fetchExploreFeed.fulfilled, (state, action) => {
      if (action.payload.reqType === "nextpage") {
        state.content = state.content.concat(action.payload.feed);
        state.skip = state.skip + Number(action.payload.feed.length);
        state.hasMore = Number(action.payload.hasMore);
      }
      if (action.payload.reqType === "refresh") {
        state.content = action.payload.feed;
        state.skip = Number(action.payload.feed.length);
        state.hasMore = action.payload.hasMore;
      }
      state.status = "fulfilled";
    });
    builder.addCase(fetchExploreFeed.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});

export default exploreFeedSlice.reducer;
