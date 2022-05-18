import { BASE_URL, token } from "./index";

export const bookmarkService = async ({ postId, userId }) => {
  const response = await fetch(`${BASE_URL}/bookmark/${userId}`, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ postId }),
  });
  const data = await response.json();
  return data;
};
