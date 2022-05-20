import { BASE_URL, token } from "./index";

export const likeService = async ({ postId, userId }) => {
  const response = await fetch(`${BASE_URL}/like/${userId}`, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
      Authorization: token(),
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
      Authorization: token(),
    },
  });
  const data = await response.json();
  return data;
};
