import { fetchBookmarkedPosts } from "../redux/bookmarkSlice";
import { BASE_URL, token } from "./index";

export const bookmarkService = async ({ postId, userId }, thunkAPI) => {
  const response = await fetch(`${BASE_URL}/bookmark/${userId}`, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
      Authorization: token(),
    },
    body: JSON.stringify({ postId }),
  });
  const data = await response.json();
  thunkAPI.dispatch(fetchBookmarkedPosts({ userId }));
  return data;
};

export const fetchBookmarksService = async ({ userId }) => {
  const response = await fetch(`${BASE_URL}/bookmark/${userId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token(),
    },
  });
  const data = await response.json();
  return data;
};

export const fetchBookmarkedPostsService = async ({ userId }) => {
  const response = await fetch(`${BASE_URL}/bookmark/posts/${userId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token(),
    },
  });
  const data = await response.json();
  return data;
};
