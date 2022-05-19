import { BASE_URL } from "./index";

export const feedService = async ({ userId, type }, thunkAPI) => {
  const skip = thunkAPI.getState().feed.skip;
  const response = await fetch(
    `${BASE_URL}/feed/${userId}/?skip=${type === "nextpage" ? skip : 0}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }
  );
  const data = await response.json();
  return { ...data, reqType: type };
};
