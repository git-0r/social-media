import { BASE_URL } from "./index";

export const loginService = async (credentials, thunkAPI) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  const { accessToken, ...others } = await response.json();
  localStorage.setItem("token", JSON.stringify(accessToken));
  return others;
};

export const signupService = async (credentials, thunkAPI) => {
  const response = await fetch(`${BASE_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  const { accessToken, ...others } = await response.json();
  localStorage.setItem("token", JSON.stringify(accessToken));
  return others;
};
