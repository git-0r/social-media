import { BASE_URL, token } from "./index";

export const feedService = async ({ userId, type }, thunkAPI) => {
  const skip = thunkAPI.getState().feed.skip;
  const response = await fetch(
    `${BASE_URL}/feed/${userId}/?skip=${type === "nextpage" ? skip : 0}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  const data = await response.json();
  return { ...data, reqType: type };
};
