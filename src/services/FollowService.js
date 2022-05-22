import { token } from "./index";

export const followService = async ({ userId, _id, type }) => {
  const res = await fetch(
    `${process.env.REACT_APP_BASE_URL}/user/${
      type === "follow" ? "follow" : "unfollow"
    }/${_id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token(),
      },
      body: JSON.stringify({ userId }),
    }
  );
  return await res.json();
};
