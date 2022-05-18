import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchFeed = createAsyncThunk(
  "feed/fetchFeed",
  async ({ userId, type }, thunkAPI) => {
    const skip = thunkAPI.getState().feed.skip;
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/feed/` +
        userId +
        `/?skip=${type === "nextpage" ? skip : 0}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await response.json();
    return { ...data, reqType: type };
  },
  {
    condition: (userId, { getState, extra }) => {
      const hasMore = getState()?.feed?.hasMore;
      const status = getState()?.feed?.status;
      if (Number(hasMore) === 0) {
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFeed.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(fetchFeed.fulfilled, (state, action) => {
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
    builder.addCase(fetchFeed.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});

export const { updateFeed } = feedSlice.actions;
export default feedSlice.reducer;
