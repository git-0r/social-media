import { fetchFeed } from "../redux/feedSlice";
import { BASE_URL, token } from "./index";

export const postService = async ({ formData, userId }, thunkAPI) => {
  const response = await fetch(`${BASE_URL}/post/${userId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(formData),
  });
  if (response.ok) {
    thunkAPI.dispatch(fetchFeed({ userId, type: "refresh" }));
  }
  return;
};

export const fetchPostService = async (postId) => {
  const response = await fetch(`${BASE_URL}/post/${postId}`);
  return await response.json();
};
