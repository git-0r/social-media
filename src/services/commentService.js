import { token } from "./index";

export const postCommentService = async ({ userId, comment }) => {
  const res = await fetch(
    `${process.env.REACT_APP_BASE_URL}/comment/${userId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token(),
      },
      body: JSON.stringify(comment),
    }
  );
  return await res.json();
};

export const postReplyService = async ({ userId, reply }) => {
  const res = await fetch(`${process.env.REACT_APP_BASE_URL}/reply/${userId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token(),
    },
    body: JSON.stringify(reply),
  });
  return await res.json();
};
