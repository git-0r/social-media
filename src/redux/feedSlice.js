import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { feedService } from "../services/feedService";

export const fetchFeed = createAsyncThunk(
  "feed/fetchFeed",
  async (data, thunkAPI) => await feedService(data, thunkAPI),
  {
    condition: (data, { getState, extra }) => {
      const hasMore = getState()?.feed?.hasMore;
      const status = getState()?.feed?.status;

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

export const feedSlice = createSlice({
  name: "feed",
  initialState: { content: [], status: "idle", skip: 0, hasMore: -1 },
  reducers: {
    updateFeed: (state, action) => {
      state.content.unshift(action.payload);
      state.skip = state.skip + 1;
    },
    updateEditedPost: (state, action) => {
      state.content = state.content.map((post) =>
        post._id !== action.payload._id ? post : action.payload
      );
    },
    removeFromFeed: (state, action) => {
      state.content = state?.content?.filter(
        (post) => post?._id !== action.payload?.postId
      );
      state.skip -= 1;
    },
    sortFeed: (state, action) => {
      if (action.payload.by === "Recent") {
        state.content = state.content.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      }
      if (action.payload.by === "Trending") {
        state.content = state.content.sort((a, b) => b.likes - a.likes);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFeed.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(fetchFeed.fulfilled, (state, action) => {
      if (action.payload.reqType === "nextpage") {
        state.content = state.content.concat(action.payload?.feed);
        state.skip = state.skip + Number(action.payload?.feed?.length);
        state.hasMore = Number(action.payload.hasMore);
      }
      if (action.payload.reqType === "refresh") {
        state.content = action.payload?.feed;
        state.skip = Number(action.payload?.feed?.length);
        state.hasMore = action.payload?.hasMore;
      }
      state.status = "fulfilled";
    });
    builder.addCase(fetchFeed.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});

export const { updateFeed, sortFeed, removeFromFeed, updateEditedPost } =
  feedSlice.actions;
export default feedSlice.reducer;
