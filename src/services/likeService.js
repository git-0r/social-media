import { BASE_URL } from "./index";

export const likeService = async ({ postId, userId }) => {
  const response = await fetch(`${BASE_URL}/like/${userId}`, {
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

export const fetchLikesService = async ({ userId }) => {
  const response = await fetch(`${BASE_URL}/like/${userId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  const data = await response.json();
  return data;
};
