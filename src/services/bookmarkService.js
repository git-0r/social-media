import { BASE_URL } from "./index";

export const bookmarkService = async ({ postId, userId }) => {
  const response = await fetch(`${BASE_URL}/bookmark/${userId}`, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify({ postId }),
  });
  const data = await response.json();
  return data;
};

export const fetchBookmarksService = async ({ userId }) => {
  const response = await fetch(`${BASE_URL}/bookmark/${userId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  const data = await response.json();
  return data;
};
